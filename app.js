require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");
const users = require("./models/userschema");
const cors = require("cors");
const route = require("./routes/router");
const port = process.env.PORT||5000;
app.use(cors());
app.use(express.json());
app.use(route);
app.listen(port, () => {
    console.log(`start at ${port}`);
});
