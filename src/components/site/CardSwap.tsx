import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SwapCard {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags?: string[];
}

export function CardSwap({
  cards,
  interval = 4500,
  className,
}: {
  cards: SwapCard[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (cards.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % cards.length), interval);
    return () => clearInterval(id);
  }, [cards.length, interval]);

  if (cards.length === 0) return null;

  return (
    <div className={cn("relative mx-auto h-[420px] w-full max-w-xl", className)}>
      {cards.map((c, i) => {
        const offset = (i - index + cards.length) % cards.length;
        const isTop = offset === 0;
        return (
          <AnimatePresence key={c.id}>
            <motion.div
              key={c.id + offset}
              className="absolute inset-0 rounded-3xl glass p-8 cursor-pointer"
              onClick={() => setIndex((index + 1) % cards.length)}
              animate={{
                y: offset * 14,
                scale: 1 - offset * 0.04,
                opacity: offset > 2 ? 0 : 1 - offset * 0.18,
                zIndex: cards.length - offset,
                rotate: offset * -1.2,
              }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              style={{ pointerEvents: isTop ? "auto" : "none" }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-mute)]">
                    {c.category}
                  </div>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--text-soft)]">{c.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--hairline)] px-3 py-1 text-xs text-[color:var(--text-mute)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}