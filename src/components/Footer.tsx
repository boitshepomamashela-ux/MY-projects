import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-teal-soft/70 bg-teal-deep text-paper">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl tracking-tight">Coach Cathy</p>
          <p className="mt-3 max-w-sm text-paper/75">{site.tagline}</p>
          <p className="mt-6 text-sm text-paper/60">
            Cathy Mphirima · Youth coach, NLP practitioner & speaker
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-bright">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-paper/80 transition hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-bright">
            Connect
          </p>
          <ul className="mt-4 space-y-2">
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-paper/80 transition hover:text-paper"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-paper/80 transition hover:text-paper"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Coach Cathy</p>
          <p>Every young person deserves to feel truly seen.</p>
        </div>
      </div>
    </footer>
  );
}
