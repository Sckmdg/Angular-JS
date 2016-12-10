'use strict';
var App = angular.module('App', []);
App.controller('ListCtrl', function($scope) {
	$scope.users = [ //our database of users
	{"username":"user1","firstname":"John","lastname":"Anderson","age":25,"email":"john.anderson@testtask.com"},
	{"username":"user2","firstname":"Paul","lastname":"Winfred","age":27,"email":"winfredMPaul@dayrep.com"},
	{"username":"user3","firstname":"Adan","lastname":"Kelley","age":64,"email":"adanMKelley@jourrapide.com"},
	{"username":"user4","firstname":"Vernon","lastname":"McCall","age":70,"email":"vernonKMcCall@teleworm.us"},
	{"username":"user5","firstname":"Ernest","lastname":"Heflin","age":38,"email":"ernestMHeflin@jourrapide.com"},
	{"username":"user6","firstname":"John","lastname":"Barton","age":52,"email":"JohnPBarton@jourrapide.com"},
	{"username":"user7","firstname":"Jessica","lastname":"Lara","age":25,"email":"JessicaRLara@jourrapide.com"}
	];

	$scope.addRow = function(user){	//creating new user with empty variable, then with ng-model we can record our values
		$scope.users.push({ 'username':$scope.username, 'firstname': $scope.firstname, 'lastname':$scope.lastname, 'age': $scope.age, 'email':$scope.email  });
		$scope.username='';
		$scope.firstname='';
		$scope.lastname='';
		$scope.age='';
		$scope.email='';
	};

	$scope.removeRow = function(username){				
		var index = -1;		
		var comArr = eval( $scope.users );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].username === username ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.users.splice( index, 1 );		
	};	

	$scope.edit = function(user){
		$scope.current = user; //fill variable 'current'
	};

	$scope.save = function(user){
		$scope.current = {};//clear variable 'current'
	};

	$scope.current = {};// on some case, if our variable was created and filled before 
});