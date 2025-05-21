export default function Dashboard() {
  // Placeholder – dane będą pobierane po integracji z backendem
  const user = {
    name: "Anna",
    email: "anna@example.com",
    role: "user",
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome, {user.name} 👋
      </h1>

      <div className="mb-6 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>

      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>

      <hr className="my-6" />

      <div>
        <h2 className="text-xl font-medium text-gray-700 mb-2">
          Your Appointments
        </h2>
        <p className="text-gray-500">You have no appointments yet.</p>
      </div>
    </div>
  );
}
