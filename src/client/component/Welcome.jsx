var React = require('react');
var User = require('../User');

var Welcome = React.createClass({
  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <div className="welcome_note">
        { 'Welcome, ' + User.getName() + '!' }
      </div>
    );
  }
});

module.exports = Welcome;
