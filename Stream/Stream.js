/**
 * Created by vijay on 19/6/16.
 */
var fs =require("fs");
var  data= " ";

//create a readable stream
var readstream =fs.createReadStream("input");
readstream.setEncoding("UTF8");

//Handle stream events because each stream is an event emitter instance
//and throws sevral events at diffeent instance of time
readstream.on('data',function (chunk) {
    data += chunk;
});
readstream.on('end',function () {
    console.log(data);
});
readstream.on('error',function (error) {
    console.log(err.stack);
});

console.log("Program Ended");