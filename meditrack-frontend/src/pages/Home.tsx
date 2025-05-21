import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Stethoscope,
  CalendarCheck,
  ShieldCheck,
  ArrowDown,
  UserPlus,
  FilePlus2,
  BarChart2,
  Quote,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="text-gray-800 scroll-smooth">
      {/* Hero */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="bg-gradient-to-br from-blue-50 to-blue-100 py-24 px-4 text-center flex flex-col items-center"
      >
        <img
          src="https://www.svgrepo.com/show/306500/medical-health.svg"
          alt="Medical system"
          className="w-48 mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MediTrack
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Secure, cloud-based medical management software for modern clinics.
        </p>
        <a
          href="/register"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
        <ArrowDown className="w-6 h-6 mt-10 animate-bounce text-blue-500" />
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
        className="bg-gray-100 py-24 px-4"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Stethoscope className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold text-lg mb-2">Patient Management</h3>
            <p className="text-gray-500">
              Store, edit, and track patient medical history securely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <CalendarCheck className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold text-lg mb-2">Appointments</h3>
            <p className="text-gray-500">
              Book, reschedule, and manage all patient visits with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ShieldCheck className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold text-lg mb-2">Admin Dashboard</h3>
            <p className="text-gray-500">
              Control users, roles, and monitor system status.
            </p>
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        id="how"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeIn}
        className="py-24 px-4 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <UserPlus className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1">1. Register</h4>
            <p className="text-gray-500 text-sm">
              Create your account as a doctor or clinic admin.
            </p>
          </div>
          <div>
            <FilePlus2 className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1">2. Add Patients</h4>
            <p className="text-gray-500 text-sm">
              Input patient records, notes and visit history.
            </p>
          </div>
          <div>
            <BarChart2 className="w-10 h-10 mx-auto text-blue-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1">3. Track Everything</h4>
            <p className="text-gray-500 text-sm">
              Monitor appointments, data, and reports easily.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        id="stats"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={1350} duration={2} />+
            </h3>
            <p className="text-gray-500 mt-1">Patients Managed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={320} duration={2} />+
            </h3>
            <p className="text-gray-500 mt-1">Appointments Tracked</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={12} duration={2} />+
            </h3>
            <p className="text-gray-500 mt-1">Clinics Using MediTrack</p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
        className="bg-gray-100 py-24 px-4 text-center"
      >
        <h2 className="text-3xl font-semibold mb-10">What our users say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Dr. Elena Müller",
              role: "Pediatrician",
              text: "MediTrack has transformed how I manage my clinic. Everything is faster and safer.",
            },
            {
              name: "Klinik Berlin Nord",
              role: "Clinic Admin",
              text: "Finally a system that’s simple and secure. Our entire team uses MediTrack daily.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md relative">
              <Quote className="w-6 h-6 absolute -top-3 -left-3 text-blue-300" />
              <p className="italic text-gray-700 mb-4">"{item.text}"</p>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        id="cta"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeIn}
        className="py-24 px-4 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Start managing your clinic smarter.
        </h2>
        <a
          href="/register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Create your account
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MediTrack. All rights reserved.
      </footer>
    </div>
  );
}
