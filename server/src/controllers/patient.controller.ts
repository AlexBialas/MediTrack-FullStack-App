import { Request, Response } from "express";
import Patient from "../models/patient.model";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, dateOfBirth, address } =
      req.body;
    const createdBy = req.userId; // z middleware JWT
    const patient = new Patient({
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      address,
      createdBy,
    });
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error creating patient" });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await Patient.find({ createdBy: req.userId });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients" });
  }
};
