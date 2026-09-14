const Pet = require("../models/pet.model");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

const addPet = async (req, res) => {
    try {
        const { petName, petType, breed, age, gender, description } = req.body;

        const pet = new Pet({
            petName,
            petType,
            breed,
            age,
            gender,
            description,
            image: req.file.filename
        });

        await pet.save();

        res.status(201).json({
            message: "Pet posted successfully",
            pet
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to post pet",
            error: error.message
        });
    }
};

const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({ status: "Approved" });

        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get pets",
            error: error.message
        });
    }
};

module.exports = { addPet, getPets, upload };