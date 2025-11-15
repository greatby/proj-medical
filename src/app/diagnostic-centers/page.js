// src/app/diagnostic-centers/page.jsx
import Script from "next/script";
import {
  MdScience,
  MdLocalHospital,
  MdInsights,
  MdHealthAndSafety,
  MdMedicalServices,
  MdBiotech,
  MdBloodtype,
  MdMonitorHeart,
  MdOutlineImage,
  MdHome,
  MdTrendingUp,
} from "react-icons/md";

export const metadata = {
  title:
    "Diagnostic Centers in India – Pathology Labs & Imaging Centers Directory",
  description:
    "Complete guide to diagnostic centers in India including pathology labs, imaging centers, CT scan, MRI, X-ray, ultrasound, blood tests, health checkups, and NABL accredited labs.",
  keywords:
    "diagnostic centers India, pathology labs, imaging centers, CT scan, MRI, X-ray, ultrasound, blood tests, health checkup, NABL labs",
};

export default function DiagnosticCentersPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script id="diagnostic-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Diagnostic Centers in India",
          url: "https://yourwebsite.com/diagnostic-centers",
          description:
            "Directory of diagnostic centers including pathology labs, imaging centers, CT, MRI, ultrasound, blood tests, and NABL-accredited labs.",
          department: [
            "Pathology Laboratory",
            "Radiology Imaging Center",
            "CT Scan Center",
            "MRI Center",
          ],
          areaServed: "India",
        })}
      </Script>

      <div className="space-y-10 pb-20">

        {/* -------------------------------------- */}
        {/* HERO SECTION */}
        {/* -------------------------------------- */}
        <section className="bg-[#E8F3FF] py-16 px-6 rounded-2xl shadow-sm">
          <div className="max-w-5xl mx-auto text-center">
            <MdOutlineImage className="w-14 h-14 mx-auto text-blue-600" />
            <h1 className="text-4xl font-bold mt-4">
              Diagnostic Centers in India
            </h1>
            <p className="text-lg text-gray-700 mt-3 leading-relaxed">
              Comprehensive directory of pathology labs, imaging centers, CT
              scans, MRI, X-rays, ultrasound services & NABL accredited
              diagnostic facilities across India.
            </p>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* SECTION: Overview */}
        {/* -------------------------------------- */}
        <section className="bg-[#E9FFF4] py-12 px-6 rounded-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-700 flex items-center gap-2">
              <MdInsights className="w-8 h-8" /> Diagnostic Services in India
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4 mt-4">
              <p>
                Diagnostic centers play a pivotal role in modern healthcare by
                providing accurate and timely test results that guide medical
                decisions. India has witnessed tremendous growth…
              </p>
              <p>
                The diagnostic industry in India is valued at several billion
                dollars and continues to grow due to technological advancements,
                preventive healthcare demand and rise of lifestyle diseases.
              </p>
              <p>
                This guide covers types of diagnostic centers, major lab chains,
                imaging services, quality standards, costs and how to choose the
                right diagnostic center.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* SECTION: Types of Diagnostic Centers */}
        {/* -------------------------------------- */}
        <section className="bg-[#FFF3EA] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-orange-700 flex items-center gap-2">
              <MdScience className="w-8 h-8" /> Types of Diagnostic Centers
            </h2>

            {/* SUBSECTION BLOCKS */}
            <div className="mt-6 space-y-10">

              {/* Pathology Labs */}
              <div>
                <h3 className="text-2xl font-bold">Pathology Laboratories</h3>
                <p className="mt-2 text-gray-700">
                  Perform blood tests, urine tests, tissue tests and molecular
                  diagnostics.
                </p>
              </div>

              {/* Imaging Centers */}
              <div>
                <h3 className="text-2xl font-bold">Imaging and Radiology Centers</h3>
                <p className="mt-2 text-gray-700">
                  Provide X-rays, ultrasound, CT scan, MRI and advanced imaging.
                </p>
              </div>

              {/* Comprehensive Centers */}
              <div>
                <h3 className="text-2xl font-bold">Comprehensive Diagnostic Centers</h3>
                <p className="mt-2 text-gray-700">
                  Combine pathology + imaging in one facility for convenience.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* MAJOR DIAGNOSTIC CHAINS */}
        {/* -------------------------------------- */}
        <section className="bg-[#F2E8FF] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-purple-700 flex items-center gap-2">
              <MdLocalHospital className="w-8 h-8" /> Major Diagnostic Chains
            </h2>

            <div className="space-y-10 mt-6 leading-relaxed text-gray-700">
              <p>
                India has several top diagnostic chains offering pathology,
                radiology, molecular diagnostics, and wellness packages.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Dr. Lal PathLabs</li>
                <li>Thyrocare</li>
                <li>Metropolis Healthcare</li>
                <li>SRL Diagnostics</li>
                <li>Vijaya Diagnostic Centre</li>
                <li>Suburban Diagnostics</li>
                <li>Medall Healthcare</li>
                <li>Neuberg Diagnostics</li>
                <li>Regional diagnostic chains across states</li>
              </ul>
            </div>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* PATHOLOGY SERVICES */}
        {/* -------------------------------------- */}
        <section className="bg-[#E8F3FF] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2">
              <MdMedicalServices className="w-8 h-8" /> Pathology & Laboratory Services
            </h2>

            <div className="text-gray-700 leading-relaxed mt-4 space-y-4">
              <p>Full list of blood tests, hormones, cultures, molecular tests…</p>
            </div>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* IMAGING SERVICES */}
        {/* -------------------------------------- */}
        <section className="bg-[#E9FFF4] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-700 flex items-center gap-2">
              <MdOutlineImage className="w-8 h-8" /> Radiology & Imaging Services
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Includes X-Ray, Ultrasound, CT scan, MRI, PET-CT, DEXA, and interventional radiology…
            </p>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* HEALTH PACKAGES */}
        {/* -------------------------------------- */}
        <section className="bg-[#FFF3EA] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-orange-700 flex items-center gap-2">
              <MdHealthAndSafety className="w-8 h-8" /> Preventive Health Checkup Packages
            </h2>

            <p className="mt-4 text-gray-700">
              Basic, master, executive, and specialized health packages…
            </p>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* QUALITY STANDARDS */}
        {/* -------------------------------------- */}
        <section className="bg-[#F2E8FF] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-purple-700 flex items-center gap-2">
              <MdBiotech className="w-8 h-8" /> Quality Standards & Accreditation
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>NABL Accreditation</li>
              <li>CAP Certification</li>
              <li>ISO Quality Standards</li>
              <li>Quality Control & Proficiency Testing</li>
            </ul>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* COSTS */}
        {/* -------------------------------------- */}
        <section className="bg-[#E8F3FF] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2">
              <MdTrendingUp className="w-8 h-8" /> Cost of Diagnostic Services
            </h2>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Price ranges for pathology tests, imaging scans, and health packages…
            </p>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* HOME SERVICES */}
        {/* -------------------------------------- */}
        <section className="bg-[#E9FFF4] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-700 flex items-center gap-2">
              <MdHome className="w-8 h-8" /> Home Sample Collection Services
            </h2>

            <p className="text-gray-700 mt-4">
              Blood, urine, stool, ECG at home, health package collections…
            </p>
          </div>
        </section>

        {/* -------------------------------------- */}
        {/* FUTURE TRENDS */}
        {/* -------------------------------------- */}
        <section className="bg-[#FFF3EA] py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-orange-700 flex items-center gap-2">
              <MdInsights className="w-8 h-8" /> Future of Diagnostic Services
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>AI-driven diagnosis</li>
              <li>Point-of-care testing</li>
              <li>Molecular diagnostics</li>
              <li>Tele-radiology</li>
              <li>Wearables & remote monitoring</li>
              <li>Liquid biopsy & precision medicine</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
