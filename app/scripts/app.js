'use strict';

/**
 * @ngdoc overview
 * @name jsAndHardwareDemo
 * @description
 * # jsAndHardwareDemo
 *
 * Main module of the application.
 */
 angular
    .module('jsAndHardwareDemo', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/ismael', {
          templateUrl: 'views/ismael.html',
          controller: 'IsmaelCtrl'
        })
        .when('/mono', {
          templateUrl: 'views/mono.html',
          controller: 'MonoCtrl'
        })
        .when('/stereo', {
          templateUrl: 'views/stereo.html',
          controller: 'StereoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
