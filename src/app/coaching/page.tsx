import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one and group coaching for teens, young adults and parents with Coach Cathy.",
};

const audiences = [
  {
    title: "Teens",
    copy: "Finding their voice and their footing.",
  },
  {
    title: "Young adults",
    copy: "Navigating their 20s with more confidence.",
  },
  {
    title: "Parents",
    copy: "Staying close through every stage.",
  },
];

const formats = [
  {
    title: "One-on-one coaching",
    copy: "Private sessions for a teen or young adult who wants to understand themselves better, build confidence or work through a season that feels heavy.",
  },
  {
    title: "Group coaching for teens",
    copy: "Small groups where teens learn with and from each other, share honestly and realise they're not the only ones feeling this way.",
  },
  {
    title: "Parent and child coaching",
    copy: "Sessions for a parent and their teen or young adult child, so you can talk more openly and feel closer again.",
  },
  {
    title: "Coaching for schools",
    copy: "Group coaching programmes for schools and learner communities, shaped around your students and the region you serve.",
  },
];

const steps = [
  {
    title: "Book a chat",
    copy: "We talk about what's going on and what you'd love to change.",
  },
  {
    title: "Shape the plan",
    copy: "I recommend the coaching format that fits you, your child or your school.",
  },
  {
    title: "Do the work together",
    copy: "Sessions focused on real progress, at a pace that feels right.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <PageHero
          eyebrow="Coaching"
          title="Space to grow into who you are."
          subtitle="I coach teens, young adults in their 20s and the parents raising them. Together we work on confidence, clarity and the relationships that matter most."
          image="/images/cathy-portrait-white.jpg"
          imageAlt="Coach Cathy gesturing with warmth"
          ctas={[
            { label: "Book a coaching chat", href: "#contact" },
            {
              label: "Ways to work together",
              href: "#ways",
              variant: "ghost",
            },
          ]}
        />

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Who I work with
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                Coaching that meets people where they are
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {audiences.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 80}>
                  <div className="border-t border-teal/20 pt-6">
                    <h3 className="font-display text-3xl text-ink">{item.title}</h3>
                    <p className="mt-3 text-ink/70">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ways" className="atmosphere py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Ways to work together
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink md:text-5xl">
                Coaching that meets you where you are
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {formats.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 70}>
                  <article className="rounded-[1.5rem] bg-paper/70 p-7 ring-1 ring-teal/10">
                    <h3 className="font-display text-2xl text-ink md:text-3xl">
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
          <div className="mx-auto grid max-w-site gap-10 px-5 md:grid-cols-[1fr_1.1fr] md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
                My approach
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Grounded in NLP. Led with heart.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-lg text-paper/75">
                I&apos;m an accredited NLP practitioner. Neuro-linguistic
                programming looks at how our thoughts and language shape the way
                we feel and act. In coaching, it gives us practical tools to
                shift unhelpful patterns.
              </p>
              <p className="mt-4 text-lg text-paper/75">
                I pair that with patience and a safe space to be honest, because
                real change only happens when you feel safe enough to try.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                How it works
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                Getting started is simple
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title} delayMs={index * 80} as="li">
                  <p className="text-sm font-semibold text-coral">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink/70">{step.copy}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="mt-12 max-w-2xl text-ink/60">
                Session lengths, packages and fees are shaped around what you
                need — we&apos;ll talk through options on our first chat.
              </p>
            </Reveal>
          </div>
        </section>

        <ContactSection intro="Tell me a little about who the coaching is for and what's been on your heart. I'll come back to you personally." />
      </main>
    </>
  );
}
