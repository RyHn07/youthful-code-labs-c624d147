import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  containerClassName?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative py-24 md:py-32", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-14 max-w-2xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/[0.02] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--text-mute)]">
                <span className="h-1 w-1 rounded-full bg-foreground/80" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-balance text-base text-[color:var(--text-soft)] md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}