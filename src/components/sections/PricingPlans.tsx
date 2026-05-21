import { Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";

const plans = [
  {
    tier: "Tier 01",
    name: "Landing page",
    price: "$3,000",
    priceMeta: "Fixed Price",
    features: ["5 Sections", "SEO Optimized", "Responsive", "7-Day Turnaround", "CMS Setup"],
    cta: "Get Started",
  },
  {
    tier: "Tier 02",
    name: "Multipage website",
    price: "$4,000+",
    priceMeta: "Fixed Price",
    features: ["Up to 10 Pages", "Custom CMS", "Performance Audit", "Blog Setup", "Analytics"],
    cta: "Get Started",
  },
  {
    tier: "Tier 03",
    name: "Monthly retainer",
    price: "Custom",
    priceMeta: "Per Month",
    features: ["Ongoing Support", "Priority Access", "Strategy Calls", "Asset Audit", "Scalable Hours"],
    cta: "Get Started",
  },
];

export function PricingPlans() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-[#f5f3ee]">
      <Container>
        <div className="mb-10 text-[14px] tracking-[-0.01em] text-[color:var(--text-mute)] font-mono-friendly">
          Pricing · 03 | 04
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left context column */}
          <div className="flex flex-col lg:col-span-5">
            <h2 className="mb-8 text-5xl font-bold tracking-tight text-[#0d0d0d] md:text-6xl">
              Flexible Pricing Plans
            </h2>
            <p className="mb-12 max-w-md text-xl leading-relaxed text-[#2d2d2d]">
              Transparent pricing designed to scale with your project needs. No hidden fees, just
              high-quality design and development.
            </p>

            <div className="mt-auto border-t border-[#e8e4dd] pt-8">
              <p className="mb-4 text-lg italic leading-snug text-[#0d0d0d]">
                "The team delivered a high-quality site in record time. Communication was seamless
                throughout the entire process."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#e8e4dd]" />
                <div>
                  <p className="font-medium text-[#0d0d0d]">Sarah Jenkins</p>
                  <p className="text-sm text-[#2d2d2d]">Founder, Aura Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right pricing stack */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {plans.map((p) => (
              <div
                key={p.name}
                className="group border border-[#e8e4dd] bg-white p-8 transition-all duration-300 hover:border-[#0d0d0d]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex-1">
                    <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]">
                      {p.tier}
                    </span>
                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-[#0d0d0d]">
                      {p.name}
                    </h3>

                    <div className="mb-6 inline-flex rounded-full border border-[#e8e4dd] bg-[#f5f3ee] p-1">
                      <button
                        type="button"
                        className="rounded-full bg-[#0d0d0d] px-4 py-1.5 text-xs font-medium text-[#f5f3ee] shadow-sm"
                      >
                        Design & Dev
                      </button>
                      <button type="button" className="px-4 py-1.5 text-xs font-medium text-[#2d2d2d]">
                        Design Only
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-[#e8e4dd] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d2d2d]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex min-w-[180px] flex-col items-start justify-between md:items-end">
                    <div className="mb-8 text-left md:text-right">
                      <div className="mb-1 text-5xl font-bold tracking-tight text-[#0d0d0d]">
                        {p.price}
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wide text-[#2d2d2d]">
                        {p.priceMeta}
                      </span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center bg-[#0d0d0d] px-8 py-4 font-bold text-[#f5f3ee] transition-colors hover:bg-[#2d2d2d]"
                    >
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
