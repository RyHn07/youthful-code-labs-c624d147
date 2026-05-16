import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Users, Sparkles, Rocket, ShieldCheck, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: { label: string; to: string };
  art: "waves" | "input" | "prompt" | "atom";
};

const features: Feature[] = [
  {
    icon: Users,
    title: "University talent ecosystem",
    desc: "Curated, vetted students from multiple universities and disciplines — assembled into a small senior-led team for your project.",
    cta: { label: "Meet the talent", to: "/talent" },
    art: "waves",
  },
  {
    icon: Sparkles,
    title: "Affordable, without the agency tax",
    desc: "No bloated overhead, no glass towers. Pricing is built around the work — so founders, not buildings, get the value.",
    cta: { label: "Request a price", to: "/contact" },
    art: "input",
  },
  {
    icon: Rocket,
    title: "Startup-speed delivery",
    desc: "Modern stacks, async-first workflow, weekly demos. We ship in days what traditional agencies scope in weeks.",
    cta: { label: "See the workflow", to: "/about" },
    art: "prompt",
  },
  {
    icon: ShieldCheck,
    title: "Senior experts on every project",
    desc: "Every engagement runs under a seasoned lead or professor — so quality, accountability, and craft never slip.",
    cta: { label: "How we work", to: "/services" },
    art: "atom",
  },
];

function CornerArt({ kind }: { kind: Feature["art"] }) {
  // Decorative wireframe with corner handles, like the reference.
  const handles = (
    <>
      {[
        "left-0 top-0",
        "right-0 top-0",
        "left-0 bottom-0",
        "right-0 bottom-0",
      ].map((p) => (
        <span
          key={p}
          aria-hidden
          className={`absolute h-1.5 w-1.5 border border-[color:var(--brand-indigo)]/50 bg-white ${p} -translate-x-1/2 -translate-y-1/2 last:translate-x-1/2 last:translate-y-1/2`}
          style={
            p.includes("right") && p.includes("bottom")
              ? { transform: "translate(50%, 50%)" }
              : p.includes("right")
                ? { transform: "translate(50%, -50%)" }
                : p.includes("bottom")
                  ? { transform: "translate(-50%, 50%)" }
                  : undefined
          }
        />
      ))}
      <div className="absolute inset-0 rounded-md border border-dashed border-[color:var(--brand-indigo)]/30" />
    </>
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-6 top-6 hidden h-24 w-36 sm:block"
    >
      <div className="relative h-full w-full">
        {handles}
        <div className="absolute inset-0 grid place-items-center text-[color:var(--brand-indigo)]/35">
          {kind === "waves" && (
            <svg viewBox="0 0 120 60" className="h-12 w-28">
              <path d="M0,30 C20,5 40,55 60,30 S100,5 120,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0,42 C20,17 40,67 60,42 S100,17 120,42" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            </svg>
          )}
          {kind === "input" && (
            <div className="w-[80%] rounded-md border border-[color:var(--brand-indigo)]/40 bg-white/70 px-2 py-1.5 text-[9px] text-[color:var(--brand-navy)]/60">
              <div className="text-[8px] uppercase tracking-wider opacity-60">Email</div>
              <div>you@studio.co</div>
            </div>
          )}
          {kind === "prompt" && (
            <div className="w-[80%] rounded-md border border-[color:var(--brand-indigo)]/40 bg-white/70 px-2 py-2 text-[9px] text-[color:var(--brand-navy)]/60">
              What do you want to build?
              <div className="mt-1 flex gap-1 opacity-60">
                <span>📎</span><span>✨</span>
              </div>
            </div>
          )}
          {kind === "atom" && (
            <svg viewBox="0 0 80 80" className="h-16 w-16">
              <circle cx="40" cy="40" r="6" fill="currentColor" opacity="0.5" />
              <ellipse cx="40" cy="40" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <ellipse cx="40" cy="40" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 40 40)" />
              <ellipse cx="40" cy="40" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-60 40 40)" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <Section
      eyebrow="Why us"
      title="A new kind of agency — light, talented, accountable."
      description="Four reasons teams pick Novara over a traditional studio."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.05}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--hairline-strong)] hover:shadow-[0_30px_60px_-30px_rgba(18,32,86,0.18)] md:p-9">
              <CornerArt kind={f.art} />

              {/* Neumorphic icon tile */}
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-white to-[color:var(--brand-lavender)] text-[color:var(--brand-indigo)] ring-1 ring-[color:var(--hairline)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                style={{
                  boxShadow:
                    "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 1px 2px rgba(18,32,86,0.06), 0 12px 24px -12px rgba(18,32,86,0.12)",
                }}
              >
                <f.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-12 text-xl font-semibold tracking-tight text-foreground md:mt-16">
                {f.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--text-soft)] md:text-[15px]">
                {f.desc}
              </p>

              <Link
                to={f.cta.to}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--brand-navy)] transition-colors hover:text-[color:var(--brand-indigo)]"
              >
                {f.cta.label}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
