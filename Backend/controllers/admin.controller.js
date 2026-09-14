const Pet = require("../models/pet.model");

const approvePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            { status: "Approved" },
            { new: true }
        );

        res.status(200).json({
            message: "Pet approved successfully",
            pet
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to approve pet",
            error: error.message
        });
    }
};

const rejectPet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            { status: "Rejected" },
            { new: true }
        );

        res.status(200).json({
            message: "Pet rejected successfully",
            pet
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to reject pet",
            error: error.message
        });
    }
};

module.exports = { approvePet, rejectPet };