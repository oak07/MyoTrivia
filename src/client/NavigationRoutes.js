var Constants = require('./Constants');

// navigation routes, that will appear on the header of the page
var navRoutes = {};
navRoutes[Constants.PAGES.SETTINGS] = [
										[Constants.PAGES.HOME, "Home"],
										[Constants.PAGES.HELP, "Help"]
									  ];

navRoutes[Constants.PAGES.MYO_CHECK] = [
										[Constants.PAGES.HOME, "Home"],
										[Constants.PAGES.HELP, "Help"]
									   ];

navRoutes[Constants.PAGES.GAME_SETTINGS] = [
											[Constants.PAGES.HOME, "Home"],
											[Constants.PAGES.HELP, "Help"]
										   ];

navRoutes[Constants.PAGES.CHOOSE_TRIVIA_DIFFICULTY] = [
											[Constants.PAGES.HOME, "Home"],
											[Constants.PAGES.GAME_SETTINGS, "Choose Category"],
											[Constants.PAGES.HELP, "Help"],
										   ];

navRoutes[Constants.PAGES.GAME_SUMMARY] = [ 
											[Constants.PAGES.HOME, "Home"],
											[Constants.PAGES.SETTINGS, "Game Settings"],
											[Constants.PAGES.HELP, "Help"]
										  ];

navRoutes[Constants.PAGES.GAME_PLAY] = [ 
										[Constants.PAGES.HOME, "Home"],
										[Constants.PAGES.SETTINGS, "Game Settings"],
										[Constants.PAGES.HELP, "Help"]
									   ];

navRoutes[Constants.PAGES.ACHIEVEMENTS] = [
											[Constants.PAGES.HOME, "Home"],
											[Constants.PAGES.HELP, "Help"]
									   	  ];

navRoutes[Constants.PAGES.HELP] = [
									[Constants.PAGES.HOME, "Home"]
								  ];

module.exports = navRoutes;
