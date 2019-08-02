myApp.directive("leftbarDirective",
function (getCurrencyService) {  /// 
  return {
    restrict: "E",
    templateUrl: "/templates/leftbar.html",
    transclude: true,
    controller: function ($scope) {
      $scope.convertEur = function() {
        getCurrencyService.getRon().then((resolve) => {
          $scope.RON = resolve;

        }, (err) => {
          console.log(err);
        })
      }
    }, 
    link: function(scope, element, attrs){

      }
    }
    
})