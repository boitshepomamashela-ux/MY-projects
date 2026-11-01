import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MCing",
  description:
    "High-energy event hosting for celebrations, year-end functions and gatherings with Coach Cathy.",
};

const events = [
  {
    title: "Employee celebrations",
    copy: "Awards, milestones and team days where your people deserve to feel celebrated.",
  },
  {
    title: "Year-end functions",
    copy: "Closing off the year with laughter and gratitude, and a night your team will talk about.",
  },
  {
    title: "High energy events",
    copy: "Launches, galas and gatherings that need good energy in the room from start to finish.",
  },
];

const strengths = [
  "Energy that lifts the room without overpowering it",
  "A programme that runs on time",
  "Your people and your message at the centre",
  "Calm, quick thinking when plans change",
];

export default function McingPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <PageHero
          eyebrow="MCing"
          title="The energy your event deserves."
          subtitle="I host events with warmth and high energy. I keep the programme flowing and make sure every guest feels part of the celebration."
          image="/images/cathy-portrait-white.jpg"
          imageAlt="Coach Cathy ready to host"
          ctas={[
            { label: "Check my availability", href: "#contact" },
            { label: "Events I host", href: "#events", variant: "ghost" },
          ]}
        />

        <section id="events" className="atmosphere py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Events I love to host
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink md:text-5xl">
                Made for rooms that should feel alive
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {events.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 80}>
                  <article className="border-t border-teal/20 pt-6">
                    <h3 className="font-display text-3xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-ink/70">{item.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-deep py-24 text-paper md:py-28">
          <div className="mx-auto grid max-w-site gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
                What I bring
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                A host who reads the room.
              </h2>
              <p className="mt-5 text-lg text-paper/75">
                I work closely with you before the day, so on the night you can
                relax and enjoy your own event.
              </p>
            </Reveal>
            <ul className="space-y-4">
              {strengths.map((item, index) => (
                <Reveal key={item} delayMs={index * 70} as="li">
                  <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral-bright" />
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Proof
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                Moments from the floor
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-ink/70">
                Watch recent features and browse past event photos for a feel of
                the energy I bring into a room.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              {site.youtube.map((video) => (
                <a
                  key={video.id}
                  href={video.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-teal/20 px-5 py-3 text-sm font-medium text-teal transition hover:border-teal"
                >
                  {video.title} →
                </a>
              ))}
              <Link
                href="/#events"
                className="rounded-full bg-teal px-5 py-3 text-sm font-semibold text-paper transition hover:bg-teal-mid"
              >
                Browse event gallery
              </Link>
            </div>
          </div>
        </section>

        <ContactSection intro="Send me your date, venue and the kind of energy you're hoping for, and I'll let you know if I'm available." />
      </main>
    </>
  );
}
