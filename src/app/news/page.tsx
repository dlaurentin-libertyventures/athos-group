import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import NewsSection from "@/components/NewsSection";
import PageHeader from "@/components/PageHeader";
import { LOGO_WHITE, CREAM, NAVY } from "@/lib/brand";

export const metadata: Metadata = {
  title: "News & Announcements | The Athos Group",
  description:
    "Updates on The Athos Group and partner initiatives for founders, funders, and institutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewsPage() {
  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow="The Athos Group"
        title="News & Announcements"
        subtitle="Updates on our work with founders, funders, and institutions building for a free and flourishing society."
      />
      <NewsSection />
      <footer
        className="px-6 py-10 lg:px-16"
        style={{ background: NAVY, borderTop: "1px solid rgba(248,245,238,0.1)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
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
