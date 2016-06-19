/**
 * Created by vijay on 19/6/16.
 */
var fs = require("fs");
var readstream =fs.createReadStream("input");
var writestream= fs.createWriteStream("output");
readstream.pipe(writestream);
console.log("Piping completed");
