var React = require('react');
var Myo = require('myo');

var AnswerChoiceMultiComponent = require('./AnswerChoiceMultiComponent.jsx');

const abcd = "ABCD";

var QuestionMultiComponent = React.createClass({

    getAnswers : function() {
        answers = []
        for (var i = 0; i < this.props.question.answers.length; i++) {
            answers.push(
                <li id={"answer_choice_" + abcd[i]} key={i}>
                    <AnswerChoiceMultiComponent 
                        answer={this.props.question.answers[i].text} 
                        gesture={this.props.question.answers[i].gesture}
                        ease={this.props.value != i && this.props.question.correctIndex == i}
                        correct={this.props.value != null && this.props.question.correctIndex == i}
                        incorrect={this.props.value == i && this.props.question.correctIndex != i}
                    />
                </li>
            );
        }
        return answers;
    },

    render : function() {
        return (
            <div className="question_page">
                <div className="question">
                    {this.props.question.questionText}
                </div>

                <ul id="answer_choices">
                    {this.getAnswers()}
                </ul>
            </div>
        );
    }
});

module.exports = QuestionMultiComponent;