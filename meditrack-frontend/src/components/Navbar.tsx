import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "How it works", to: "how" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Start", to: "cta" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MediTrack</div>
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                activeClass="text-blue-600 font-semibold underline"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-blue-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
