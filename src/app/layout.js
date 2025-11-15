import "./globals.css";
import Link from "next/link";
import {
  MdLocalHospital,
  MdPersonSearch,
  MdMedicalServices,
  MdScience,
  MdHealthAndSafety,
} from "react-icons/md";

export const metadata = {
  title: "India Medical Directory",
  description:
    "Complete medical information directory — Hospitals, Doctors, Diagnostic Centers, Medical Services and Specialties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">

        {/* ================================= */}
        {/* NAVBAR */}
        {/* ================================= */}
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              IndiaMedical
            </Link>

            {/* Navigation Links */}
            <nav>
              <ul className="flex gap-8 text-sm font-medium">

                <li>
                  <Link
                    href="/hospitals"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <MdLocalHospital className="text-lg" /> Hospitals
                  </Link>
                </li>

                <li>
                  <Link
                    href="/doctors"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <MdPersonSearch className="text-lg" /> Doctors
                  </Link>
                </li>

                <li>
                  <Link
                    href="/medical-services"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <MdMedicalServices className="text-lg" /> Medical Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/specialties"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <MdHealthAndSafety className="text-lg" /> Specialties
                  </Link>
                </li>

                <li>
                  <Link
                    href="/diagnostic-centers"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <MdScience className="text-lg" /> Diagnostic Centers
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ================================= */}
        {/* PAGE CONTENT */}
        {/* ================================= */}
        <main className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
          {children}
        </main>

        {/* ================================= */}
        {/* FOOTER */}
        {/* ================================= */}
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand */}
            <div>
              <h2 className="text-xl font-semibold text-white">IndiaMedical</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Your trusted directory for hospitals, doctors, diagnostic
                centers & medical services across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hospitals"
                    className="hover:text-blue-400 transition"
                  >
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doctors"
                    className="hover:text-blue-400 transition"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diagnostic-centers"
                    className="hover:text-blue-400 transition"
                  >
                    Diagnostic Centers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialties"
                    className="hover:text-blue-400 transition"
                  >
                    Specialties
                  </Link>
                </li>
              </ul>
            </div>

            {/* Emergency Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Emergency Contacts
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Emergency:</span> 112
                </li>
                <li>
                  <span className="font-semibold">Ambulance:</span> 102 / 108
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            © {new Date().getFullYear()} India Medical Directory. All Rights
            Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
