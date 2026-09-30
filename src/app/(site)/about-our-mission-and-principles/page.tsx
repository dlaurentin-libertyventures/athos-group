import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";
import { getCollection, getPage, paragraphs } from "@/lib/cms";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

export default function MissionPage() {
  const page = getPage("mission");
  const principles = getCollection("principles");

  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow={page.headerEyebrow}
        title={page.headerTitle}
        subtitle={page.headerSubtitle}
      />

      {/* ── MISSION STATEMENT ─────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 px-6 lg:px-16"
        style={{ background: CREAM }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              {page.missionEyebrow}
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold leading-tight mb-10"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", color: NAVY }}
          >
            {page.missionTitle}
            {page.missionTitleItalic && (
              <>
                <br />
                <span className="italic">{page.missionTitleItalic}</span>
              </>
            )}
          </h2>
          {paragraphs(page.missionBody).map((text, i) => (
            <p
              key={i}
              className="font-light leading-relaxed text-xl lg:text-2xl"
              style={{ color: MUTED }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: "#fff", borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              {page.principlesEyebrow}
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-20 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            {page.principlesHeading}
          </h2>

          <div className="space-y-px" style={{ background: "rgba(28,43,58,0.06)" }}>
            {principles.map((p, i) => (
              <div
                key={p.slug}
                className="principle-row grid lg:grid-cols-[120px_1fr_2fr] gap-8 lg:gap-16 p-8 lg:p-12 group"
              >
                <span
                  className="font-[family-name:var(--font-playfair)] text-5xl font-bold self-start"
                  style={{ color: NAVY, opacity: 0.12 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-bold leading-snug self-start"
                  style={{ color: NAVY }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-light leading-relaxed text-base self-start"
                  style={{ color: MUTED }}
                >
                  {p.description}
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
