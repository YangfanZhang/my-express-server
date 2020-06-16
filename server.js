const express = require("express");
const app = express();

//a method that allows us to specify that what should happen when a browser makes a get request to out server.
//first parameter, represents location.
//A callback function to tell the server 
app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res){
    res.send("contact");
})

app.get("/about", function(req, res){
    res.send("Something about me");
})

app.get("/home", function(req, res){
    res.send("I am Hermione");
})

app.listen(3000, function(){
    console.log("server starts on port 3000");
});

