const express = require("express");
const router = express.Router();

const server = require("../../server");
const config = require("../config");

const bcrypt = require("bcryptjs");

const { v4: uuidv4 } = require("uuid");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = server
    .collection("users")
    .findOne(
      { email: email },
      { projection: { email: 1, password: 1, _id: 1 } }
    );

  if (result) {
    const correct_password = await bcrypt.compare(password, result.password);

    if (!correct_password) {
      throw new Error("Invalid password!");
    }
  }

  const jti = uuidv4();

  // const { email, _id } = result;
});

module.exports = router;
