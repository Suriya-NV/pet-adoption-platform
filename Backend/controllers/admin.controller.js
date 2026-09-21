const Pet = require("../models/pet.model");
const fs = require("fs");
const path = require("path");

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

const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                message: "Pet not found"
            });
        }

        const imagePath = path.join(
            __dirname,
            "../uploads",
            pet.image
        );

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await Pet.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Pet deleted completely"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete pet",
            error: error.message
        });
    }
};

module.exports = {
    approvePet,
    rejectPet,
    deletePet
};