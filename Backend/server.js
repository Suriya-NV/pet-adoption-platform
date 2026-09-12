const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

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