import { Container } from "@/components/site/Container";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "001",
    title: "Responsive Website",
    desc: "Pixel-perfect on every screen — desktop, tablet, and phone.",
  },
  {
    n: "002",
    title: "Figma to Code",
    desc: "We'll rebuild your design into production code, pixel-perfect.",
  },
  {
    n: "003",
    title: "Website Migration",
    desc: "Move your site from WordPress, Webflow, or Wix to a modern stack — fast.",
  },
  {
    n: "004",
    title: "Custom Animations",
    desc: "Lightweight motion that loads fast and brings your site to life.",
  },
  {
    n: "005",
    title: "Site Audit",
    desc: "Already live? We'll review your site and fix what's slowing it down.",
  },
];

const sectors = ["Startups", "SaaS", "AI", "Fintech", "Fashion", "Portfolio", "Technology"];

export function ServicesList() {
  return (
    <section id="our-services" className="relative py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-[14px] tracking-[-0.01em] text-[color:var(--text-mute)] font-mono-friendly">
              Our Services · 02 | 04
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Services built around how startups actually ship.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 max-w-md">
            <span className="text-[14px] tracking-[-0.01em] text-[color:var(--text-mute)] font-mono-friendly">
              Sectors:
            </span>
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[color:var(--hairline)] bg-white/60 px-3 py-1 text-xs text-[color:var(--text-soft)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-white/50">
          {services.map((s) => (
            <a
              key={s.n}
              href="#contact"
              className="group grid grid-cols-12 items-center gap-6 border-b border-[color:var(--hairline)] px-6 py-7 transition-colors last:border-b-0 hover:bg-white md:px-10 md:py-9"
            >
              <span className="col-span-2 text-xs text-[color:var(--text-mute)] font-mono-friendly md:col-span-1">
                ({s.n})
              </span>
              <h3 className="col-span-10 text-2xl font-semibold tracking-tight md:col-span-4 md:text-3xl">
                {s.title}
              </h3>
              <p className="col-span-12 text-sm text-[color:var(--text-soft)] md:col-span-6 md:text-base">
                {s.desc}
              </p>
              <ArrowUpRight className="col-span-12 h-5 w-5 justify-self-end text-[color:var(--text-mute)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:col-span-1" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
