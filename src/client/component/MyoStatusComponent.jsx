var React = require('react');
var Myo = require('myo');

var MyoStatusComponent = React.createClass({

	getInitialState : function() {
		return {
			connected: this.props.myo ? this.props.myo.connected : false,
			synced: Myo.synced,
		}
	},

	componentWillMount : function() {
		var self = this;
		Myo.on('arm_synced', function() {
			console.log("arm synced");
			self.setState({
				synced: true,
			});
		});

		Myo.on('arm_unsynced', function() {
			self.setState({
				synced: false,
			});
		});

	},

	componentWillReceiveProps(nextProps) {
		this.setState({
			connected: nextProps.myo ? nextProps.myo.connected : false,
		});
	},

    render : function() {
        return (
            <div className="myoStatus">
                <div>{this.state.connected ? "connected" : "not connected"}</div>
                <div>{this.state.synced ? "synced" : "not synced"}</div>
            </div>

        );
    }
});

module.exports = MyoStatusComponent;