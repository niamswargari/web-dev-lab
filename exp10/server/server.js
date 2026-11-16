const express = require("express");
const cors = require("cors");
const students = require("./data.json");

const app = express();
app.use(cors());                       // allow the React app (another port) to call this API

app.get("/api/students", (req, res) => {
  res.json(students);                  // send the dataset as JSON
});

app.listen(5000, () => console.log("API running at http://localhost:5000/api/students"));
