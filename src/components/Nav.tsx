import NavClient from "@/components/NavClient";
import { getPage } from "@/lib/cms";

export default function Nav() {
  const site = getPage("site");

  const links = [
    { label: site.navAbout, href: "/about-our-mission-and-principles" },
    { label: site.navPeople, href: "/about-our-people" },
    { label: site.navServices, href: "/our-services" },
    { label: site.navNews, href: "/news" },
    { label: site.navContact, href: "/contact" },
  ];

  return <NavClient siteName={site.siteName} links={links} />;
}
