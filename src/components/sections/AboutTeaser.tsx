import { Section } from "@/components/site/Section";
import { GlassCard } from "@/components/site/GlassCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { GraduationCap, Users, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "A network, not a payroll",
    body: "We collaborate with top university students across design, engineering, and growth — assembling the right team for each engagement instead of staffing one heavy roster.",
  },
  {
    icon: Users,
    title: "Guided by senior experts",
    body: "Every project is led by experienced organizers and, when needed, senior professionals and professors — so the work meets enterprise quality bars.",
  },
  {
    icon: Sparkles,
    title: "Built for startups & founders",
    body: "Lean teams, modern tools, and clear ownership. You get studio-grade work without studio-grade overhead — and the talent gets real, paid project experience.",
  },
];

export function AboutTeaser() {
  return (
    <Section
      eyebrow="The model"
      title="A studio built around a community of young talent."
      description="We replace traditional agency overhead with a curated network of students and specialists — supervised, organized, and delivered like a top-tier studio."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <GlassCard className="h-full">
              <p.icon className="h-5 w-5 text-foreground" />
              <h3 className="mt-5 text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-soft)]">
                {p.body}
              </p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}