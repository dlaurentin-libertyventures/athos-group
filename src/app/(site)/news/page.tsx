import type { Metadata } from "next";
import Nav from "@/components/Nav";
import NewsSection from "@/components/NewsSection";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";
import { getPage } from "@/lib/cms";
import { CREAM } from "@/lib/brand";

export function generateMetadata(): Metadata {
  const page = getPage("news-page");
  return { title: page.seoTitle, description: page.seoDescription };
}

export default function NewsPage() {
  const page = getPage("news-page");

  return (
    <main style={{ background: CREAM }}>
      <Nav />
      <PageHeader
        eyebrow={page.headerEyebrow}
        title={page.headerTitle}
        subtitle={page.headerSubtitle}
      />
      <NewsSection eyebrow={page.sectionEyebrow} />
      <SiteFooter />
    </main>
  );
}
