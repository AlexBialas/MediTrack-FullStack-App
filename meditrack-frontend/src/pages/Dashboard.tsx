import { LogOut, CalendarDays, Stethoscope } from "lucide-react";

export default function Dashboard() {
  const user = {
    name: "Dr. Anna Nowak",
    role: "Doctor",
    email: "anna@example.com",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              Welcome, {user.name}
            </h2>
            <p className="text-sm text-gray-500">
              {user.role} | {user.email}
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm text-red-600 hover:underline">
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl flex gap-4 items-center">
            <CalendarDays className="w-10 h-10 text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Upcoming Appointments
              </h3>
              <p className="text-sm text-gray-600">
                View and manage your schedule
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-xl flex gap-4 items-center">
            <Stethoscope className="w-10 h-10 text-green-700" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                My Patients
              </h3>
              <p className="text-sm text-gray-600">
                Access patient history & records
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-400 text-center">
          This is a sample dashboard UI. Data will be loaded from the backend.
        </div>
      </div>
    </div>
  );
}
