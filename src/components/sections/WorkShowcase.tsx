import { Container } from "@/components/site/Container";

// Solid-color project tiles (no animation per request).
const projects = [
  { title: "Flyplugin", tag: "SaaS · Plugin", bg: "from-violet-200 to-violet-50" },
  { title: "Era", tag: "Fintech · AI", bg: "from-zinc-900 to-zinc-700 text-white" },
  { title: "Accessr", tag: "Productivity", bg: "from-sky-100 to-white" },
  { title: "Camery", tag: "Recruitment", bg: "from-amber-100 to-orange-50" },
  { title: "Lumen", tag: "Design Tool", bg: "from-neutral-200 to-neutral-50" },
  { title: "Northwind", tag: "Brand · Web", bg: "from-emerald-100 to-emerald-50" },
];

export function WorkShowcase() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-3 text-[14px] tracking-[-0.01em] text-[color:var(--text-mute)] font-mono-friendly">
              Recent Work · 01 | 04
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Selected projects.
            </h2>
          </div>
          <a
            href="#work"
            className="hidden text-sm text-[color:var(--text-soft)] underline-offset-4 hover:underline md:block"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-gradient-to-br ${p.bg} p-6 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="text-[11px] uppercase tracking-[0.16em] opacity-70 font-mono-friendly">
                  {p.tag}
                </div>
                <div className="text-2xl font-semibold tracking-tight">
                  {p.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
