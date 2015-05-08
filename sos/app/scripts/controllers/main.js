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
    $scope.roles = [];
    $scope.orgs = [];

    RoleService.loadAllRoles(function(results) {
      $scope.roles = results;
      $scope.$digest();
    });

    OrgService.loadAllOrganization(function(results) {
      $scope.orgs = results;
      $scope.$digest();
    });

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
      
    });//script
    });//script

    $scope.loadModal = function() {
    	console.log("Add user clicked");    	
    	$('#addUser').modal('show');
    }

    $scope.addUser = function() {
      var user = $scope.user;
    }

    $scope.saveUser = function() {
      var file = $('.fileinput').fileinput();
      console.log(file);
    };

    var generatePassword = function() {
      return "pass"
    }

    $scope.friends = [
                    {
                        id: 1,
                        name: "Raoul Boulard",
                        email: "Raoul.boulard@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: "Admin"
                    },
                    {
                        id: 2,
                        name: "Ben Nadel",
                        email: "Ben.nadal@digitalpraetorian.com",
                        organisation: "Digital Praetorian Inc",
                        role: "Executive"
                    },
                    {
                        id: 3,
                        name: "Kit Johnson",
                        email: "Kit.johnson@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: "User"
                    }
                ];







  });
