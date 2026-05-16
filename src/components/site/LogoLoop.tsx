import { cn } from "@/lib/utils";

export function LogoLoop({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-[loop_36s_linear_infinite] gap-16 py-2">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex h-12 shrink-0 items-center justify-center px-4 text-base font-medium tracking-wide text-[color:var(--text-mute)] transition-colors hover:text-foreground"
          >
            <span className="opacity-80">{name}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes loop { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}