

var app = angular.module('myApp', ['myApp.filterCtrl','myApp.projectDesciptions', 'smart-table', 'lrDragNDrop' ]);
angular.module('myApp.filterCtrl',[]).controller('filterCtrl', function($scope, $filter, $http) {
	
	$scope.loading = true;
	
	$http.get("/notifications/").then(function(response) {
		$scope.loading = true;
		$scope.rowCollection = response.data.notifications;
		$scope.loading = false;
		//document.getElementById("totalNotifications").innerHTML= $scope.rowCollection.length;
		document.getElementById("totalNotifications").innerHTML= 5;

	});

	$scope.displayCollection = [].concat($scope.rowCollection);
	
	$scope.predicates = [ 'status', 'notification', 'timeStamp'];
	$scope.selectedPredicate = $scope.predicates[0];
	
	$scope.myFunc = function(){
		//alert("here");
		$scope.bulkAct="";
		 /*var checkBoxes = $scope.frm.elements['notificationCheckbox'];
	      for (i = 0; i < checkBoxes.length; i++){
	        checkBoxes[i].checked = false;
	      }*/
	};
});

app.controller('dateAndTime', function ($scope){
	/*$scope.date = function() {
		  return (new Date).toLocaleFormat("%A, %B %e, %Y");
		};*/
	$scope.date = new Date();
	
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

/*angular.module('app', ['app.projectDesciptions', 'smart-table' ]);*/
angular.module('myApp.projectDesciptions',[]).controller('projectDesciptions', function($scope, $filter, $http) {
	$scope.loading = true;
	
	$http.get("/projectDetails/").then(function(response) {
		$scope.rowCollection = response.data.projectDetails;
		$scope.loading = false;	

	});

	$scope.displayCollection = [].concat($scope.rowCollection);

	$scope.pageSizes = [
					    {name : "10 Records per Page", value : "10"},
					    {name : "20 Records per Page", value : "20"},
					    {name : "30 Records per Page", value : "30"}
					];
	$scope.tableHeader = [
	    {name : "Project Name", value : "projectName"},
	    {name : "Project ID", value : "projectId"},
	    {name : "Created By", value : "createdBy"},
	    {name : "Project Status", value : "projectStatus"},
	    {name : "Date Initiation", value : "dateInitiation"},
	    {name : "Date Completion", value : "dateCompletion"}
	   
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
	
});

  


