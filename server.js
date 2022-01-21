const express = require("express");

const app = express();

const Port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Connection to backend successful...");
});

app.listen(Port, () => console.log(`Server running on port: ${Port}`));
