import { Router } from "express";

import { check, validationResult } from "express-validator";
import authBodyValidator from "../../middlewares/auth/authBodyValidator";
import bcrypt from "bcryptjs";

const authValidator = [
  check("email", "Enter the valid email address").isEmail(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
];

const router = Router();

//Login
router.post("/login", authValidator, authBodyValidator, async (req, res) => {});

//Register
router.post("/register", authValidator, authBodyValidator, async (req, res) => {
  let { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  return res.status(200).json({ email, password });
});

export default router;
