var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/podatci", function(req,res){
    return res.send({message:"ma bravo lipi moj "});
});

app.get("/podatci/:id", function(req,res){
    var id=req.params.id;
    id++;
    return res.send({message: id +" oki doki"});
});

app.post("/podatci", function(req,res){
    var podatci = req.body.podatak;
    return res.send({message: podatci + " ok"});
});

app.get("/korisnik", function(req,res){
    return res.send({message:"READ  korisnik (svi)"});
});

app.get("/korisnik/:id", function(req,res){
    var id=req.params.id;
    return res.send({message:"READ "+id});
});

app.post("/korisnik", function(req,res){
    var ime = req.body.podatak1;
    var prezime = req.body.podatak2;
    var adr= req.body.podatak3;
    return res.send({message: "CREATE " +ime +" "+ prezime +" "+adr+" ok"});
});

app.put("/korisnik/:id", function(req,res){
    var id=req.params.id;
    var adr= req.body.adresa;
    return res.send({message: "UPDATE "+id +"nova adresa:"+adr});
});

app.delete("/korisnik/:id",function(req,res){
    var id=req.params.id;
    return res.send({message: "DELETE " +id});
});





// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

//node server, pokrece pozicioniranjem na web servise      node server.js       u terminalu