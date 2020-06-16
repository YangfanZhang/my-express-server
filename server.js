const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("Hello");
})

app.get("/contact", function(request, response){
    response.send("contact");
})

app.get("/home", function(request, response){
    response.send("I am Hermione");
})



app.listen(3000, function(){
    console.log("server starts on port 3000");
});