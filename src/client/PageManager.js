var Constants = require('./Constants');
var PageManager = {
  page : Constants.PAGES.HOME,
  subscribers : [],
  getCurrentPage : function() {
    return this.page;
  },
  subscribe : function(cb) {
    this.subscribers.push(cb);
  },
  notifySubscribers : function() {
    for(var i=0;i<this.subscribers.length;i++) {
      cb = this.subscribers[i]
      cb(this.getCurrentPage());
    }
  },
  changePage : function(new_page) {
    this.page = new_page;
    this.notifySubscribers();
  }
};

module.exports = PageManager;
