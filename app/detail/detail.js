'use strict';

angular.module('myApp.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['commService', '$scope', '$sce', '$location',
  function(commService, $scope, $sce, $location) {

      //need to grab url param for id to get the correct listing from the db
      commService.get('http://localhost:5000/detail').then(function(response) {
        console.log(response);
        $scope.result = response.data;
          $scope.result.trustedResult = $sce.trustAsHtml($scope.result.ResultPage)
        })



}]);
