'use strict';

describe('myApp.list module', function() {

  beforeEach(module('myApp.list'));
  beforeEach(module('myApp.commService'));
  beforeEach(module('myApp.parseService'));

  describe('list controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var listCtrl = $controller('ListCtrl', {'$scope': $rootScope.$new()});
      expect(listCtrl).toBeDefined();
    }));

  });
});
