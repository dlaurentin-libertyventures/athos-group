import Image from "next/image";
import { LOGO_WHITE, NAVY, CREAM } from "@/lib/brand";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section style={{ background: NAVY }} className="pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-24 lg:pb-32">
        <Image
          src={LOGO_WHITE}
          alt=""
          aria-hidden
          width={120}
          height={42}
          className="h-8 w-auto mb-10 opacity-70"
        />
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-10 h-px" style={{ background: CREAM, opacity: 0.3 }} />
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: CREAM, opacity: 0.5 }}
          >
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-[family-name:var(--font-playfair)] font-bold leading-tight"
          style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", color: CREAM }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-lg font-light leading-relaxed"
            style={{ color: CREAM, opacity: 0.6 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
