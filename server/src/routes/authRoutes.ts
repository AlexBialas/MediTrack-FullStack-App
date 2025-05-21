import express from "express";
import { register } from "../controllers/authController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);

router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "You have access to the protected dashboard route!",
    user: req.user,
  });
});

export default router;
