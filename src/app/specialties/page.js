// app/specialties/page.jsx
import Script from "next/script";
import { MdLocalHospital, MdFavorite, MdScience, MdPregnantWoman, MdPsychology, MdChildCare, } from "react-icons/md";

export const metadata = {
  title: "Medical Specialties in India — Complete Guide",
  description:
    "Comprehensive guide to medical specialties in India — cardiology, neurology, oncology, orthopedics, pediatrics, gynecology, diagnostics and more.",
  keywords:
    "medical specialties India, cardiology, neurology, oncology, orthopedics, pediatrics, gynecology, diagnostics",
  alternates: { canonical: "https://yourwebsite.com/specialties" },
  openGraph: {
    title: "Medical Specialties in India — Complete Guide",
    description:
      "Explore cardiology, neurology, oncology, orthopedics, pediatrics, gynecology and other medical & surgical specialties across India.",
    url: "https://yourwebsite.com/specialties",
    type: "website",
  },
};

const PALETS = {
  bg1: "bg-[rgb(232,243,255)]", // light blue
  bg2: "bg-[rgb(224,247,247)]", // soft teal
  bg3: "bg-[rgb(242,232,255)]", // soft lavender
  bg4: "bg-[rgb(233,255,244)]", // light mint
  bg5: "bg-[rgb(255,243,234)]", // light peach
  accent: "text-sky-800",
};

