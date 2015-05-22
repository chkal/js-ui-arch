"use strict";

var FilterModel = Clazz.create({

  constructor: function() {
    this.query = "";
    this.result = [ "Nothing yet" ];
  },

  performSearch: function(query) {
    this.private = 'foobar';
    this.query = query;
    this.result =  this._search(query);
    bean.fire(this, 'searched', this);
  },

  _search: function(query) {
    return [ "Do some stuff here with: "+query ];
  },

  on: function(event, callback) {
    bean.on(this, event, callback);
  }

});
