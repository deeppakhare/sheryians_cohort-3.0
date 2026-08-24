const express = require("express");

const app = express();



app.get("/", (req, res) => {
  res.send("ok ");
});

app.post("/create", async(req, res) => {
    try {
        let {title, description} = req.body

        const newNote = await NotesModel.create({
            title,
            description,
          });

          return res.status(201)
    } catch (error) {
        console.log("Error in creation",error);
        
    }
})

module.exports = app;