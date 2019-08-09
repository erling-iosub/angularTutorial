
var myRequest = new XMLHttpRequest()

//set the stage
// method for retriving info, path to the info, do it async
myRequest.open('GET', "data/data.json", true)

myRequest.onload = function () {
  var cup = JSON.parse(myRequest.responseText)
  console.log(cup)
}

myRequest.send();

