import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to the protected dashboard route.",
    user: req.user,
  });
});

export default router;