export default function SpecialtiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Medical Specialties in India - Complete Guide",
    url: "https://yourwebsite.com/specialties",
    description:
      "Comprehensive guide to medical specialties in India — cardiology, neurology, oncology, orthopedics, pediatrics, gynecology, diagnostics and more.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        "Primary Care & General Medicine",
        "Cardiology",
        "Cardiothoracic Surgery",
        "Neurology & Neurosurgery",
        "Oncology",
        "Orthopedics",
        "Pediatrics",
        "Obstetrics & Gynecology",
        "Gastroenterology",
        "Nephrology",
        "Urology",
        "Pulmonology",
        "Endocrinology",
        "Dermatology",
        "Ophthalmology",
        "ENT",
        "Psychiatry",
        "Emergency Medicine",
        "Anesthesiology",
        "Radiology",
        "Pathology"
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "India Medical Directory",
      url: "https://yourwebsite.com",
    },
  };

  return (
    <>
      <Script
        id="specialties-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl p-10 md:p-16 shadow-lg" style={{ background: "linear-gradient(135deg,#E8F3FF 0%, #E9FFF4 100%)" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                  Medical Specialties in India
                </h1>
                <p className="mt-4 text-lg text-slate-700 max-w-3xl">
                  A complete, structured guide to medical and surgical specialties — cardiology, neurology, oncology, orthopedics, pediatrics,
                  gynecology, diagnostics and more. Use the sections below to jump directly to the specialty you need.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#overview" className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white shadow-sm">Overview</a>
                  <a href="#cardiology" className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white shadow-sm">Cardiology</a>
                  <a href="#neurology" className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white shadow-sm">Neurology</a>
                  <a href="#oncology" className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white shadow-sm">Oncology</a>
                </div>
              </div>

              <div className="hidden md:block w-56 h-56 rounded-xl bg-white/60 items-center justify-center border border-white shadow-inner">
                <MdLocalHospital className="text-6xl text-sky-700 opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-10">

        {/* OVERVIEW (soft lavender) */}
        <ColorBlock id="overview" title="Understanding Medical Specialties" bg={PALETS.bg3} icon={<MdScience className="w-8 h-8" />}>
          <p className="text-slate-700">
            Medical specialization allows doctors to develop expertise in specific clinical areas, providing highly skilled patient care.
            In India the pathway is MBBS → MD/MS → DM/MCh for super-specialisation. This guide covers scope, common conditions, diagnostics and treatment for every major specialty.
          </p>
        </ColorBlock>

        {/* PRIMARY CARE (light mint) */}
        <ColorBlock id="primary-care" title="Primary Care & General Medicine" bg={PALETS.bg4} icon={<MdLocalHospital className="w-8 h-8" />}>
          <SubSection title="General Medicine (Internal Medicine)">
            <p className="text-slate-700">
              General Medicine is the backbone of adult healthcare — prevention, diagnosis and management of internal organ diseases. Internists coordinate care across specialties.
            </p>

            <List title="Scope of Practice" items={[
              "Comprehensive health assessment & preventive care",
              "Chronic disease management (diabetes, hypertension, thyroid)",
              "Acute illness treatment and infections",
              "Pre-operative medical evaluation",
              "Geriatric medicine and coordination with specialists"
            ]} />

            <List title="Common Conditions Treated" items={[
              "Diabetes, hypertension, respiratory infections",
              "Gastrointestinal disorders, kidney diseases",
              "Infectious diseases (TB, dengue, malaria), anemia"
            ]} />
          </SubSection>

          <SubSection title="Family Medicine">
            <p className="text-slate-700">
              Family physicians provide all-age, comprehensive care and are the first point of contact for most patients. They emphasise preventive care, chronic disease management and continuity.
            </p>
          </SubSection>
        </ColorBlock>

        {/* CARDIOLOGY (soft blue) */}
        <ColorBlock id="cardiology" title="Cardiology & Cardiovascular Sciences" bg={PALETS.bg1} icon={<MdFavorite className="w-8 h-8" />}>
          <SubSection title="Cardiology">
            <p className="text-slate-700">
              Cardiology deals with heart and vascular diseases — diagnosis with ECG, echo and imaging; management with medication and interventions.
            </p>

            <List title="Subspecialties" items={[
              "Interventional Cardiology (angioplasty, stents)",
              "Clinical Cardiology (medical management)",
              "Electrophysiology (arrhythmia management)",
              "Preventive Cardiology (risk modification)",
              "Heart failure & transplant cardiology"
            ]} />

            <List title="Common Conditions" items={[
              "Coronary artery disease, myocardial infarction",
              "Heart failure, arrhythmias, valvular disease",
              "Congenital heart disease in adults, peripheral vascular disease"
            ]} />
          </SubSection>

          <SubSection title="Cardiothoracic Surgery">
            <p className="text-slate-700">
              Surgeons perform CABG, valve repair/replacement, congenital heart surgery and thoracic procedures. Many centers now offer minimally invasive and robotic approaches.
            </p>
          </SubSection>
        </ColorBlock>

        {/* NEUROLOGY (soft peach) */}
        <ColorBlock id="neurology" title="Neurology & Neurosurgery" bg={PALETS.bg5} icon={<MdPsychology className="w-8 h-8" />}>
          <SubSection title="Neurology">
            <p className="text-slate-700">
              Neurology focuses on brain, spinal cord and peripheral nerve disorders — strokes, seizures, movement disorders and cognitive disease.
            </p>

            <List title="Subspecialties" items={[
              "Stroke neurology (acute treatment & rehab)",
              "Epilepsy & neurophysiology",
              "Movement disorders (Parkinson's)",
              "Neuromuscular medicine, dementia care",
              "Neuro-oncology (medical management)"
            ]} />
          </SubSection>

          <SubSection title="Neurosurgery">
            <p className="text-slate-700">
              Neurosurgeons perform tumor resections, aneurysm surgery, spine surgery and functional procedures (eg. DBS) — often using navigation, microscopy and minimally invasive techniques.
            </p>
            <List title="Common Procedures" items={[
              "Brain tumor resection, aneurysm clipping/coiling",
              "Spinal fusion, decompression, shunt placement",
              "Trauma surgery, pediatric neurosurgery"
            ]} />
          </SubSection>
        </ColorBlock>

        {/* ONCOLOGY (soft teal) */}
        <ColorBlock id="oncology" title="Oncology & Cancer Care" bg={PALETS.bg2} icon={<MdScience className="w-8 h-8" />}>
          <SubSection title="Medical Oncology">
            <p className="text-slate-700">
              Medical oncology uses chemotherapy, targeted therapy and immunotherapy. Care is multidisciplinary — medical, surgical, radiation oncology & palliative care combine for best outcomes.
            </p>

            <List title="Treatment Modalities" items={[
              "Chemotherapy, targeted therapy, immunotherapy",
              "Hormonal therapy where applicable",
              "Supportive & palliative care, clinical trials"
            ]} />
          </SubSection>

          <SubSection title="Radiation & Surgical Oncology">
            <p className="text-slate-700">
              Radiation oncology delivers precise radiotherapy (IMRT/IGRT/SRS). Surgical oncologists perform organ-specific cancer surgery with reconstructive techniques when needed.
            </p>
          </SubSection>
        </ColorBlock>

        {/* ORTHOPEDICS (lavender) */}
        <ColorBlock id="orthopedics" title="Orthopedics & Musculoskeletal" bg={PALETS.bg3} icon={<MdLocalHospital className="w-8 h-8" />}>
          <SubSection title="Orthopedic Surgery">
            <p className="text-slate-700">
              Orthopedics manages bones, joints, spine and soft tissue conditions. Services range from trauma and fracture care to joint replacement and sports medicine.
            </p>

            <List title="Subspecialties & Services" items={[
              "Joint replacement (hip/knee/shoulder)",
              "Spine surgery, arthroscopy & sports medicine",
              "Pediatric orthopedics, trauma & limb reconstruction"
            ]} />
          </SubSection>
        </ColorBlock>

        {/* PEDIATRICS (mint) */}
        <ColorBlock id="pediatrics" title="Pediatrics & Child Health" bg={PALETS.bg4} icon={<MdChildCare className="w-8 h-8" />}>
          <SubSection title="General Pediatrics & Neonatology">
            <p className="text-slate-700">
              Pediatricians care for infants, children and adolescents — growth monitoring, immunization, acute & chronic disease management and neonatal intensive care as needed.
            </p>
            <List title="Pediatric Subspecialties" items={[
              "Neonatology, pediatric cardiology, pediatric neurology",
              "Pediatric surgery, pediatric oncology, pediatric nephrology"
            ]} />
          </SubSection>
        </ColorBlock>

        {/* OB/GYN (peach) */}
        <ColorBlock id="obstetrics-gynecology" title="Obstetrics & Gynecology" bg={PALETS.bg5} icon={<MdPregnantWoman className="w-8 h-8" />}>
          <SubSection title="Obstetrics">
            <p className="text-slate-700">
              Obstetrics focuses on pregnancy and childbirth — prenatal care, high-risk pregnancy management, delivery and postpartum care.
            </p>
          </SubSection>

          <SubSection title="Gynecology & Subspecialties">
            <List title="Services" items={[
              "Menstrual disorders, fibroids, PCOS, menopause care",
              "Reproductive endocrinology & infertility (IVF)",
              "Gynaecologic oncology, urogynecology & minimally invasive surgery"
            ]} />
          </SubSection>
        </ColorBlock>

        {/* OTHER SPECIALTIES (blue) */}
        <ColorBlock id="other-specialties" title="Other Major Specialties" bg={PALETS.bg1} icon={<MdLocalHospital className="w-8 h-8" />}>
          <SubSection title="Gastroenterology & Hepatology">
            <p className="text-slate-700">
              Endoscopy, ERCP, colonoscopy, liver disease management and therapeutic endoscopy are core services.
            </p>
          </SubSection>

          <SubSection title="Nephrology, Urology, Pulmonology, Endocrinology, Dermatology, Ophthalmology, ENT, Psychiatry">
            <p className="text-slate-700">
              Each specialty has dedicated diagnostics, inpatient & outpatient services, and surgical/interventional capabilities — from dialysis and transplant medicine to retinal surgery and ENT micro-surgery.
            </p>
          </SubSection>
        </ColorBlock>

        {/* DIAGNOSTIC & PATHOLOGY (teal) */}
        <ColorBlock id="diagnostic-specialties" title="Diagnostic & Laboratory Specialties" bg={PALETS.bg2} icon={<MdScience className="w-8 h-8" />}>
          <SubSection title="Radiology">
            <List title="Imaging Services" items={[
              "X-ray, ultrasound, CT, MRI, PET-CT, mammography, DEXA",
              "Interventional radiology for minimally invasive procedures"
            ]} />
          </SubSection>

          <SubSection title="Pathology & Lab Services">
            <p className="text-slate-700">
              NABL-accredited labs provide clinical pathology, microbiology, molecular diagnostics (PCR, genetic testing) and rapid reporting for hospitals & outpatients.
            </p>
          </SubSection>
        </ColorBlock>

      </main>
    </>
  );
}

/* -------------------------
   UI: ColorBlock + helpers
   (small, self-contained)
   -------------------------*/

function ColorBlock({ id, title, children, bg, icon }) {
  return (
    <section id={id} className={`${bg} rounded-2xl p-6 md:p-10 shadow-sm border border-white/60`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="flex-none">
            <div className="w-14 h-14 rounded-lg bg-white/90 flex items-center justify-center border border-white shadow">
              {icon}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-800">{title}</h2>
            <div className="mt-4 space-y-4 prose max-w-none text-slate-800">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-medium text-slate-900">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function List({ title, items }) {
  return (
    <div className="mt-3">
      {title && <h4 className="font-semibold text-slate-900">{title}</h4>}
      <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
