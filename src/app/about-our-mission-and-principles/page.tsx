import Image from "next/image";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import { LOGO_WHITE, NAVY, CREAM, MUTED } from "@/lib/brand";

const principles = [
  {
    number: "01",
    title: "Courageous visions and strategies",
    description:
      "We champion innovation, differentiation, and outsized impact. The institutions that endure are those bold enough to pursue a vision others haven't yet imagined.",
  },
  {
    number: "02",
    title: "Bottom-up approaches",
    description:
      "We develop authentic, engaged communities of learners, educators, and supporters. Lasting institutions are built from within — not imposed from above.",
  },
  {
    number: "03",
    title: "Intellectual pluralism and freedom of inquiry",
    description:
      "We hold intellectual pluralism and freedom of inquiry as core pillars of learning and discovery. A flourishing society depends on the uninhibited pursuit of truth.",
  },
  {
    number: "04",
    title: "Radical transparency, accountability, and independence",
    description:
      "We operate with radical transparency, accountability, and independence to ensure institutional integrity. Trust is earned through honest counsel and consistent action.",
  },
  {
    number: "05",
    title: "Institutional heterogeneity",
    description:
      "We believe in institutional heterogeneity — systems designed to serve the unique needs of diverse audiences. One size does not fit all, and excellence demands distinction.",
  },
];

export default function MissionPage() {
  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow="The Athos Group"
        title={`Our Mission\n& Principles`}
      />

      {/* ── MISSION STATEMENT ─────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 px-6 lg:px-16"
        style={{ background: CREAM }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-10 h-px" style={{ background: NAVY }} />
              <span
                className="text-xs font-medium tracking-[0.3em] uppercase"
                style={{ color: NAVY, opacity: 0.5 }}
              >
                Our Mission
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", color: NAVY }}
            >
              Building what matters,
              <br />
              <span className="italic">for the long run.</span>
            </h2>
          </div>
          <div>
            <p
              className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-medium leading-relaxed italic"
              style={{ color: NAVY }}
            >
              &ldquo;Our world-renowned team of founders, builders, and
              innovators empower bold new educational endeavors and strengthen
              the distinctive, mission-driven institutions that are vital to
              our future.&rdquo;
            </p>
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(28,43,58,0.1)" }}>
              <p className="font-light leading-relaxed text-lg" style={{ color: MUTED }}>
                The Athos Group exists to serve those who believe that ideas have
                consequences — and that the right institutions, built well, can
                change the course of history. We bring strategy, relationships,
                and execution to organizations that are building something that
                will last.
              </p>
            </div>
          </div>
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
              Our Principles
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-20 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            What we stand for.
          </h2>

          <div className="space-y-px" style={{ background: "rgba(28,43,58,0.06)" }}>
            {principles.map((p) => (
              <div
                key={p.number}
                className="principle-row grid lg:grid-cols-[120px_1fr_2fr] gap-8 lg:gap-16 p-8 lg:p-12 group"
              >
                <span
                  className="font-[family-name:var(--font-playfair)] text-5xl font-bold self-start"
                  style={{ color: NAVY, opacity: 0.12 }}
                >
                  {p.number}
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

      {/* ── FOOTER ────────────────────────────────────────────── */}
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
          <span className="text-xs tracking-wide" style={{ color: CREAM, opacity: 0.4 }}>
            &copy; {new Date().getFullYear()} The Athos Group, LLC. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
