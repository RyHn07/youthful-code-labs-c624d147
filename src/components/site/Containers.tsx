import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Site-wide container system.
 *
 * Three containers used across every section:
 *   1. OuterContainer  → max-w-[1320px]  (outer rails)
 *   2. InnerContainer  → max-w-6xl = 1152px + px-6 md:px-10 (content rails)
 *   3. FullWidthContainer → full viewport width, no max-width
 *
 * Design lines are drawn using container borders. Pass `borders` to add
 * hairline strokes on any side(s): "x" | "y" | "t" | "b" | "l" | "r" | "all"
 * or any combination like "tx", "tbx", etc.
 */

type BorderSide = "t" | "b" | "l" | "r" | "x" | "y" | "all";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  borders?: BorderSide | string;
}

function borderClasses(borders?: string) {
  if (!borders) return "";
  const sides = new Set<string>();
  if (borders.includes("all")) {
    sides.add("border");
  } else {
    if (borders.includes("x")) sides.add("border-x");
    if (borders.includes("y")) sides.add("border-y");
    if (borders.includes("t")) sides.add("border-t");
    if (borders.includes("b")) sides.add("border-b");
    if (borders.includes("l")) sides.add("border-l");
    if (borders.includes("r")) sides.add("border-r");
  }
  return `${Array.from(sides).join(" ")} border-[color:var(--hairline)]`;
}

/** Outer rail: max 1320px, centered. */
export function OuterContainer({ className, borders, ...props }: BaseProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1320px]",
        borderClasses(borders),
        className,
      )}
      {...props}
    />
  );
}

/** Inner content rail: max 1152px, with horizontal page padding. */
export function InnerContainer({ className, borders, ...props }: BaseProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6 md:px-10",
        borderClasses(borders),
        className,
      )}
      {...props}
    />
  );
}

/** Full viewport width, no max-width. */
export function FullWidthContainer({ className, borders, ...props }: BaseProps) {
  return (
    <div
      className={cn("w-full", borderClasses(borders), className)}
      {...props}
    />
  );
}