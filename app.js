const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",function(req,res){
    var email = req.body.email;
    var password = req.body.pasword;
    console.log(email);
    res.send("Thank you for posting")
})

app.listen(3000,function(req,res){
    console.log("server is running at host 3000");
})