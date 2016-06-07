import csv
import sys
import argparse
import json
import random

difficulties = ['easy', 'medium', 'hard']
gestures = ['fist', 'fingers_spread', 'wave_in', 'wave_out']
multi_gestures = [['fist','fingers_spread','wave_in'], ['fingers_spread','fist','fingers_spread'], ['wave_out','fist','wave_in'], ['fist','fingers_spread','fist']]

def process_csv(path, multi=False):
    output = {}
    for row in csv.DictReader(open(path)):
    	category = row['zone_name']
    	difficulty = difficulties[int(row['diffrank']) - 1]
    	if category not in output:
    		output[category] = {}
    	if difficulty not in output[category]:
    		output[category][difficulty] = []
    	output[category][difficulty].append(format_question(row, multi))
    return output


def format_question(row, multi=False):
	'''
	Returns a dictionary with the questiontext, question answers w/ associated
	gestures, and the index of the correct answer
	'''
	output = {}
	output['questionText'] = row['question']
	answers = [row['answer1'], row['answer2'], row['answer3'], row['right']]
	answers = random.sample(answers, len(answers))
	if (multi):
		output['answers'] = [ { 'text': answers[i], 'gesture': multi_gestures[i]} for i in range(len(answers)) ]
	else:
		output['answers'] = [ { 'text': answers[i], 'gesture': gestures[i]} for i in range(len(answers)) ]
	output['correctIndex'] = answers.index(row['right'])
	return output

def usage():
	print 'TriviaParser.py -i <inputfile> -o <outputfile>'

def main(args):
	inputfile = args.inputFile
	outputfile = args.outputFile
	with open(outputfile, 'w') as outfile:
		json.dump(process_csv(inputfile, args.multi), outfile, sort_keys=True, indent=4, separators=(',', ': '))

if __name__ == "__main__":
    # uncomment below to remove seed
    random.seed( 10 )
    parser = argparse.ArgumentParser()
    parser.add_argument("inputFile", help="Filepath of the trivia database in CSV form", type=str)
    parser.add_argument("outputFile", help="Filepath of the output json", type=str)
    parser.add_argument("-m", "--multi", help="pass this flag to generate multi gesture answers", action="store_true")
    args = parser.parse_args()
    main(args)
    