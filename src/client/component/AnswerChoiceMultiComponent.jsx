var React = require('react');


const poseImgMap = {
    "fingers_spread": "solid_grey_RH_spread_fingers@2x.png",
    "fist": "solid_grey_RH_fist@2x.png",
    "wave_in": "solid_grey_RH_wave_left@2x.png",
    "wave_out": "solid_grey_RH_wave_right@2x.png",
}
var AnswerChoiceMultiComponent = React.createClass({

    getInitialState : function() {
        return {};
    },

    render : function() {
        var gestureClass = "gesture_multi_answer";
        if (this.props.correct) {
            gestureClass += " correct";
        }
        if (this.props.incorrect) {
            gestureClass += " incorrect";
        }
        if (this.props.ease) {
            gestureClass += " ease";
        }

        var gestureImgs = [];
        for (var i = 0; i < this.props.gesture.length; i++) {
            gestureImgs.push(<img 
                                    src={"assets/gesture_icons/png/" + poseImgMap[this.props.gesture[i]]}
                                    key={i}
                                    alt={this.props.gesture}
                                    height="75" 
                                    width="75"
                            />)
        }
        return (
            <div className="answerChoice">
                <div className="answer_text">
                    {this.props.answer}
                </div>
                <div className={gestureClass} >
                    {gestureImgs}
                </div>
            </div>
        );
    }
});

module.exports = AnswerChoiceMultiComponent;