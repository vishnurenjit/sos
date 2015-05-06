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
  	$scope.logout = function() {
        Parse.User.logOut();
        // $rootScope.user = null;
        // $rootScope.isLoggedIn = false;
        alert("logOut");
        $location.path("/login");
    };
  });
