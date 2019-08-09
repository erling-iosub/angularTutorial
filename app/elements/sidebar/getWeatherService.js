sidebarLeftModule.factory("getWeatherService",
  function ($http) {
    return {
      getWeather: function () {
        return new Promise((resolve, reject) => {
          var req = {
            method:"GET",
            url: "https://api.darksky.net/forecast/826e6c1a03c8a1bc134b1956748b1021/42.3601,-71.0589"
          }

          $http(req)
            .then((response) => {
              var locationKey = {};
              locationKey = response
              resolve(locationKey)
              //console.log(currencies)
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })
        })
      }
    }
  })