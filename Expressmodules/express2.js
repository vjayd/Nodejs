/**
 * Created by vijay on 19/6/16.
 */

var express = require('express');
var api= express();
api.get('/index.html',function (req,res) {
    res.sendFile('/home/vijay/Nodejs/Nodejs/Expressmodules/index.html');
})
api.get('/process_get',function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server =api.listen(8081,function(){
    var host =server.address().address;
    var port =server.address().port;
    console.log("listeneing at %s:%s ",host, port)
})