'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.list',
  'myApp.detail',
  'myApp.version',
  'myApp.commService',
  'myApp.parseService',
  'myApp.resultList',
  'myApp.checkboxes'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  // $routeProvider.otherwise({redirectTo: '/search'});
}]);
