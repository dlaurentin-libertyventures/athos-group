"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Client } from "@/lib/clients";
import { NAVY } from "@/lib/brand";

const AUTO_INTERVAL_MS = 4500;

type ClientsCarouselProps = {
  clients: Client[];
};

export default function ClientsCarousel({ clients }: ClientsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getSlideWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.clientWidth / getVisibleCount(track.clientWidth);
  }, []);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(maxScroll > 8 && track.scrollLeft < maxScroll - 8);
  }, []);

  const scrollBySlides = useCallback(
    (direction: "prev" | "next", slideCount = 1) => {
      const track = trackRef.current;
      if (!track) return;

      const slideWidth = getSlideWidth();
      if (!slideWidth) return;

      pauseUntilRef.current = Date.now() + AUTO_INTERVAL_MS;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const delta = slideWidth * slideCount * (direction === "next" ? 1 : -1);
      const nextLeft = track.scrollLeft + delta;

      if (direction === "next" && nextLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (direction === "prev" && nextLeft <= 8) {
        track.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: delta, behavior: "smooth" });
    },
    [getSlideWidth],
  );

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState, clients.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || clients.length <= 1) return;

    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;
      scrollBySlides("next");
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [clients.length, isPaused, prefersReducedMotion, scrollBySlides]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--cream)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--cream)] to-transparent" />

      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="clients-carousel-track flex gap-5 overflow-x-auto scroll-smooth px-1 pb-2 snap-x snap-mandatory lg:gap-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        aria-label="Partner and client logos"
        aria-roledescription="carousel"
      >
        {clients.map((client, index) => (
          <article
            key={`${client.name}-${client.logo}-${index}`}
            className="clients-carousel-slide flex shrink-0 snap-start flex-col items-center justify-center gap-5"
          >
            <div className="flex h-32 w-full items-center justify-center sm:h-36 lg:h-40">
              <Image
                src={client.logo}
                alt={client.name}
                width={480}
                height={240}
                className="max-h-28 w-auto object-contain sm:max-h-32 lg:max-h-36"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
              />
            </div>
            <p
              className="max-w-[220px] text-center text-xs leading-snug"
              style={{ color: NAVY, opacity: 0.65 }}
            >
              {client.name}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollBySlides("prev", 2)}
          disabled={!canScrollPrev}
          aria-label="Previous partners"
          className="inline-flex h-11 w-11 items-center justify-center border transition-opacity duration-300 disabled:opacity-25"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollBySlides("next", 2)}
          disabled={!canScrollNext}
          aria-label="Next partners"
          className="inline-flex h-11 w-11 items-center justify-center border transition-opacity duration-300 disabled:opacity-25"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function getVisibleCount(containerWidth: number) {
  if (containerWidth >= 1024) return 5;
  if (containerWidth >= 640) return 2;
  return 1;
}
