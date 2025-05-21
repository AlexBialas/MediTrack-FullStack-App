import { useState } from "react";
import { User, CalendarDays, Clock } from "lucide-react";

export default function AddAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New appointment:", formData);
    // TODO: backend integration
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Patient */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Name
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-800"
              placeholder="Elena Müller"
            />
          </div>
        </div>

        {/* Doctor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Doctor
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-800"
              placeholder="Dr. Nowak"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <CalendarDays className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <Clock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
        >
          Save Appointment
        </button>
      </form>
    </div>
  );
}
