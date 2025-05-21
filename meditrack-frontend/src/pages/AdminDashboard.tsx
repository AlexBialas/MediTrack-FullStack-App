import { Users, CalendarClock, ShieldCheck, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const admin = {
    name: "Admin John Doe",
    role: "Administrator",
    email: "admin@meditrack.com",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              Welcome, {admin.name}
            </h2>
            <p className="text-sm text-gray-500">
              {admin.role} | {admin.email}
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm text-red-600 hover:underline">
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl flex gap-4 items-center">
            <Users className="w-10 h-10 text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Manage Users
              </h3>
              <p className="text-sm text-gray-600">
                View and control user accounts & roles
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl flex gap-4 items-center">
            <CalendarClock className="w-10 h-10 text-yellow-700" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">
                Appointments
              </h3>
              <p className="text-sm text-gray-600">
                Oversee system-wide schedules
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-xl flex gap-4 items-center">
            <ShieldCheck className="w-10 h-10 text-green-700" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                System Status
              </h3>
              <p className="text-sm text-gray-600">
                Monitor platform health & logs
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-400 text-center">
          This is an Admin Dashboard mockup. Data and functionality will come
          from the backend.
        </div>
      </div>
    </div>
  );
}
