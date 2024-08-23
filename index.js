const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hi, I am hasib.");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact me for details .............</h1>");
});
app.get("/contactme", (req, res) => {
  res.send("<h1>Contact me for details 222.............</h1>");
});

app.listen(port, () => {
  console.log(`First express app listening on port ${port}`);
});
