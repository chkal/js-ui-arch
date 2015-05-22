"use strict";

var createFilterView = function(model) {

  /*
   * Initialization
   */

  // instance variables
  var model = model;
  var $root = $('#filter');
  var $query = $root.find('#query');
  var $search = $root.find('#search');
  var $result = $root.find('#result');

  // element bindings
  $search.on('click', search);
  $query.on('keypress', submitOnEnter);

  // model bindings
  model.on('searched', render);

  /*
   * Functions
   */

  function render() {
    $query.val(model.query);
    $result.text(model.result);
  }

  function search() {
    model.performSearch($query.val());
  }

  function submitOnEnter(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      search();
    }
  }

  /*
   * Exports
   */

  return {
    render: render
  }

}
