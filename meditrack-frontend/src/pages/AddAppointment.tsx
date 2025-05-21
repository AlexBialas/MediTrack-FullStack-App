import { useState } from "react";

export default function AddAppointment() {
  const [formData, setFormData] = useState({
    patientId: "",
    date: "",
    time: "",
    type: "consultation",
    doctor: "",
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
    console.log("New appointment:", formData);
    // później: wysłanie do backendu
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="patientId"
          placeholder="Patient ID"
          value={formData.patientId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="consultation">Consultation</option>
          <option value="follow-up">Follow-up</option>
          <option value="surgery">Surgery</option>
        </select>
        <input
          type="text"
          name="doctor"
          placeholder="Doctor's name"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="notes"
          placeholder="Notes / Recommendations"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium"
        >
          Add Appointment
        </button>
      </form>
    </div>
  );
}
