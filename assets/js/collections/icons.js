var app = app || {};

(function() {
	'use strict';

	var IconSet = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: app.Icon,
  
    url: 'http://s3.amazonaws.com/assets.bigsmallisland.com/icons.json?callback=?',

	});

	// Create our global collection of Icons
	app.Icons = new IconSet();

}());

