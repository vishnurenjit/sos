'use strict';

/**
 * @ngdoc function
 * @name sos00App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sos00App
 */
angular.module('sos00App')
  .controller('LoginCtrl', function ($scope, $location, $rootScope) {
    $scope.user = {
        username: null,
        password: null
    };
  	$scope.loginError = false;
  	$scope.errorMessage = "";


  	$scope.login = function(user) {
  		$scope.errorMessage = "";
  		console.log(user.username + " - " + user.password);
  		Parse.User.logIn(('' + user.username).toLowerCase(), user.password, {
            success: function(user) {
            	$rootScope.$apply(function() {
			        $location.path("/home");
			        console.log($location.path());
			      });
            },
            error: function(user, err) {
            	//alert();
            	$scope.errorMessage = err.message;
            	$scope.loginError = true;
            }
        });
  	}

  });