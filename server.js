const express = require("express");
const app = express();

const path = require("path")
const cors = require("cors");
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

app.post("/message/send", (req, res) =>{
    console.log(req.body.m)
    messages.push(req.body.m)
    res.status(200).send(messages)
})

app.delete("/message/delete/:id", (req, res) =>{
    console.log(req.params.id)
    messages.splice(req.params.id, 1);
    res.status(200).send(messages)
})