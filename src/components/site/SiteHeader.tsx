import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { OuterContainer, InnerContainer } from "./Containers";
import { cn } from "@/lib/utils";

const saansSans =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';

const nav = [
  { href: "#work", label: "Work" },
  { href: "#our-services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "/talent", label: "Talent" },
  { href: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "relative z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
        "border-b border-[color:var(--hairline)]",
      )}
    >
      <OuterContainer>
        <InnerContainer borders="x" className="relative flex h-16 items-center justify-between">
          <Logo />
        <nav
          className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:opacity-70"
              style={{
                fontFamily: saansSans,
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "#252525",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-[color:var(--hairline-strong)] bg-white px-5 py-2 transition-all hover:bg-black hover:text-white"
            style={{
              fontFamily: saansSans,
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Let's Talk
          </Link>
        </div>
          <button
          className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)]"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </InnerContainer>
      </OuterContainer>
      {open && (
        <div className="md:hidden border-t border-[color:var(--hairline)] bg-background/95 backdrop-blur-xl">
          <OuterContainer>
            <InnerContainer borders="x" className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-[color:var(--text-soft)] hover:bg-black/[0.05] hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[color:var(--hairline)] bg-black/[0.05] px-4 py-2 text-sm"
            >
              Let's Talk
            </Link>
            </InnerContainer>
          </OuterContainer>
        </div>
      )}
    </header>
  );
}