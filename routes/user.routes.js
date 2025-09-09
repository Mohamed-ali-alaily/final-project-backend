const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const User = require("../models/user.model");
const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  const me = await User.findById(req.user.id).select("-password");
  if (!me) return res.status(404).json({ message: "User not found" });
  res.json({ user: me });
});

module.exports = router;