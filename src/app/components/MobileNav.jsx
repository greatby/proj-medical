"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import {
  MdLocalHospital,
  MdPersonSearch,
  MdMedicalServices,
  MdHealthAndSafety,
  MdScience,
} from "react-icons/md";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-sm font-medium px-6">

          <li>
            <Link href="/hospitals" className="flex items-center gap-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <MdLocalHospital className="text-lg" /> Hospitals
            </Link>
          </li>

          <li>
            <Link href="/doctors" className="flex items-center gap-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <MdPersonSearch className="text-lg" /> Doctors
            </Link>
          </li>

          <li>
            <Link href="/medical-services" className="flex items-center gap-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <MdMedicalServices className="text-lg" /> Medical Services
            </Link>
          </li>

          <li>
            <Link href="/specialties" className="flex items-center gap-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <MdHealthAndSafety className="text-lg" /> Specialties
            </Link>
          </li>

          <li>
            <Link href="/diagnostic-centers" className="flex items-center gap-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <MdScience className="text-lg" /> Diagnostic Centers
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
