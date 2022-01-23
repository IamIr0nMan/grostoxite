const express = require("express");
const cors = require("cors");

const assetsRoute = require("./routes/assets-route");
const usersRoute = require("./routes/users-route");

const app = express();
const Port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/assets", assetsRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Connection to backend successful...");
});

app.listen(Port, () => console.log(`Server running on port: ${Port}`));
