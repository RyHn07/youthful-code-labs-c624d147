import { useMemo, useState } from "react";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { ArrowUpRight } from "lucide-react";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';

type Project = {
  title: string;
  category: string;
  year: number;
  summary: string;
  talent: string;
  href: string;
  cover: string;
};

const projects: Project[] = [
  {
    title: "Flyplugin",
    category: "SaaS",
    year: 2025,
    summary: "Marketing site and plugin marketplace for a developer-tools startup.",
    talent: "Aria Khan",
    href: "#",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  },
  {
    title: "Era",
    category: "Fintech",
    year: 2025,
    summary: "AI-driven analytics dashboard with real-time portfolio insights.",
    talent: "Noor Rahman",
    href: "#",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    title: "Accessr",
    category: "Productivity",
    year: 2024,
    summary: "Accessibility-first task manager with keyboard-only flows.",
    talent: "Jonas Holm",
    href: "#",
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
  },
  {
    title: "Camery",
    category: "Recruitment",
    year: 2024,
    summary: "Async video interview platform for distributed hiring teams.",
    talent: "Mei Lin",
    href: "#",
    cover: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    title: "Lumen",
    category: "Design Tool",
    year: 2024,
    summary: "Lightweight design system manager for product teams.",
    talent: "Sara Amari",
    href: "#",
    cover: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80",
  },
  {
    title: "Northwind",
    category: "Brand",
    year: 2023,
    summary: "Identity system and launch site for a climate-tech startup.",
    talent: "Iván Torres",
    href: "#",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
];

export function WorkGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <OuterContainer borders="x">
      <InnerContainer borders="x" className="!px-0">
        {/* Categories bar */}
        <div className="flex flex-wrap items-center gap-2 border-t border-[color:var(--hairline)] px-6 md:px-10 py-5">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3.5 py-1.5 transition-colors ${
                  isActive
                    ? "border-[#252525] bg-[#252525] text-white"
                    : "border-[color:var(--hairline)] text-[#252525] hover:bg-black/[0.04]"
                }`}
                style={{
                  fontFamily: mono,
                  fontSize: "12px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[color:var(--hairline)]">
          {filtered.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`group relative block p-6 md:p-8 border-b border-[color:var(--hairline)] transition-colors hover:bg-black/[0.02] sm:border-r [&:nth-child(2n)]:sm:border-r-0 ${
                i >= filtered.length - (filtered.length % 2 === 0 ? 2 : 1)
                  ? "sm:last:border-b-0"
                  : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg border border-[color:var(--hairline)] bg-[#f5f3ee]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div
                className="mt-5"
                style={{
                  fontFamily: mono,
                  fontSize: "12px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "rgba(37,37,37,0.55)",
                }}
              >
                {p.category} · {p.year}
              </div>
              <h3
                className="mt-1"
                style={{
                  fontFamily: display,
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  color: "#252525",
                }}
              >
                {p.title}
              </h3>

              <p
                className="mt-3"
                style={{
                  fontFamily: mono,
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "-0.01em",
                  color: "rgba(37, 37, 37, 0.65)",
                }}
              >
                {p.summary}
              </p>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[color:var(--hairline)] pt-4">
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: "12px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "rgba(37,37,37,0.55)",
                  }}
                >
                  Project done by{" "}
                  <span style={{ color: "#252525" }}>{p.talent}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#252525] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}