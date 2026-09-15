const express = require("express");

const {
    registerUser,
    loginUser,
    updateProfile
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/registration", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", updateProfile);

module.exports = router;