import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CalendarDays, Clock3, Video, ArrowRight } from "lucide-react";

const perks = [
  { icon: Clock3, label: "30-minute intro call" },
  { icon: Video, label: "Google Meet — no prep needed" },
  { icon: CalendarDays, label: "Same-week availability" },
];

// Friendly slot mockup (purely visual)
const slots = ["Mon · 10:00", "Tue · 14:30", "Wed · 11:00", "Thu · 16:00", "Fri · 09:30", "Fri · 17:00"];

export function BookAppointment() {
  return (
    <Section eyebrow="Book a call" title="Talk to a strategist this week." description="Pick a 30-minute slot, share what you're building, and we'll come back with a clear plan and team proposal.">
      <div className="grid gap-6 overflow-hidden rounded-lg border border-[color:var(--hairline)] bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        {/* Left: pitch */}
        <div className="relative flex flex-col justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--brand-lavender)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--brand-navy)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open for new projects
            </div>
            <h3 className="mt-5 text-3xl font-semibold leading-[1.1] md:text-4xl">
              A clear plan in <span className="bg-gradient-to-r from-[color:var(--brand-indigo)] to-[color:var(--brand-navy)] bg-clip-text text-transparent">one conversation.</span>
            </h3>
            <p className="mt-4 text-sm text-[color:var(--text-soft)] md:text-base">
              No slides, no sales pitch — just a senior from the studio asking the right questions about your product, brand, or growth motion.
            </p>

            <ul className="mt-6 space-y-3">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-[color:var(--text-soft)]">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--brand-lavender)] text-[color:var(--brand-indigo)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[color:var(--brand-indigo)] px-5 py-3 text-sm font-medium text-white indigo-glow transition-all hover:bg-[color:var(--brand-navy)]"
            >
              Book an appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:hello@astrallabs.studio"
              className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--hairline-strong)] bg-white px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-[color:var(--brand-lavender)]"
            >
              hello@astrallabs.studio
            </a>
          </div>
        </div>

        {/* Right: faux calendar */}
        <div className="relative overflow-hidden rounded-md section-dark p-6 md:p-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--brand-indigo)]/40 blur-3xl" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">This week</p>
              <p className="mt-1 text-base font-medium text-white">Available slots</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white">
              <CalendarDays className="h-4 w-4" />
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-2 gap-2.5">
            {slots.map((s, i) => (
              <Link
                key={s}
                to="/contact"
                className={`group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white/90 backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.1] ${i === 1 ? "ring-1 ring-white/30" : ""}`}
              >
                <span className="tabular-nums">{s}</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="relative mt-6 flex items-center justify-between text-[11px] text-white/55">
            <span>Times shown in your local timezone</span>
            <span className="tabular-nums">UTC+6</span>
          </div>
        </div>
      </div>
    </Section>
  );
}