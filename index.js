const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user");
const db = require("./src/config/db");
const authRoute = require("./src/routes/auth")
const dotenv = require("dotenv")

dotenv.config();

db.connect();

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Backend sever is running!");
});
