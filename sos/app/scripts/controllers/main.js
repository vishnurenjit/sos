'use strict';

/**
 * @ngdoc function
 * @name sos00App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sos00App
 */
angular.module('sos00App')
  .controller('MainCtrl', function ($scope) {
    $scope.user = {};
  	$scope.logout = function() {
        Parse.User.logOut();
        // $rootScope.user = null;
        // $rootScope.isLoggedIn = false;
        alert("logOut");

    };

    $scope.loadModal = function() {
    	console.log("Add user clicked");
    	
    	$('#addUser').modal('show');
    }

    $scope.addUser = function() {
      var user = $scope.user;

    }

    var generatePassword = function() {
      return "pass"
    }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
