var React = require('react');
var Myo = require('myo');
var $ = require('jquery');

var Constants = require('../Constants');
var GameComponent = require('./GameComponent.jsx');
var GameMultiComponent = require('./GameMultiComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');
var CheckConnectionComponent = require('./CheckConnectionComponent.jsx');
var GameSummary = require('./GameSummary.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');
var HelpInfo = require('./HelpInfo.jsx');
var AchievementsSummary = require('./AchievementsSummary.jsx');
var Welcome = require('./Welcome.jsx');
var GeneralSettings = require('./GeneralSettings.jsx');
var TriviaDifficultyPicker = require('./TriviaDifficultyPicker.jsx');

var PageManager = require('../PageManager');
var GameManager = require('../GameManager');
var InteractionManager = require('../InteractionManager');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {
            myo: null,
            page: Constants.PAGES.HOME
        };
    },

    loadData : function() {
        var dataUrl = InteractionManager.getDataUrl();
        console.log("about to load " + dataUrl);
        $.ajax({
          url: dataUrl,
          async: false,
          dataType: 'json',
          success: function (response) {
            GameManager.setOverallData(response);
          }
        });
    },

    componentWillMount : function() {
        var self = this;

        this.loadData();

        Myo.onError = function() {
            console.log("Myo Connect is not running");
        };

        Myo.on('connected', function() {
            console.log('connected', this);
            Myo.off('lock');
            this.unlock();
            Myo.setLockingPolicy('none');
            self.setState({
                myo: this,
            });
            self.forceUpdate();
        });

        Myo.on('disconnected', function() {
            self.forceUpdate();
        });

        Myo.connect("com.sonjakhan.myoTrivia");
    },

    update : function() {
        this.forceUpdate();
    },

    startGame : function() {
        if (this.state.myo && this.state.myo.connected && this.state.myo.synced) {
            PageManager.changePage(Constants.PAGES.GAME_SETTINGS);
        } else {
            PageManager.changePage(Constants.PAGES.MYO_CHECK);
        }
    },

    updatePage: function(new_page) {
        this.setState({
            page: new_page
        });
    },

    updateInteractionMethod: function(interaction) {
        InteractionManager.setInteractionMethod(interaction);
        this.loadData();
        this.update();
    },
    
    render : function() {

        // page manager subscribe callback
        PageManager.subscribe(this.updatePage)

        var content;
        switch(this.state.page) {
            case Constants.PAGES.HOME:
                content = <div><Welcome /><MenuComponent handleStartGame={this.startGame} /></div>;
                break;
            case Constants.PAGES.GAME_SETTINGS:
                content = <CategoryPicker />;
                break;
            case Constants.PAGES.GAME_PLAY:
                content = InteractionManager.getGameComponent();
                break;
            case Constants.PAGES.MYO_CHECK:
                content = <CheckConnectionComponent startGame={this.startGame} />;
                break;
            case Constants.PAGES.GAME_SUMMARY:
                content = <GameSummary />;
                break;
            case Constants.PAGES.HELP:
                content = <HelpInfo />;
                break;
            case Constants.PAGES.ACHIEVEMENTS:
                content = <AchievementsSummary />;
                break;
            case Constants.PAGES.SETTINGS:
                content = <GeneralSettings updateInteractionMethod={this.updateInteractionMethod} />;
                break;
            case Constants.PAGES.CHOOSE_TRIVIA_DIFFICULTY:
                content = <TriviaDifficultyPicker />;
                break;
            default:
                content = <div />;
        }

        var nav = [Constants.PAGES.HOME, Constants.PAGES.GAME_SETTINGS];

        return (
            <div id="app">
                <HeaderComponent myo={this.state.myo} navigations={nav} />
                { content }
            </div>

        );
    }
});

module.exports = AppComponent;
