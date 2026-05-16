import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/**
 * Studio local time pill. Renders nothing on SSR to avoid hydration mismatch.
 */
export function LiveClock({ timeZone = "Asia/Dhaka", label = "DHK" }: { timeZone?: string; label?: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  if (!now) return null;

  return (
    <div
      className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/60 px-3 py-1.5 text-xs font-medium tabular-nums text-[color:var(--text-soft)] backdrop-blur"
      title={`Studio time (${timeZone})`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <Clock className="h-3 w-3 opacity-60" />
      <span>{now}</span>
      <span className="text-[color:var(--text-mute)]">{label}</span>
    </div>
  );
}