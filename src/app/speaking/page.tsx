import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { MediaStrip } from "@/components/MediaStrip";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks on youth mental health, confidence, mothering and parenting teens with Coach Cathy.",
};

const topics = [
  {
    title: "Youth mental health",
    copy: "What young people are carrying today and how the adults around them can help.",
  },
  {
    title: "Confidence and authenticity",
    copy: "Finding your voice and showing up as yourself, at school, at work and at home.",
  },
  {
    title: "Mothering and the village",
    copy: "Why no mother should carry it alone, drawn from my book.",
  },
  {
    title: "Parenting teens and young adults",
    copy: "Staying connected to your child as they grow into who they are becoming.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <PageHero
          eyebrow="Speaking"
          title="Honest conversations that stay with people."
          subtitle="I speak about youth, mental health, confidence and mothering. You'll find me on stages, in classrooms and on air."
          image="/images/cathy-book.jpg"
          imageAlt="Coach Cathy with her book Mothering, Mental Health and the Village"
          ctas={[
            { label: "Book me to speak", href: "#contact" },
            {
              label: "Media and features",
              href: "#media",
              variant: "ghost",
            },
          ]}
        />

        <section className="atmosphere py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Speaking topics
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink md:text-5xl">
                Talks rooted in my work
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

        <div id="media">
          <MediaStrip heading="As heard on" />
        </div>

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Media and features
              </p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                On air and in print
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4">
              {site.media.map((item, index) => (
                <Reveal key={item.name} delayMs={index * 60}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-between gap-3 rounded-[1.25rem] border border-teal/10 bg-mist/50 px-5 py-5 transition hover:bg-mist md:flex-row md:items-center"
                  >
                    <div>
                      <p className="font-display text-2xl text-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 text-ink/65">{item.detail}</p>
                    </div>
                    <span className="text-sm font-semibold text-coral">
                      Listen to the feature →
                    </span>
                  </a>
                </Reveal>
              ))}
              {site.press.map((item) => (
                <Reveal key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-between gap-3 rounded-[1.25rem] border border-teal/10 bg-mist/50 px-5 py-5 transition hover:bg-mist md:flex-row md:items-center"
                  >
                    <div>
                      <p className="font-display text-2xl text-ink">
                        {item.outlet}
                      </p>
                      <p className="mt-1 text-ink/65">{item.title}</p>
                    </div>
                    <span className="text-sm font-semibold text-coral">
                      Read the feature →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="bg-teal-deep py-24 text-paper md:py-28">
          <div className="mx-auto grid max-w-site items-center gap-12 px-5 md:grid-cols-2 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/cathy-book.jpg"
                  alt="Mothering, Mental Health and the Village book cover held by Cathy"
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
                Authoring journey
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Mothering: Mental Health and the Village
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-paper/55">
                Edited by Thabang Laka
              </p>
              <p className="mt-6 text-lg text-paper/75">
                This book gathers voices around mothering, mental health and the
                communities that hold families up. My contribution sits in that
                same conviction I bring to coaching and speaking: young people
                and the adults who love them do better when no one has to carry
                it alone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-coral px-5 py-3 text-sm font-semibold text-paper transition hover:bg-coral-bright"
                >
                  Order a copy
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-paper/30 px-5 py-3 text-sm font-semibold text-paper transition hover:border-paper"
                >
                  Invite me to a book talk
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Where I speak
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink md:text-5xl">
                Conferences, schools, panels and podcasts
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-ink/70">
                Whether it&apos;s a keynote, a school assembly or a radio
                interview, I bring the same honesty and care to every audience.
              </p>
            </Reveal>
          </div>
        </section>

        <ContactSection intro="Tell me about your audience, your date and the conversation you want to start." />
      </main>
    </>
  );
}
