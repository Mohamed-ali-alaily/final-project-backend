const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  phone:     { type: String },
  role:      { type: String, enum: ["user", "admin"], default: "user" } // 👈 هنا الفرق
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
