myApp.factory("getCurrencyService", function ( $http) {
  return {
    getRon: function () {
      return new Promise((resolve, reject) => { // return promise 

        $http.get("https://api.exchangeratesapi.io/latest") // return promise
          .then((response) => {
            console.log(response);
            var RON = response.data.rates.RON
            resolve(RON);
            console.log(RON)
          }, (reason) => {
            reject('ba, sorry, n-am azi', reason)
            console.log("error")
          })
      })
    }
  }
})

