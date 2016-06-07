var React = require('react');
var MyoStatusComponent = require('./MyoStatusComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var NavigationComponent = require('./NavigationComponent.jsx');

var HeaderComponent = React.createClass({

	getInitialState : function() {
		return {}
	},

    render : function() {
        return (
            <div className="header">
                <MyoStatusComponent myo={this.props.myo}  />
                <NavigationComponent />
                <BrandingComponent />
            </div>

        );
    }
});

module.exports = HeaderComponent;