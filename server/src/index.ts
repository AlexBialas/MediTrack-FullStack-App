import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes"; // jeśli masz
import { authenticateToken } from "./middleware/authMiddleware"; // jeśli masz

dotenv.config();

const app = express(); // <- Musi być najpierw!

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes); // tylko jeśli istnieje

// Test
app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from MediTrack backend!" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
