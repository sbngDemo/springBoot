

var app = angular.module('myApp', ['myApp.filterCtrl', 'smart-table' ]);
angular.module('myApp.filterCtrl',[]).controller('filterCtrl', function($scope, $filter, $http) {
	$scope.loading = true;
	
	$http.get("/notifications/").then(function(response) {
		$scope.rowCollection = response.data.notifications;
		$scope.loading = false;
		
		document.getElementById("totalNotifications").innerHTML= $scope.rowCollection.length;
		

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
})
  
//angular.bootstrap(document.getElementById("App1"), ['myApp']);

angular.module('app', ['app.projectDesciptions','datatables']);

angular.module('app.projectDesciptions',[]).controller('projectDesciptions', function($scope,DTOptionsBuilder, DTColumnBuilder, $http) {
	$scope.loading = true;
	 $http.get("/projectDetails/").then(function (response) {
			$scope.loading = true;
	      $scope.projDetails = response.data.projectDetails;
	  	$scope.loading = false;
	  });
	
			  
	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
	  .withOption('order', [0, 'asc']);
});


angular.bootstrap(document.getElementById("App2"), ['app']);

