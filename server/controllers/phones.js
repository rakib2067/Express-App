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
    const phoneId = parseInt(request.params.id); //Retrieves the phone's ID
    const selectedPhone = Phone.findById(phoneId); //Finds the phone by the selected ID
    response.send(selectedPhone); //Sends the found phone as a response
  } catch (e) {
    console.log(e);
    response.status(404).send(`<h1>${e}</h1>`);
  }
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newPhone = Phone.create(data); //Creates a new instance of a phone
    // console.log(newPhone);
    res.status(201).send(newPhone); //Sends a JSON object of the new phone
  } catch (e) {
    //Error message explaining the input is invalid
    res.status(400).send(`<h1>Invalid Input ${e}</h1>`);
  }
});

router.delete("/:id", (req, res) => {
  let phoneID = parseInt(req.params.id);
  let phoneToRemove = Phone.findById(phoneID); //Finds the phone by ID
  console.log(phoneToRemove);
  try {
    phoneToRemove.destroy(); //Uses the destroy method to remove the phone that was found by its ID
    res.status(204).send();
  } catch (e) {
    res.status(400).send(e); //Returns an error
  }
});

module.exports = router; //Exports the router to other files

// TBC Put Request

// router.put("/update/:id", (req, res) => {
//   const phoneId = parseInt(req.params.id);
//   const selectedPhone = Phone.findById(phoneId);
//   let changes = JSON.parse(req.body);
//   let changedPhone = selectedPhone.update(changes);
//   res.status(201).send(changedPhone);
// });
