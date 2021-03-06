sidebarLeftModule.factory("getTimeService",
  function () {
    return {
      getTime: function () {
        var time = new Date().toTimeString();
        var clock = time.split(":")[0] + ":" + time.split(":")[1]
        return clock;
      },
      getDay: function () {
          var dayNumber = new Date().getDay();
          var day;
          switch (dayNumber) {
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
              break;
            case 0:
              day = "Sunday";
              break;
          }
          return day;
    }
  }
})