var myApp = angular.module("myApp", [
  'ngRoute'
])
  .config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/index' });
    }])

  .controller("myAppCtrl",
    function myAppCtrl($scope) {
      $scope.y = 100;
    })

  .factory("getCurrencyService",
    function ($http) {
      return {
        getData: function () {
          return new Promise((resolve, reject) => {
            $http.get("https://api.exchangeratesapi.io/latest")
              .then((response) => {
                currencies = response.data.rates.RON;
                resolve(currencies)
                //console.log(currencies)
              }, (reason) => {
                console.log("error")
                reject(reason)
              })
          })
        }
      }
    })

  .directive("getCurrencyDirective",
    function (getCurrencyService) {
      return {
        restrict: "A",
        controller: function ($scope) {
          $scope.getCurrencies = function () {
            getCurrencyService.getData()
              .then((resolve) => {
                $scope.currencies = resolve;
                console.log($scope.currencies)
              }, (error) => {
                console.log(err);
              })
          }
          $scope.print = function () {
            $scope.x = 10;
            console.log($scope.x)
          }
        }
      }
    })

  .directive("sidebarLeftDirective",
    function () {
      return {
        restrict: "E",
        templateUrl: "/templates/sidebarLeft.html",
        transclude:true
      }
    })

  .directive("navbarDirective",
    function() {
      return{
        restrict: "E",
        templateUrl: "/templates/navbar.html",
        transclude:true
      }
    })