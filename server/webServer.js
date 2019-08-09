"use strict"
var express = require('express'); // grabs express library
var path = require('path');
var app = express();

app.get("/", (req,res) => {
  res.status(200).send("Hello")
})



var rootPath = path.normalize(__dirname + "/../app");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(rootPath));



var server = app.listen(process.env.PORT || "8080", () =>{
  console.log("App listening on port %s" , server.address().port)
  console.log("Press Ctrl+C to quit")
})

//