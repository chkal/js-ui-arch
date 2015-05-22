"use strict";

var createFilterModel = function() {

  function searchImpl(query) {
    return [ "Do some stuff here with: " + query ];
  }

  return {

    query: "",

    result: [ "nothing yet" ],

    performSearch: function(query) {
      this.query = query;
      this.result = searchImpl(query);
      bean.fire(this, 'searched', this);
    },

    on: function(event, callback) {
      bean.on(this, event, callback);
    }

  };

}
