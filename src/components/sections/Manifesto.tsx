import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export function Manifesto() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-aurora opacity-60" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-mute)] backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-[color:var(--brand-indigo)]" />
          The studio belief
        </p>
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
            Great work doesn't need a glass tower.{" "}
            <span className="bg-gradient-to-r from-[color:var(--brand-indigo)] to-[color:var(--brand-navy)] bg-clip-text text-transparent">
              It needs the right people, pointed at the right problem.
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-[color:var(--text-soft)] md:text-lg">
            We're a small studio with a deep bench of university talent and senior mentors — ready to build, ship, and iterate at the pace your idea deserves.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}