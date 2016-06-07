var React = require('react');
var PageManager = require('../PageManager');
var Constants = require('../Constants');
var GameManager = require('../GameManager');

var TriviaDifficultyPicker = React.createClass({
    getInitialState : function() {
        return {
          difficultyList: null,
        };
    },

    componentWillMount: function() {
      this.setState({
        difficultyList: GameManager.getTriviaDifficulties()
      });
    },

    navigate: function(e) {
      GameManager.setTriviaDifficulty(e.target.className);
      PageManager.changePage(Constants.PAGES.GAME_PLAY);
    },

    getTriviaDifficulties: function() {
      difficulties = []
      for (var i = 0; i < this.state.difficultyList.length; i++) {
        difficulties.push(
          <li className={this.state.difficultyList[i]} onClick={this.navigate} key={i}>
            {this.state.difficultyList[i]}
          </li>
        );
      }
      return difficulties;
    },

    render : function() {
        return (
          <div>
            <h3>
              Select a difficulty for trivia questions
            </h3>

            {/* We'll want to do some sort of hierarchical selection later, but these for now */}
            <ul className="categories">
              {this.getTriviaDifficulties()}
            </ul>
          </div>
        );
    }
});

module.exports = TriviaDifficultyPicker;
