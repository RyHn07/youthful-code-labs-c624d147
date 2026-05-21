import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';
const displayBold =
  '"Graphik Trial Semibold", "Graphik Trial Semibold Placeholder", sans-serif';

function LocalTime() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka",
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{now ?? "--:--:-- --"}</span>;
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <OuterContainer borders="x">
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar — bottom hairline closes the row inside the inner rails */}
          <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div
              className="flex items-center justify-between py-3"
              style={{
                fontFamily: mono,
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "rgb(22, 22, 18)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </div>
              <div className="flex items-center gap-2">
                <LocalTime />
                <span>DAC</span>
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="px-6 md:px-10 flex h-[550px] items-center justify-center">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span
            className="mb-8 inline-flex items-center rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2"
            style={{
              fontFamily: mono,
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "1.5em",
              letterSpacing: "-0.01em",
              color: "#585455",
            }}
          >
            Design &amp; Dev Studio for Startups
          </span>

          <h1
            className="text-balance"
            style={{
              fontFamily: display,
              fontWeight: 500,
              fontSize: "68px",
              lineHeight: "68px",
              letterSpacing: "-0.04em",
              color: "#252525",
            }}
          >
            The Future of Digital Services Starts Here
          </h1>

          <p
            className="mt-6 max-w-xl text-balance text-center"
            style={{
              fontFamily: mono,
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "-0.01em",
              color: "rgba(37, 37, 37, 0.65)",
            }}
          >
            High-quality visual and dev solutions tailored to each client&apos;s needs.
            With a focus on delivering work that&apos;s both distinctive and effective.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#252525] px-6 py-3 text-white transition-all hover:opacity-90"
              style={{
                fontFamily: mono,
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-white px-6 py-3 text-[#252525] transition-all hover:bg-black/[0.04]"
              style={{
                fontFamily: mono,
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Recent Work
              <ArrowRight className="h-4 w-4" />
            </a>
            </div>
          </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
