
var app = angular.module( 'myApp', [] );

app.controller( 'mainCtrl', function ( $scope, $http ) {
	$http.get( "mock.json" )
		.then
		( function ( response ) {

			$scope.myData = response.data;

		} );
} );