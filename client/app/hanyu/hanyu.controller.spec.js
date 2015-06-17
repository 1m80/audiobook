'use strict';

describe('Controller: HanyuCtrl', function () {

  // load the controller's module
  beforeEach(module('tianshanyunApp'));

  var HanyuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HanyuCtrl = $controller('HanyuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
