import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Facilitation",
  description:
    "Group workshops on mental health, confidence, authenticity and workplace presence with Coach Cathy.",
};

const topics = [
  {
    title: "Mental health",
    copy: "Open, practical conversations about wellbeing and stress, and how we look after ourselves and each other.",
  },
  {
    title: "Confidence",
    copy: "Quieting self-doubt and learning to trust your own voice, in your work and in your life.",
  },
  {
    title: "Showing up in the workplace",
    copy: "Bringing your best to work, speaking up with clarity and building healthy working relationships.",
  },
  {
    title: "Being authentic",
    copy: "Letting go of the mask and leading from who you really are.",
  },
];

const expectations = [
  "Interactive sessions rather than a lecture",
  "Content tailored to your team or learners",
  "Practical tools people can use the next day",
  "A safe space for honest sharing",
];

export default function FacilitationPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <PageHero
          eyebrow="Facilitation"
          title="Workshops that help people show up as themselves."
          subtitle="I facilitate group workshops for teams, schools and community groups. My rooms are places where people can be honest and leave with something they can actually use."
          image="/images/cathy-portrait-teal.jpg"
          imageAlt="Coach Cathy smiling warmly"
          ctas={[
            { label: "Plan a workshop", href: "#contact" },
            {
              label: "See workshop topics",
              href: "#topics",
              variant: "ghost",
            },
          ]}
        />

        <section id="topics" className="atmosphere py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Workshop focus areas
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink md:text-5xl">
                What we can explore together
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {topics.map((topic, index) => (
                <Reveal key={topic.title} delayMs={index * 70}>
                  <article className="rounded-[1.5rem] bg-paper/80 p-7 ring-1 ring-teal/10">
                    <h3 className="font-display text-3xl text-ink">
                      {topic.title}
                    </h3>
                    <p className="mt-4 text-ink/70">{topic.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-deep py-24 text-paper md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
                What to expect
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">
                Warm rooms. Real conversations.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-paper/75">
                Every workshop is shaped around your group, so the conversation
                feels relevant from the very first minute.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {expectations.map((item, index) => (
                <Reveal key={item} delayMs={index * 60} as="li">
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
                Workshop details
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                Flexible formats for your group
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Formats",
                  value: "Half day, full day or a series of sessions",
                },
                {
                  label: "Group size",
                  value: "Sized for conversation — small teams to larger rooms",
                },
                {
                  label: "Where",
                  value: "In person, online or both",
                },
              ].map((item, index) => (
                <Reveal key={item.label} delayMs={index * 80}>
                  <div className="border-t border-teal/20 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg text-ink/75">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection intro="Share a little about your group and what you'd like them to walk away with. I'll suggest a workshop that fits." />
      </main>
    </>
  );
}
