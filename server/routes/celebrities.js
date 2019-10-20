const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.json(allCelebrities);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/celebrities", async (req, res) => {
  const celebrity = new Celebrity({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number
  });

  try {
    const celebritySaved = await celebrity.save();
    res.json(celebritySaved);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
