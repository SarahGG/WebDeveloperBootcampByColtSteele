const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// /"dog" => "MEOW!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("GRRRRR!");
});

// if we need to define submission or link parameters as arguments, use the semi colon in front of the thingie
app.get("/dog/:breed", function(req, res){
    res.send("Welcome to a page about " + req.params.breed + "s")
});

// will go anywhere that isn't one of the already defined routes
app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!");
});


app.listen(3000, function(){console.log("listening on 3000")});