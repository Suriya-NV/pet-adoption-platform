const express = require("express");

const {
    createAdoptionRequest,
    getAdoptionRequests,
    approveAdoptionRequest,
    rejectAdoptionRequest
} = require("../controllers/adoption.controller");

const router = express.Router();

router.post("/request", createAdoptionRequest);
router.get("/requests", getAdoptionRequests);

router.put("/approve/:id", approveAdoptionRequest);
router.put("/reject/:id", rejectAdoptionRequest);

module.exports = router;