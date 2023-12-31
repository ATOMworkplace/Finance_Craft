const express = require("express");
const bodyParser = require("body-Parser");
const html = require("html");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({encoded : true}));
app.use(express.static("public"));

app.get("/home",function(req,res){
    res.render("index.ejs");
});
app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/feedback",function(req,res){
    res.render("user.ejs");
});
app.get("/analyse",function(req,res){
    res.render("analyse.ejs");
});
app.get("/predict",function(req,res){
    res.render("predict.ejs");
});

app.get("/guide",function(req,res){
    res.render("Guide.ejs");
});

app.get("/pdf",function(req,res){
    res.render("guidepadf.ejs");
});

app.listen(3000,function(){
    console.log("Server started.")
  });

