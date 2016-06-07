var Achievements = {
  list: [
    {
      title: 'Halfway Novice',
      description: 'Get at least half of the questions correct in a single round',
      icon: 'halfway_0.png'
    },
    {
      title: 'So close!',
      description: 'Get all but the last question correct in a single round',
      icon: 'so_close.png'
    },
    {
      title: 'Halfway Journeyman',
      description: 'Get at least half of the questions correct in five rounds',
      icon: 'halfway_1.png'
    },
    {
      title: 'Halfway Expert',
      description: 'Get at least half of the questions correct in 20 rounds',
      icon: 'halfway_2.png'
    },
    {
      title: 'Halfway Elite',
      description: 'Get at least half of the questions correct in 50 rounds',
      icon: 'halfway_3.png'
    },
    {
      title: 'Halfway Master',
      description: 'Get at least half of the questions correct in 100 rounds',
      icon: 'halfway_4.png'
    },
    {
      title: '100% Novice',
      description: 'Get all questions correct in a single round',
      icon: '100_0.png'
    },
    {
      title: '100% Journeyman',
      description: 'Get all questions correct in a 5 rounds',
      icon: '100_1.png'
    },
    {
      title: '100% Expert',
      description: 'Get all questions correct in a 20 rounds',
      icon: '100_2.png'
    },
    {
      title: '100% Elite',
      description: 'Get all questions correct in a 50 rounds',
      icon: '100_3.png'
    },
    {
      title: '100% Master',
      description: 'Get all questions correct in a 100 rounds',
      icon: '100_4.png'
    },
  ],
  getDescription: function(idx) {
    if(idx >= this.list.length) {
      return 'INVALID';
    }

    return this.list[idx].description;
  },
  getTitle: function(idx) {
    if(idx >= this.list.length) {
      return 'INVALID';
    }

    return this.list[idx].title;
  },
  getIcon: function(idx) {
    if(idx >= this.list.length) {
      return 'INVALID';
    }

    return ('icon' in this.list[idx]) ? this.list[idx].icon : 'default.png';
  }
};

module.exports = Achievements;
