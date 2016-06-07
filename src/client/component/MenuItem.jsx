var React = require('react');

var MenuItem = React.createClass({
    getInitialState : function() {
        return {};
    },
    render : function() {
        return (
            <li className={this.props.page_id} id={"menu_" + this.props.item_id} onClick={this.props.onclick}>
              {this.props.text}
            </li>
        );
    }
});

module.exports = MenuItem;
