import { Container } from "@/components/site/Container";

// Placeholder thumbnails (user will replace later). Using Unsplash for now.
const projects = [
  { title: "Flyplugin", tag: "SaaS · Plugin", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80" },
  { title: "Era", tag: "Fintech · AI", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
  { title: "Accessr", tag: "Productivity", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80" },
  { title: "Camery", tag: "Recruitment", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80" },
  { title: "Lumen", tag: "Design Tool", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80" },
  { title: "Northwind", tag: "Brand · Web", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
];

export function WorkShowcase() {
  const loop = [...projects, ...projects];
  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden">
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
      </Container>

      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max gap-6 animate-[work-marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <a
              key={`${p.title}-${i}`}
              href="#work"
              className="relative block w-[560px] max-w-[80vw] shrink-0 overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-black/[0.025]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div className="text-[11px] uppercase tracking-[0.16em] opacity-70 font-mono-friendly">
                  {p.tag}
                </div>
                <div className="text-lg font-semibold tracking-tight">
                  {p.title}
                </div>
              </div>
            </a>
          ))}
        </div>
        <style>{`@keyframes work-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
}
