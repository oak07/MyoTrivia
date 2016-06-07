var React = require('react');
var User = require('../User')
var AchievementItem = require('./AchievementItem.jsx')

var AchievementsSummary = React.createClass({
  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <div>
        <h2>
          Achievements
        </h2>
        <ul className="achievements_list">
          {
            User.achievements.map(function(idx) {
              return <AchievementItem achievement_id={idx} key={idx} />;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = AchievementsSummary;
