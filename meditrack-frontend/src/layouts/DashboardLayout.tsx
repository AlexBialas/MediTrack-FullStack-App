import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  CalendarCheck,
  Settings,
  LogOut,
  UserPlus,
  CalendarPlus,
  ShieldCheck,
} from "lucide-react";

export default function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Overview", icon: <Home size={18} /> },
    {
      path: "/dashboard/patients",
      label: "Patients",
      icon: <Users size={18} />,
    },
    {
      path: "/dashboard/appointments",
      label: "Appointments",
      icon: <CalendarCheck size={18} />,
    },
    {
      path: "/dashboard/add-patient",
      label: "Add Patient",
      icon: <UserPlus size={18} />,
    },
    {
      path: "/dashboard/add-appointment",
      label: "Add Appointment",
      icon: <CalendarPlus size={18} />,
    },
    {
      path: "/dashboard/admin",
      label: "Admin Panel",
      icon: <ShieldCheck size={18} />,
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-700 mb-6">MediTrack</h2>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 transition ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
          <button className="flex items-center gap-2 text-sm text-red-600 hover:underline">
            <LogOut size={16} />
            Log out
          </button>
        </div>

        {/* Nested routes */}
        <Outlet />
      </main>
    </div>
  );
}
