const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

 app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
 });

 app.post("/", (req, res) => {
    let numb1 = Number(req.body.num1);
    let numb2 = Number(req.body.num2);
    let sum = numb1 + numb2;
    console.log("the sum is " + sum);
    res.send("Calculation sum is " + sum);
 });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});