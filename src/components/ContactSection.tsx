"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

type ContactSectionProps = {
  intro: string;
};

export function ContactSection({ intro }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <section id="contact" className="atmosphere-deep relative overflow-hidden py-24 text-paper md:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-mid/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-site gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-md text-lg text-paper/75">{intro}</p>
          <div className="mt-8 space-y-3 text-sm text-paper/70">
            <p>
              Email{" "}
              <a className="link-underline text-paper" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              Instagram{" "}
              <a
                className="link-underline text-paper"
                href="https://www.instagram.com/coach_cathyza/"
                target="_blank"
                rel="noreferrer"
              >
                {site.instagramHandle}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block text-paper/70">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/15 bg-teal-deep/40 px-4 py-3 text-paper outline-none ring-coral/40 placeholder:text-paper/35 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-paper/70">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/15 bg-teal-deep/40 px-4 py-3 text-paper outline-none ring-coral/40 placeholder:text-paper/35 focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm">
              <span className="mb-2 block text-paper/70">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-y rounded-xl border border-white/15 bg-teal-deep/40 px-4 py-3 text-paper outline-none ring-coral/40 placeholder:text-paper/35 focus:ring-2"
                placeholder="Tell me a little about what you have in mind."
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-paper transition hover:bg-coral-bright"
            >
              Send my message
            </button>
            {status === "ready" && (
              <p className="mt-3 text-sm text-paper/70">
                Opening your email app…
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
