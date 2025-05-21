import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MediTrack
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">
          Register
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
