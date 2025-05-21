type Appointment = {
  id: string;
  patientName: string;
  date: string;
  time: string;
  type: string;
  doctor: string;
};

const dummyAppointments: Appointment[] = [
  {
    id: "a1",
    patientName: "Anna Kowalska",
    date: "2025-05-22",
    time: "10:00",
    type: "Consultation",
    doctor: "Dr. Müller",
  },
  {
    id: "a2",
    patientName: "Jan Nowak",
    date: "2025-05-23",
    time: "14:30",
    type: "Follow-up",
    doctor: "Dr. Schmidt",
  },
];

export default function Appointments() {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-2 text-left">Patient</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {dummyAppointments.map((appt) => (
              <tr key={appt.id} className="border-t text-sm text-gray-700">
                <td className="px-4 py-2">{appt.patientName}</td>
                <td className="px-4 py-2">{appt.date}</td>
                <td className="px-4 py-2">{appt.time}</td>
                <td className="px-4 py-2">{appt.type}</td>
                <td className="px-4 py-2">{appt.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
