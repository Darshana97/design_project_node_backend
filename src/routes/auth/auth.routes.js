import { Router } from "express";

import { check, validationResult } from "express-validator";
import authBodyValidator from "../../middlewares/auth/authBodyValidator";
import bcrypt from "bcryptjs";
import { model } from "mongoose";

const router = Router();

const User = model("users");

const authValidator = [
  check("email", "Enter the valid email address").isEmail(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
];

//Login
router.post("/login", authValidator, authBodyValidator, async (req, res) => {});

//Register
router.post("/register", authValidator, authBodyValidator, async (req, res) => {
  try {
    let { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ errors: [{ msg: "internal server error" }] });
  }
});

export default router;
