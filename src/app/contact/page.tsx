import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

export default function ContactPage() {
  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow="The Athos Group"
        title="Get in Touch"
        subtitle="We work with a select group of organizations committed to ideas that matter."
      />

      <section className="py-24 lg:py-36 px-6 lg:px-16" style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-10 h-px" style={{ background: NAVY }} />
              <span
                className="text-xs font-medium tracking-[0.3em] uppercase"
                style={{ color: NAVY, opacity: 0.5 }}
              >
                Contact
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", color: NAVY }}
            >
              Let&apos;s build
              <br />
              <span className="italic">something lasting.</span>
            </h2>
            <p className="font-light leading-relaxed text-lg mb-12" style={{ color: MUTED }}>
              If you&apos;re a courageous leader, visionary founder, or leading
              philanthropist looking to build the future — reach out. We&apos;d
              like to hear from you.
            </p>

            <div
              className="pt-10"
              style={{ borderTop: "1px solid rgba(28,43,58,0.1)" }}
            >
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-3"
                style={{ color: NAVY, opacity: 0.45 }}
              >
                Email
              </p>
              <a
                href="mailto:chad@athosed.com"
                className="font-[family-name:var(--font-playfair)] text-xl font-medium hover:opacity-70 transition-opacity duration-300"
                style={{ color: NAVY }}
              >
                chad@athosed.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
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
