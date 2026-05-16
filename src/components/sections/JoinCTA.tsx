import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";

export function JoinCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-10 md:p-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />
        <div className="relative max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Got a project? Or got the talent?
          </h2>
          <p className="mt-4 text-[color:var(--text-soft)]">
            Whether you're a founder shipping the next idea, or a student ready for real work — we'd love to talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-white/[0.04] px-5 py-3 text-sm font-medium">
              Join the network
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}