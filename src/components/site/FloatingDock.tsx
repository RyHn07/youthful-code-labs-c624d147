import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Home, Briefcase, Users, FolderKanban, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/" as const, label: "Home", icon: Home },
  { to: "/services" as const, label: "Services", icon: Sparkles },
  { to: "/work" as const, label: "Work", icon: FolderKanban },
  { to: "/talent" as const, label: "Talent", icon: Users },
  { to: "/careers" as const, label: "Careers", icon: Briefcase },
  { to: "/contact" as const, label: "Contact", icon: Send },
];

export function FloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ratio = window.scrollY / Math.max(1, window.innerHeight);
      setVisible(ratio > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      aria-hidden={!visible}
    >
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-full glass px-2 py-2 shadow-2xl"
        aria-label="Quick navigation"
      >
        {items.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="group flex h-10 items-center gap-2 rounded-full px-3 text-sm text-[color:var(--text-soft)] transition-all hover:bg-black/[0.06] hover:text-foreground"
            activeProps={{ className: "bg-black/[0.07] text-foreground" }}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}