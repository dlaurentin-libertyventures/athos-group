import Image from "next/image";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";
import { getCollection, getPage } from "@/lib/cms";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

function Initials({ name }: { name: string }) {
  const parts = name.split(" ").filter(Boolean);
  const initials =
    parts.length >= 2
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
  const page = getPage("people");
  const people = getCollection("team");
  const foundingPartners = people.filter((p) => p.group === "founding-partner");
  const team = people.filter((p) => p.group !== "founding-partner");

  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow={page.headerEyebrow}
        title={page.headerTitle}
        subtitle={page.headerSubtitle}
      />

      {/* ── FOUNDING PARTNERS ─────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: CREAM }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              {page.foundingPartnersLabel}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
            {foundingPartners.map((person) => (
              <div key={person.slug} className="group flex flex-col items-center text-center">
                <div
                  className="relative overflow-hidden mb-8 w-full max-w-[240px]"
                  style={{ aspectRatio: "3/4" }}
                >
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.title}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="240px"
                    />
                  ) : (
                    <Initials name={person.title} />
                  )}
                </div>
                <div
                  className="w-8 h-px mb-5 group-hover:w-14 transition-all duration-500"
                  style={{ background: NAVY }}
                />
                <h2
                  className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold"
                  style={{ color: NAVY }}
                >
                  {person.title}
                </h2>
                <p
                  className="text-xs font-medium tracking-widest uppercase mt-2 mb-5"
                  style={{ color: NAVY, opacity: 0.45 }}
                >
                  {person.role}
                </p>
                <p
                  className="font-light leading-relaxed text-base"
                  style={{ color: MUTED }}
                >
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
              {page.advisorsLabel}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {team.map((person) => (
              <div key={person.slug} className="group flex flex-col">
                <div
                  className="relative overflow-hidden mb-6"
                  style={{ aspectRatio: "1/1" }}
                >
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.title}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <Initials name={person.title} />
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
                  {person.title}
                </h3>
                <p
                  className="text-xs font-medium tracking-widest uppercase mt-1 mb-4"
                  style={{ color: NAVY, opacity: 0.45 }}
                >
                  {person.role}
                </p>
                <p
                  className="font-light leading-relaxed text-sm"
                  style={{ color: MUTED }}
                >
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
