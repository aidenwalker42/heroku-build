const express = require("express");
const app = express();

const path = require("path")
const cors = require("cors");
const e = require("express");
app.use(cors());
app.use(express.json()); 

app.use(express.static(__dirname));

app.get("/", function(req, res){

    res.sendFile( path.join(__dirname, "./index.html") );
    
})
const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log("running on " + port);
})

let messages = []
let update = false;

app.get("/message", (req, res) => {
    if(update === true)
    {
        update = false;
        res.status(200).send(messages);
    }
    else{
        update = false;
        res.status(400).send("No new messages yet")
    }
})

app.post("/message/send", (req, res) =>{
    console.log(req.body.m)
    messages.push(req.body.m)
    update=true;
    res.status(200).send(messages)
})

app.delete("/message/delete/:id", (req, res) =>{
    console.log(req.params.id)
    messages.splice(req.params.id, 1);
    update = true;
    res.status(200).send(messages)
})

app.delete("/message/delete", (req, res) =>{
    messages = []
    update = true;
    res.status(200).send(messages)
})