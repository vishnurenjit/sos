'use strict';

/**
 * @ngdoc function
 * @name sos00App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sos00App
 */
angular.module('sos00App').controller('MainCtrl', function ($scope, $location) {
    $scope.user = {};
  	$scope.logout = function() {
        Parse.User.logOut();
        // $rootScope.user = null;
        // $rootScope.isLoggedIn = false;
        $location.path('/login');
    };

    $.getScript('//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.min.js',function(){
    $.getScript('//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js',function(){
    
      $('#mySel').select2({
      });
      
      $('#mySel2').select2({
        closeOnSelect:false
      });

      alert($('.fileinput').fileinput().length);
      
    });//script
    });//script

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
  });
