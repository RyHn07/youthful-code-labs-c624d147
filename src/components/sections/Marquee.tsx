import { Sparkles } from "lucide-react";

const words = [
  "Brand systems",
  "Web design",
  "Product engineering",
  "Motion & video",
  "AI workflows",
  "Growth marketing",
  "Content strategy",
  "Mobile apps",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section aria-label="What we craft" className="relative overflow-hidden border-y border-[color:var(--hairline)] bg-[color:var(--brand-lavender)] py-8">
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform [animation:marquee_40s_linear_infinite]"
      >
        {row.map((w, i) => (
          <div key={`${w}-${i}`} className="flex items-center gap-10 text-2xl font-semibold tracking-tight text-[color:var(--brand-navy)] md:text-3xl">
            <span>{w}</span>
            <Sparkles className="h-4 w-4 text-[color:var(--brand-indigo)]" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}