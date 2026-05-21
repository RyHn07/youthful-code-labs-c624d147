import { OuterContainer, InnerContainer } from "@/components/site/Containers";

export function TrustBar() {
  return (
    <section className="h-[60px]">
      <OuterContainer className="h-full">
        <InnerContainer
          borders="x"
          className="flex h-full items-center justify-center text-sm text-[color:var(--text-mute)]"
        >
          <span>Trusted by startups, founders, and small businesses worldwide</span>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
