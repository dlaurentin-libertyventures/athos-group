import Image from "next/image";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import { LOGO_WHITE, NAVY, CREAM, MUTED } from "@/lib/brand";

const packages = [
  {
    title: "Strategic Review & Roadmap Sprint",
    duration: "6 Weeks",
    description:
      "Founder, staff, and stakeholder interviews; review of key materials; assessment of opportunities and constraints; and a detailed roadmap for launching, renewing, or scaling the organization. Includes leadership review and implementation recommendations. Led by an Athos partner.",
  },
  {
    title: "Fundraising Acceleration Retainer",
    duration: "6-Month Minimum",
    description:
      "Donor narrative, prospecting strategy, identification of 150+ prospects, weekly strategy meetings, and execution of 12+ donor meetings within the first six months. Includes a part-time senior gift officer or VP of Development embedded within the organization, with direction and oversight from an Athos partner.",
  },
  {
    title: "New or Renewed Institution / Campaign Build",
    duration: "9-Month Minimum",
    description:
      "Market analysis, institutional design, staffing plan, regulatory pathway, budget, brand development, and launch strategy. Includes strategic advisory support plus two active execution workstreams (e.g., fundraising and program development).",
  },
  {
    title: "Advisory Retainer",
    duration: "Custom Engagement",
    description:
      "Tailored support for founders, philanthropists, and leaders seeking to launch, strengthen, or scale ambitious ventures. Engagements are customized to meet the unique needs, opportunities, and stage of development of each project.",
  },
];

export default function OurServicesPage() {
  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow="The Athos Group"
        title="Our Services"
        subtitle="Engagement packages designed to move bold ventures from vision to execution."
      />

      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: CREAM }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Engagement Packages
            </span>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-16 leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            From strategic sprint to full-scale build.
          </h2>

          <div className="space-y-px" style={{ background: "rgba(28,43,58,0.06)" }}>
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16 p-8 lg:p-12"
                style={{ background: "#fff" }}
              >
                <div>
                  <h3
                    className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-bold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className="text-xs font-medium tracking-widest uppercase mt-3"
                    style={{ color: NAVY, opacity: 0.45 }}
                  >
                    {pkg.duration}
                  </p>
                </div>
                <p
                  className="font-light leading-relaxed text-base lg:text-lg self-start"
                  style={{ color: MUTED }}
                >
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-10 px-6 lg:px-16"
        style={{ background: NAVY, borderTop: "1px solid rgba(248,245,238,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src={LOGO_WHITE}
            alt="The Athos Group"
            width={120}
            height={42}
            className="h-7 w-auto opacity-80"
          />
          <span
            className="text-xs tracking-wide"
            style={{ color: CREAM, opacity: 0.4 }}
          >
            &copy; {new Date().getFullYear()} The Athos Group, LLC. All rights
            reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
