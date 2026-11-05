import Image from "next/image";
import Link from "next/link";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctas?: Cta[];
  brandFirst?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  ctas = [],
  brandFirst = false,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-teal-deep text-paper">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] animate-ken-burns"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-site flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <div className="max-w-2xl">
          {brandFirst && (
            <p className="animate-fade-up font-display text-4xl tracking-tight text-paper md:text-6xl lg:text-7xl">
              Coach Cathy
            </p>
          )}
          <p
            className={`animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-coral-bright ${
              brandFirst ? "mt-6 [animation-delay:120ms]" : ""
            }`}
          >
            {eyebrow}
          </p>
          <h1
            className={`animate-fade-up font-display leading-[1.05] tracking-tight ${
              brandFirst
                ? "mt-4 text-3xl md:text-5xl [animation-delay:200ms]"
                : "mt-4 text-4xl md:text-6xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`animate-fade-up mt-5 max-w-xl text-base text-paper/80 md:text-lg ${
              brandFirst ? "[animation-delay:320ms]" : "[animation-delay:120ms]"
            }`}
          >
            {subtitle}
          </p>
          {ctas.length > 0 && (
            <div
              className={`animate-fade-up mt-8 flex flex-wrap gap-3 ${
                brandFirst ? "[animation-delay:420ms]" : "[animation-delay:220ms]"
              }`}
            >
              {ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "ghost"
                      ? "rounded-full border border-paper/35 px-5 py-3 text-sm font-medium text-paper transition hover:border-paper hover:bg-paper/10"
                      : "rounded-full bg-coral px-5 py-3 text-sm font-semibold text-paper transition hover:bg-coral-bright"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
