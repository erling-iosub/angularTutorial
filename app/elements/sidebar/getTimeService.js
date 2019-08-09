sidebarLeftModule.factory("getTimeService",
  function () {
    return {
      getTime: function () {
        var time = new Date().toLocaleTimeString();
        return new Promise((resolve, reject) => {
          setInterval(() => {
            time = new Date().toLocaleTimeString();
            resolve(time);
          }, 1000);
        });
      }
    }
  });