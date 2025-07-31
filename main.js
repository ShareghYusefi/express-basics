// What is express?
// Express is used to create web server in node. Express works on a middlware concept (callback functions).
const express = require("express");

const app = express();

// A middleware is a function that has access to the request and response object
// you can think of a middleware as a layer that sits between the request and response.
function customMiddleware(req, res, next) {
  console.log("Middleware function called!");
  // next function is called to move onto the next middleware function
  next();
}

// use the middleware function when a request comes in from the web.
app.use(customMiddleware);

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
