'use strict';

/* App Module */
angular.module('autoHub', [ ]);

// Controller
autoHub.controller('carsController', function ($scope, $http) {
	$http.get('auto_data.json').success(function(data) {
		$scope.cars = data;
	});
});


