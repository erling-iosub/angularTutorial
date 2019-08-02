'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
  'ngRoute'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/navbar' });
  }])



  .directive("navbarDirective",
    function () {
      return {
        restrict: "E",
        templateUrl: "/templates/navbar.html",
        transclude: true
      }
    })

