var app = app || {};

$(function($) {
	'use strict';

	app.IconView = Backbone.View.extend({

    tagName: 'li',

		template: _.template($('#icon-template').html()),

		render: function() {
      this.$el.addClass(this.model.cssClass);
      this.$el.css('background-color', this.model.get('color'));
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

});
