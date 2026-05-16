import { Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Landing page",
    tag: "Design & Dev",
    desc: "Design + Dev in 2 weeks or less",
    features: [
      "Wireframes & prototypes",
      "Custom animation",
      "Production-ready build",
      "1 month of free support",
    ],
    cta: "Request for price",
    highlight: false,
  },
  {
    name: "Multipage website",
    tag: "Design & Dev",
    desc: "Design + Dev in 3 weeks or less",
    features: [
      "Wireframes & prototypes",
      "Custom animation",
      "CMS + multi-page build",
      "1 month of free support",
    ],
    cta: "Request for price",
    highlight: true,
  },
  {
    name: "Retainer",
    tag: "Ongoing support",
    desc: "Ongoing design & dev support",
    features: [
      "New pages, sections & features",
      "Priority turnaround",
      "Pause or cancel anytime",
      "Direct line to the team",
    ],
    cta: "Coming Soon",
    highlight: false,
  },
];

export function PricingPlans() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-mute)] font-mono-friendly">
            Pricing · 03 | 04
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Flexible pricing plans.
          </h2>
          <p className="mt-4 text-[color:var(--text-soft)]">
            High-quality visual and dev solutions tailored to each client's needs.
            Tell us what you're building and we'll send a custom quote.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "flex flex-col rounded-xl border p-8 transition-transform duration-300 hover:-translate-y-1",
                p.highlight
                  ? "border-transparent bg-foreground text-background"
                  : "border-[color:var(--hairline)] bg-white",
              )}
            >
              <div
                className={cn(
                  "inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-mono-friendly",
                  p.highlight
                    ? "bg-white/15 text-background"
                    : "bg-[color:var(--brand-lavender)] text-[color:var(--text-soft)]",
                )}
              >
                {p.tag}
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {p.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  p.highlight ? "text-background/70" : "text-[color:var(--text-soft)]",
                )}
              >
                {p.desc}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-2.5 text-sm",
                      p.highlight ? "text-background/85" : "text-[color:var(--text-soft)]",
                    )}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={cn(
                  "mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all",
                  p.highlight
                    ? "bg-background text-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90",
                  p.cta === "Coming Soon" && "pointer-events-none opacity-60",
                )}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
