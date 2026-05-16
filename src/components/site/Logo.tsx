import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <div className="relative grid h-8 w-8 place-items-center rounded-lg border border-[color:var(--hairline)] bg-black/[0.04]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
        <span className="text-sm font-bold tracking-tight">N</span>
      </div>
      <span className="text-base font-semibold tracking-tight">
        Novara<span className="text-[color:var(--text-mute)]">/Studio</span>
      </span>
    </Link>
  );
}