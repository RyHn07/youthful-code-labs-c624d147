import { FullWidthContainer, OuterContainer, InnerContainer } from "@/components/site/Containers";

export function TrustBar() {
  return (
    <FullWidthContainer borders="y">
      <OuterContainer>
        <InnerContainer borders="x" className="px-4">
          <div className="flex items-center gap-4 py-6">
            <div className="flex-1 flex items-center" style={{ gap: "16px" }}>
              <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "36px" }} />
              <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "20px" }} />
              <span className="h-px flex-1 bg-[color:var(--hairline-strong)]" />
            </div>
            <div className="flex-1 flex items-center" style={{ gap: "16px" }}>
              <span className="h-px flex-1 bg-[color:var(--hairline-strong)]" />
              <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "20px" }} />
              <span className="w-px bg-[color:var(--hairline-strong)]" style={{ height: "36px" }} />
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </FullWidthContainer>
  );
}
