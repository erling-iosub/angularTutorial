sidebarLeftModule.factory("getCurrencyService",
  function ($http) {
    return {
      getMoney: function () {
        return new Promise( (resolve, reject) => {
          
          //first call on page load
          $http.get("https://api.exchangeratesapi.io/latest")
            .then( (response) => {
              var currencies = {};
              currencies.EUR = response.data.rates.RON
              currencies.USD = (response.data.rates.RON / response.data.rates.USD)
              currencies.GBP = (response.data.rates.RON / response.data.rates.GBP)
              resolve(currencies)
              //console.log(currencies)
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })   
          }
        )
        }
      }
    })
