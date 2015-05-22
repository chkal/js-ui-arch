var myapp = myapp || {};

$(function(){
  "use strict";

  myapp.filterModel = new myapp.FilterModel({});

  myapp.filterView = new myapp.FilterView({});
  myapp.filterView.render();

  myapp.router = new myapp.Router({});
  Backbone.history.start({
    pushState: false
  });

});
