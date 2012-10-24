var app = app || {};

$(function($) {
	'use strict';

	app.AppView = Backbone.View.extend({

		initialize: function() {
			app.Icons.on('reset', this.addIcons, this);
			app.Icons.fetch();
		},

    toggleLeftColClass: true,

		addSingleIcon: function(icon) {
      // Choose the correct style for the column
      icon.cssClass = this.toggleLeftColClass ? 'left-col' : 'right-col';
      this.toggleLeftColClass = !this.toggleLeftColClass;

      // Add the icon to the list
			var view = new app.IconView({model:icon});
			$('#icon-list').append(view.render().el);
		},

		addIcons: function() {
			this.$('#icon-list').html('');
			app.Icons.each(this.addSingleIcon, this);
		}

	});

});
