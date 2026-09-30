import Image from "next/image";
import { getPage } from "@/lib/cms";
import { LOGO_WHITE, NAVY, CREAM } from "@/lib/brand";

type SiteFooterProps = {
  /** Horizontal padding at lg; the home page uses a slightly narrower gutter. */
  gutter?: "lg:px-12" | "lg:px-16";
};

export default function SiteFooter({ gutter = "lg:px-16" }: SiteFooterProps) {
  const site = getPage("site");

  return (
    <footer
      className={`py-10 px-6 ${gutter}`}
      style={{ background: NAVY, borderTop: "1px solid rgba(248,245,238,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src={LOGO_WHITE}
          alt={site.siteName}
          width={120}
          height={42}
          className="h-7 w-auto opacity-80"
        />
        <span className="text-xs tracking-wide" style={{ color: CREAM, opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} {site.footerCopyright}
        </span>
      </div>
    </footer>
  );
}
