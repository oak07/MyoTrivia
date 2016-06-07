var React = require('react');
var QuestionSummaryItem = require('./QuestionSummaryItem.jsx');

var QuestionSummary = React.createClass({

    getNumCorrect : function() {
        count = 0;
        for (var question in this.props.questionList) {
            if (
                this.props.questionList[question].correctIndex == 
                this.props.questionList[question].userIndex
            ) {
                count += 1;
            }
        }
        return count;
    },

    getQuestionSummaryList : function() {
        result = []
        for (var question in this.props.questionList) {
            result.push(
                <QuestionSummaryItem 
                    key={question}
                    index={question}
                    question={this.props.questionList[question]}
                />
            );
        }
        return result;
    },

    render : function() {
        var numCorrect = this.getNumCorrect();
        var totalCount = this.props.questionList.length;
        return (
            <div id="question_summary">
                <div id="question_summary_results">
                    <p>{"You got " +  numCorrect + "/" + totalCount + " correct!"}</p>
                    <p>Click on each question to see details</p>
                </div>
                <div id="question_summary_list">
                    {this.getQuestionSummaryList()}
                </div>  
            </div>
        );
    }
});

module.exports = QuestionSummary;
