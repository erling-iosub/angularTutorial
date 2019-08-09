var myApp = angular.module("myApp", [
  'ngRoute',
  'sidebarLeftModule',
  "navbarModule",
  "httpModule",
  "homeModule",
  "htmlModule",
  "moreButton"
]) 
. config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
  }])
  .controller("myAppCtrl",
    function myAppCtrl($scope) {
    })


    ///set PYTHONIOENCODING=UTF-8