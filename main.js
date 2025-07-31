// What is express?
// Express is used to create web server in node. Express works on a middlware concept (callback functions).
const express = require("express");

const app = express();

// localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World");
});

// localhost:3000/hello2
app.get("/hello2", (req, res) => {
  res.send("Hello World 2.0");
});

// localhost:3000 OR 127.0.0.1:3000 both reference the current server
app.listen(3000);
