var myapp = myapp || {};

(function(){
  "use strict";

  /**
   * Model
   */
  myapp.FilterModel = Backbone.Model.extend({

    defaults: {
      query: "",
      result: [
        "Nothing yet"
      ]
    },

    performSearch: function(query) {
      this.set("query", query);
      this.set("result", [ "Result for: " + query ]);
      if(myapp.router) {
        myapp.router.navigate("search/" + query);
      }
    }

  });


  /**
   * View
   */
  myapp.FilterView = Backbone.View.extend({

    el: "#filter",

    events: {
      "click #search": "search",
      "keypress #query": "submitOnEnter"
    },

    initialize: function() {
      this.$query = this.$el.find("#query");
      this.$result = this.$el.find("#result")
      this.listenTo(myapp.filterModel, "change:result", this.render)
    },

    render: function() {
      this.$query.val(myapp.filterModel.get("query"));
      this.$result.text(myapp.filterModel.get("result"));
    },

    search: function() {
      myapp.filterModel.performSearch(this.$query.val());
    },

    submitOnEnter: function(e) {
      if(e.keyCode === 13) {
        e.preventDefault();
        this.search();
      }
    },

  });

})();
