import { Link } from "@tanstack/react-router";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0e0e0d] text-white">
      {/* Giant background logo mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 select-none"
        style={{
          fontFamily: display,
          fontWeight: 900,
          fontSize: "clamp(280px, 38vw, 560px)",
          lineHeight: 1,
          letterSpacing: "-0.08em",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Q
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-6 md:px-10 pt-20 pb-8">
        {/* Top: logo */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#0e0e0d]" style={{ fontFamily: display, fontWeight: 800 }}>
            Q
          </span>
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: "22px", letterSpacing: "-0.02em" }}>
            ASTRALLABS
          </span>
        </div>

        {/* Main grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: headline + schedule */}
          <div className="lg:col-span-7">
            <h2
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Let's Build Something
              <br />
              Your Visitors Will
              <br />
              Actually Remember.
            </h2>

            <div className="mt-14">
              <p
                className="mb-3"
                style={{ fontFamily: mono, fontSize: "13px", color: "rgba(255,255,255,0.55)" }}
              >
                Schedule a call today
              </p>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 pr-2.5 backdrop-blur">
                <div className="flex items-center gap-3 pl-2 pr-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f0b27a] to-[#8b5a2b]" />
                  <div>
                    <div style={{ fontFamily: display, fontWeight: 600, fontSize: "14px" }}>
                      Ihshan Zaad
                    </div>
                    <div style={{ fontFamily: mono, fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>
                      Product Designer
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[#0e0e0d] transition hover:bg-white/90"
                  style={{ fontFamily: display, fontWeight: 600, fontSize: "13px" }}
                >
                  Book a call <span aria-hidden>›</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-8">
              <FooterCol
                title="Sections"
                links={[
                  ["/work", "Work"],
                  ["/services", "Services"],
                  ["/#pricing", "Pricing"],
                ]}
              />
              <FooterCol
                title="Info"
                links={[
                  ["/contact", "Contact"],
                  ["/#faq", "FAQ"],
                  ["/contact", "Form"],
                ]}
              />
              <FooterCol
                title="Social"
                links={[
                  ["https://x.com", "X"],
                  ["https://linkedin.com", "Linkedin"],
                ]}
                external
              />
            </div>

            <div className="mt-12">
              <div
                className="mb-4"
                style={{ fontFamily: display, fontWeight: 600, fontSize: "15px" }}
              >
                Expert Tools
              </div>
              <div className="flex flex-wrap gap-3">
                <ToolBadge label="Framer Expert" mark="F" />
                <ToolBadge label="Webflow Expert" mark="W" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative mt-24 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center"
          style={{ fontFamily: mono, fontSize: "12px", color: "rgba(255,255,255,0.5)" }}
        >
          <p>© Copyright {new Date().getFullYear()} Astrallabs. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external = false,
}: {
  title: string;
  links: ReadonlyArray<readonly [string, string]>;
  external?: boolean;
}) {
  return (
    <div>
      <div
        className="mb-4"
        style={{ fontFamily: display, fontWeight: 600, fontSize: "15px" }}
      >
        {title}
      </div>
      <ul className="space-y-3" style={{ fontFamily: mono, fontSize: "13px" }}>
        {links.map(([to, label]) =>
          external ? (
            <li key={label}>
              <a
                href={to}
                target="_blank"
                rel="noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ) : (
            <li key={label}>
              <Link
                to={to}
                className="text-white/65 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

function ToolBadge({ label, mark }: { label: string; mark: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
      style={{ fontFamily: display, fontSize: "13px", fontWeight: 500 }}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white text-[10px] font-bold text-[#0e0e0d]">
        {mark}
      </span>
      {label}
    </span>
  );
}