'use strict';

describe('Controller: HayuCtrl', function () {

  // load the controller's module
  beforeEach(module('tianshanyunApp'));

  var HayuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HayuCtrl = $controller('HayuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
