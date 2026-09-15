const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/user.route");
const petRoutes = require("./routes/pet.route");
const adminRoutes = require("./routes/admin.route");
const adoptionRoutes = require("./routes/adoption.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/users", userRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/adoption", adoptionRoutes);

app.get("/", (req, res) => {
    res.send("Pet Adoption Platform Backend is running");
});

mongoose
    .connect("mongodb://localhost:27017/pet_adoption")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(5000, () => {
    console.log("Server running on port 5000");
});