type Patient = {
  id: string;
  fullName: string;
  patientId: string;
  dateOfBirth: string;
  gender: string;
};

const dummyPatients: Patient[] = [
  {
    id: "1",
    fullName: "Anna Kowalska",
    patientId: "12345678901",
    dateOfBirth: "1990-04-15",
    gender: "female",
  },
  {
    id: "2",
    fullName: "Jan Nowak",
    patientId: "98765432100",
    dateOfBirth: "1985-12-01",
    gender: "male",
  },
];

export default function Patients() {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Patients List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Patient ID</th>
              <th className="px-4 py-2 text-left">Date of Birth</th>
              <th className="px-4 py-2 text-left">Gender</th>
            </tr>
          </thead>
          <tbody>
            {dummyPatients.map((patient) => (
              <tr key={patient.id} className="border-t text-sm text-gray-700">
                <td className="px-4 py-2">{patient.fullName}</td>
                <td className="px-4 py-2">{patient.patientId}</td>
                <td className="px-4 py-2">{patient.dateOfBirth}</td>
                <td className="px-4 py-2 capitalize">{patient.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
