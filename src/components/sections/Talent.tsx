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
      description="A few examples of the kind of talent you'll find on a Astrallabs team."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((t, i) => (
          <ScrollReveal key={t.role + i} delay={i * 0.05}>
            <ReflectiveCard className="h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-lavender)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--brand-navy)]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--brand-indigo)]" />
                {t.role}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{t.uni}</p>
              <div className="mt-8 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4 text-xs text-[color:var(--text-mute)]">
                <span>{t.focus}</span>
                <span className="text-[color:var(--brand-indigo)]">✦</span>
              </div>
            </ReflectiveCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}