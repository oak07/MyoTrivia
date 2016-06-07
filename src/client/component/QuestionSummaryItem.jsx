var React = require('react');

var QuestionSummaryItem = React.createClass({

    getInitialState : function() {
        return {
            collapsed: true,
        };
    },

    handleClick : function() {
        this.setState({
          collapsed: !this.state.collapsed  
        });
    },

    getAnswer : function() {
        var question = this.props.question;
        if (question.correctIndex == question.userIndex) {
            return (
                <div>
                    {"Answer: " + question.answers[question.correctIndex].text}
                </div>
            );
        } else {
            return (
                <div>
                    <div>
                        {"Your Answer: " + question.answers[question.userIndex].text}
                    </div>
                    <div>
                        {"Correct Answer: " + question.answers[question.correctIndex].text}
                    </div>
                </div>
            );
        }
    },

    getSummaryItem : function() {
        var summaryItemClass = "summary-item";
        var summaryLabelClass = "summary-label";
        if (this.props.question.correctIndex == this.props.question.userIndex) {
            summaryLabelClass += " correct";
        } else {
            summaryLabelClass += " incorrect";
        }
        if (this.state.collapsed) {
            summaryItemClass += " collapsed";
            return (
                <div className={summaryItemClass} onClick={this.handleClick}>
                    <div className={summaryLabelClass}>
                        {parseInt(this.props.index) + 1}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={summaryItemClass} onClick={this.handleClick}>
                    <div className={summaryLabelClass}>
                        {parseInt(this.props.index) + 1}
                    </div>
                    <div className="summary-item-details">
                        {this.props.question.questionText}
                        {this.getAnswer()}
                    </div>
                </div>
            );
        }
    },

    render : function() {
        return (
            <div>
                {this.getSummaryItem()}
            </div>
        );
    }
});

module.exports = QuestionSummaryItem;
