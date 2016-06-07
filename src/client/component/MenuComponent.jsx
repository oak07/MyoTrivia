var React = require('react');
var MenuItem = require('./MenuItem.jsx');
var Constants = require('../Constants');
var PageManager = require('../PageManager');

var MenuComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    handleStartGame : function() {
        this.props.handleStartGame();
    },

    navigate: function(e) {
        PageManager.changePage(Number(e.target.className));
    },

    render : function() {
        return (
            <ul id="main_menu">
                <MenuItem text="Play Game" page_id={Constants.PAGES.GAME_SETTINGS} item_id="start_game" onclick={this.handleStartGame} />
                <MenuItem text="Achievements" page_id={Constants.PAGES.ACHIEVEMENTS} item_id="achievements" onclick={this.navigate}/>
                <MenuItem text="Settings" page_id={Constants.PAGES.SETTINGS} item_id="settings" onclick={this.navigate}/>
                <MenuItem text="Help" page_id={Constants.PAGES.HELP} item_id="help" onclick={this.navigate}/>
            </ul>
        );
    }
});

module.exports = MenuComponent;
