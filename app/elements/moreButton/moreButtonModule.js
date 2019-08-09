var moreButton = angular.module("moreButton", ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/moreButton', {
      templateUrl: 'elements/moreButton/moreButton.html',
      controller: 'moreButtonCtrl'
    });
  }])
  .controller("moreButtonCtrl",
    function moreButtonCtrl($scope) {

    })
