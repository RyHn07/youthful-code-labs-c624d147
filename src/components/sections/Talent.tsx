import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { ArrowUpRight, Globe, Linkedin, Twitter, Dribbble, Github } from "lucide-react";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';

type Social = { type: "website" | "linkedin" | "twitter" | "dribbble" | "github"; href: string };

const talents: {
  name: string;
  role: string;
  location: string;
  bio: string;
  initials: string;
  portfolio: string;
  socials: Social[];
}[] = [
  {
    name: "Aria Khan",
    role: "Product Designer",
    location: "Berlin, DE",
    bio: "Designs scalable product systems and conversion-aware marketing sites.",
    initials: "AK",
    portfolio: "https://aria.design",
    socials: [
      { type: "website", href: "https://aria.design" },
      { type: "dribbble", href: "https://dribbble.com" },
      { type: "linkedin", href: "https://linkedin.com" },
    ],
  },
  {
    name: "Noor Rahman",
    role: "Frontend Engineer",
    location: "Dhaka, BD",
    bio: "React, Next.js and motion. Ships fast, accessible interfaces end-to-end.",
    initials: "NR",
    portfolio: "https://noor.dev",
    socials: [
      { type: "website", href: "https://noor.dev" },
      { type: "github", href: "https://github.com" },
      { type: "twitter", href: "https://twitter.com" },
    ],
  },
  {
    name: "Mei Lin",
    role: "Brand Designer",
    location: "Singapore",
    bio: "Identity systems, typography and packaging for studios and startups.",
    initials: "ML",
    portfolio: "https://meilin.studio",
    socials: [
      { type: "website", href: "https://meilin.studio" },
      { type: "dribbble", href: "https://dribbble.com" },
      { type: "linkedin", href: "https://linkedin.com" },
    ],
  },
  {
    name: "Jonas Holm",
    role: "Full-Stack Engineer",
    location: "Zürich, CH",
    bio: "TypeScript, edge runtimes and cross-platform apps with a focus on perf.",
    initials: "JH",
    portfolio: "https://jonas.codes",
    socials: [
      { type: "website", href: "https://jonas.codes" },
      { type: "github", href: "https://github.com" },
      { type: "linkedin", href: "https://linkedin.com" },
    ],
  },
  {
    name: "Iván Torres",
    role: "Motion Designer",
    location: "Mexico City, MX",
    bio: "Brand films and product motion — After Effects, Cinema 4D, Rive.",
    initials: "IT",
    portfolio: "https://ivan.video",
    socials: [
      { type: "website", href: "https://ivan.video" },
      { type: "twitter", href: "https://twitter.com" },
      { type: "linkedin", href: "https://linkedin.com" },
    ],
  },
  {
    name: "Sara Amari",
    role: "Webflow Developer",
    location: "London, UK",
    bio: "CMS-driven marketing sites with custom interactions and clean DX.",
    initials: "SA",
    portfolio: "https://sara.build",
    socials: [
      { type: "website", href: "https://sara.build" },
      { type: "dribbble", href: "https://dribbble.com" },
      { type: "linkedin", href: "https://linkedin.com" },
    ],
  },
];

const socialIcon = {
  website: Globe,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
  github: Github,
} as const;

export function Talent() {
  return (
    <OuterContainer borders="x">
      <InnerContainer borders="x" className="!px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[color:var(--hairline)]">
          {talents.map((t) => (
            <div
              key={t.name}
              className="group relative p-8 md:p-10 border-b border-r border-[color:var(--hairline)] last:border-r-0 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(2n)]:lg:border-r [&:nth-child(3n)]:lg:border-r-0 transition-colors hover:bg-black/[0.02]"
            >
              <div className="flex items-start gap-4">
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-dark-gradient text-white"
                  style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "0.02em" }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h3
                    style={{
                      fontFamily: display,
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "1.15",
                      letterSpacing: "-0.02em",
                      color: "#252525",
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: mono,
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      color: "rgba(37,37,37,0.55)",
                    }}
                  >
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>

              <p
                className="mt-6"
                style={{
                  fontFamily: mono,
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "-0.01em",
                  color: "rgba(37, 37, 37, 0.65)",
                }}
              >
                {t.bio}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-[color:var(--hairline)] pt-5">
                <a
                  href={t.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-all hover:gap-2.5"
                  style={{
                    fontFamily: mono,
                    fontSize: "13px",
                    letterSpacing: "-0.01em",
                    color: "#252525",
                  }}
                >
                  View portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-1.5">
                  {t.socials.map((s) => {
                    const Icon = socialIcon[s.type];
                    return (
                      <a
                        key={s.type}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.type}
                        className="grid h-8 w-8 place-items-center rounded-md border border-[color:var(--hairline)] text-[#252525] transition-colors hover:bg-[#252525] hover:text-white"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}