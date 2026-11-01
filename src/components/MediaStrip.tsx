import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function MediaStrip({
  heading = "As heard on",
}: {
  heading?: string;
}) {
  return (
    <section className="border-y border-teal-soft/80 bg-mist/70 py-14">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            {heading}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center font-display text-2xl text-ink md:text-3xl">
            Radio 2000 · Metro FM · Unisa Radio · 702
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 items-center gap-6 md:grid-cols-4 md:gap-8">
          {site.media.map((item, index) => (
            <Reveal key={item.name} delayMs={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3"
                aria-label={`${item.name}: ${item.detail}`}
              >
                <span className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-paper shadow-[0_10px_30px_rgba(16,40,38,0.08)] ring-1 ring-teal-soft transition group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(16,40,38,0.12)] md:h-28 md:w-28">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-center text-sm font-medium text-ink/80">
                  {item.name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
