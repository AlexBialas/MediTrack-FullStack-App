import { CalendarDays, User, Clock } from "lucide-react";

interface Appointment {
  id: number;
  patientName: string;
  doctor: string;
  date: string;
  time: string;
}

const mockAppointments: Appointment[] = [
  {
    id: 1,
    patientName: "Elena Müller",
    doctor: "Dr. Anna Nowak",
    date: "2025-05-23",
    time: "09:30",
  },
  {
    id: 2,
    patientName: "Tobias Schmidt",
    doctor: "Dr. Michael Braun",
    date: "2025-05-24",
    time: "14:00",
  },
];

export default function Appointments() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Appointments</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {mockAppointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-blue-500" />
              {appt.date} @ {appt.time}
            </h3>
            <p className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-1 text-gray-400" />
              {appt.patientName}
            </p>
            <p className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1 text-gray-400" />
              {appt.doctor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
