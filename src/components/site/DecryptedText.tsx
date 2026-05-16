import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-=/";

export function DecryptedText({
  text,
  className,
  duration = 1400,
  startDelay = 200,
}: {
  text: string;
  className?: string;
  duration?: number;
  startDelay?: number;
}) {
  const [out, setOut] = useState(text);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now() + startDelay;
    const end = start + duration;
    const step = (now: number) => {
      if (now < start) {
        frame.current = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(progress * text.length);
      let next = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < reveal || ch === " " || ch === "\n") next += ch;
        else next += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(next);
      if (now < end) frame.current = requestAnimationFrame(step);
      else setOut(text);
    };
    frame.current = requestAnimationFrame(step);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [text, duration, startDelay]);

  return (
    <span className={cn("font-mono-friendly", className)} aria-label={text}>
      {out}
    </span>
  );
}