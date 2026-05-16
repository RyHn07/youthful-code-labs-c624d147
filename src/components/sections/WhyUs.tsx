import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Check } from "lucide-react";

const points = [
  { title: "Affordable, without the agency tax", body: "No bloated overhead — pricing built around the work, not the building." },
  { title: "University talent ecosystem", body: "Curated, vetted students from multiple universities and disciplines." },
  { title: "Flexible, project-shaped teams", body: "We compose the team for the project, not the other way around." },
  { title: "Senior expert option", body: "Plug in seasoned pros or professors when the bar needs to be higher." },
  { title: "Fast delivery", body: "Modern stacks, async-first workflow, weekly demos." },
  { title: "Modern workflow", body: "Linear, Figma, Notion, GitHub — wired into your team's tools." },
];

export function WhyUs() {
  return (
    <Section
      className="section-dark relative overflow-hidden"
      eyebrow="Why us"
      title={<span className="text-on-dark">A new kind of agency — light, talented, and accountable.</span>}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.04}>
            <div className="group relative flex gap-4 overflow-hidden rounded-2xl border hairline-on-dark bg-white/[0.04] p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-[color:var(--brand-indigo)]/60">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[color:var(--brand-indigo)]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--brand-indigo)] text-white shadow-[0_0_20px_rgba(91,101,220,0.6)]">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="relative">
                <h3 className="text-base font-medium text-on-dark">{p.title}</h3>
                <p className="mt-1 text-sm text-on-dark-soft">{p.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}