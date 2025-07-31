// What is express?
// Express is used to create web server in node. Express works on a middlware concept (callback functions).
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
