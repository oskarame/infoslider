var app = app || {};
var appView = {};

// Start up the app
$(function() {
	appView = new app.AppView();

  // Wire-up the info slider to our custom jQuery plugin
  $('#info-button').infoSlider({infoContainerId:'#info-panel', elementToSlideUnderId:'#header'});
});

// Create Backbone models from the jsonp response
function jsonpCallback(response) {
  app.Icons.add(response.icons);
  appView.addIcons();
}


