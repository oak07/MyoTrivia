var React = require('react');
var PageManager = require('../PageManager');
var Constants = require('../Constants');
var GameManager = require('../GameManager');

var CategoryPicker = React.createClass({
    getInitialState : function() {
        return {
            categoryList: GameManager.getCategories(),
        };
    },

    navigate: function(e) {
      GameManager.setCategory(e.target.className.replace(/_/g, " "));
      PageManager.changePage(Constants.PAGES.CHOOSE_TRIVIA_DIFFICULTY);
    },

    getCategories: function() {
      categories = []
      for (var i = 0; i < this.state.categoryList.length; i++) {
        categories.push(
          <li className={this.state.categoryList[i].replace(/ /g, "_")} onClick={this.navigate} key={i}>
            {this.state.categoryList[i]}
          </li>
        );
      }
      return categories;
    },

    render : function() {
        return (
          <div>
            <h3>
              Select a category
            </h3>
            {/* We'll want to do some sort of hierarchical selection later, but these for now */}
            <ul className="categories">
              {this.getCategories()}
            </ul>
          </div>
        );
    }
});

module.exports = CategoryPicker;
