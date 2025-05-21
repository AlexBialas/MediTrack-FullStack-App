export default function AdminDashboard() {
  const admin = {
    name: "Aleksandra",
    email: "admin@meditrack.com",
    role: "admin",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome Admin, {admin.name} 🩺
      </h1>

      <div className="mb-6 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> {admin.email}
        </p>
        <p>
          <strong>Role:</strong> {admin.role}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 border rounded shadow text-center">
          <h2 className="font-bold text-lg mb-2">Users</h2>
          <p className="text-gray-500">23 total users</p>
        </div>
        <div className="p-4 border rounded shadow text-center">
          <h2 className="font-bold text-lg mb-2">Patients</h2>
          <p className="text-gray-500">42 registered patients</p>
        </div>
        <div className="p-4 border rounded shadow text-center">
          <h2 className="font-bold text-lg mb-2">Appointments</h2>
          <p className="text-gray-500">17 upcoming appointments</p>
        </div>
      </div>
    </div>
  );
}
