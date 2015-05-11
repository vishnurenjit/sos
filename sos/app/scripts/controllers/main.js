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

    /*RoleService.loadAllRoles(function(results) {
      $scope.roles = results;
      $scope.$digest();
    });

    OrgService.loadAllOrganization(function(results) {
      $scope.orgs = results;
      $scope.$digest();
    });*/

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
                        role: 'Admin',
                        updated: moment().fromNow(),                            
                        isChecked: false
                    },
                    {
                        id: 3,
                        name: "Kit Johnson",
                        email: "Kit.johnson@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: 'Admin',
                        updated: moment([2015,3,30]).fromNow(),
                        isChecked: true
                    },
                    {
                        id: 4,
                        name: "Kitty Maria",
                        email: "Kitty.maria@digitalpraetorian.com",
                        organisation: "Digital Praetorian Inc",
                        role: 'User',
                        updated: moment([2015,3,1]).fromNow(),
                        isChecked: false
                    },
                    {
                        id: 5,
                        name: "Kutty Mani",
                        email: "Kutty.many@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: 'Admin',
                        updated: moment([2015,0,3]).fromNow(),
                        isChecked: false
                    },
                    {
                        id: 6,
                        name: "Steve Iborg",
                        email: "Steve.iborg@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: 'User',
                        updated: moment([2013,11,24]).fromNow(),
                        isChecked: false
                    },
                    {
                        id: 7,
                        name: "Sean David",
                        email: "Sean.david@nibodha.com",
                        organisation: "Nibodha Technologies Pvt Ltd",
                        role: 'User',
                        updated: moment([2012,11,24]).fromNow(),
                        isChecked: false
                    }
                ];
  });
