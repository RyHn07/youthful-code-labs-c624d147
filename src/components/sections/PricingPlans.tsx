import { Link } from "@tanstack/react-router";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

const titleStyle = {
  fontFamily: display,
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "1.35",
  letterSpacing: "-0.02em",
  color: "#252525",
};
const softStyle = { color: "rgba(37, 37, 37, 0.5)" };

const statusBarStyle = {
  fontFamily: mono,
  fontSize: "12px",
  lineHeight: "16px",
  textTransform: "uppercase" as const,
  color: "rgb(22, 22, 18)",
};

const cardClass =
  "relative overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white p-7 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]";

const plans = [
  {
    tier: "Landing page",
    price: "$3000",
    priceMeta: "Fixed",
    features: [
      "Design + Dev in 2 weeks or less",
      "Wireframes & prototypes",
      "Custom Animation",
      "Framer development",
      "1 month of  free support",
    ],
  },
  {
    tier: "Multipage website",
    price: "$4000",
    priceMeta: "Fixed",
    features: [
      "Design + Dev in 3 weeks or less",
      "Wireframes & prototypes",
      "Custom Animation",
      "Framer development",
      "1 month of  free support",
    ],
  },
  {
    tier: "Retainer",
    price: "Custom",
    priceMeta: "Per Month",
    features: [
      "Ongoing design & dev support",
      "Priority turnaround",
      "New pages, sections & features",
      "Direct line to the team",
      "Pause or cancel anytime",
    ],
  },
];

export function PricingPlans() {
  return (
    <section id="pricing" className="relative">
      <OuterContainer>
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar */}
          <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div className="flex items-center justify-between py-3" style={statusBarStyle}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] text-[10px] font-bold text-white">
                  ◉
                </span>
                Pricing
              </div>
              <div className="tabular-nums">03 | 04</div>
            </div>
          </div>

          {/* Body */}
          <div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
              {/* Left context */}
              <div className="lg:col-span-5 lg:border-r lg:border-[color:var(--hairline)]">
                <div className="flex flex-col px-6 md:px-10 pt-12 pb-14 lg:sticky lg:top-0 lg:h-screen lg:justify-center lg:py-12">
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
                  Flexible Pricing Plans
                </h2>
                <p
                  className="mt-5 max-w-md"
                  style={{
                    fontFamily: mono,
                    fontSize: "14px",
                    lineHeight: "1.5em",
                    letterSpacing: "-0.01em",
                    color: "rgba(37, 37, 37, 0.65)",
                  }}
                >
                  Transparent pricing designed to scale with your project needs. No hidden fees,
                  just high-quality design and development.
                </p>

                <div className="mt-10 border-t border-[color:var(--hairline)] pt-6">
                  <p style={titleStyle}>
                    "The team delivered a high-quality site in record time.{" "}
                    <span style={softStyle}>
                      Communication was seamless throughout the entire process."
                    </span>
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-[color:var(--hairline)] bg-[#F7F7F7]" />
                    <div>
                      <p
                        style={{
                          fontFamily: display,
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#252525",
                        }}
                      >
                        Sarah Jenkins
                      </p>
                      <p style={{ fontFamily: mono, fontSize: "12px", color: "rgba(37,37,37,0.55)" }}>
                        Founder, Aura Studio
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Right pricing stack */}
              <div className="flex flex-col gap-5 px-6 md:px-10 pt-12 pb-14 lg:col-span-7">
                {plans.map((p) => (
                  <article key={p.tier} className={cardClass}>
                    {/* Top row: tier label + toggle */}
                    <div className="flex items-start justify-between gap-4">
                      <span
                        style={{
                          fontFamily: mono,
                          fontSize: "12px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "rgba(37,37,37,0.65)",
                        }}
                      >
                        {p.tier}
                      </span>
                      <div
                        className="flex items-center gap-3"
                        style={{
                          fontFamily: mono,
                          fontSize: "13px",
                          letterSpacing: "-0.01em",
                          color: "#252525",
                        }}
                      >
                        <span>Design &amp; Dev</span>
                        <span
                          role="switch"
                          aria-checked="true"
                          className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#252525]"
                        >
                          <span className="absolute left-0.5 h-4 w-4 rounded-full bg-[#ff7a1a]" />
                        </span>
                        <span style={{ color: "rgba(37,37,37,0.55)" }}>Design only</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span
                        style={{
                          fontFamily: display,
                          fontWeight: 700,
                          fontSize: "56px",
                          lineHeight: 1,
                          letterSpacing: "-0.04em",
                          color: "#252525",
                        }}
                      >
                        {p.price}
                      </span>
                      <span
                        style={{
                          fontFamily: display,
                          fontWeight: 500,
                          fontSize: "18px",
                          letterSpacing: "-0.02em",
                          color: "rgba(37,37,37,0.55)",
                        }}
                      >
                        {p.priceMeta}
                      </span>
                    </div>

                    {/* Features */}
                    <div
                      className="mt-7 flex flex-wrap gap-x-3 gap-y-1"
                      style={{
                        fontFamily: mono,
                        fontSize: "13px",
                        letterSpacing: "-0.01em",
                        color: "rgba(37,37,37,0.7)",
                      }}
                    >
                      {p.features.map((f) => (
                        <span key={f}>{f}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#252525] px-5 py-2.5 text-white transition-opacity hover:opacity-90"
                      style={{ fontFamily: mono, fontSize: "13px", letterSpacing: "-0.01em" }}
                    >
                      Get Started
                      <span aria-hidden>›</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
