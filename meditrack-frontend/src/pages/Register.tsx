import { useState } from "react";
import { Mail, Lock, UserPlus } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Name
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 ring-blue-400">
              <UserPlus className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-gray-800"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 ring-blue-400">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                className="flex-1 bg-transparent outline-none text-gray-800"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 ring-blue-400">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                className="flex-1 bg-transparent outline-none text-gray-800"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
