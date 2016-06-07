var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');
var GameSummary = require('./GameSummary.jsx');
var GameManager = require('../GameManager');


const STATUS_TIME = 3000;

var GameConfirmationComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: GameManager.getQuestionData(),
            currentIndex: 0,
            value: null,  // user's answer index to current question
            selected: null,  // user's selection
        };
    },

    componentWillMount: function() {
        this.listenForPose(this.state.value);
    },

    componentWillUpdate: function(nextprops, nextstate) {
        this.listenForPose(nextstate.value);
    },

    listenForPose : function(val) {
        // we don't want to listen for a new pose if we are showing the user 
        // feedback about their answer, or it's the last question
        if (val != null || 
            (
                this.state.currentIndex == this.state.questionList.length - 1 && 
                this.state.value != null
            )
        ) {
            return;
        }
        var self = this;
        Myo.on("pose", function(pose_name) {
            Myo.off('pose');
            var question = self.state.questionList[self.state.currentIndex];
            for (var i = 0; i < question.answers.length; i++) {
                if (pose_name == question.answers[i].gesture) {
                    if (self.state.selected == i) {
                        self.handleAnswer(i);
                    } else {
                        self.setState({
                            selected: i,
                        });
                    }
                    break;
                }
                
            }
        });
    },

    handleAnswer : function(userIndex) {
        correctIndex = this.state.questionList[this.state.currentIndex].correctIndex;
        isSuccess = correctIndex == userIndex;
        var self = this;
        setTimeout(function() {
            self.state.questionList[self.state.currentIndex].userIndex = userIndex;
            self.setState({
                currentIndex: self.state.currentIndex + 1,
                questionList: self.state.questionList,
                value: null,
                selected: null,
            });
        }, STATUS_TIME);
        this.setState({
            value: userIndex,
        });
    },

    render : function() {
        if (this.state.currentIndex == this.state.questionList.length) {
            console.log(this.state.questionList);
            return (
                <GameSummary questionList={this.state.questionList} />
            );
        } else {
            return (
                <div className="gameplay_page">
                    <QuestionComponent 
                        question={this.state.questionList[this.state.currentIndex]}
                        value={this.state.value}
                        selected={this.state.selected}
                    />
                </div>
            );
        }
    }
});

module.exports = GameConfirmationComponent;
