const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//const routes = require('./routes/contacts')
require("dotenv/config");

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Server running and connected to DB in port 1234");
  }
);

app.use(bodyParser.json());
app.use(cors);
//app.use(routes)
app.listen(1234);
