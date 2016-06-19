/**
 * Created by vijay on 19/6/16.
 */
var http = require("http");

//creating server to listen to some port
http.createServer(function(request,response){

    response.writeHead(200,{});
    response.end("Hello world\n");
}).listen(8081);

console.log("Server running at localhost");
