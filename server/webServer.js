"use strict"
var express = require('express'); // grabs express library
var request = require("request");
var path = require('path');

var app = express();

var rootPath = path.normalize(__dirname + "/../app");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(rootPath));


app.get('/api', function (req, res) {
  console.log('req', req)
  console.log('res', res)
  request(`https://api.darksky.net/forecast/826e6c1a03c8a1bc134b1956748b1021/44.4268,26.1025?units=si&exclude=minutely,daily,hourly`,
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
        console.log(req.query)
      }
    });
});


app.listen(3000);
console.log('Server running on port 3000')
module.exports = app;