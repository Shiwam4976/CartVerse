const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/amazonClone");


// Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

// Signup API
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.json("User Registered Successfully");
});

// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.json("Login Successful");
    } else {
        res.json("Invalid Credentials");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
