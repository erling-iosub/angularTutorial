"use strict"
var homeModule = angular.module("homeModule", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/templates/homeTemplate.html',
    controller: 'homeModuleCtrl'
  });
}])
.controller("homeModuleCtrl", 
  function homeModuleCtrl($scope){

  })