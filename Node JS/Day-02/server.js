let http = require("http");

let server = http.createServer((req, res) => {
    console.log("hey");
    res.end("Ok get it");
})

server.listen(3000, () => {
    console.log("Server chalu he");
    
})