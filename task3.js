/*//Blocking Code
var fs = require("fs");
// fs is the file system module we will see it later
var data = fs.readFileSync('welcome.txt');

console.log(data.toString());
console.log("Program Ended");*/

//Non-Blocking
var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");