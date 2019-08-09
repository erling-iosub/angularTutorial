sidebarLeftModule.factory("getWeatherService",
  function ($http) {
    return {
      getWeather: function () {
        return new Promise((resolve, reject) => {
          //first call for weather api, when page is loading
          $http.get("http://localhost:3000/api")
            .then((response) => {
              var weather = response.data;
              resolve(weather);
              //console.log(weather);
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })
        })
      }
    }
  })