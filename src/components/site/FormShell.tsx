import type { ReactNode } from "react";
import { pageMono as mono } from "./PageHero";

interface FormShellProps {
  title: string;
  blurb: string;
  contacts: { icon: ReactNode; label: string }[];
  children: ReactNode;
}

export function FormShell({ title, blurb, contacts, children }: FormShellProps) {
  return (
    <div className="grid gap-0 overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-stretch">
      {/* Left dark panel */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-dark-gradient px-8 py-4 md:px-10 md:py-5 text-white">
        <h3
          style={{
            fontFamily: '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif',
            fontSize: "28px",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h3>
        <p
          className="mt-3 max-w-xs text-white/65"
          style={{ fontFamily: mono, fontSize: "14px", lineHeight: "22px" }}
        >
          {blurb}
        </p>

        <ul className="mt-4 space-y-3">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80">
                {c.icon}
              </span>
              <span
                className="text-white/85"
                style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "-0.01em" }}
              >
                {c.label}
              </span>
            </li>
          ))}
        </ul>

        {/* decorative blobs */}
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-[#FF6B2C]/60 blur-2xl" />
        <div className="pointer-events-none absolute right-16 bottom-16 h-28 w-28 rounded-full bg-white/10 backdrop-blur" />

        <div className="relative mt-5 flex items-center gap-3 text-white/70">
          <span
            className="mr-2"
            style={{ fontFamily: mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Follow
          </span>
          {[
            { l: "X", h: "https://x.com" },
            { l: "IG", h: "https://instagram.com" },
            { l: "IN", h: "https://linkedin.com" },
          ].map((s) => (
            <a
              key={s.l}
              href={s.h}
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-[11px] text-white/80 transition-colors hover:bg-white/15"
              style={{ fontFamily: mono }}
            >
              {s.l}
            </a>
          ))}
        </div>
      </div>

      {/* Right form area */}
      <div className="flex flex-col justify-center px-8 py-4 md:px-12 md:py-5">{children}</div>
    </div>
  );
}

export const underlineInput =
  "w-full border-0 border-b border-[color:var(--hairline)] bg-transparent px-0 py-2 text-[14px] leading-[20px] text-[#252525] placeholder:text-[#25252566] outline-none transition-colors focus:border-[#252525] font-[var(--font-mono,'Saans_SemiMono-TRIAL_Regular')]";

export const fieldLabel = {
  fontFamily:
    '"Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", monospace',
  fontSize: "13px",
  lineHeight: "18px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(37,37,37,0.85)",
} as const;

export function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6A19 19 0 0 1 3.6 4.1 1 1 0 0 1 4.6 3h4.1a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.3 1L8.9 10.4a16 16 0 0 0 6 6l1.6-1.6a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .5 1Z" />
    </svg>
  );
}
export function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}