var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user.username);


fs.appendFile("01_greeting.txt","Hi Akshay" + "\n" ,()=>console.log("File created"));