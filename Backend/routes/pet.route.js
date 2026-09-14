const express = require("express");
const { addPet, getPets, upload } = require("../controllers/pet.controller");

const router = express.Router();

router.post("/add", upload.single("image"), addPet);
router.get("/all", getPets);

module.exports = router;