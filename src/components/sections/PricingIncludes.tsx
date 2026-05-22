import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { Sparkles, Crown, Zap, Layers, Search, LifeBuoy } from "lucide-react";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

const statusBarStyle = {
  fontFamily: mono,
  fontSize: "12px",
  lineHeight: "16px",
  textTransform: "uppercase" as const,
  color: "rgb(22, 22, 18)",
};

const items = [
  {
    icon: Sparkles,
    title: "Illustration, motion & more",
    desc: "Illustration and animation designed to make your product feel alive and premium",
  },
  {
    icon: Crown,
    title: "Premium Design",
    desc: "You work directly with senior talent. No juniors. No outsourcing.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    desc: "Ship in days, not months. Daily updates, never weekly silence.",
  },
  {
    icon: Layers,
    title: "Built to scale",
    desc: "Production-ready code and design systems that grow with your team.",
  },
  {
    icon: Search,
    title: "SEO ready",
    desc: "Semantic structure, fast performance, and metadata baked in from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    desc: "We stick around after launch — fixes, tweaks, and new features on demand.",
  },
];

export function PricingIncludes() {
  return (
    <section id="pricing-includes" className="relative">
      <OuterContainer>
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar */}
          <div className="border-t border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div className="flex items-center justify-between py-3" style={statusBarStyle}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] text-[10px] font-bold text-white">
                  ◉
                </span>
                What's Included
              </div>
              <div className="tabular-nums">04 | 04</div>
            </div>
          </div>

          {/* Grid */}
          <div className="px-6 md:px-10 py-14 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-16">
              {items.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-5">
                  {/* Icon tile */}
                  <div
                    className="relative shrink-0 grid h-14 w-14 place-items-center rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 30% 20%, #3a3a3a 0%, #1a1a1a 60%, #0e0e0e 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px -10px rgba(0,0,0,0.45)",
                    }}
                  >
                    <Icon
                      className="h-[22px] w-[22px]"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div className="pt-0.5">
                    <p
                      style={{
                        fontFamily: display,
                        fontWeight: 600,
                        fontSize: "18px",
                        lineHeight: "1.3",
                        letterSpacing: "-0.02em",
                        color: "#252525",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      className="mt-1.5"
                      style={{
                        fontFamily: mono,
                        fontSize: "14px",
                        lineHeight: "1.5em",
                        letterSpacing: "-0.01em",
                        color: "rgba(37, 37, 37, 0.55)",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}