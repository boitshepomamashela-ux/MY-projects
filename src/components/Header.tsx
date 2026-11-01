"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onDark = tone === "dark" && !scrolled && !open;
  const bar =
    scrolled || open
      ? "bg-paper/90 border-teal-soft/80 backdrop-blur-md shadow-[0_8px_30px_rgba(16,40,38,0.06)]"
      : "bg-transparent border-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${bar}`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight transition-colors md:text-2xl ${
            onDark ? "text-paper" : "text-ink"
          }`}
        >
          Coach Cathy
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm tracking-wide transition-colors ${
                  onDark
                    ? active
                      ? "text-paper"
                      : "text-paper/75 hover:text-paper"
                    : active
                      ? "text-teal"
                      : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="rounded-full bg-coral px-4 py-2 text-sm font-medium text-paper transition hover:bg-coral-bright"
          >
            Book a chat
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
            onDark
              ? "border-paper/30 text-paper"
              : "border-ink/15 text-ink"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-teal-soft bg-paper md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-site flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base text-ink hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-2 rounded-full bg-coral px-4 py-3 text-center text-sm font-medium text-paper"
          >
            Book a chat
          </Link>
          <div className="mt-4 flex items-center gap-3 px-3 pb-2">
            <Image
              src="/images/cathy-portrait-teal.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-sm text-ink/70">{site.tagline}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
