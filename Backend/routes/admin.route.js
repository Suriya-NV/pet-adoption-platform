const express = require("express");
const { approvePet, rejectPet } = require("../controllers/admin.controller");

const router = express.Router();

router.put("/pets/approve/:id", approvePet);
router.put("/pets/reject/:id", rejectPet);

module.exports = router;