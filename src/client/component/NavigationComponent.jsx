var React = require('react');
var Constants = require('../Constants');
var navRoutes = require('../NavigationRoutes');
var PageManager = require('../PageManager');
var NavigatorComponent = require('./NavigatorComponent.jsx');

var NavigationComponent = React.createClass({

	getInitialState : function() {
		return {}
	},

    render : function() {
        var currentPage = PageManager.getCurrentPage();
        var navigationRoutes = navRoutes[currentPage];

        if (navigationRoutes) {
            var navigators = [];
            for(var i = 0; i < navigationRoutes.length; i++) {
                navigators.push(<NavigatorComponent key={i} page={navigationRoutes[i][0]} pageLabel={navigationRoutes[i][1]} />);
            }
            return (
                <div className="navigation">
                    {navigators}
                </div>

            );
        } else {
            return (<div></div>);
        }
    }
});

module.exports = NavigationComponent;