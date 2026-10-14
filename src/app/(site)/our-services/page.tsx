import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";
import { getCollection, getPage } from "@/lib/cms";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

export default function OurServicesPage() {
  const page = getPage("services-page");
  const packages = getCollection("services");

  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow={page.headerEyebrow}
        title={page.headerTitle}
        subtitle={page.headerSubtitle}
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
              {page.packagesEyebrow}
            </span>
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] font-bold mb-16 leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: NAVY }}
          >
            {page.packagesHeading}
          </h2>

          <div className="space-y-px" style={{ background: "rgba(28,43,58,0.06)" }}>
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
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

      <SiteFooter />
    </main>
  );
}
