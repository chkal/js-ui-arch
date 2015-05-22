"use strict";

var Clazz = {

  create: function(props) {

    var constructor;
    if(props.constructor) {
      constructor = props.constructor;
    }
    else {
      constructor = function() {};
    }

    constructor.prototype = props;

    return constructor;

  }

};
