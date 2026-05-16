import { Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-foreground px-8 py-20 text-background md:px-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Let's build something your visitors will actually remember.
            </h2>
            <p className="mt-6 text-background/70">Schedule a call today</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:opacity-90"
              >
                <Calendar className="h-4 w-4" />
                Book a call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:hello@novara.studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-white/10"
              >
                hello@novara.studio
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
