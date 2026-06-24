import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/news";
import { CREAM, MUTED, NAVY } from "@/lib/brand";

type NewsSectionProps = {
  hidden?: boolean;
};

export default function NewsSection({ hidden = false }: NewsSectionProps) {
  return (
    <section
      id="news"
      aria-hidden={hidden || undefined}
      className={hidden ? "hidden" : undefined}
      style={{ background: CREAM, borderTop: "1px solid rgba(28,43,58,0.08)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-16 lg:py-36">
        <div className="mb-16 flex items-center gap-4">
          <span className="block h-px w-10" style={{ background: NAVY }} />
          <span
            className="text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: NAVY, opacity: 0.5 }}
          >
            News &amp; Announcements
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col border"
              style={{ borderColor: "rgba(28,43,58,0.1)", background: "#fff" }}
            >
              <div className="relative h-48 overflow-hidden" style={{ background: CREAM }}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h2
                  className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-snug"
                  style={{ color: NAVY }}
                >
                  {item.title}
                </h2>
                <p
                  className="mt-5 flex-1 font-light leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {item.summary}
                </p>
                <Link
                  href={item.announcementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                  style={{ color: NAVY }}
                >
                  {item.announcementLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
