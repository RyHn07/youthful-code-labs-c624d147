import type { ReactNode } from "react";
import { OuterContainer, InnerContainer } from "./Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';

interface PageHeroProps {
  index?: string;
  eyebrow: string;
  meta?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ index = "01", eyebrow, meta, title, description, children }: PageHeroProps) {
  return (
    <OuterContainer borders="x">
      <InnerContainer borders="x" className="!px-0">
        {/* Status bar */}
        <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
          <div
            className="flex items-center justify-between py-3"
            style={{
              fontFamily: mono,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "rgb(22, 22, 18)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2C]" />
              <span>{index} — {eyebrow}</span>
            </div>
            {meta && <span>{meta}</span>}
          </div>
        </div>

        {/* Hero content */}
        <div className="px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-balance"
              style={{
                fontFamily: display,
                fontWeight: 500,
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: "1.02",
                letterSpacing: "-0.04em",
                color: "#252525",
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                className="mt-6 max-w-xl mx-auto"
                style={{
                  fontFamily: mono,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.01em",
                  color: "rgba(37, 37, 37, 0.65)",
                }}
              >
                {description}
              </p>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}

export const pageMono = mono;
export const pageDisplay = display;