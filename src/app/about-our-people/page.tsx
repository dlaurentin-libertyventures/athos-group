import Image from "next/image";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

const foundingPartners = [
  {
    name: "Chad Thevenot",
    title: "Founder & Lead Consultant",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/67cdff53-374d-4b76-af02-8b66c134f3ca/64d3ee216e88d7304dfed8fa_Thevenot%2C+Chad.jpg",
    bio: "Strategic education and nonprofit leader with 20+ years advancing mission-driven organizations. Previously SVP for Advancement at University of Austin (UATX) and Executive Director at Institute for Humane Studies. Expertise in strategy, philanthropy, and public engagement.",
  },
  {
    name: "Dr. Pano Kanelos",
    title: "Founding Partner",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/bafdeb02-0cc7-4e09-ae63-1303287eea62/Pano+Headshot.jpg",
    bio: "Nationally recognized academic leader advising on institutional growth and transformation. Founded and led University of Austin; served as President of St. John's College. Recipient of the Courage in Education Award and Hero of Intellectual Freedom Award.",
  },
];

const team = [
  {
    name: "Asra Nadeem",
    title: "Advisor",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/5b93718b-69f3-4f8f-8f1f-bb6675cb788f/Asra-profilepicture+%281%29.jpg",
    bio: "CEO of DraperU and Partner at DraperU Ventures investing in frontier tech — AI, aerospace, defense. Led investments in 57+ companies including three unicorns. Collaborates with 60+ governments on innovation and job creation.",
  },
  {
    name: "Ryan Ruffaner",
    title: "Organizational Development Specialist",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/c0202264-8e70-4d56-b346-713a468acece/Headshot+2024+%281%29+%281%29.JPG",
    bio: "10+ years optimizing organizational performance through data-driven systems and evidence-based practices. Specializes in change management, professional development, and talent strategy. Published in Quillette and FAIR.",
  },
  {
    name: "Kéyah Doering",
    title: "Operations Consultant",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/6d1e1b3b-d2b0-4d37-8042-dcbb66f7b02e/1677778228414+%281%29.jpg",
    bio: "Development and operations professional supporting mission-driven organizations. King's College NYC graduate. Built UATX's development infrastructure as its first non-leadership hire.",
  },
  {
    name: "Will Harwood",
    title: "Strategic Advisor",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/14e318bf-6ef9-44b4-bd2f-5962969c78ea/CF7BED3C-DEE4-4213-B354-6E134E20B913.png",
    bio: "15+ years in international communications and public affairs. Former Head of Communications at Lidl US, generating $500M+ in earned media. Expertise in media relations, crisis communications, and strategic storytelling.",
  },
  {
    name: "June Arunga",
    title: "Strategic Advisor",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/1fc11af0-4da2-47e1-879b-43fb8518869c/headshot.JPEG",
    bio: "Legal strategist and systems builder across infrastructure, technology, media, and civic sectors. Advises on landscape analysis, roadmap development, stakeholder coordination, and implementation in complex institutional contexts.",
  },
  {
    name: "Gerry O'Sullivan",
    title: "Senior Advisor, Accreditation & Compliance",
    photo: null,
    bio: "30+ years in independent higher education across faculty, provost, and consultant roles. Extensive accreditation experience including authoring reports and serving agencies. Led start-ups, mergers, and program development with deep budgeting and compliance expertise.",
  },
  {
    name: "Mary Miller",
    title: "Strategic Advisor",
    photo: null,
    bio: "Principal of Consortio Advising providing philanthropy and nonprofit consulting. Raised millions for national organizations and launched donor-led philanthropic initiatives. Expertise spans public policy, criminal justice reform, and K-12 and higher education.",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ").filter(Boolean);
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0];
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `${NAVY}18` }}
    >
      <span
        className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
        style={{ color: NAVY, opacity: 0.3 }}
      >
        {initials.toUpperCase()}
      </span>
    </div>
  );
}

export default function OurPeoplePage() {
  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow="The Athos Group"
        title="Our People"
        subtitle="A team of strategists, scholars, and institution-builders united by a commitment to ideas that matter."
      />

      {/* ── FOUNDING PARTNERS ─────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: CREAM }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Founding Partners
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {foundingPartners.map((person) => (
              <div key={person.name} className="group">
                <div
                  className="relative overflow-hidden mb-8"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="w-8 h-px mb-5 group-hover:w-14 transition-all duration-500"
                  style={{ background: NAVY }}
                />
                <h2
                  className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold"
                  style={{ color: NAVY }}
                >
                  {person.name}
                </h2>
                <p
                  className="text-xs font-medium tracking-widest uppercase mt-2 mb-5"
                  style={{ color: NAVY, opacity: 0.45 }}
                >
                  {person.title}
                </p>
                <p className="font-light leading-relaxed text-base" style={{ color: MUTED }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: "#fff", borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Advisors &amp; Specialists
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {team.map((person) => (
              <div key={person.name} className="group flex flex-col">
                <div
                  className="relative overflow-hidden mb-6"
                  style={{ aspectRatio: "1/1" }}
                >
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <Initials name={person.name} />
                  )}
                </div>
                <div
                  className="w-6 h-px mb-4 group-hover:w-10 transition-all duration-500"
                  style={{ background: NAVY }}
                />
                <h3
                  className="font-[family-name:var(--font-playfair)] text-lg font-bold"
                  style={{ color: NAVY }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-xs font-medium tracking-widest uppercase mt-1 mb-4"
                  style={{ color: NAVY, opacity: 0.45 }}
                >
                  {person.title}
                </p>
                <p className="font-light leading-relaxed text-sm" style={{ color: MUTED }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 lg:px-16"
        style={{ background: NAVY, borderTop: "1px solid rgba(248,245,238,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-widest uppercase"
            style={{ color: CREAM }}
          >
            The Athos Group
          </span>
          <span className="text-xs tracking-wide" style={{ color: CREAM, opacity: 0.4 }}>
            &copy; {new Date().getFullYear()} The Athos Group, LLC. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
