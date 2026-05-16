import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import {
  Home,
  Briefcase,
  Users,
  FolderKanban,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items: { to: any; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Sparkles },
  { to: "/work", label: "Work", icon: FolderKanban },
  { to: "/talent", label: "Talent", icon: Users },
  { to: "/careers", label: "Careers", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Send },
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

  // Tracks mouse X within the dock; Infinity = no hover (resting state).
  const mouseX = useMotionValue<number>(Infinity);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      aria-hidden={!visible}
    >
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex h-16 items-end gap-3 rounded-md glass px-4 pb-3 shadow-2xl"
        aria-label="Quick navigation"
      >
        {items.map((item) => (
          <DockIcon key={item.label} mouseX={mouseX} {...item} />
        ))}
      </motion.nav>
    </div>
  );
}

function DockIcon({
  mouseX,
  to,
  label,
  icon: Icon,
}: {
  mouseX: MotionValue<number>;
  to: any;
  label: string;
  icon: LucideIcon;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  // Distance from cursor to this icon's center.
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Magnify when cursor is near (±150px), peak size 64, rest size 40.
  const sizeRaw = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const iconRaw = useTransform(distance, [-150, 0, 150], [20, 32, 20]);

  const size = useSpring(sizeRaw, { mass: 0.1, stiffness: 170, damping: 14 });
  const iconSize = useSpring(iconRaw, { mass: 0.1, stiffness: 170, damping: 14 });

  return (
    <Link
      to={to}
      ref={ref as any}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
      aria-label={label}
    >
      <motion.div
        style={{ width: size, height: size }}
        className="relative flex aspect-square items-center justify-center rounded-md bg-white/70 ring-1 ring-[color:var(--hairline)] transition-colors hover:bg-white hover:ring-[color:var(--brand-indigo)]/40"
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 4, x: "-50%" }}
              className="pointer-events-none absolute -top-9 left-1/2 whitespace-nowrap rounded-md border border-[color:var(--hairline)] bg-foreground px-2 py-1 text-[11px] font-medium text-background shadow-md"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center text-[color:var(--brand-navy)]"
        >
          <Icon className="h-full w-full p-1.5" />
        </motion.div>
      </motion.div>
    </Link>
  );
}
