'use strict';

describe('Controller: WeiyuCtrl', function () {

  // load the controller's module
  beforeEach(module('tianshanyunApp'));

  var WeiyuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeiyuCtrl = $controller('WeiyuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
