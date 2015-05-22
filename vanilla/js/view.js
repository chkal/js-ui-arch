"use strict";

var FilterView = Clazz.create({

  constructor: function(model) {

    // instance variables
    this.model = model;
    this.$root = $('#filter');
    this.$query = this.$root.find('#query');
    this.$search = this.$root.find('#search');
    this.$result = this.$root.find('#result');

    // element bindings
    this.$search.on('click', this._search.bind(this));
    this.$query.on('keypress', this._submitOnEnter.bind(this));

    // model bindings
    this.model.on('searched', this.render.bind(this));

  },

  render: function() {
    this.$query.val(this.model.query);
    this.$result.text(this.model.result);
  },

  _search: function() {
    this.model.performSearch(this.$query.val());
  },

  _submitOnEnter: function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      this._search();
    }
  }

});
