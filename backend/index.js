const express = require("express");
const cors = require("cors");
require("dotenv-flow").config();

const server = require("./server");
const { PORT } = require("./src/config");

const app = express();

app.set("port", PORT);

app.use(cors());

server.connect(() => {
  app.listen(app.get("port"), () => {
    console.log("app is running on port " + app.get("port"));
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
