var React = require('react');
var Constants = require('../Constants');

var InteractionManager = require('../InteractionManager');

var GeneralSettings = React.createClass({
  getInteractionMethods : function() {
    result = []
    for (var interaction in Constants.INTERACTION_METHOD) {
      var interactionValue = Constants.INTERACTION_METHOD[interaction]
      var active = interactionValue == InteractionManager.getInteractionMethod();
      result.push(
        <li 
          className={active ? "active" : null}
          key={interactionValue}
          onClick={this.props.updateInteractionMethod.bind(null, interactionValue)}>
          {interaction}
        </li>
      );
    }
    return result;
  },

  render : function() {
    return (
      <div>
        <h2>
          Settings
        </h2>
        <h3>Interaction Method</h3>
        <ul className="interactions">
          {this.getInteractionMethods()}
        </ul>
      </div>
    );
  }
});

module.exports = GeneralSettings;
