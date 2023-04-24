require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import routes
const userRoutes = require("./routes/user");
const { db } = require("./models/user");
const menuRoute = require("./routes/menu");

// app
const app = express();
const port = process.env.PORT;
// connect to the db
// reactfood
// eM7rvg7FtopwW2MC
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

//middlewares
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

// routes
app.use("/api", userRoutes);
app.use("/api", menuRoute);
