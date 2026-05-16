import { Section } from "@/components/site/Section";
import { CountUp } from "@/components/site/CountUp";

const stats = [
  { label: "Community members", to: 1200, suffix: "+" },
  { label: "Completed projects", to: 180, suffix: "+" },
  { label: "Client satisfaction", to: 98, suffix: "%" },
  { label: "Active talents", to: 340, suffix: "" },
];

export function Stats() {
  return (
    <Section
      className="section-dark relative overflow-hidden"
      eyebrow="By the numbers"
      title="A growing ecosystem."
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[color:var(--brand-indigo)]/60"
          >
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-32 bg-[color:var(--brand-indigo)]/0 blur-3xl transition-all duration-500 group-hover:bg-[color:var(--brand-indigo)]/30" />
            <div className="relative bg-gradient-to-br from-white to-[color:var(--brand-indigo-soft)] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="relative mt-2 text-sm text-on-dark-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}