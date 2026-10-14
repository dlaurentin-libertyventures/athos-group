import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import { getPage } from "@/lib/cms";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

export default function ContactPage() {
  const page = getPage("contact");

  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow={page.headerEyebrow}
        title={page.headerTitle}
        subtitle={page.headerSubtitle}
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
                {page.eyebrow}
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", color: NAVY }}
            >
              {page.contactTitle}
              {page.contactTitleItalic && (
                <>
                  <br />
                  <span className="italic">{page.contactTitleItalic}</span>
                </>
              )}
            </h2>
            <p className="font-light leading-relaxed text-lg mb-12" style={{ color: MUTED }}>
              {page.body}
            </p>

            <div
              className="pt-10"
              style={{ borderTop: "1px solid rgba(28,43,58,0.1)" }}
            >
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-3"
                style={{ color: NAVY, opacity: 0.45 }}
              >
                {page.emailLabel}
              </p>
              <a
                href={`mailto:${page.email}`}
                className="font-[family-name:var(--font-playfair)] text-xl font-medium hover:opacity-70 transition-opacity duration-300"
                style={{ color: NAVY }}
              >
                {page.email}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
