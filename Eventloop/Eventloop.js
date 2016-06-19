/**
 * Created by vijay on 19/6/16.
 */
var events =require("events");
//created an instance/object of eventemitter
var eventemitter = new events.EventEmitter();

//This program is also an example of infinte loop where the stack gets exceeded
var connectHandler = function connected() {
    console.log("Connecthandler event called");
    eventemitter.emit("hello");
}

var hellohandler= function hello(){
    console.log("Hello handler event called");
    eventemitter.emit("goodtogo");
}

var goodtogo= function goodtogo() {
    console.log("WE are good to go now");
    eventemitter.emit("hello");
}

eventemitter.on("connect",connectHandler);
eventemitter.on("hello",hellohandler);
eventemitter.on("goodtogo",goodtogo);
eventemitter.emit("goodtogo");

