;(function($, doc, win) {
  "use strict";

  function InfoSlider(el, opts) {
    this.$el = $(el);
    this.opts = opts;

    this.init();
  }

  InfoSlider.prototype.init = function() {
    var that = this;
    this.$el.click(function() {
      that.toggleInfoSlider(this, that);
    });
  };

  InfoSlider.prototype.toggleInfoSlider = function(element, that) {
    var infoContainer = $(that.opts.infoContainerId);
    var slideUnderContainer = $(that.opts.elementToSlideUnderId);

    slideUnderContainer.after(infoContainer);
    infoContainer.slideToggle("fast");
  };

  $.fn.infoSlider = function(opts) {
    return this.each(function() {
      new InfoSlider(this, opts);
    });
  };

})(jQuery, document, window);

