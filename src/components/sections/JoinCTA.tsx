import { Link } from "@tanstack/react-router";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { ArrowRight } from "lucide-react";

export function JoinCTA() {
  return (
    <OuterContainer borders="x">
      <InnerContainer borders="x" className="!px-0">
        <div className="px-6 md:px-10 py-16 md:py-24">
          <div className="section-dark relative overflow-hidden rounded-lg border border-white/10 p-10 md:p-16">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--brand-indigo)]/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--brand-indigo-soft)]/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
            Got a project? Or got the talent?
          </h2>
          <p className="mt-4 text-on-dark-soft">
            Whether you're a founder shipping the next idea, or a student ready for real work — we'd love to talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[color:var(--brand-navy)] transition-all hover:bg-[color:var(--brand-lavender)]">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10">
              Join the network
            </Link>
          </div>
          </div>
          </div>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}