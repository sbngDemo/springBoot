'use strict';

angular.module('deidapp')
  .controller('RShinyCtrl', ['$scope', '$state','$http', function($scope, $state,$http) {
	  $scope.datetime = new Date();
	  $http({
	      method: 'GET',
	      url: '/notifications/'
	    }).then(function successCallback(response) {
	    	$scope.rowCollection = response.data.notifications;
			$scope.loading = false;		
			$scope.totNotification= $scope.rowCollection.length;
	    }, function errorCallback(response) {
	      console.err(response);
	    });
	        
  }]);