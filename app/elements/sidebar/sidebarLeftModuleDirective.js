sidebarLeftModule.directive("sidebarLeftModuleDirective",
  function (getCurrencyService, getTimeService, getWeatherService) {
    return {
      restrict: "E",
      templateUrl:'/elements/sidebar/sidebarLeft.html',
      transclude:true,
      controller: function ($scope) {
        getCurrencyService.getMoney()
          .then((resolve) => {
            $scope.currencies = resolve;
            $scope.$apply()
            //console.log($scope.currencies)
          }, (err) => {
            //console.log("eroare Get Money",err);
          })
          getWeatherService.getWeather()
          .then((resolve) => {
            $scope.weather = resolve;
            console.log($scope.weather)
            //$scope.$apply()
            //console.log($scope.currencies)
          }, (err) => {
            //console.log("eroare Get Money",err);
          })


          $scope.theTime = new Date().toTimeString();
          $scope.clockArr = $scope.theTime.split(":")

          
          $scope.dayNumber = new Date().getDay();
            switch($scope.dayNumber){
              case 0:
                $scope.theDay = "Monday";
                break;
              case 1:
                $scope.theDay = "Tuesday";
                break;
              case 2:
                $scope.theDay = "Wednesday";
                break;
              case 3:
                $scope.theDay = "Thursday";
                break;
              case 4:
                $scope.theDay = "Friday";
                break;
              case 5:
                $scope.theDay = "Saturday";
                break;
              case 6:
                $scope.theDay = "Sunday";
                break;      
            }
          //console.log(new Date().getDay())

          // .then( (response)=>{
          //   $scope.theTime = theTime
          // }, (err)=>{
          //   console.log("eroare")
          // })
        }
      }
    })
