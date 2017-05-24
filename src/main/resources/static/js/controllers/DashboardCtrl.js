'use strict';

angular.module('deidapp')
  .controller('DashboardCtrl', ['$scope', '$state','$http', function($scope, $state, $http) {
	  $scope.loading = true;
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
		$scope.predicates = [ 'status', 'notification', 'timeStamp'];
		$scope.selectedPredicate = $scope.predicates[0];
		
		$http({
		      method: 'GET',
		      url: '/projectDetails/'
		    }).then(function successCallback(response) {
		    	$scope.projects = response.data.projectDetails;
				$scope.loading = false;	
				$scope.displayCollection = [].concat($scope.projects);
				console.log($scope.projects);
		    }, function errorCallback(response) {
		      console.err(response);
		    });
		
		
		$scope.pageSizes = [
						    {name : "10 Records per Page", value : "10"},
						    {name : "20 Records per Page", value : "20"},
						    {name : "30 Records per Page", value : "30"}
						];
		
		$scope.changePageSize = function(){		
			$scope.itemsPerPage = $scope.selectedItemPerPage;		
		}
		
		
		$scope.open = function() {
			  $scope.showModal = true;
			};

			$scope.ok = function() {
			  $scope.showModal = false;
			};

			$scope.cancel = function() {
			  $scope.showModal = false;
			};
  }])
.filter('myStrictFilter', function($filter) {
	return function(input, predicate) {
		return $filter('filter')(input, predicate, true);
	}
}) 
.filter('unique', function() {
	return function(arr, field) {
		var o = {}, i, l = 0, r = [];	
		if (typeof(arr) != "undefined")
			l = arr.length;
		
		for (i = 0; i < l; i += 1) {
			o[arr[i][field]] = arr[i];
		}
		for (i in o) {
			r.push(o[i]);
		}
		return r;
	};
});