const express = require("express");
const router = express.Router();
const data = require("../data");

const Phone = require("../models/phone");

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/id", (request, response) => {
  try {
    const phoneId = parseInt(request.params.id);
    const selectedPhone = Phone.findById(phoneId);
  } catch (e) {
    console.log(err);
    response.status(404).send(e);
  }
});

router.post("/", (req, res) => {
  const data = req.body;
  try {
    const newPhone = Phone.create(data);
    res.status(201).send(newPhone);
  } catch (e) {
    res.status(400).send("<h1>Invalid Input</h1>");
  }
});

module.exports = router;
