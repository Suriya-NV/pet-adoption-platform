const express = require("express");

const {
    approvePet,
    rejectPet,
    deletePet
} = require("../controllers/admin.controller");

const {
    getAllPetsForAdmin
} = require("../controllers/pet.controller");

const router = express.Router();

router.get("/pets", getAllPetsForAdmin);

router.put("/pets/approve/:id", approvePet);

router.put("/pets/reject/:id", rejectPet);

router.delete("/pets/delete/:id", deletePet);

module.exports = router;