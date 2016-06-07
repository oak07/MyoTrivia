var React = require('react');
var Myo = require('Myo');

var CheckConnectionComponent = React.createClass({
    
    componentWillMount : function() {
        var self = this;
        Myo.on('arm_synced', function() {
        	self.props.startGame();
        });
    },

    render : function() {
        return (
            <div className="checkConnection">
                Please connect and sync your Myo
            </div>
        );
    }
});

module.exports = CheckConnectionComponent;
