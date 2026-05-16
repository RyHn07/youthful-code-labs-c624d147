import { Section } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  PenTool,
  Code2,
  Layout,
  Image as ImageIcon,
  Tag,
  Film,
  Megaphone,
  PencilLine,
  Smartphone,
  Bot,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { icon: Layout, title: "Website Design", desc: "Considered, conversion-aware design systems." },
  { icon: Code2, title: "Website Development", desc: "Fast, SEO-ready sites built with modern stacks." },
  { icon: PenTool, title: "UI/UX Design", desc: "Product flows, design systems, and prototypes." },
  { icon: ImageIcon, title: "Graphic Design", desc: "Editorial, decks, packaging, and social assets." },
  { icon: Tag, title: "Branding", desc: "Identity systems with voice, motion, and rules." },
  { icon: Film, title: "Video Editing", desc: "Reels, ads, and brand films with rhythm." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance, organic, and lifecycle programs." },
  { icon: PencilLine, title: "Content Creation", desc: "Thoughtful copy, articles, and brand voice." },
  { icon: Share2, title: "Social Media", desc: "Calendars, formats, and community ops." },
  { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile and web apps." },
  { icon: Bot, title: "Automation & AI", desc: "Workflows, agents, and internal tooling." },
];

export function Services() {
  return (
    <Section
      eyebrow="Services"
      title="Studio-grade work across the full digital stack."
      description="Cherry-picked talent assembled into a small, senior-led team for each engagement."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.03}>
            <div
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-[color:var(--hairline-strong)]",
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 60%)",
                }}
                onMouseMove={(e) => {
                  const r = (e.target as HTMLElement).getBoundingClientRect();
                  (e.target as HTMLElement).style.setProperty(
                    "--x",
                    `${e.clientX - r.left}px`,
                  );
                  (e.target as HTMLElement).style.setProperty(
                    "--y",
                    `${e.clientY - r.top}px`,
                  );
                }}
              />
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--hairline)] bg-black/[0.04]">
                  <s.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                </div>
                <span className="text-xs text-[color:var(--text-mute)]">0{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}