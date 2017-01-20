'use strict';

angular.module('myApp.resultList', [])

.directive('resultList', function() {
  return {
    restrict: 'E',
    scope: {
      results: '=results',
      buttonFunc: '=buttonFunc'
    },
    templateUrl: 'components/list/list.html'
  };
});
