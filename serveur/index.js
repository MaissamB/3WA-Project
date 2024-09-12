const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', require('./router'));

mongoose.connect("mongodb://localhost:27017/projectntools").then(() => {
  console.log("connection mongodb établie");
  app.listen(7000, () => console.log("serveur express lancé"));
});
