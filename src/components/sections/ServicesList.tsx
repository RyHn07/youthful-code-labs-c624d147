import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import founder3 from "@/assets/founder-3.jpg";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

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

const sectors = ["Startups", "SaaS", "AI", "Fintech", "Fashion", "Portfolio", "Services"];

const statusBarStyle = {
  fontFamily: mono,
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  textTransform: "uppercase" as const,
  color: "rgba(37, 37, 37, 0.55)",
};

export function ServicesList() {
  return (
    <section id="our-services" className="relative">
      <OuterContainer>
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar — mirrors Hero */}
          <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div className="flex items-center justify-between py-3" style={statusBarStyle}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] text-[10px] font-bold text-white">
                  ◉
                </span>
                Our Services
              </div>
              <div className="tabular-nums">01 | 04</div>
            </div>
          </div>

          {/* Grid */}
          <div className="px-6 md:px-10 py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Sectors cell — top-left */}
              <div className="flex flex-col gap-4">
                <div style={statusBarStyle}>Sectors :</div>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-[color:var(--hairline-strong)] bg-transparent h-[44px] px-5"
                      style={{
                        fontFamily: display,
                        fontSize: "14px",
                        color: "#252525",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {services.map((s) => (
                <CardGlow key={s.n} borderRadius={16} className="min-h-[260px]">
                <article
                  className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--hairline)] bg-[#F7F7F7] p-7"
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: "13px",
                      color: "#ff7a1a",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    ({s.n})
                  </div>
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: display,
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02em",
                      color: "#252525",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-auto pt-6"
                    style={{
                      fontFamily: mono,
                      fontSize: "14px",
                      lineHeight: "22px",
                      letterSpacing: "-0.01em",
                      color: "rgba(37, 37, 37, 0.6)",
                    }}
                  >
                    {s.desc}
                  </p>
                </article>
                </CardGlow>
              ))}
            </div>
          </div>

          {/* Founders bar */}
          <div className="border-t border-[color:var(--hairline)] py-6">
            <div className="flex items-center gap-4 px-0">
              <div className="flex-1 flex items-center" style={{ gap: "16px" }}>
                <span className="h-px flex-1 bg-[color:var(--hairline-strong)]" />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "10px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "16px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "20px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "36px" }} />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src={founder1} alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-[var(--background)] object-cover" />
                  <img src={founder2} alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-[var(--background)] object-cover" />
                  <img src={founder3} alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-[var(--background)] object-cover" />
                  <span
                    className="h-9 w-9 inline-flex items-center justify-center rounded-full border-2 border-[var(--background)] bg-[#F0EBE3]"
                    style={{ fontFamily: mono, fontSize: "12px", color: "#252525" }}
                  >
                    20+
                  </span>
                </div>
                <span style={statusBarStyle}>We worked with founders around the world</span>
              </div>
              <div className="flex-1 flex items-center" style={{ gap: "16px" }}>
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "36px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "20px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "16px" }} />
                <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "10px" }} />
                <span className="h-px flex-1 bg-[color:var(--hairline-strong)]" />
              </div>
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
