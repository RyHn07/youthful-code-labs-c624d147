import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const steps = [
  ["01", "Client consultation", "We listen, align on goals, and scope the engagement."],
  ["02", "Requirement analysis", "Brief, budget, timeline, and success metrics nailed down."],
  ["03", "Team assignment", "We compose the right team from our talent network."],
  ["04", "Development", "Weekly demos, async updates, transparent progress."],
  ["05", "Quality review", "Senior pass on craft, performance, and accessibility."],
  ["06", "Delivery & handoff", "Documentation, training, and ongoing support."],
];

export function Workflow() {
  return (
    <Section eyebrow="Workflow" title="How a Novara engagement runs.">
      <ol className="relative ml-3 border-l border-[color:var(--hairline)] pl-8">
        {steps.map(([n, t, d], i) => (
          <ScrollReveal key={n} delay={i * 0.05}>
            <li className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1 grid h-6 w-6 place-items-center rounded-full border border-[color:var(--hairline-strong)] bg-background text-[10px] text-[color:var(--text-soft)]">
                {n}
              </span>
              <h3 className="text-lg font-medium">{t}</h3>
              <p className="mt-1 text-sm text-[color:var(--text-soft)]">{d}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </Section>
  );
}