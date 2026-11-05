import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { MediaStrip } from "@/components/MediaStrip";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceLinks } from "@/components/ServiceLinks";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <PageHero
          brandFirst
          eyebrow={site.tagline}
          title="Every young person deserves to feel truly seen."
          subtitle="An accredited NLP practitioner and life coach. I walk alongside teens, young adults and their parents as they grow in confidence and learn to understand each other."
          image="/images/cathy-portrait-teal.jpg"
          imageAlt="Coach Cathy smiling in a teal floral blouse"
          ctas={[
            { label: "Explore my services", href: "#services" },
            { label: "Book a chat", href: "#contact", variant: "ghost" },
          ]}
        />

        <MediaStrip />

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto grid max-w-site items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/cathy-portrait-white.jpg"
                  alt="Coach Cathy gesturing warmly"
                  width={1024}
                  height={819}
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-deep/25 to-transparent" />
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                About me
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                Hi, I&apos;m Cathy. I believe young people flourish when they feel
                heard.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-ink/70">
                <p>
                  My work is about creating that space for teens finding their
                  footing, for young adults stepping into the world and for the
                  parents who love them through every stage.
                </p>
                <p>
                  As an accredited NLP practitioner and life coach, I help people
                  notice the stories they tell themselves and gently rewrite the
                  ones holding them back. Whether I&apos;m sitting with one person
                  or standing in front of a full room, I show up with the same
                  warmth and honesty.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-ink/80">
                {[
                  "Accredited NLP practitioner and life coach",
                  "Focused on teens and young adults into their 20s",
                  "Author of Mothering: Mental Health and the Village",
                  "Featured on Radio 2000, Metro FM and UNISA Radio",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                {site.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-sm font-medium text-teal"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div id="services">
          <ServiceLinks />
        </div>

        <section className="bg-teal-deep py-24 text-paper md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-bright">
                Media & proof
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                Conversations that travel beyond the room
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-paper/70">
                Features, radio moments and talks where young people, parents and
                communities meet honest conversation.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {site.youtube.map((video, index) => (
                <Reveal key={video.id} delayMs={index * 90}>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-[1.5rem] bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-teal-deep/25" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-coral px-3 py-1 text-xs font-semibold">
                        Watch
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="font-medium">{video.title}</p>
                      <p className="mt-1 text-sm text-paper/60">YouTube</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {site.press.map((item, index) => (
                <Reveal key={item.href} delayMs={index * 80}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:bg-white/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-coral-bright">
                        {item.outlet}
                      </p>
                      <p className="mt-2 font-display text-2xl leading-snug">
                        {item.title}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-paper/70">Read →</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="atmosphere py-24 md:py-28">
          <div className="mx-auto max-w-site px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Events
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Rooms I&apos;ve held with warmth and energy
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-ink/70">
                A look at past gatherings, workshops and celebrations — follow the
                links for more from the moments themselves.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {site.events.map((event, index) => (
                <Reveal key={event.href} delayMs={index * 60}>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-[4/5] overflow-hidden rounded-[1.5rem]"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-teal-deep/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 right-4 text-sm font-medium text-paper">
                      {event.title}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-28">
          <div className="mx-auto grid max-w-site items-center gap-12 px-5 md:grid-cols-2 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/cathy-book.jpg"
                  alt="Cathy holding Mothering, Mental Health and the Village"
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Authoring journey
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                Mothering: Mental Health and the Village
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/50">
                Edited by Thabang Laka
              </p>
              <p className="mt-6 text-lg text-ink/70">
                A compassionate guide to nurturing moms, supporting minds, and
                building stronger communities — rooted in the belief that no
                mother should carry it alone, and that young people thrive when
                the village around them is well.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/speaking#book"
                  className="rounded-full bg-teal px-5 py-3 text-sm font-semibold text-paper transition hover:bg-teal-mid"
                >
                  Read more
                </Link>
                <a
                  href="#contact"
                  className="rounded-full border border-teal/25 px-5 py-3 text-sm font-semibold text-teal transition hover:border-teal"
                >
                  Order a copy
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection intro="Whether you're a parent, a young person, a school or an event planner, I'd love to hear what you have in mind." />
      </main>
    </>
  );
}
