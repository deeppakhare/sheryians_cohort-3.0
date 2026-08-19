const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let users = [];

// CRUD OPerations


app.get("/", (req, res) => {
  res.send(users);
});
// create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("user saved success");
});

// Delete

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let userData = users.filter((val) => val.id !== id);
  users = userData;
  res.send("User deleted success");
});

// Update api

app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  let upadatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val,
  );

  res.send(upadatedUser);
});

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
