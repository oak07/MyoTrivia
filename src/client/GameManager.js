var Constants = require('./Constants');
var GameManager = {
  entireData : {},
  currentData: {},
  answerProgress: [[],[],[],[]],

  setOverallData : function(data) {
    this.entireData = data;
  },

  getCategories: function() {
    return Object.keys(this.entireData);
  },

  setCategory: function(category) {
    this.currentData = this.entireData[category];
  },

  getTriviaDifficulties: function() {
    return Object.keys(this.currentData)
  },

  setTriviaDifficulty: function(triviaDifficulty) {
    this.currentData = this.currentData[triviaDifficulty];
  },

  getQuestionData: function() {
    var bucket = [];

    for (var i=0;i<this.currentData.length;i++) {
        bucket.push(i);
    }

    var questionData = [];
    for (var i=0; i < 5; i++)
    {
       var randomIndex = Math.floor(Math.random()*bucket.length);
       questionData.push(this.currentData[bucket.splice(randomIndex, 1)[0]]);
    }
    return questionData;
  },

  clearAnswerProgress: function(index) {
    this.answerProgress[index] = []
  },

  resetAnswerProgress: function() {
    this.answerProgress = [[],[],[],[]]
  },
};

module.exports = GameManager;