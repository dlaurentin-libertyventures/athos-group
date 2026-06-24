import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import ClientsCarousel from "@/components/ClientsCarousel";
import { clients } from "@/lib/clients";
import { LOGO_BLACK, LOGO_WHITE, NAVY, CREAM } from "@/lib/brand";

const testimonials = [
  {
    quote:
      "One of the best in the business...Chad is probably the best development [professional] in our network, hands down.",
    author: "Siri Terjesen",
    title: "Florida Atlantic University",
  },
  {
    quote:
      "[M]y first pitch for the campaign came in today at the top ask level: $1M per year for three years, with the first payment immediate. He's also allowing us to use his name as we approach other lead donors. Chad, your advice and guidance as we built our proposal was instrumental to this. Pro level.",
    author: "John Tomasi",
    title: "Heterodox Academy",
  },
  {
    quote:
      "...You have built an entire fundraising operation from scratch and raised a huge sum of money that only a handful of hundred-year-old universities can muster. We would not be here without you.",
    author: "Bari Weiss",
    title: "CBS News",
  },
  {
    quote:
      "Athos brings a rare combination of strategic insight and fundraising expertise that has truly elevated our major gifts and development efforts. They've helped us clarify our value proposition, refine our messaging, and identify a broader network of funders and partners. Most importantly, they've met us where we are—offering tailored guidance that makes us stand out in a competitive philanthropic landscape.",
    author: "Dr. Eric Dunker",
    title: "Reach University",
  },
];

const team = [
  {
    name: "Chad Thevenot",
    title: "Founding Partner and Managing Director",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/67cdff53-374d-4b76-af02-8b66c134f3ca/64d3ee216e88d7304dfed8fa_Thevenot%2C+Chad.jpg",
    description:
      "Strategic education and nonprofit leader with 30+ years advancing mission-driven organizations.",
  },
  {
    name: "Pano Kanelos",
    title: "Founding Partner",
    photo:
      "https://images.squarespace-cdn.com/content/v1/682dc9464d4d034960d4d433/6adc68ef-2d5c-4edd-a42e-932e57d360ca/64d3ab91752dffd7a5b2537f_Kanelos%2C+Pano+1.jpg",
    description:
      "Nationally recognized academic leader advising on institutional growth and transformation.",
  },
];

