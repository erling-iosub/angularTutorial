sidebarLeftModule.directive("sidebarLeftModuleDirective",
  function () {
    return {
      restrict: "E",
      templateUrl: '/elements/sidebar/sidebarLeft.html',
      transclude: true,
      controller: function ($scope) {


        
      // setInterval( ()=> {
      //   $scope.theTime = new Date().toTimeString();
      //   $scope.clockArr = $scope.theTime.split(":")
      //   $scope.dayNumber = new Date().getDay();
      //   switch ($scope.dayNumber) {
      //     case 1:
      //       $scope.theDay = "Monday";
      //       break;
      //     case 2:
      //       $scope.theDay = "Tuesday";
      //       break;
      //     case 3:
      //       $scope.theDay = "Wednesday";
      //       break;
      //     case 4:
      //       $scope.theDay = "Thursday";
      //       break;
      //     case 5:
      //       $scope.theDay = "Friday";
      //       break;
      //     case 6:
      //       $scope.theDay = "Saturday";
      //       break;
      //     case 0:
      //       $scope.theDay = "Sunday";
      //       break;
      //   }
      //   console.log( $scope.theTime)
      // }, 1000)



        // //// get exchange rates
        // getCurrencyService.getMoney()
        //   .then((resolve) => {
        //     $scope.currencies = resolve;
        //     $scope.$apply()
        //     console.log($scope.currencies)
        //   }, (err) => {
        //     //console.log("eroare Get Money",err);
        //   })


        //   //// get the weather
        // getWeatherService.getWeather()
        //   .then((resolve) => {
        //     $scope.weather = resolve;
        //     $scope.$apply()
        //     console.log($scope.weather)
        //   }, (err) => {
        //     //console.log("eroare Get Money",err);
        //   })
    }}
  })
