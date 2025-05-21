import mongoose, { Schema, Document } from "mongoose";

export interface IPatient extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  address: string;
  createdBy: mongoose.Types.ObjectId;
}

const PatientSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
    address: { type: String },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPatient>("Patient", PatientSchema);
