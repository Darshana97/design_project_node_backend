import { Router } from "express";

import { check, validationResult } from "express-validator";

const authValidator = [
  check("Email", "Enter the valid email address").isEmail(),
  check("Password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
];

const router = Router();

//Login
router.post("/login", authValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

//Register
router.post("/register", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

export default router;
