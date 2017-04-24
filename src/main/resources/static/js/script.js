var app = angular.module('myApp', ['smart-table' ]);
app.controller('filterCtrl', function($scope, $filter, $http) {
	$scope.loading = true;

	$http.get("/notifications/").then(function(response) {
		$scope.rowCollection = response.data.notifications;
		$scope.loading = false;

	});

	$scope.displayCollection = [].concat($scope.rowCollection);

	$scope.predicates = [ 'status', 'notification', 'timeStamp'];
	$scope.selectedPredicate = $scope.predicates[0];
});

app.filter('myStrictFilter', function($filter) {
	return function(input, predicate) {
		return $filter('filter')(input, predicate, true);
	}
});

app.filter('unique', function() {
	return function(arr, field) {
		var o = {}, i, l = arr.length, r = [];
		for (i = 0; i < l; i += 1) {
			o[arr[i][field]] = arr[i];
		}
		for (i in o) {
			r.push(o[i]);
		}
		return r;
	};
})
  
