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
  res.json({ message: "Connection to backend successful..." });
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured..." });
});
// To trigger this error handling middleware, either throw an error or return a call to next with the error object created(return next(error)).

app.listen(Port, () => console.log(`Server running on port: ${Port}`));
