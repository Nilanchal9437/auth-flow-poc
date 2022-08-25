const { MongoClient } = require("mongodb");
const { DATABASE } = require("../src/config");

let server = null;

const connect = (callback) => {
  MongoClient.connect(DATABASE, { useUnifiedTopology: true }, (err, db) => {
    if (err) {
      console.error(err);
      console.error("error connecting to database");
    } else {
      console.log("connected to database");
      server = db;
      callback();
    }
  });
};

const collection = (value) => {
  return server.db().collection(value);
};

const close = () => {
  server.close();
};

module.exports = {
  connect,
  collection,
  close,
};
