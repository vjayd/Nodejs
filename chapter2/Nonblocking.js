/**
 * Created by vijay on 19/6/16.
 */
var fs = require("fs");


fs.readFile("input",function (err,data) {
    if(err)console.error(err);
    console.log(data.toString());
});
console.log("Program ended safely");