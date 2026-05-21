import { FullWidthContainer, OuterContainer, InnerContainer } from "@/components/site/Containers";

export function TrustBar() {
  return (
    <FullWidthContainer borders="y">
      <OuterContainer className="h-[60px]">
        <InnerContainer
          borders="x"
          className="flex h-full items-center justify-center text-sm text-[color:var(--text-mute)]"
        >
          <span>Trusted by startups, founders, and small businesses worldwide</span>
        </InnerContainer>
      </OuterContainer>
    </FullWidthContainer>
  );
}
