import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { Heart, Palette, Figma, Framer, Sparkle, CheckCircle2, User } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

const statusBarStyle = {
  fontFamily: mono,
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  textTransform: "uppercase" as const,
  color: "rgba(37, 37, 37, 0.55)",
};

const cardClass =
  "relative overflow-hidden rounded-2xl border border-[color:var(--hairline-strong)] bg-[#F7F7F7] p-7";

const titleStyle = {
  fontFamily: display,
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "1.35",
  letterSpacing: "-0.02em",
  color: "#252525",
};
const softStyle = { color: "rgba(37, 37, 37, 0.5)" };

/* --- Decorative bits --- */
function DotsArt() {
  const dots = [
    { x: 38, y: 14, r: 10 },
    { x: 64, y: 10, r: 14 },
    { x: 86, y: 22, r: 9 },
    { x: 18, y: 36, r: 7 },
    { x: 50, y: 34, r: 6 },
    { x: 74, y: 38, r: 11 },
    { x: 8, y: 58, r: 12 },
    { x: 32, y: 62, r: 7 },
    { x: 80, y: 70, r: 8 },
    { x: 24, y: 86, r: 14 },
    { x: 60, y: 88, r: 9 },
    { x: 90, y: 92, r: 6 },
  ];
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#252525" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-[#252525] text-white">
        <Sparkle className="h-6 w-6" />
      </div>
    </div>
  );
}

function LayersArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-[220px] w-[180px]">
        {/* Top diamond */}
        <div
          className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-md bg-[#252525] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]"
          style={{ transform: "translateX(-50%) rotate(45deg)" }}
        >
          <div className="grid h-full w-full place-items-center" style={{ transform: "rotate(-45deg)" }}>
            <span style={{ fontFamily: display, color: "white", fontWeight: 700, fontSize: "22px" }}>Q</span>
          </div>
        </div>
        {/* Stacked layers */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 h-16 w-24 -translate-x-1/2 rounded-md border border-[color:var(--hairline-strong)] bg-white/80"
            style={{
              top: `${90 + i * 22}px`,
              transform: `translateX(-50%) rotate(45deg)`,
              opacity: 1 - i * 0.18,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ToolsRow() {
  const tools = [Figma, Framer, Sparkle, Palette, Figma];
  return (
    <div className="mt-5 flex items-center justify-center gap-3">
      {tools.map((Icon, i) => (
        <div
          key={i}
          className="grid h-11 w-11 place-items-center rounded-xl border border-[color:var(--hairline)] bg-white"
        >
          <Icon className="h-5 w-5 text-[#252525]" />
        </div>
      ))}
    </div>
  );
}

function CodeMockup() {
  return (
    <div className="relative h-full min-h-[160px] w-full">
      {/* Website live chip */}
      <div className="absolute right-4 top-0 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white px-3 py-1.5 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span style={{ fontFamily: mono, fontSize: "12px", color: "#252525" }}>Website live</span>
      </div>
      {/* Code paper */}
      <div className="absolute right-2 top-10 h-[140px] w-[200px] rotate-[6deg] rounded-lg border border-[color:var(--hairline)] bg-white p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)]">
        {[80, 60, 70, 50, 65, 45].map((w, i) => (
          <div key={i} className="mb-1.5 h-1.5 rounded-full bg-[#E5E5E5]" style={{ width: `${w}%` }} />
        ))}
      </div>
      {/* Optimized chip */}
      <div className="absolute bottom-2 right-16 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-white px-3 py-1.5 shadow-sm">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#ff7a1a]" />
        <span style={{ fontFamily: mono, fontSize: "12px", color: "#252525" }}>Optimized</span>
      </div>
    </div>
  );
}

function AvatarRow() {
  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-[#FFE5D0] text-[#ff7a1a]">
        <User className="h-4 w-4" />
      </div>
      <div className="-ml-2 grid h-11 w-11 place-items-center rounded-full bg-[#FFE5D0] text-[#ff7a1a]">
        <User className="h-5 w-5" />
      </div>
      <div className="-ml-2 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
        <img src={founder1} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="-ml-2 grid h-11 w-11 place-items-center rounded-full bg-[#FFE5D0] text-[#ff7a1a]">
        <User className="h-5 w-5" />
      </div>
      <div className="-ml-2 grid h-9 w-9 place-items-center rounded-full bg-[#FFE5D0] text-[#ff7a1a]">
        <User className="h-4 w-4" />
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative">
      <OuterContainer>
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar */}
          <div className="border-t border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div className="flex items-center justify-between py-3" style={statusBarStyle}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] text-[10px] font-bold text-white">
                  ◉
                </span>
                Why Choose Us
              </div>
              <div className="tabular-nums">02 | 04</div>
            </div>
          </div>

          {/* Title */}
          <div className="px-6 md:px-10 pt-12 pb-10 text-center">
            <h2
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#252525",
              }}
            >
              Why Founders Choose Qodran
            </h2>
          </div>

          {/* Bento grid */}
          <div className="px-6 md:px-10 pb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 — tall left, dots */}
              <article className={`${cardClass} md:row-span-2 min-h-[460px] flex flex-col`}>
                <div className="relative flex-1">
                  <DotsArt />
                </div>
                <div className="mt-6">
                  <p style={titleStyle}>
                    Fast &amp; efficient process,{" "}
                    <span style={softStyle}>with daily updates instead of weekly silence.</span>
                  </p>
                </div>
              </article>

              {/* Card 2 — top middle, ideas → designs */}
              <article className={`${cardClass} min-h-[220px] flex flex-col items-center justify-center text-center`}>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFE5EC] shadow-[0_0_30px_rgba(255,100,130,0.35)]">
                    <Heart className="h-6 w-6 text-[#ff4d6d]" fill="#ff4d6d" />
                  </div>
                  <span style={{ fontFamily: display, fontSize: "20px", color: "#252525" }}>+</span>
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFE9D0] shadow-[0_0_30px_rgba(255,150,50,0.35)]">
                    <Palette className="h-6 w-6 text-[#ff7a1a]" />
                  </div>
                </div>
                <p className="mt-5" style={titleStyle}>
                  Your ideas turned into <span style={softStyle}>great designs</span>
                </p>
              </article>

              {/* Card 3 — tall right, layers */}
              <article className={`${cardClass} md:row-span-2 min-h-[460px] flex flex-col`}>
                <p style={titleStyle}>
                  Every site built from zero for your brand.{" "}
                  <span style={softStyle}>No templates, no recycled layouts.</span>
                </p>
                <div className="relative mt-4 flex-1">
                  <LayersArt />
                </div>
              </article>

              {/* Card 4 — middle row, tools */}
              <article className={`${cardClass} min-h-[220px] flex flex-col items-center justify-center text-center`}>
                <p style={titleStyle}>
                  Build with Industry <span style={softStyle}>leading tools</span>
                </p>
                <ToolsRow />
              </article>

              {/* Card 5 — wide bottom-left, support */}
              <article className={`${cardClass} md:col-span-2 min-h-[240px] flex items-center`}>
                <div className="max-w-[55%]">
                  <p style={titleStyle}>
                    We stick around even after site goes live.{" "}
                    <span style={softStyle}>Ongoing support, fixes, and updates.</span>
                  </p>
                </div>
                <div className="ml-auto h-full w-[45%] relative">
                  <CodeMockup />
                </div>
              </article>

              {/* Card 6 — bottom right, avatars */}
              <article className={`${cardClass} min-h-[240px] flex flex-col items-center justify-center text-center`}>
                <AvatarRow />
                <p className="mt-6" style={titleStyle}>
                  Talk straight to <span style={softStyle}>the people building your Product</span>
                </p>
              </article>
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
