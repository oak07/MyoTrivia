var React = require('react');

var HelpInfo = React.createClass({

  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <div>
        <h2>
          Myo Trivia Help
        </h2>
        <div>
          If you are having problems with MyoTrivia, please check the Frequently Asked Questions section (FAQ) below, first. If you remain unable to solve the issue, contact the developers at <a href="mailto:help@bogus.myo">help@bogus.myo</a>, and include a description of your problem.
        </div>
        <h3>
          Frequently Asked Questions
        </h3>
        <dl className="faq">
          <dt>
            Myo Trivia shows the Myo as not connected.
          </dt>
          <dd>
            Try the following actions:
            <ul>
              <li>
                Ensure MyoConnect is correctly installed and running.
              </li>
              <li>
                Ensure that the Myo has sufficient battery charge.
              </li>
              <li>
                Remove the Myo and connect to the computer via the included cable.
              </li>
            </ul>
          </dd>
          <dt>
            Myo Trivia shows the Myo as not synced.
          </dt>
          <dd>
            Remove the Myo, and reseat it on your arm. Perform the syncing gesture until the armband vibrates.
          </dd>
        </dl>
      </div>
    );
  }
});

module.exports = HelpInfo;
