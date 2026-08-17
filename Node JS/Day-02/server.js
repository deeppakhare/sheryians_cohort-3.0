// let http = require("http");

// let server = http.createServer((req, res) => {
//     if(req.url === "/users"){
//         res.end("me in users")
//     }
//     if(req.url === "/cart"){
//         res.end("me in cart")
//     }
// })

// server.listen(3000, () => {
//     console.log("Server chalu he");
    
// })


// *************** Express ******************************
// ------------(Express se server banana) *****************

const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})
