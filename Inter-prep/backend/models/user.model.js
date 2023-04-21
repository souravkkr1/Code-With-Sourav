const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, isRequired: true, max: 40, min: 3, trim: true },
        email: { type: String, isRequired: true, unique: true, trim: true, lowercase: true },
        password: { type: String, isRequired: true },
        number: { type: Number, isRequired: true }
    }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
