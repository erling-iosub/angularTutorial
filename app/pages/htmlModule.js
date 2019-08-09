"use strict"
var htmlModule = angular.module("htmlModule", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/html', {
    templateUrl: 'pages/templates/htmlTemplate.html',
    controller: 'htmlModuleCtrl'
  });
}])
.controller("htmlModuleCtrl", 
  function htmlModuleCtrl($scope){

  })