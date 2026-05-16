import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    tag: "For founders testing an idea",
    blurb: "A focused sprint to ship a landing page, brand kit, or MVP module.",
    features: [
      "1–2 week engagement",
      "Solo specialist + senior review",
      "Modern stack, SEO-ready",
      "Async updates · 1 weekly demo",
    ],
    highlight: false,
  },
  {
    name: "Studio",
    tag: "Most chosen",
    blurb: "A project-shaped team for a complete product, brand, or campaign.",
    features: [
      "3–8 week engagement",
      "Designer + engineer + lead",
      "Design system + production build",
      "Weekly demos · Linear + Figma",
    ],
    highlight: true,
  },
  {
    name: "Ongoing",
    tag: "For scaling teams",
    blurb: "A retained pod that ships continuously alongside your in-house team.",
    features: [
      "Monthly rolling retainer",
      "Dedicated multi-role pod",
      "Growth, content & engineering",
      "Quarterly strategy reviews",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section
      eyebrow="Engagements"
      title="Built around the work, not the building."
      description="We don't publish fixed prices — every engagement is scoped to your goals, team, and timeline. Tell us what you're building and we'll send a custom quote within 24 hours."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.06}>
            <div
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
                t.highlight
                  ? "section-dark border-transparent indigo-glow"
                  : "border-[color:var(--hairline)] bg-white hover:border-[color:var(--hairline-strong)] hover:shadow-[0_30px_60px_-30px_rgba(18,32,86,0.18)]",
              )}
            >
              {t.highlight && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--brand-indigo)]/40 blur-3xl" />
              )}
              <div className="relative flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]",
                    t.highlight
                      ? "bg-white/15 text-white"
                      : "bg-[color:var(--brand-lavender)] text-[color:var(--brand-navy)]",
                  )}
                >
                  {t.highlight && <Sparkles className="h-3 w-3" />}
                  {t.tag}
                </span>
                <span className={cn("text-xs", t.highlight ? "text-white/60" : "text-[color:var(--text-mute)]")}>0{i + 1}</span>
              </div>

              <h3 className={cn("relative mt-6 text-2xl font-semibold", t.highlight && "text-white")}>{t.name}</h3>
              <p className={cn("relative mt-2 text-sm", t.highlight ? "text-on-dark-soft" : "text-[color:var(--text-soft)]")}>{t.blurb}</p>

              <div className="relative mt-6 flex items-baseline gap-2">
                <span
                  className={cn(
                    "text-4xl font-semibold tracking-tight",
                    t.highlight ? "text-white" : "bg-gradient-to-r from-[color:var(--brand-indigo)] to-[color:var(--brand-navy)] bg-clip-text text-transparent",
                  )}
                >
                  Custom
                </span>
                <span className={cn("text-xs", t.highlight ? "text-white/60" : "text-[color:var(--text-mute)]")}>
                  scoped to your project
                </span>
              </div>

              <ul className="relative mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-2.5 text-sm",
                      t.highlight ? "text-on-dark-soft" : "text-[color:var(--text-soft)]",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                        t.highlight ? "bg-white/15 text-white" : "bg-[color:var(--brand-lavender)] text-[color:var(--brand-indigo)]",
                      )}
                    >
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={cn(
                  "relative mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
                  t.highlight
                    ? "bg-white text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-lavender)]"
                    : "bg-[color:var(--brand-indigo)] text-white hover:bg-[color:var(--brand-navy)] indigo-glow",
                )}
              >
                Request a price
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-[color:var(--text-mute)]">
        Every quote includes scope, milestones, team composition, and a fixed delivery date.
      </p>
    </Section>
  );
}