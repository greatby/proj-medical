export const metadata = {
  title: "Hospitals in India - Complete Directory of Medical Facilities",
  description:
    "Complete guide to hospitals in India: government hospitals, private hospitals, multi-specialty hospitals, super-specialty hospitals, teaching hospitals, AIIMS, JIPMER, PGIMER, and tertiary care facilities across all states.",
  keywords:
    "hospitals India, government hospitals, private hospitals, tertiary care, multi-specialty hospitals, AIIMS, medical colleges, teaching hospitals, super specialty",
  alternates: {
    canonical: "https://yourwebsite.com/hospitals.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Hospitals in India - Directory",
  description:
    "Directory of government, private, super-specialty, teaching, and accredited hospitals across India.",
  url: "https://yourwebsite.com/hospitals.html",
  publisher: {
    "@type": "Organization",
    name: "India Medical Directory",
    url: "https://yourwebsite.com",
  },
};

export default function HospitalsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden rounded-3xl shadow-xl mb-16">
        <div className="absolute inset-0 bg-linear-to-br from-teal-700 via-teal-600 to-blue-600 opacity-95" />
        <div className="relative z-10 text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Hospitals in India
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            Explore government, private, multi-specialty, super-specialty,
            teaching, and accredited medical institutions across all Indian
            states and major cities.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-20">
        {/* Overview */}
        <section id="overview">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Hospital System in India
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            India's healthcare system covers nearly 70,000 hospitals ranging
            from primary facilities to advanced tertiary care institutes. The
            system includes a mix of government and private institutions serving
            a population of over 1.4 billion.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Hospitals are classified by bed capacity, specialties,
            accreditation, and level of care. This helps patients make informed
            decisions about where to seek appropriate treatment.
          </p>
        </section>

        {/* Government Hospitals */}
        <section id="government-hospitals" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Government Hospitals in India
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Government hospitals form India's primary healthcare backbone,
            offering affordable or free treatment. These facilities are operated
            by central, state or municipal bodies.
          </p>

          {/* Subsection */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              Central Government Hospitals
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Premier national institutions offering advanced tertiary care and
              medical education.
            </p>

            <h4 className="text-xl font-bold text-teal-700">
              AIIMS (All India Institute of Medical Sciences)
            </h4>
            <p className="mt-2 text-slate-700">
              AIIMS hospitals represent the apex of public healthcare and
              medical education. The flagship AIIMS Delhi (2,478 beds) is one of
              India's most advanced facilities.
            </p>

            <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
              <li>AIIMS New Delhi</li>
              <li>AIIMS Bhopal</li>
              <li>AIIMS Bhubaneswar</li>
              <li>AIIMS Jodhpur</li>
              <li>AIIMS Patna</li>
              <li>AIIMS Raipur</li>
              <li>AIIMS Rishikesh</li>
              <li>AIIMS Gorakhpur</li>
              <li>AIIMS Nagpur</li>
              <li>AIIMS Mangalagiri</li>
              <li>AIIMS Rae Bareli</li>
              <li>AIIMS Vijaypur (J&K)</li>
            </ul>

            <h4 className="text-xl font-bold text-teal-700 mt-6">
              Safdarjung Hospital, Delhi
            </h4>
            <p className="text-slate-700">
              A major tertiary care hospital with 1,800+ beds and trauma care.
            </p>

            <h4 className="text-xl font-bold text-teal-700 mt-6">
              RML Hospital, Delhi
            </h4>
            <p className="text-slate-700">
              A 1,500-bed multi-specialty government hospital offering
              emergency, pediatric and super-specialty care.
            </p>

            <h4 className="text-xl font-bold text-teal-700 mt-6">
              PGIMER Chandigarh
            </h4>
            <p className="text-slate-700">
              A national institute of postgraduate medical education with
              specialized tertiary care services.
            </p>

            <h4 className="text-xl font-bold text-teal-700 mt-6">
              JIPMER Puducherry
            </h4>
            <p className="text-slate-700">
              2,000+ bedded tertiary care and medical education institute with
              an additional campus at Karaikal.
            </p>
          </div>

          {/* State hospitals */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              State Government Hospitals
            </h3>
            <p className="text-slate-700 mb-4">
              States operate medical colleges, district hospitals, and
              specialized institutions delivering primary, secondary and
              tertiary care.
            </p>

            <h4 className="font-bold text-teal-700 text-xl">
              Medical Colleges
            </h4>
            <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
              <li>Grant Medical College & JJ Hospital (Mumbai)</li>
              <li>King Edward Memorial Hospital (Mumbai)</li>
              <li>Medical College Kolkata</li>
              <li>Madras Medical College & Rajiv Gandhi General Hospital</li>
              <li>Bangalore Medical College</li>
              <li>Government Medical College, Trivandrum</li>
              <li>BJ Medical College, Pune</li>
            </ul>

            <h4 className="font-bold text-teal-700 text-xl mt-6">
              District Hospitals
            </h4>
            <p className="text-slate-700">
              Secondary healthcare hubs offering internal medicine, surgery,
              pediatrics, OBG and emergency services.
            </p>

            <h4 className="font-bold text-teal-700 text-xl mt-6">
              Specialty Hospitals
            </h4>
            <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
              <li>TB & Chest hospitals</li>
              <li>Mental health hospitals</li>
              <li>Government cancer hospitals</li>
              <li>Eye hospitals</li>
              <li>Maternity & children’s hospitals</li>
            </ul>
          </div>
        </section>

        {/* Private Hospitals */}
        <section id="private-hospitals" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Private Hospitals in India
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Private hospitals account for nearly 70% of India's healthcare
            infrastructure, ranging from nursing homes to advanced tertiary care
            hospital chains.
          </p>

          <div className="bg-white rounded-2xl border shadow p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800">
              Multi-Specialty Hospital Chains
            </h3>
            <p className="text-slate-700">
              Leading networks operating across major cities:
            </p>

            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Apollo Hospitals</li>
              <li>Fortis Healthcare</li>
              <li>Max Healthcare</li>
              <li>Manipal Hospitals</li>
              <li>Narayana Health</li>
              <li>Medanta - The Medicity</li>
              <li>Columbia Asia Hospitals</li>
              <li>Kokilaben Dhirubhai Ambani Hospital</li>
              <li>Aster DM Healthcare</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border shadow p-6">
            <h3 className="text-2xl font-semibold text-slate-800">
              Standalone Super-Specialty Hospitals
            </h3>

            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Lilavati Hospital (Mumbai)</li>
              <li>Jaslok Hospital (Mumbai)</li>
              <li>Hinduja Hospital (Mumbai)</li>
              <li>Sir Ganga Ram Hospital (Delhi)</li>
              <li>BLK-Max Super Speciality Hospital (Delhi)</li>
              <li>Wockhardt Hospitals (Multiple cities)</li>
            </ul>
          </div>
        </section>

        {/* Specialty Hospitals */}
        <section id="specialty-hospitals" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Specialty Hospitals in India
          </h2>
          <p className="text-slate-700">
            India has specialized hospitals for oncology, cardiac sciences,
            orthopedics, neurology, maternity, pediatrics, eye care, and more.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-teal-700">
                Cancer Hospitals
              </h3>
              <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                <li>Tata Memorial Hospital, Mumbai</li>
                <li>AIIMS Cancer Centers</li>
                <li>HCG Cancer Centres</li>
                <li>Apollo Cancer Centres</li>
              </ul>
            </div>

            <div className="bg-white p-6 border rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-teal-700">
                Cardiac Hospitals
              </h3>
              <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                <li>Fortis Escorts Heart Institute</li>
                <li>Narayana Hrudayalaya</li>
                <li>Asian Heart Institute</li>
              </ul>
            </div>

            <div className="bg-white p-6 border rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-teal-700">
                Eye Hospitals
              </h3>
              <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                <li>Sankara Nethralaya</li>
                <li>LV Prasad Eye Institute</li>
                <li>Aravind Eye Hospitals</li>
                <li>Shroff Eye Hospital</li>
              </ul>
            </div>

            <div className="bg-white p-6 border rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-teal-700">
                Maternity & Pediatrics
              </h3>
              <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                <li>Fernandez Hospital</li>
                <li>Cloudnine Hospitals</li>
                <li>Rainbow Children's Hospitals</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
