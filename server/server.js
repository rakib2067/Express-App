const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const phoneRoutes = require("./controllers/phones");
app.use("/phones", phoneRoutes);

module.exports = app;
