var React = require('react');
var QuestionMultiComponent = require('./QuestionMultiComponent.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');
var GameSummary = require('./GameSummary.jsx');
var GameManager = require('../GameManager');
var $ = require('jquery');


const STATUS_TIME = 3000;
const abcd = "ABCD";

var GameMultiComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: GameManager.getQuestionData(),
            currentIndex: 0,
            value: null  // user's answer index to current question
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
        if (
            val != null || 
            this.state.currentIndex > this.state.questionList.length - 1) {
            Myo.off("pose");
            return;
        }
        console.log(this.state.currentIndex + " " + (this.state.questionList.length - 1));
        var self = this;
        Myo.on("pose", function(pose_name) {
            self.handlePose(pose_name);
        });
    },

    handlePose: function(pose_name) {
        console.log("pose", pose_name);
        Myo.off('pose');

        var self = this;

        var userIndex = 0;
        var matched = false;
        var question = self.state.questionList[self.state.currentIndex];
        var nextExpectedGesture = null;
        var currentProgressLength = 0;
        var gestureImg = null;
        for (var i = 0; i < question.answers.length; i++) {
           currentProgressLength = GameManager.answerProgress[i].length;
           nextExpectedGesture = question.answers[i].gesture[currentProgressLength];

           console.log(i + " " + pose_name + " " + nextExpectedGesture);
           gestureImg = $($("#answer_choice_" + abcd[i]).find("img")[currentProgressLength]);
           if (nextExpectedGesture == pose_name) {
                GameManager.answerProgress[i].push(pose_name);
                console.log($($("#answer_choice_" + abcd[i]).find("img")[currentProgressLength]));
                gestureImg.addClass("recorded");
                if (GameManager.answerProgress[i].length == question.answers[i].gesture.length) {
                    
                    // matched with an answer
                    // remove css for answer choices and go to next question
                    self.removeProgressCSS();
                    userIndex = i;
                    matched = true;
                    GameManager.resetAnswerProgress(); // reset answer progress stacks for next question
                    break;
                }
           } else {
                // did not match with the next gesture, so clear current progress
                // but check if the first gesture matches
                GameManager.clearAnswerProgress(i);
                $("#answer_choice_" + abcd[i]).find("img").each(function() {
                    $(this).removeClass("recorded");
                });
                if (pose_name == question.answers[i].gesture[0]) {
                    // matched with first gesture, so set new progress
                    GameManager.answerProgress[i].push(pose_name);
                    $($("#answer_choice_" + abcd[i]).find("img")[0]).addClass("recorded");
                }
           }
        }

        if (!matched) {
            self.listenForPose()
        } else {
            self.handleAnswer(userIndex);
        }
    },

    removeProgressCSS: function() {
        var question = this.state.questionList[this.state.currentIndex];
        for (var i = 0; i < question.answers.length; i++) {
            $("#answer_choice_" + abcd[i]).find("img").each(function() {
                $(this).removeClass("recorded");
            });
        }
    },

    handleClick : function(answer) {
        console.log(answer);
    },

    handleAnswer : function(userIndex) {
        correctIndex = this.state.questionList[this.state.currentIndex].correctIndex;
        isSuccess = correctIndex == userIndex;
        console.log("correct index", correctIndex);
        console.log("user index", userIndex);
        var self = this;
        setTimeout(function() {
            self.state.questionList[self.state.currentIndex].userIndex = userIndex;
            self.setState({
                currentIndex: self.state.currentIndex + 1,
                questionList: self.state.questionList,
                value: null,
            });
        }, STATUS_TIME);
        this.setState({
            value: userIndex,
        });
    },

    removeProgress: function() {
        GameManager.resetAnswerProgress();
        this.removeProgressCSS();
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
                    <QuestionMultiComponent 
                        question={this.state.questionList[this.state.currentIndex]}
                        value={this.state.value}
                    />
                    <div className="removeProgressLabel" onClick={this.removeProgress}>Click Here To Remove Answer Progress</div>
                </div>
            );
        }
    }
});

module.exports = GameMultiComponent;
