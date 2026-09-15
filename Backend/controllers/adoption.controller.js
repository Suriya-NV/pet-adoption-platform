const Adoption = require("../models/adoption.model");

const createAdoptionRequest = async (req, res) => {
    try {
        const { petId, petName, phone, address, reason } = req.body;

        const adoption = new Adoption({
            petId,
            petName,
            phone,
            address,
            reason
        });

        await adoption.save();

        res.status(201).json({
            message: "Adoption request submitted successfully",
            adoption
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to submit adoption request",
            error: error.message
        });
    }
};

const getAdoptionRequests = async (req, res) => {
    try {
        const requests = await Adoption.find();

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get adoption requests",
            error: error.message
        });
    }
};

const approveAdoptionRequest = async (req, res) => {
    try {
        const request = await Adoption.findByIdAndUpdate(
            req.params.id,
            { status: "Approved" },
            { new: true }
        );

        res.status(200).json({
            message: "Adoption request approved",
            request
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to approve request",
            error: error.message
        });
    }
};

const rejectAdoptionRequest = async (req, res) => {
    try {
        const request = await Adoption.findByIdAndUpdate(
            req.params.id,
            { status: "Rejected" },
            { new: true }
        );

        res.status(200).json({
            message: "Adoption request rejected",
            request
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to reject request",
            error: error.message
        });
    }
};

module.exports = {
    createAdoptionRequest,
    getAdoptionRequests,
    approveAdoptionRequest,
    rejectAdoptionRequest
};