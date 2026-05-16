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
    <Section eyebrow="By the numbers" title="A growing ecosystem.">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[color:var(--hairline)] bg-white/[0.02] p-6">
            <div className="text-4xl font-semibold tracking-tight md:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-[color:var(--text-mute)]">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}