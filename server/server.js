import * as mb from '../database.js'
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the 'client' folder
app.use(express.static(path.join(__dirname, "..", "client")));

// SERVER GET REQUESTS
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "dashboard.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "profile.html"));
});

app.get("/calenderapi", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "calender.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

async function getUsers(req, res) {
  const result = await mb.listUsers(req.params.id);
  if (result) {
    res.json(result);

  } else {
    res.status(404).send('No match found');
  }
}

app.get('/users', getUsers);

app.listen(3000);
