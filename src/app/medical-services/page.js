export const metadata = {
  title: "Medical Services in India - Complete Healthcare Services Directory",
  description:
    "Complete guide to medical services in India including diagnostics, imaging, pharmacies, ambulance services, home healthcare, physiotherapy, dental, optical, equipment suppliers, insurance, and more.",
  keywords:
    "medical services India, diagnostic services, pathology labs, imaging centers, ambulance services, pharmacy, home healthcare, blood banks, medical equipment, healthcare services",
  alternates: {
    canonical: "https://yourwebsite.com/medical-services.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Medical Services in India",
  "description":
    "Directory of complete medical services including diagnostics, imaging, pharmacies, ambulance, physiotherapy, home healthcare, dental, optical, and more.",
  "url": "https://yourwebsite.com/medical-services.html",
  "publisher": {
    "@type": "Organization",
    "name": "India Medical Directory",
    "url": "https://yourwebsite.com",
  },
};

export default function MedicalServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative rounded-3xl shadow-xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-teal-600 to-blue-600 opacity-95" />
        <div className="relative z-10 text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Medical Services in India
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            A comprehensive guide to India's diagnostic, imaging, emergency,
            pharmacy, rehabilitation, and healthcare support services.
          </p>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-20">

        {/* Overview */}
        <section id="overview" className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Healthcare Services in India
          </h2>
          <p className="text-slate-700 leading-relaxed">
            India’s healthcare ecosystem goes beyond hospitals and doctors. It
            includes laboratories, imaging centers, pharmacies, emergency
            services, rehabilitation facilities, home healthcare, and more.
          </p>
          <p className="text-slate-700 leading-relaxed">
            With advancing technology and rising health awareness, services are
            more accessible across metros and tier-2/tier-3 cities. Digital
            health has expanded convenience with online pharmacies,
            telemedicine, and e-records.
          </p>
        </section>

        {/* Diagnostic Services */}
        <section id="diagnostic-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Diagnostic & Laboratory Services
          </h2>
          <p className="text-slate-700">
            Accurate diagnosis is the core of effective treatment. India has
            thousands of pathology labs and diagnostic centers.
          </p>

          {/* Pathology Card */}
          <div className="bg-white p-6 rounded-2xl shadow border space-y-6">

            <h3 className="text-2xl font-semibold text-teal-700">
              Clinical Pathology Labs
            </h3>
            <p className="text-slate-700">
              Offer blood, urine, and body fluid tests for disease detection.
            </p>

            <h4 className="text-xl font-semibold text-slate-800">Routine Tests</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>CBC – anemia, infections</li>
              <li>Blood sugar & HbA1c – diabetes</li>
              <li>Lipid Profile – cholesterol</li>
              <li>LFT & KFT – liver/kidney tests</li>
              <li>Thyroid profile – TSH, T3, T4</li>
              <li>Urine analysis</li>
            </ul>

            <h4 className="text-xl font-semibold text-slate-800">
              Specialized Tests
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Hormone panels</li>
              <li>Tumor markers</li>
              <li>Cardiac markers</li>
              <li>Vitamin levels</li>
              <li>Autoimmune profiles</li>
              <li>Allergy tests</li>
            </ul>

            <h4 className="text-xl font-semibold text-slate-800">
              Microbiology
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Culture & sensitivity</li>
              <li>Blood/urine cultures</li>
              <li>Stool & sputum testing</li>
              <li>Viral load tests</li>
            </ul>

            <h4 className="text-xl font-semibold text-slate-800">
              Molecular Diagnostics
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>PCR testing</li>
              <li>Genetic screening</li>
              <li>Pharmacogenomics</li>
              <li>Cancer genomics</li>
            </ul>

            {/* Major Chains */}
            <h3 className="text-2xl font-semibold text-teal-700 mt-6">
              Major Diagnostic Chains
            </h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Dr. Lal PathLabs</li>
              <li>Thyrocare</li>
              <li>Metropolis Healthcare</li>
              <li>SRL Diagnostics</li>
              <li>Vijaya Diagnostics</li>
              <li>Suburban Diagnostics</li>
            </ul>

          </div>
        </section>

        {/* Imaging */}
        <section id="imaging-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Radiology & Imaging Services
          </h2>
          <p className="text-slate-700">Advanced imaging is crucial for accurate diagnosis.</p>

          <div className="bg-white p-6 rounded-2xl shadow border space-y-6">
            <h3 className="text-xl font-bold text-teal-700">X-Ray, Ultrasound, CT, MRI, PET</h3>

            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Digital X-Ray</li>
              <li>Obstetric & Abdominal Ultrasound</li>
              <li>CT scans & Angiography</li>
              <li>3T MRI for high-resolution imaging</li>
              <li>PET-CT for cancer detection</li>
              <li>Mammography & DEXA</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-6">
              Interventional Radiology
            </h3>
            <p className="text-slate-700">Minimally invasive, image-guided procedures.</p>
          </div>
        </section>

        {/* Pharmacy */}
        <section id="pharmacy-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Pharmacy Services</h2>
          <p className="text-slate-700">Pharmacies are essential healthcare touchpoints.</p>

          <div className="bg-white rounded-2xl p-6 shadow border space-y-6">
            <h3 className="text-xl font-bold text-teal-700">Retail & Hospital Pharmacies</h3>
            <h3 className="text-xl font-bold text-teal-700">Online Pharmacies</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Tata 1mg</li>
              <li>PharmEasy</li>
              <li>Netmeds</li>
              <li>Apollo 247</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">
              Generic Medicine Stores
            </h3>
            <p className="text-slate-700">Jan Aushadhi Kendras offer affordable generics.</p>
          </div>
        </section>

        {/* Emergency Services */}
        <section id="ambulance-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Emergency Medical & Ambulance Services
          </h2>
          <p className="text-slate-700">
            Pre-hospital care, emergency transport, and advanced life support.
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>108/102 Emergency Services</li>
            <li>BLS & ALS Ambulances</li>
            <li>Air Ambulances</li>
            <li>Private providers like ZHL, GVK EMRI</li>
          </ul>
        </section>

        {/* Home Healthcare */}
        <section id="home-healthcare" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Home Healthcare</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Home nursing</li>
            <li>Doctor visits</li>
            <li>Home sample collection</li>
            <li>Physiotherapy at home</li>
            <li>Home ICU services</li>
            <li>Elderly care</li>
            <li>Mother & baby care</li>
          </ul>
        </section>

        {/* Blood Banks */}
        <section id="blood-banks" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Blood Banks & Transfusion</h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Hospital & standalone blood banks</li>
            <li>Component separation</li>
            <li>Donation & testing</li>
            <li>Red Cross, Rotary, NGO blood banks</li>
          </ul>
        </section>

        {/* Physiotherapy */}
        <section id="physiotherapy" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Physiotherapy & Rehabilitation</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Musculoskeletal therapy</li>
            <li>Neurological rehabilitation</li>
            <li>Cardiac rehab</li>
            <li>Sports injury treatment</li>
            <li>Post-surgery rehab</li>
          </ul>
        </section>

        {/* Dialysis */}
        <section id="dialysis-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Dialysis Services</h2>
          <p className="text-slate-700">
            Hemodialysis, peritoneal dialysis, NephroPlus centers, and government programs.
          </p>
        </section>

        {/* Dental */}
        <section id="dental-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Dental Services</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>General dentistry</li>
            <li>Implants</li>
            <li>Orthodontics</li>
            <li>Cosmetic dentistry</li>
            <li>Hospital dental departments</li>
          </ul>
        </section>

        {/* Optical */}
        <section id="optical-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Optical & Vision Care</h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Eye testing</li>
            <li>Spectacles & lenses</li>
            <li>Lenskart, Titan Eye Plus</li>
          </ul>
        </section>

        {/* Medical Equipment */}
        <section id="medical-equipment" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Medical Equipment & Supplies</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Diagnostic devices</li>
            <li>Home medical equipment</li>
            <li>Surgical consumables</li>
          </ul>
        </section>

        {/* Insurance */}
        <section id="health-insurance" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Health Insurance & TPAs</h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Medi Assist</li>
            <li>Vidal Health</li>
            <li>MD India</li>
            <li>Claim processing & cashless authorization</li>
          </ul>
        </section>

        {/* Health Checkups */}
        <section id="health-checkup-packages" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Preventive Health Checkups</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Basic & Master checkups</li>
            <li>Executive packages</li>
            <li>Women’s & Men’s health</li>
            <li>Corporate health programs</li>
          </ul>
        </section>

        {/* Medical Tourism */}
        <section id="medical-tourism-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Medical Tourism Facilitation
          </h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Hospital coordination</li>
            <li>Visa support</li>
            <li>Accommodation & translation</li>
          </ul>
        </section>

        {/* Nutrition */}
        <section id="nutrition-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Nutrition & Dietetics Services
          </h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Diet plans</li>
            <li>Therapeutic diets</li>
            <li>Sports nutrition</li>
            <li>Child & pregnancy nutrition</li>
          </ul>
        </section>

        {/* Wellness */}
        <section id="wellness-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Wellness & Preventive Health
          </h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Lifestyle counseling</li>
            <li>Meditation & stress management</li>
            <li>Fitness & rehab programs</li>
          </ul>
        </section>

        {/* Digital Health */}
        <section id="digital-health" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Digital Health Services</h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Telemedicine platforms</li>
            <li>AI diagnostics</li>
            <li>Remote monitoring</li>
            <li>Health apps</li>
          </ul>
        </section>

        {/* Choosing Services */}
        <section id="choosing-services" className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Choosing Medical Services
          </h2>
          <ul className="list-disc pl-5 text-slate-700">
            <li>NABL / ISO accreditation</li>
            <li>Technology quality</li>
            <li>Convenience & TAT</li>
            <li>Cost & Insurance</li>
            <li>Customer support</li>
            <li>Reputation & reviews</li>
          </ul>
        </section>

      </main>
    </>
  );
}
