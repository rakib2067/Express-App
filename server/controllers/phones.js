const express = require("express");
const router = express.Router();
const data = require("../data");

const Phone = require("../models/phone");

router.get("/", (req, res) => {
  //Retrieves the data of all phones
  res.json(data);
});

router.get("/:id", (request, response) => {
  //Retrieves a phone using its ID, with an error being displayed if the phone is not found
  try {
    const phoneId = parseInt(request.params.id);
    const selectedPhone = Phone.findById(phoneId);
    response.send(selectedPhone);
  } catch (e) {
    console.log(e);
    response.status(404).send(`<h1>${e}</h1>`);
  }
});

router.post("/", (req, res) => {
  //Creates a new instance of a phone
  const data = req.body;
  console.log(data);
  try {
    const newPhone = Phone.create(data);
    // console.log(newPhone);
    res.status(201).send(newPhone);
  } catch (e) {
    res.status(400).send(`<h1>Invalid Input ${e}</h1>`);
  }
});

router.delete(":/id", (req, res) => {
  const phoneID = parseInt(req.params.id);
  const phoneToRemove = Phone.findById(phoneID);
  console.log(phoneToRemove);
  try {
    phoneToRemove.destroy();
    res.status(204).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
