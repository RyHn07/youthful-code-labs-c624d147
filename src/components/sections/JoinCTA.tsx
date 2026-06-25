import { Link } from "@tanstack/react-router";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { ArrowRight } from "lucide-react";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';

export function JoinCTA() {
  return (
    <OuterContainer>
      <InnerContainer className="!px-0">
        <div className="px-6 md:px-10 py-20 md:py-28 text-center">
          <h2
            style={{
              fontFamily: display,
              fontWeight: 500,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "#252525",
            }}
          >
            Got a project? Or got the talent?
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: mono,
              fontSize: "15px",
              lineHeight: "24px",
              color: "rgba(37, 37, 37, 0.65)",
            }}
          >
            Whether you're a founder shipping the next idea, or a student ready for real work — we'd love to talk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-dark-gradient px-6 py-3 text-white transition-all hover:opacity-90"
              style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "-0.03em" }}
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--hairline)] bg-white px-6 py-3 text-[#252525] transition-colors hover:bg-black/[0.03]"
              style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "-0.03em" }}
            >
              Join the network
            </Link>
          </div>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}