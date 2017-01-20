'use strict';

angular.module('myApp.parseService', []).factory('parseService', function($http) {
    return {
        parseObjToArray: function(obj) {
          // This logic could easily be in either the controller or in the parsePosts function
          // however as this is reuseable code for converting objects to arrays we decided to
          //make it it's own utility function
          var arr = []
          Object.keys(obj).forEach(function(key) {
            arr.push(obj[key]);
          })
          return arr
        }

    };
});
