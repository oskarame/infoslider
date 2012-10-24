var app = app || {};

(function() {
	'use strict';

	app.Icon = Backbone.Model.extend({

    parse: function(response) {
        alert('model parse');
        return response.shots;
    },


		defaults: {
			title: '',
			color: '',
      imageUrl: ''
		}

	});

}());

