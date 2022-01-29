const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

let port = process.env.PORT || 8000;

app.listen(port);
