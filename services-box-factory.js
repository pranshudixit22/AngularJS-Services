var app = angular.module( 'myApp', [] );

app.factory( "dataService", function ( $http ) {
	var myData = {};
	myData.getData = function () {
		return $http.get( "mock.json" )
	};

	return myData;
} );

app.controller( 'mainCtrl', function ( $scope, dataService ) {
	dataService.getData().then
		( function ( response ) {

			$scope.myData = response.data;

		} );
} );