// Placeholder thumbnails (user will replace later). Using Unsplash for now.
const projects = [
  { title: "Flyplugin", tag: "SaaS · Plugin", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80" },
  { title: "Era", tag: "Fintech · AI", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
  { title: "Accessr", tag: "Productivity", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80" },
  { title: "Camery", tag: "Recruitment", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80" },
  { title: "Lumen", tag: "Design Tool", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80" },
  { title: "Northwind", tag: "Brand · Web", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
];

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function WorkShowcase() {
  const loop = [...projects, ...projects];
  const areaRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <section id="work" className="relative overflow-hidden">
      {/* Single rail aligned with Hero's outer rail */}
      <div className="mx-auto w-full max-w-[1320px] border-x border-[color:var(--hairline)]">
        <div
            ref={areaRef}
            onMouseMove={handleMove}
            onMouseEnter={handleMove}
            onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
            className="group relative overflow-hidden border-t border-[color:var(--hairline)] cursor-none"
            style={{
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <div className="flex w-max gap-6 animate-[work-marquee_40s_linear_infinite]">
              {loop.map((p, i) => (
                <a
                  key={`${p.title}-${i}`}
                  href="#work"
                  className="relative block w-[560px] max-w-[80vw] shrink-0 overflow-hidden rounded-md border border-[color:var(--hairline)] bg-black/[0.025]"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
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
            {/* Custom cursor */}
            <div
              aria-hidden
              className="pointer-events-none absolute z-20 flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-opacity duration-150"
              style={{
                left: cursor.x,
                top: cursor.y,
                transform: "translate(12px, 12px)",
                opacity: cursor.visible ? 1 : 0,
              }}
            >
              Visit site
              <ArrowUpRight size={14} />
            </div>
            <style>{`@keyframes work-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        </div>
      </div>
    </section>
  );
}
