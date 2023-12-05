var express = require('express');
var app = express();

app.get("/podatci", function(req,res){
    return res.send({message:"ma bravo lipi moj "});
});

app.get("/podatci/:id", function(req,res){
    var id=req.params.id;
    id++;
    return res.send({message: id +" oki doki"});
});

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

//node server, pokrece pozicioniranjem na web servise      node server.js       u terminalu