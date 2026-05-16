import { Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/site/AuroraBackground";
import { ParticlesBackground } from "@/components/site/ParticlesBackground";
import { DecryptedText } from "@/components/site/DecryptedText";
import { Container } from "@/components/site/Container";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-32 md:pt-48 md:pb-44">
      <AuroraBackground />
      <ParticlesBackground density={70} />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/[0.04] px-3 py-1.5 text-xs text-[color:var(--text-soft)] backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" />
          A talent-network studio · est. 2024
        </motion.div>
        <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
          <DecryptedText text="Affordable, high-quality" /> <br />
          <span className="text-[color:var(--text-soft)]">digital solutions powered by</span>{" "}
          <span className="relative inline-block">
            young talent.
            <span
              aria-hidden
              className="absolute -inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-2xl text-balance text-base text-[color:var(--text-soft)] md:text-lg"
        >
          We assemble project-based teams of top university students, supervised
          by senior experts — delivering modern design, engineering, and growth
          work at startup speed and indie prices.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/[0.08]"
          >
            Join the network
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}