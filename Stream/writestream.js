/**
 * Created by vijay on 19/6/16.
 */
var fs =require("fs");
var data ="Hey i am writing some text to some file";

var writestream =fs.createWriteStream("output");
writestream.write(data,'UTF8');

writestream.on('end',function () {
    console.log("Writing done")
});

writestream.on('finish',function () {
    console.log("Write completed");
});

writestream.on('error',function (err) {
    console.log(err.stack);
});
console.log("Program ended");