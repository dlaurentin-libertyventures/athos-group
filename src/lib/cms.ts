import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Typed readers for the Outstatic-managed content in `outstatic/content`.
 * Content is read at build time; every save in the /outstatic dashboard is a
 * commit that triggers a new deploy.
 */

const CONTENT_DIR = path.join(process.cwd(), "outstatic/content");

type Doc = { slug: string; title: string; order?: number };

export type NewsItem = Doc & {
  summary: string;
  image: string;
  imageAlt: string;
  announcementUrl: string;
  announcementLabel?: string;
};
export type Client = Doc & { logo: string; url?: string };
export type TeamMember = Doc & {
  role: string;
  group: "founding-partner" | "advisor";
  photo?: string;
  bio: string;
  homeSummary?: string;
};
export type Testimonial = Doc & { quote: string; affiliation: string };
export type Service = Doc & { duration: string; description: string };
export type Principle = Doc & { description: string };

type Collections = {
  news: NewsItem;
  clients: Client;
  team: TeamMember;
  testimonials: Testimonial;
  services: Service;
  principles: Principle;
};

/** Published entries only (drafts are hidden), sorted by the `order` field. */
export function getCollection<K extends keyof Collections>(name: K): Collections[K][] {
  const dir = path.join(CONTENT_DIR, name);
  return fs
    .readdirSync(dir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => matter(fs.readFileSync(path.join(dir, file), "utf8")).data)
    .filter((data) => data.status === "published")
    .map((data) => data as Collections[K])
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

type PageHeaderFields = {
  headerEyebrow: string;
  headerTitle: string;
  headerSubtitle?: string;
};

type Singletons = {
  site: {
    siteName: string;
    seoTitle: string;
    seoDescription: string;
    navAbout: string;
    navPeople: string;
    navServices: string;
    navNews: string;
    navContact: string;
    footerCopyright: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleItalic?: string;
    heroSubtitle: string;
    heroCtaLabel: string;
    aboutEyebrow: string;
    aboutHeading: string;
    aboutBody: string;
    clientsEyebrow: string;
    clientsHeading: string;
    testimonialsEyebrow: string;
    testimonialsHeading: string;
    teamEyebrow: string;
    teamHeading: string;
    contactEyebrow: string;
    contactTitle: string;
    contactTitleItalic?: string;
    contactBody: string;
    contactButtonLabel: string;
  };
  mission: PageHeaderFields & {
    missionEyebrow: string;
    missionTitle: string;
    missionTitleItalic?: string;
    missionBody: string;
    principlesEyebrow: string;
    principlesHeading: string;
  };
  people: PageHeaderFields & {
    foundingPartnersLabel: string;
    advisorsLabel: string;
  };
  "services-page": PageHeaderFields & {
    packagesEyebrow: string;
    packagesHeading: string;
  };
  "news-page": PageHeaderFields & {
    sectionEyebrow: string;
    seoTitle: string;
    seoDescription: string;
  };
  contact: PageHeaderFields & {
    eyebrow: string;
    contactTitle: string;
    contactTitleItalic?: string;
    body: string;
    emailLabel: string;
    email: string;
  };
};

/**
 * Page-level content. Unlike Outstatic's getSingletonBySlug, this ignores the
 * draft/published status so a page never renders empty because it was saved
 * as a draft. Missing fields come back as empty strings instead of breaking
 * the build.
 */
export function getPage<K extends keyof Singletons>(slug: K): Singletons[K] {
  const dir = path.join(CONTENT_DIR, "_singletons");
  const { data } = matter(fs.readFileSync(path.join(dir, `${slug}.md`), "utf8"));
  const schema = JSON.parse(fs.readFileSync(path.join(dir, `${slug}.schema.json`), "utf8"));
  const page: Record<string, unknown> = {};
  for (const key of Object.keys(schema.properties)) page[key] = data[key] ?? "";
  return page as Singletons[K];
}

/** Splits a Text field into paragraphs on blank lines. */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
