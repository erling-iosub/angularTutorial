const gulp = require("gulp"),
watch = require("gulp-watch")

// task method requires 2 args. first = task name, second= what will happen when task  runs
gulp.task("default", ()=>{
  return new Promise(function(resolve, reject) {
    console.log("smth");
    resolve();
  });
})

gulp.task("styles", ()=>{
  return new Promise(function(resolve, reject) {
    console.log("styles()");
    resolve();
  });
})

gulp.task("watch", ()=>{
    watch("./app/index.html", ()=>{
      return new Promise(function(resolve, reject) {
        console.log("index was changed");
        resolve();
      });
    })

    //  ** means any future created folders and * means any future created file
    watch("./app/styles/**/*.css", ()=>{
      return new Promise(function(resolve, reject) {
        gulp.start("styles");
        resolve();
      });
    })
})
