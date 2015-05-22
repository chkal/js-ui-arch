"use strict";

$(function(){

  var myModel = createFilterModel();
  var myView = createFilterView(myModel);
  myView.render();

  /* Optional routing stuff */
  var router = new Router();
  router.configure({ html5history: false });

  router.on("/search/:query", function(query) {
    myModel.performSearch(decodeURI(query));
  });
  myModel.on('searched', function() {
    router.setRoute("/search/" + encodeURI(myModel.query));
  });

  router.init();

});
