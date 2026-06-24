export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  announcementUrl: string;
  announcementLabel: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "gap-accreditation",
    title:
      "Global Accreditation Project (GAP) Takes Shape in Bid to Bring Personalization and Common Sense to Higher Ed Accreditation",
    summary:
      "The Global Accreditation Project is building a new kind of accreditor: one that shifts higher education from compliance to outcomes, conformity to pluralism, and bureaucracy to real quality assurance. Targeting a full launch by summer 2028.",
    image: "/images/news/gap-logo.png",
    imageAlt: "Global Accreditation Project logo",
    announcementUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7458141756656848896/",
    announcementLabel: "See Full Announcement",
  },
  {
    id: "breakthrough-builders",
    title:
      "Athos and Principled Business Introduce Breakthrough Builders to Fast-Track Funding for Early-Stage Social Ventures",
    summary:
      "Breakthrough Builders is a new community of founders, philanthropists, and advisors committed to launching and funding the most promising early-stage social ventures. Applying a venture-capital mindset to philanthropy, the project will back exceptional founders early through seed grants, a national funder syndicate, and invitation-only summits.",
    image: "/images/news/breakthrough-builders.png",
    imageAlt: "Breakthrough Builders announcement graphic",
    announcementUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7444770197414273026/",
    announcementLabel: "See Full Announcement",
  },
  {
    id: "athos-launch",
    title:
      "The Athos Group Launches to Help Founders and Funders Build the Institutions of Tomorrow",
    summary:
      'The renewal of society depends on the renewal of its institutions. Through a "Fractional Social Ventures" model, Athos partners with visionaries to provide strategic vision, fundraising, and storytelling: taking institutions from 0 to 1 and 1 to 10.',
    image: "/images/news/athos-launch.png",
    imageAlt: "The Athos Group logo",
    announcementUrl:
      "https://www.linkedin.com/posts/libertyventuresnetwork_we-are-proud-to-highlight-liberty-ventures-activity-7395207655629234176-qo_G",
    announcementLabel: "See Full Announcement Here",
  },
];
