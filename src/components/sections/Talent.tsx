import { Section } from "@/components/site/Section";
import { ReflectiveCard } from "@/components/site/ReflectiveCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const talents = [
  { role: "UI/UX Designer", name: "Aria K.", uni: "MIT", focus: "Product design, design systems" },
  { role: "Frontend Developer", name: "Noor R.", uni: "Stanford", focus: "React, Next.js, animation" },
  { role: "Video Editor", name: "Iván T.", uni: "RISD", focus: "Brand films, motion design" },
  { role: "Brand Designer", name: "Mei L.", uni: "Parsons", focus: "Identity, packaging, type" },
  { role: "Marketing Specialist", name: "Sara A.", uni: "LSE", focus: "Growth, lifecycle, content" },
  { role: "App Engineer", name: "Jonas H.", uni: "ETH Zürich", focus: "Cross-platform, performance" },
];

export function Talent() {
  return (
    <Section
      eyebrow="Talent network"
      title="Real people. Real portfolios. Real projects."
      description="A few examples of the kind of talent you'll find on a Novara team."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((t, i) => (
          <ScrollReveal key={t.role + i} delay={i * 0.05}>
            <ReflectiveCard className="h-full">
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-mute)]">
                {t.role}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{t.uni}</p>
              <div className="mt-8 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4 text-xs text-[color:var(--text-mute)]">
                <span>{t.focus}</span>
                <span>✦</span>
              </div>
            </ReflectiveCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}