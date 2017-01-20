'use strict';

angular.module('myApp.checkboxes', [])

.directive('checkboxes', function() {
  return {
    restrict: 'E',
    scope: {
      options: '=options',
      handler: '=handler',
      optionName: '=optionName'
    },
    templateUrl: 'components/checkboxes/checkboxes.html'
  };
});
