// app/index.html/page.jsx
export const metadata = {
  title: "India Medical Directory - Hospitals, Doctors & Healthcare Providers",
  description:
    "Comprehensive directory of hospitals, doctors, and medical service providers in India. Find healthcare facilities, specialists, clinics, diagnostic centers, and medical professionals across all cities and states.",
  keywords:
    "hospitals in India, doctors directory, medical services, healthcare providers, clinics India, diagnostic centers, specialists, medical facilities, healthcare directory",
  alternates: { canonical: "https://yourwebsite.com/index.html" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "India Medical Directory",
  "url": "https://yourwebsite.com/index.html",
  "description":
    "Comprehensive directory of hospitals, doctors and medical service providers in India.",
  "publisher": {
    "@type": "Organization",
    "name": "India Medical Directory",
    "url": "https://yourwebsite.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourwebsite.com/logo.png"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en","hi"]
      }
    ]
  }
};

export default function IndexHTMLPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Topbar */}
      <div className="w-full bg-linear-to-r from-teal-600 to-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div>📞 Emergency: <strong>112</strong> &nbsp; | &nbsp; Contact: info@indiamedicaldirectory.com</div>
          <div className="hidden sm:block">Open access to hospitals, doctors & diagnostic centers across India</div>
        </div>
      </div>

      {/* HERO */}
      <header className="bg-linear-to-br from-teal-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                India Medical Directory
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-2xl">
                Your trusted source for finding hospitals, doctors and health services across India — search by city,
                specialty, facility type or doctor name. Verified listings and detailed facility information to help you make informed healthcare choices.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#how-to-use"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-teal-600 text-white font-semibold shadow hover:bg-teal-700 transition"
                >
                  How to use
                </a>
                <a
                  href="#diagnostic-services"
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                >
                  Diagnostic Services
                </a>
              </div>
            </div>

            <div>
              {/* Feature panel */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-semibold text-slate-800">Find care fast</h3>
                <p className="text-slate-600 mt-2">Search hospitals, specialists and diagnostic centers by city and service.</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-teal-50">
                    <div className="text-sm text-slate-700 font-medium">Hospitals</div>
                    <div className="text-xs text-slate-500 mt-1">Tertiary, multi-specialty & government</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50">
                    <div className="text-sm text-slate-700 font-medium">Doctors</div>
                    <div className="text-xs text-slate-500 mt-1">Specialists across major cities</div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50">
                    <div className="text-sm text-slate-700 font-medium">Diagnostics</div>
                    <div className="text-xs text-slate-500 mt-1">Labs, imaging & NABL-accredited centers</div>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-50">
                    <div className="text-sm text-slate-700 font-medium">Telemedicine</div>
                    <div className="text-xs text-slate-500 mt-1">Online consults & e-prescriptions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Why choose us */}
        <section id="why-choose-us" className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Why Use India Medical Directory</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Verify facility information, compare services, and find verified contacts for hospitals,
              diagnostic labs and specialist doctors across metropolitan and smaller cities in India.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded">✓</span>
                <div>
                  <div className="font-medium text-slate-800">Comprehensive Coverage</div>
                  <div className="text-sm text-slate-600">All facility types across India</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓</span>
                <div>
                  <div className="font-medium text-slate-800">Verified Information</div>
                  <div className="text-sm text-slate-600">Accurate contacts, hours & services</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded">✓</span>
                <div>
                  <div className="font-medium text-slate-800">Easy Navigation</div>
                  <div className="text-sm text-slate-600">Search by city, specialty or facility</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded">✓</span>
                <div>
                  <div className="font-medium text-slate-800">Digital Services</div>
                  <div className="text-sm text-slate-600">Telemedicine & e-reports</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            {/* Quick stats / highlights */}
            <div className="bg-white border rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-slate-800">Quick facts</h4>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-600">200+</div>
                  <div className="text-sm text-slate-600">Cities covered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">10k+</div>
                  <div className="text-sm text-slate-600">Facilities listed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">500k+</div>
                  <div className="text-sm text-slate-600">Verified contacts</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <img
                src="/illustrations/hospital-illustration.svg"
                alt="Hospitals & services"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Services overview */}
        <section id="medical-services" className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Medical Services Overview</h2>
          <p className="text-slate-700 leading-relaxed">
            From primary care to super-specialty services, our directory covers the full spectrum of medical services including diagnostics,
            emergency care, elective procedures, rehabilitative services, and telehealth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="font-semibold text-slate-800">Diagnostics & Labs</h3>
              <p className="text-sm text-slate-600 mt-2">Pathology, imaging, NABL labs & home collection.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="font-semibold text-slate-800">Cardiac & Critical Care</h3>
              <p className="text-sm text-slate-600 mt-2">ICU, CCU, cath labs & tertiary cardiac centers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="font-semibold text-slate-800">Outpatient & Telemedicine</h3>
              <p className="text-sm text-slate-600 mt-2">Online consultations, e-prescriptions & follow-ups.</p>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section id="how-to-use" className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">How to Use This Directory</h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2">
            <li>Browse by category or search by city and specialty.</li>
            <li>Filter results by accreditation (NABL, NABH), service, and location.</li>
            <li>Check facility pages for contact numbers, visiting hours and patient reviews.</li>
            <li>Use our telemedicine links to schedule online consultations where available.</li>
          </ol>
        </section>

        {/* Emergency + Contact CTA */}
        <section className="bg-linear-to-r from-teal-600 to-blue-600 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Need urgent care?</h3>
              <p className="mt-2 text-slate-100">Call emergency services: <strong>112</strong> or find the nearest emergency department now.</p>
            </div>

            <div className="flex gap-3">
              <a href="tel:112" className="inline-block bg-white text-teal-700 px-5 py-3 rounded-lg font-semibold">Call 112</a>
              <a href="mailto:info@indiamedicaldirectory.com" className="inline-block border border-white px-5 py-3 rounded-lg text-white">Email us</a>
            </div>
          </div>
        </section>

        {/* Footer-ish small copy */}
        <section className="text-sm text-slate-500">
          <p>
            © 2024 India Medical Directory. Information provided for educational and informational purposes only. For medical advice, consult a qualified healthcare provider.
          </p>
        </section>
      </main>
    </>
  );
}
