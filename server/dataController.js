//node.js file system object used to read and rwrite to disk
var fs = require("fs");

module.exports.get = function(req, res){
  var data = fs.readFile("/app/data/" + req.params.id + ".json", "utf8")
  res.setHeader("Content-Type", "application/json")
  res.send(data)
}

module.exports.save = function (req, res){
  var data = req.body;
  fs.writeFile("/app/data/" + req.params.id + ".json", JSON.stringify(data))
  res.send(data)
}

