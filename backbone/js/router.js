var myapp = myapp || {};

(function(){
  "use strict";

  myapp.Router = Backbone.Router.extend({

    routes: {
      "search/:query" : "search",
    },

    search: function(query, page) {
      myapp.filterModel.performSearch(query);
    }

  });


})();
