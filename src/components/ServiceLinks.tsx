import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Coaching",
    href: "/coaching",
    copy: "One-on-one and group coaching for teens, young adults and their parents, including programmes for schools.",
  },
  {
    title: "Facilitation",
    href: "/facilitation",
    copy: "Group workshops on mental health, confidence, showing up at work and being your authentic self.",
  },
  {
    title: "MCing",
    href: "/mcing",
    copy: "High energy hosting for employee celebrations, year-end functions and any event that needs good energy in the room.",
  },
  {
    title: "Speaking",
    href: "/speaking",
    copy: "Talks and radio features drawn from my work with young people and my book on mothering and mental health.",
  },
];

export function ServiceLinks() {
  return (
    <section className="atmosphere py-24 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            Services
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
            How I can support you
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            From quiet one-on-one sessions to a room full of people ready to
            celebrate, here&apos;s where I can help.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-teal/15 border-y border-teal/15">
          {services.map((service, index) => (
            <Reveal key={service.href} delayMs={index * 70}>
              <Link
                href={service.href}
                className="group grid gap-3 py-8 transition md:grid-cols-[0.35fr_1fr_auto] md:items-center md:gap-8"
              >
                <h3 className="font-display text-3xl text-ink transition group-hover:text-teal md:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-ink/70">{service.copy}</p>
                <span className="text-sm font-semibold text-coral transition group-hover:translate-x-1">
                  Explore {service.title.toLowerCase()} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
