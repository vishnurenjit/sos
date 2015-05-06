'use strict';

/**
 * @ngdoc overview
 * @name sos00App
 * @description
 * # sos00App
 *
 * Main module of the application.
 */
angular
  .module('sos00App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .run(function ($rootScope, $location) {
        Parse.initialize("A4VBT8ndl6GNO7zoppzkPCpmoLD5H9ynUWaLP6u4", "mD4mC5JKpOjPVnTF7DV9b8LXM2pzebzzBdvpNp5i");
        var currentUser = Parse.User.current();
        $rootScope.user = null;
        $rootScope.isLoggedIn = false;

        console.log(currentUser);

        if (currentUser) {
            $rootScope.user = currentUser;
            $rootScope.isLoggedIn = true;
            // $location.path("/login");
        }
    });
