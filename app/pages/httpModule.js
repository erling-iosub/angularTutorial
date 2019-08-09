"use strict"
var httpModule = angular.module("httpModule", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/http', {
    templateUrl: 'pages/templates/httpTemplate.html',
    controller: 'httpModuleCtrl'
  });
}])
.controller("httpModuleCtrl", 
  function httpModuleCtrl($scope){

  })