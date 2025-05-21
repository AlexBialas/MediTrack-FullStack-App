import HeroImage from "../assets/clinic-hero.jpg";
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
  Smartphone,
  Laptop2,
  ServerCog,
  Contact2,
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
        className="bg-gradient-to-br from-blue-100 to-white py-24 px-4"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left side – Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 leading-tight">
              Powering Smarter Clinics <br /> with Secure Cloud Management
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl">
              Intuitive, scalable, and reliable platform for modern medical
              practices.
            </p>
            <a
              href="/register"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Get Started Free
            </a>
          </div>

          {/* Right side – Image */}
          <div className="h-[500px] md:h-screen w-full flex justify-center items-center">
            <img
              src={HeroImage}
              alt="Medical Hero"
              className="h-full w-auto object-contain "
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <ArrowDown className="w-6 h-6 animate-bounce text-blue-500" />
        </div>
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
        <h2 className="text-3xl font-bold text-center mb-6">
          Everything you need in one platform
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
          MediTrack simplifies medical management by combining powerful tools
          into a secure, cloud-based platform.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
              title: "Patient Management",
              desc: "Manage patient profiles, history, notes, and documents in one centralized system.",
            },
            {
              icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
              title: "Appointments",
              desc: "Schedule, modify, and track appointments with automatic reminders.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
              title: "Admin Dashboard",
              desc: "Control roles, permissions, system status, and monitor clinic performance.",
            },
            {
              icon: <FilePlus2 className="w-8 h-8 text-blue-600" />,
              title: "Digital Records",
              desc: "Upload and access files such as lab results, scans, and prescriptions securely.",
            },
            {
              icon: <UserPlus className="w-8 h-8 text-blue-600" />,
              title: "Role-based Access",
              desc: "Limit access based on user roles (admin, doctor, nurse, receptionist).",
            },
            {
              icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
              title: "Analytics & Reports",
              desc: "Visualize patient trends, appointment stats, and clinic growth metrics.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Platform */}
      <motion.section
        id="platform"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
        className="py-24 px-4 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Accessible Anytime, Anywhere
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Whether you're in the office, at home, or on the go – MediTrack keeps
          your clinic running smoothly on every device.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Mobile App */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Mobile App</h4>
            <p className="text-gray-600 text-sm mb-3">
              Use our intuitive mobile app to view appointments, update records,
              or message staff – from your pocket.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside">
              <li>Real-time notifications</li>
              <li>Touch ID/Face ID login</li>
              <li>Offline data caching</li>
            </ul>
          </div>

          {/* Web Portal */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left">
            <Laptop2 className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Web Portal</h4>
            <p className="text-gray-600 text-sm mb-3">
              Access MediTrack from any browser with no install required. Fast,
              lightweight, and secure.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside">
              <li>Fully responsive design</li>
              <li>Multi-tab session support</li>
              <li>Built-in dark mode</li>
            </ul>
          </div>

          {/* Cloud-Based Infrastructure */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left">
            <ServerCog className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cloud Infrastructure</h4>
            <p className="text-gray-600 text-sm mb-3">
              All your data is securely hosted and continuously backed up in the
              cloud.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside">
              <li>99.99% uptime SLA</li>
              <li>GDPR & HIPAA compliant</li>
              <li>Automatic backups</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
        className="py-24 px-4 bg-blue-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-16">
            Just three steps to digitalize your clinic workflow and boost
            efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden group">
              <div className="absolute -top-6 -left-6 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition">
                <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mt-10 text-xl font-semibold text-blue-700">
                Create an Account
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Register as a doctor or clinic admin to access MediTrack’s
                powerful platform instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden group">
              <div className="absolute -top-6 -left-6 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition">
                <FilePlus2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mt-10 text-xl font-semibold text-blue-700">
                Add Patients & Team
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Upload patient records, invite users, and configure role-based
                access with just a few clicks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden group">
              <div className="absolute -top-6 -left-6 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition">
                <BarChart2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mt-10 text-xl font-semibold text-blue-700">
                Start Managing
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Schedule visits, monitor reports, and work securely across all
                devices and locations.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        id="contactcta"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeIn}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 text-center"
      >
        <Contact2 className="w-10 h-10 mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">
          Let’s transform your clinic together.
        </h2>
        <p className="mb-6">
          Start your free trial or talk to our experts today.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Start Free Trial
        </a>
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
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Clinics and doctors around the world rely on MediTrack to streamline
          their operations and provide better patient care.
        </p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Elena Müller",
              role: "Pediatrician",
              text: "MediTrack has transformed how I manage my clinic. Everything is faster and safer.",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Klinik Berlin Nord",
              role: "Clinic Admin",
              text: "Finally a system that’s simple and secure. Our entire team uses MediTrack daily.",
              avatar: "https://randomuser.me/api/portraits/men/31.jpg",
            },
            {
              name: "Dr. Sophie Dubois",
              role: "Family Physician",
              text: "The appointment tracking and dashboard are intuitive and beautiful. Love it!",
              avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Dr. Lukas Meyer",
              role: "Orthopedic Surgeon",
              text: "I can work from mobile or laptop anytime. It’s changed my workflow for good.",
              avatar: "https://randomuser.me/api/portraits/men/65.jpg",
            },
            {
              name: "MediCare Munich",
              role: "Clinic Chain Manager",
              text: "We’ve onboarded 3 locations to MediTrack. Support is fantastic and fast.",
              avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            },
            {
              name: "Anna Schmidt",
              role: "Receptionist",
              text: "Even I found it easy to use without any training. Really smooth UI.",
              avatar: "https://randomuser.me/api/portraits/women/83.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md relative text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
              <p className="italic text-gray-700 mb-3">“{item.text}”</p>
              <div className="flex gap-1 text-yellow-500">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        id="stats"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="py-24 px-4 bg-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          We’re trusted by clinics worldwide
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Thousands of healthcare professionals use MediTrack to improve patient
          outcomes, streamline operations, and reduce overhead.
        </p>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-blue-50 py-8 px-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-blue-600">
              <CountUp end={1350} duration={2} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600">Patients Managed</p>
          </div>
          <div className="bg-blue-50 py-8 px-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-blue-600">
              <CountUp end={320} duration={2} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600">Appointments Tracked</p>
          </div>
          <div className="bg-blue-50 py-8 px-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-blue-600">
              <CountUp end={12} duration={2} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600">Partner Clinics</p>
          </div>
          <div className="bg-blue-50 py-8 px-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-blue-600">
              <CountUp end={98} duration={2} />%
            </h3>
            <p className="mt-2 text-sm text-gray-600">User Satisfaction</p>
          </div>
        </div>

        <div className="mt-16 text-xs text-gray-400">
          Data based on internal analytics and partner reports (2024)
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MediTrack. All rights reserved.
      </footer>
    </div>
  );
}
