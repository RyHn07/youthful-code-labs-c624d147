import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/site/Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
      <Container className="relative">
        {/* Top status bar */}
        <div className="mb-12 flex items-center justify-between border-y border-[color:var(--hairline)] py-3 text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-mute)] font-mono-friendly">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>
          <div className="hidden md:block">Dhaka, Bangladesh</div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/70 px-4 py-1.5 text-xs text-[color:var(--text-soft)] backdrop-blur">
            Design &amp; Dev Studio for Startups
          </span>

          <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
            Building <span className="italic font-light">unique</span> websites
            for modern startups
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-base text-[color:var(--text-soft)] md:text-lg">
            High-quality visual and dev solutions tailored to each client's needs.
            With a focus on delivering work that's both distinctive and effective.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-white/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-white"
            >
              Recent Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
