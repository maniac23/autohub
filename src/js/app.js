'use strict';

/* App Module */

var autoHub = angular.module('autoHub', [ ]);

// Controller

autoHub.controller('carsController', function ($scope, $http) {
  $http.get('auto_data.json').success(function(data) {
    $scope.cars = data;
  });

});