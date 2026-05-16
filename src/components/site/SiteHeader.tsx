import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/talent", label: "Talent" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[color:var(--hairline)] bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-[color:var(--text-soft)] transition-colors hover:bg-white/[0.05] hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/[0.05]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/[0.04] px-4 py-1.5 text-sm font-medium transition-all hover:bg-white/[0.08]"
          >
            Start a project
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
        <button
          className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)]"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-[color:var(--hairline)] bg-background/95 backdrop-blur-xl">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-[color:var(--text-soft)] hover:bg-white/[0.05] hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/[0.05]" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[color:var(--hairline)] bg-white/[0.05] px-4 py-2 text-sm"
            >
              Start a project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}