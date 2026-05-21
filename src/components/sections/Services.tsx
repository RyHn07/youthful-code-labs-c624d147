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
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CardGlow from "@/components/ui/card-glow";

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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.03}>
            <CardGlow borderRadius={16} className="h-full" glowColor="280 90 70" colors={["#a78bfa", "#ec4899", "#5b65dc"]}>
            <div
              className={cn(
                "group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500",
                "bg-gradient-to-b from-[#1a1a24] to-[#0c0c12] text-white",
                "ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]",
                "hover:-translate-y-1 hover:ring-white/20",
              )}
            >
              {/* Aurora glow at bottom */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] opacity-70 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:-bottom-16"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(167,139,250,0.55) 0%, rgba(236,72,153,0.45) 35%, rgba(91,101,220,0.35) 60%, transparent 75%)",
                }}
              />
              {/* Top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              {/* Icon tile */}
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.1] group-hover:scale-105">
                <s.icon className="h-5 w-5 text-white" />
              </div>

              <h3 className="relative mt-8 text-2xl font-semibold leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                {s.desc}
              </p>

              <div className="relative mt-auto pt-8">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-all group-hover:gap-2.5">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

              <span className="absolute right-5 top-5 text-xs font-medium text-white/30">
                0{i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
            </div>
            </CardGlow>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}