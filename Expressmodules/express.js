/**
 * Created by vijay on 19/6/16.
 */
var express = require('express');
var api = express();
// This responds with "Hello World" on the homepage
api.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})


// This responds a POST request for the homepage
api.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
api.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
api.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
api.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})


var server= api.listen(8081,function(){
    var host =server.address().address
    var port=server.address().port
    console.log("Example app is listening at %s: %s ",host, port)
})