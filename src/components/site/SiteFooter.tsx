import { Link } from "@tanstack/react-router";
import footerLogo from "@/assets/footer-logo.png";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0e0e0d] text-white">
      {/* Top vertical light beams */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[340px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 100% at 35% 0%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(60% 100% at 50% 0%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(60% 100% at 65% 0%, rgba(255,255,255,0.10), transparent 60%)",
          maskImage:
            "linear-gradient(180deg, black 0%, black 60%, transparent 100%)",
        }}
      />

      <OuterContainer>
        <InnerContainer className="relative pt-16 pb-8">
        {/* Top brand row */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#0e0e0d]" style={{ fontFamily: display, fontWeight: 800 }}>
            A
          </span>
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: "22px", letterSpacing: "0.02em" }}>
            ASTRALLABS
          </span>
        </div>

        {/* Main row: headline left, link columns right */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                textAlign: "left",
                color: "rgb(255, 255, 255)",
              }}
            >
              Let's Build Something
              <br />
              Your Visitors Will
              <br />
              Actually Remember.
            </h2>

            <div className="mt-12">
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

          {/* Right: link columns + tools, pushed right */}
          <div className="lg:col-span-6 lg:pl-12">
            <div className="grid grid-cols-3 gap-16">
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
              <div className="flex flex-wrap gap-8">
                <ToolBadge
                  label="Framer Expert"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                    </svg>
                  }
                />
                <ToolBadge
                  label="Webflow Expert"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="M24 4.515l-7.658 14.97h-7.514l3.205-6.227h-.144C9.245 17.694 5.293 19.41 0 19.485v-6.142s3.387-.2 5.377-2.294H0V4.515h6.498v5.345l.144-.002 2.654-5.343h4.914v5.31l.144-.001 2.754-5.309H24z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Centered chrome logo */}
        <div className="relative mt-20 flex justify-center">
          <img
            src={footerLogo}
            alt="Astrallabs mark"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-[clamp(220px,28vw,420px)] h-auto select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            style={{
              maskImage:
                "linear-gradient(180deg, black 0%, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(180deg, black 0%, black 70%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div
          className="relative mt-8 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center"
          style={{ fontFamily: mono, fontSize: "12px", color: "rgba(255,255,255,0.5)" }}
        >
          <p>© Copyright {new Date().getFullYear()} Astrallabs. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Condition</a>
          </div>
        </div>
        </InnerContainer>
      </OuterContainer>
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
      <ul className="space-y-3" style={{ fontFamily: display, fontSize: "14px" }}>
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

function ToolBadge({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{ fontFamily: display, fontSize: "13px", fontWeight: 500 }}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white text-[#0e0e0d]">
        {icon}
      </span>
      {label}
    </span>
  );
}