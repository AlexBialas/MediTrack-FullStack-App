import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const mockPatients: Patient[] = [
  {
    id: 1,
    name: "Elena Müller",
    email: "elena@example.com",
    phone: "123-456-789",
  },
  {
    id: 2,
    name: "Tobias Schmidt",
    email: "tobias@example.com",
    phone: "555-321-987",
  },
  {
    id: 3,
    name: "Anja Krüger",
    email: "anja@example.com",
    phone: "444-888-222",
  },
];

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>(mockPatients);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Patients</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
          >
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-500" />
              {patient.name}
            </h3>
            <p className="flex items-center text-sm text-gray-600 mt-2">
              <Mail className="w-4 h-4 mr-1 text-gray-400" />
              {patient.email}
            </p>
            <p className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1 text-gray-400" />
              {patient.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
