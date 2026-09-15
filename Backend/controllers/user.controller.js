const User = require("../models/user.model");

const registerUser = async (req, res) => {
    try {
        const { name, email, phone, address, password } = req.body;

        const user = new User({
            name,
            email,
            phone,
            address,
            password
        });

        await user.save();

        res.status(201).json({
            message: "Registration successful",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { name, phone, address } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                phone,
                address
            },
            { new: true }
        );

        res.status(200).json({
            message: "Profile updated successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Profile update failed",
            error: error.message
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateProfile
};