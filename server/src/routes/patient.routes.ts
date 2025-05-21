import express from "express";
import { createPatient, getPatients } from "../controllers/patient.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", verifyToken, createPatient);
router.get("/", verifyToken, getPatients);

export default router;
