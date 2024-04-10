const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

const db = new sqlite3.Database("tasks.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY, name TEXT, prio TEXT, date TEXT, startTime TEXT, endTime TEXT, desc TEXT)"
  );
});

app.use(express.json());

// Serve static files from the 'client' folder
app.use(express.static(path.join(__dirname, "..", "client")));

// Route for the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "dashboard.html"));
});

app.post("/addTask", (req, res) => {
  const { name, prio, date, startTime, endTime, desc } = req.body;

  // Generate UUID for the task
  const taskId = uuidv4();

  // Insert task into the database with UUID
  const stmt = db.prepare("INSERT INTO tasks VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run(taskId, name, prio, date, startTime, endTime, desc);
  stmt.finalize();

  res.send("Task added successfully");
});

// Add route to fetch all tasks
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("All tasks:", rows);
    res.json(rows);
  });
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "pages", "profile.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
