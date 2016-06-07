var React = require('react');


const poseImgMap = {
    "fingers_spread": "solid_grey_RH_spread_fingers@2x.png",
    "fist": "solid_grey_RH_fist@2x.png",
    "wave_in": "solid_grey_RH_wave_left@2x.png",
    "wave_out": "solid_grey_RH_wave_right@2x.png",
}
var AnswerChoiceComponent = React.createClass({

    getInitialState : function() {
        return {};
    },

    toggleGif: function(e) {
        if (e.target.className == "gesture_answer") {
            e.target.firstChild.style.visibility = "visible";
        } else {
            e.target.style.visibility = "hidden";
        }
    },
    
    render : function() {
        var gestureClass = "gesture_answer";
        if (this.props.correct) {
            gestureClass += " correct";
        }
        if (this.props.incorrect) {
            gestureClass += " incorrect";
        }
        if (this.props.ease) {
            gestureClass += " ease";
        }
        if (this.props.selected) {
            gestureClass += " selected";
        }
        return (
            <div className="answerChoice">
                <div className="answer_text">
                    {this.props.answer}
                </div>
                <div className={gestureClass} >
                    <img 
                        src={"assets/gesture_icons/png/" + poseImgMap[this.props.gesture]}
                        alt={this.props.gesture}
                        height="100" 
                        width="100"
                    />
                </div>
            </div>
        );
    }
});

module.exports = AnswerChoiceComponent;