export default function Home() {
  return (
    <main style={{ background: CREAM, color: NAVY }}>
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full py-24 lg:py-32">
          <div className="flex items-center gap-4 mb-10 opacity-0-start animate-fade-up">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Strategic Advisory &amp; Execution
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16 opacity-0-start animate-fade-up delay-100">
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold leading-[1.0] tracking-tight shrink-0"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", color: NAVY }}
            >
              From Idea
              <br />
              <span className="italic">to Impact.</span>
            </h1>

            <Image
              src={LOGO_BLACK}
              alt="The Athos Group"
              width={640}
              height={320}
              className="h-28 sm:h-32 lg:h-48 xl:h-56 w-auto shrink-0 self-start lg:self-end"
              priority
            />
          </div>

          <p
            className="mt-10 max-w-xl text-lg lg:text-xl font-light leading-relaxed opacity-0-start animate-fade-up delay-200"
            style={{ color: "#5A6A7A" }}
          >
            Building and renewing the institutions that sustain a free and
            flourishing society.
          </p>

          <div className="mt-14 opacity-0-start animate-fade-up delay-300">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-80"
              style={{ background: NAVY, color: CREAM }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: 0.3 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: NAVY }}>
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: `linear-gradient(to bottom, ${NAVY}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-28 lg:py-40 px-6 lg:px-12"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <div>
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Who We Are
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold mt-5 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", color: NAVY }}
            >
              Builders and Partners.
            </h2>
          </div>
          <div className="space-y-6 font-light leading-relaxed text-lg" style={{ color: "#5A6A7A" }}>
            <p>
              Traditional advisory firms deliver expensive reports and slow-moving
              strategies. At Athos, we do the opposite. Our Fractional Social
              Ventures model combines rapid strategic visioning with a
              high-performance executive strike team to help launch, renew, and
              scale bold ventures in record time. We help emerging institutions
              go from 0 to 1 and high-potential institutions go from 1 to 10.
            </p>
            <p>
              We work alongside founders, funders, and leaders to develop a
              clear, differentiated vision and strategic roadmap within weeks,
              then mobilize a lean, senior-level team to build organizational
              capacity, attract philanthropic capital, and secure the early wins
              that create momentum. Our team consists of the builders, operators,
              and entrepreneurs who have helped create and lead some of the
              country&apos;s most distinctive and impactful social ventures.
            </p>
            <p>
              We believe lasting impact comes from courageous vision,
              entrepreneurial execution, authentic community-building,
              intellectual pluralism, institutional independence, and a relentless
              focus on results.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section
        id="mission"
        className="py-28 lg:py-40 px-6 lg:px-12"
        style={{ background: CREAM, borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Partners &amp; Clients
            </span>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-16 leading-tight max-w-lg"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            Trusted by Institutions shaping the future.
          </h2>

          <ClientsCarousel clients={clients} />
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section
        className="py-28 lg:py-40 px-6 lg:px-12"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              What Clients Say
            </span>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-16 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            Proven results. Real partnerships.
          </h2>

          <div
            className="grid lg:grid-cols-2 gap-px"
            style={{ background: "rgba(28,43,58,0.08)" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card p-8 lg:p-12 flex flex-col justify-between gap-8"
              >
                <div>
                  <span
                    className="text-5xl font-[family-name:var(--font-playfair)] leading-none select-none"
                    style={{ color: NAVY, opacity: 0.2 }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-medium leading-snug mt-2 italic"
                    style={{ color: NAVY }}
                  >
                    {t.quote}
                  </p>
                </div>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(28,43,58,0.1)" }}
                >
                  <p className="font-medium text-sm tracking-wide" style={{ color: NAVY }}>
                    {t.author}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#5A6A7A" }}>
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section
        id="team"
        className="py-28 lg:py-40 px-6 lg:px-12"
        style={{ background: CREAM, borderTop: "1px solid rgba(28,43,58,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-px" style={{ background: NAVY }} />
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: NAVY, opacity: 0.5 }}
            >
              Our People
            </span>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-20 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            Founding Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {team.map((person) => (
              <div key={person.name} className="group">
                {/* Photo */}
                <div className="relative overflow-hidden mb-8" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "rgba(28,43,58,0.08)" }}
                  />
                </div>

                <div
                  className="w-8 h-px mb-5 group-hover:w-14 transition-all duration-500"
                  style={{ background: NAVY }}
                />
                <h3
                  className="font-[family-name:var(--font-playfair)] text-2xl font-bold"
                  style={{ color: NAVY }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-xs font-medium tracking-widest uppercase mt-1 mb-4"
                  style={{ color: NAVY, opacity: 0.5 }}
                >
                  {person.title}
                </p>
                <p className="font-light leading-relaxed" style={{ color: "#5A6A7A" }}>
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section
        id="contact"
        className="py-32 lg:py-48 px-6 lg:px-12 text-center"
        style={{ background: NAVY }}
      >
        <div className="max-w-3xl mx-auto">
          <Image
            src={LOGO_WHITE}
            alt="The Athos Group"
            width={280}
            height={96}
            className="h-20 sm:h-24 lg:h-28 w-auto mx-auto mb-12 opacity-90"
          />
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: CREAM, opacity: 0.5 }}
          >
            Get in Touch
          </span>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mt-6 mb-8 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: CREAM }}
          >
            Ready to build
            <br />
            <span className="italic">something lasting?</span>
          </h2>
          <p
            className="font-light text-lg mb-12 leading-relaxed"
            style={{ color: CREAM, opacity: 0.6 }}
          >
            We work with a select group of organizations committed to ideas that
            matter. If that sounds like you, we&apos;d like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-80"
            style={{ border: `1px solid ${CREAM}`, color: CREAM }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 lg:px-12"
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
