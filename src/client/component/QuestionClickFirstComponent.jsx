var React = require('react');
var Myo = require('myo');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

const abcd = "ABCD";

var QuestionClickFirstComponent = React.createClass({

    getAnswers : function() {
        answers = []
        for (var i = 0; i < this.props.question.answers.length; i++) {
            answers.push(
                <li id={"answer_choice_" + abcd[i]} key={i} onClick={this.props.handleClick.bind(this, i)}>
                    <AnswerChoiceComponent 
                        answer={this.props.question.answers[i].text} 
                        gesture={this.props.question.answers[i].gesture}
                        ease={this.props.value != i && this.props.question.correctIndex == i}
                        correct={this.props.value != null && this.props.question.correctIndex == i}
                        incorrect={this.props.value == i && this.props.question.correctIndex != i}
                        selected={this.props.selected != null && this.props.selected == i && this.props.value == null}
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

module.exports = QuestionClickFirstComponent;