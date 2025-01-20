const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const uri = process.env.MONGO_URI;

const authRoutes = require("./routes/auth.js");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes);

/* MONGOOSE SETUP */
const PORT = 3001;
mongoose
  .connect(uri, {
    dbName: "Dream_Nest"
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
