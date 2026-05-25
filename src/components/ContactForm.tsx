"use client";

import { useState } from "react";
import { NAVY, CREAM, MUTED } from "@/lib/brand";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    // Wire up to an email service (e.g. Resend, Formspree) here.
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col justify-center items-start gap-4 py-12">
        <div className="w-10 h-px" style={{ background: NAVY }} />
        <h3
          className="font-[family-name:var(--font-playfair)] text-3xl font-bold"
          style={{ color: NAVY }}
        >
          Message received.
        </h3>
        <p className="font-light leading-relaxed text-lg" style={{ color: MUTED }}>
          Thank you for reaching out. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-0 py-4 bg-transparent text-sm font-light outline-none border-b transition-colors duration-300 focus:border-opacity-100 placeholder-shown:border-opacity-30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="text-xs font-medium tracking-widest uppercase block mb-2" style={{ color: NAVY, opacity: 0.45 }}>
            Full Name *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
            style={{
              color: NAVY,
              borderColor: `rgba(28,43,58,0.25)`,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
            }}
          />
        </div>
        <div>
          <label className="text-xs font-medium tracking-widest uppercase block mb-2" style={{ color: NAVY, opacity: 0.45 }}>
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@institution.org"
            className={inputClass}
            style={{
              color: NAVY,
              borderColor: `rgba(28,43,58,0.25)`,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
            }}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium tracking-widest uppercase block mb-2" style={{ color: NAVY, opacity: 0.45 }}>
          Organization
        </label>
        <input
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Your institution or organization"
          className={inputClass}
          style={{
            color: NAVY,
            borderColor: `rgba(28,43,58,0.25)`,
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
          }}
        />
      </div>

      <div>
        <label className="text-xs font-medium tracking-widest uppercase block mb-2" style={{ color: NAVY, opacity: 0.45 }}>
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your organization and what you're working to build..."
          className={inputClass + " resize-none"}
          style={{
            color: NAVY,
            borderColor: `rgba(28,43,58,0.25)`,
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
          }}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-widest uppercase transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
          style={{ background: NAVY, color: CREAM }}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          {status !== "sending" && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
