var express = require('express'); // grabs express library
var path = require('path')
var app = express();
var rootPath = path.normalize(__dirname + "/../app")

app.use(express.static(rootPath))
app.listen(3000)
console.log(rootPath + "  on port 3000");