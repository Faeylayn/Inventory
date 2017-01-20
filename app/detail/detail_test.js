'use strict';

describe('myApp.detail module', function() {

  beforeEach(module('myApp.detail'));
  beforeEach(module('myApp.commService'));
  beforeEach(module('myApp.parseService'));

  describe('detail controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var detailCtrl = $controller('DetailCtrl', {'$scope': $rootScope.$new()});
      expect(detailCtrl).toBeDefined();
    }));

  });
});
