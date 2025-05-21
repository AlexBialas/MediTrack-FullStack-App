import { useState } from "react";

export default function AddPatient() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    patientId: "",
    gender: "female",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New patient:", formData);
    // później: wysłanie do backendu
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Patient
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="patientId"
          placeholder="Patient ID / PESEL"
          value={formData.patientId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="notes"
          placeholder="Medical notes (optional)"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
}
