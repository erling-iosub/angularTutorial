sidebarLeftModule.controller("sidebarCtrl",
  function sidebarCtrl($scope, getWeatherService, getCurrencyService, getTimeService) {

    //first call to populate the sidebar
    $scope.clock = getTimeService.getTime();
    $scope.day = getTimeService.getDay();

    getWeatherService.getWeather().then((resolve) => {
      $scope.weather = resolve;
      $scope.date = (Date($scope.weather.timetime).split(" ")[4]).split(":")[0] + ":" +
                    (Date($scope.weather.timetime).split(" ")[4]).split(":")[1]

      $scope.$apply()

    })

    getCurrencyService.getMoney().then((resolve) => {
      $scope.currencies = resolve;
      $scope.$apply()
    })


    // Clock and date refresh every second
    setInterval(() => {
      $scope.clock = getTimeService.getTime();
      $scope.day = getTimeService.getDay();
      $scope.$apply()
    }, 1000)

    //weather and currencies refresh every 10 minutes
    setInterval(() => {
      getWeatherService.getWeather().then((resolve) => {
        $scope.weather = resolve;
        
        getCurrencyService.getMoney().then((resolve) => {
          $scope.currencies = resolve;
        })
        $scope.$apply()
      })
    }, 600 * 1000) // 10 minutes

  })