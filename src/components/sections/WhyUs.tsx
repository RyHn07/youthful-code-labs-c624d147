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
      eyebrow="Why us"
      title="A new kind of agency — light, talented, and accountable."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.04}>
            <div className="group flex gap-4 rounded-2xl border border-[color:var(--hairline)] bg-black/[0.025] p-5 transition-all hover:bg-black/[0.04]">
              <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[color:var(--hairline)] bg-black/[0.05]">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div>
                <h3 className="text-base font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--text-soft)]">{p.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}