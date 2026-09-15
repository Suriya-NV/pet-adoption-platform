const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    petId: {
        type: String,
        required: true
    },
    petName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    }
});

module.exports = mongoose.model("Adoption", adoptionSchema);