const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let users = [
    
];


app.get("/", (req, res) => {
    res.send(users)
})
app.post("/create", (req, res) => {
    let body = req.body;
    users.push(body);
    res.send("user saved success");
})

app.delete("/delete",(req,res) => {
    let body = req.body;
    users.pop(body);
    res.send("user removed");
})

app.listen(port, () => {
    console.log(`Port running on ${port}`);
})