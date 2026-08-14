let http = require("http");

let server = http.createServer((req, res) => {
    console.log("hello i am server");
    res.end("mene tumhari bat sunli");
})

server.listen(3000, () => {
    console.log("server is running");
});
