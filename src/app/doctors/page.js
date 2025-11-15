export const metadata = {
  title: "Doctors in India - Complete Medical Professionals Directory",
  description:
    "Find doctors in India - Directory of medical professionals, specialists, general practitioners, consultants, surgeons and healthcare providers across all cities and medical specialties.",
  keywords:
    "doctors India, find doctor, specialists, surgeons, medical professionals, healthcare providers, MBBS doctor, MD, MS, DM, MCh, medical directory India",
  alternates: {
    canonical: "https://yourwebsite.com/doctors.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Doctors in India - Medical Professionals Directory",
  "description":
    "Directory of doctors, specialists, surgeons, and medical practitioners across India.",
  "url": "https://yourwebsite.com/doctors.html",
  "publisher": {
    "@type": "Organization",
    "name": "India Medical Directory",
    "url": "https://yourwebsite.com",
  },
};

export default function DoctorsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl shadow-xl mb-16">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-teal-700 to-blue-600 opacity-95" />
        <div className="relative z-10 text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Doctors in India
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            Explore India's complete directory of medical professionals,
            specialists, consultants, surgeons and healthcare experts.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-20">

        {/* Overview */}
        <section id="overview" className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Medical Professionals in India</h2>
          <p className="text-slate-700 leading-relaxed">
            India has one of the largest healthcare workforces, with over 1.3M
            registered allopathic doctors and millions more in AYUSH systems.
            Doctors are regulated by the National Medical Commission (NMC), and
            must be registered with State Medical Councils.
          </p>
          <p className="text-slate-700 leading-relaxed">
            India produces nearly 90,000 medical graduates annually from 600+
            colleges, making it one of the top contributors to global medical
            talent.
          </p>
        </section>

        {/* Medical Education */}
        <section id="medical-education" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Medical Education and Qualifications in India
          </h2>

          <div className="bg-white p-6 rounded-2xl shadow border space-y-6">

            {/* UG Degrees */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Undergraduate Medical Education
              </h3>

              <h4 className="text-xl font-bold text-teal-700 mt-4">MBBS</h4>
              <p className="text-slate-700 mt-1">
                Primary medical degree of 5.5 years including internship.
              </p>

              <h4 className="text-xl font-bold text-teal-700 mt-4">BAMS / BHMS / BUMS / BSMS</h4>
              <p className="text-slate-700 mt-1">
                Degrees in Ayurveda, Homeopathy, Unani, and Siddha medicine systems.
              </p>

              <h4 className="text-xl font-bold text-teal-700 mt-4">BDS – Dental Surgery</h4>
              <p className="text-slate-700 mt-1">
                5-year program for dentistry and oral surgery.
              </p>
            </div>

            {/* PG Degrees */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mt-8">
                Postgraduate Medical Education
              </h3>

              <h4 className="text-xl font-bold text-teal-700 mt-4">
                MD / MS / DNB
              </h4>
              <p className="text-slate-700">
                3-year training in medical or surgical specialties.
              </p>

              <h4 className="text-xl font-bold text-teal-700 mt-4">Diploma Courses</h4>
              <p className="text-slate-700">
                2-year diplomas like DCH, DGO, DA in core medical specialties.
              </p>
            </div>

            {/* Super Specialty */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mt-8">
                Super-Specialty Training
              </h3>

              <h4 className="text-xl font-bold text-teal-700 mt-4">DM / MCh</h4>
              <p className="text-slate-700">
                Highest level of specialization in medical and surgical fields.
              </p>

              <h4 className="text-xl font-bold text-teal-700 mt-4">FNB</h4>
              <p className="text-slate-700">
                Fellowship programs by National Board of Examinations.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Doctors */}
        <section id="types-of-doctors" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Types of Medical Practitioners
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-semibold text-teal-700">General Practitioners</h3>
              <p className="text-slate-700 mt-2">
                Provide primary care, preventive health, chronic disease management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-semibold text-teal-700">Specialists</h3>
              <p className="text-slate-700 mt-2">MD, MS, DNB-qualified specialists.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-semibold text-teal-700">Super-specialists</h3>
              <p className="text-slate-700 mt-2">
                DM, MCh doctors with ultra-specialty expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-semibold text-teal-700">Consultants</h3>
              <p className="text-slate-700 mt-2">
                Senior experts leading hospital departments.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Specialty Sections */}
        <section
          id="medical-specialties-detailed"
          className="space-y-8 bg-white border rounded-2xl shadow p-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Medical Specialties in Detail
          </h2>
          <p className="text-slate-700">
            India has specialists across all branches of medicine including
            cardiology, neurology, pediatrics, oncology, orthopedics, surgery,
            ophthalmology, psychiatry and more.
          </p>
        </section>

        {/* AYUSH */}
        <section id="ayush-practitioners" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">AYUSH Practitioners</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Ayurveda (BAMS, MD)</li>
            <li>Homeopathy (BHMS, MD)</li>
            <li>Unani (BUMS)</li>
            <li>Siddha (BSMS)</li>
            <li>Yoga & Naturopathy (BNYS)</li>
          </ul>
        </section>

        {/* Finding Doctors */}
        <section id="finding-doctors" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">How to Find the Right Doctor</h2>
          <p className="text-slate-700">Check qualifications, experience, reviews, hospital affiliation and communication style.</p>
        </section>

        {/* Doctor-Patient Relationship */}
        <section id="doctor-patient-relationship" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Doctor-Patient Relationship</h2>
          <p className="text-slate-700">Built on trust, communication, consent, and continuity of care.</p>
        </section>

        {/* Ethics */}
        <section id="medical-ethics" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Medical Ethics</h2>
          <p className="text-slate-700">Doctors must follow NMC ethical guidelines ensuring fairness, competence, confidentiality and emergency care.</p>
        </section>

        {/* Costs */}
        <section id="medical-costs" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Doctor Consultation Costs</h2>
          <p className="text-slate-700">Consultation fees vary by specialty, experience, and location.</p>
        </section>

        {/* Telemedicine */}
        <section id="telemedicine" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Telemedicine and Online Consultations</h2>
          <p className="text-slate-700">Convenient, fast and ideal for routine consultations.</p>
        </section>

        {/* Negligence */}
        <section id="medical-negligence" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Medical Negligence & Recourse</h2>
          <p className="text-slate-700">Patients may approach State Medical Councils, Consumer Forums or Courts.</p>
        </section>

        {/* Future */}
        <section id="future-trends" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Future of Medical Practice</h2>
          <p className="text-slate-700">AI, telemedicine, preventive care, digital diagnostics and primary care strengthening.</p>
        </section>

        {/* Choosing PCP */}
        <section id="choosing-primary-doctor" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Choosing a Primary Care Doctor</h2>
          <p className="text-slate-700">Builds continuity and centralized healthcare management.</p>
        </section>

      </main>
    </>
  );
}
