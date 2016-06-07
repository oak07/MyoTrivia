var React = require('react');
var Constants = require('./Constants');

var GameComponent = require('./component/GameComponent.jsx');
var GameConfirmationComponent = require('./component/GameConfirmationComponent.jsx');
var GameMultiComponent = require('./component/GameMultiComponent.jsx');
var GameClickFirstComponent = require('./component/GameClickFirstComponent.jsx');

var InteractionManager = {
  interactionMethod: Constants.INTERACTION_METHOD.DEFAULT,

  getDataUrl: function() {
    switch(this.interactionMethod) {
      case Constants.INTERACTION_METHOD.MULTI:
        return 'data/TriviaQuestionsMulti.json';
      default:
        return 'data/TriviaQuestions.json';
    }
  },

  getInteractionMethod: function() {
    return this.interactionMethod;
  },

  setInteractionMethod: function(interaction) {
    this.interactionMethod = interaction;
  },

  getGameComponent: function() {
    switch(this.interactionMethod) {
      case Constants.INTERACTION_METHOD.MULTI:
        return <GameMultiComponent />;
      case Constants.INTERACTION_METHOD.CONFIRM:
        return <GameConfirmationComponent />;
      case Constants.INTERACTION_METHOD.CLICK_FIRST:
        return <GameClickFirstComponent />;
      default:
        return <GameComponent />;
    }
  }
};

module.exports = InteractionManager;