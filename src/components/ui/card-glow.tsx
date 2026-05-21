import { useRef, useCallback, useState, useEffect, type ReactNode, type CSSProperties } from "react";

interface CardGlowProps {
  children?: ReactNode;
  className?: string;
  /** Must match the wrapped card's border-radius in px */
  borderRadius?: number;
  /** How close to the edge before glow appears (0-100) */
  edgeSensitivity?: number;
  /** HSL triplet "H S L" for the glow color */
  glowColor?: string;
  /** Outer glow extent in px */
  glowRadius?: number;
  /** Opacity multiplier (0.1-3.0) */
  glowIntensity?: number;
  /** Cone mask width (5-45) */
  coneSpread?: number;
  /** Mesh border colors */
  colors?: [string, string, string];
  /** Mesh border opacity (0-1) */
  borderOpacityMax?: number;
  /** Play intro sweep on mount */
  animated?: boolean;
  /** Style override on wrapper */
  style?: CSSProperties;
}

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const m = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!m) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(m[1]), s: parseFloat(m[2]), l: parseFloat(m[3]) };
}

function buildBoxShadow(glowColor: string, intensity: number): string {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const layers: [number, number, number, number, number][] = [
    [0, 0, 1, 0, 60], [0, 0, 3, 0, 50], [0, 0, 6, 0, 40],
    [0, 0, 15, 0, 30], [0, 0, 25, 2, 20], [0, 0, 50, 2, 10],
  ];
  return layers
    .map(([x, y, blur, spread, alpha]) => {
      const a = Math.min(alpha * intensity, 100);
      return `${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
    })
    .join(", ");
}

const GRADIENT_POSITIONS = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildMeshGradients(colors: string[]): string[] {
  const gradients: string[] = [];
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
  }
  return gradients;
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInCubic(x: number) { return x * x * x; }

const CardGlow: React.FC<CardGlowProps> = ({
  children,
  className = "",
  borderRadius = 16,
  edgeSensitivity = 30,
  glowColor = "30 90 60",
  glowRadius = 32,
  glowIntensity = 0.9,
  coneSpread = 25,
  colors = ["#ff7a1a", "#ff4d6d", "#c084fc"],
  borderOpacityMax = 0.9,
  animated = false,
  style,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorAngle, setCursorAngle] = useState(45);
  const [edgeProximity, setEdgeProximity] = useState(0);
  const [sweepActive, setSweepActive] = useState(false);

  const getCenter = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2] as const;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const [cx, cy] = getCenter(card);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    setEdgeProximity(Math.min(Math.max(1 / Math.min(kx, ky), 0), 1));
    if (dx === 0 && dy === 0) {
      setCursorAngle(0);
    } else {
      let deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (deg < 0) deg += 360;
      setCursorAngle(deg);
    }
  }, [getCenter]);

  useEffect(() => {
    if (!animated) return;
    setSweepActive(true);
    const angleStart = 110;
    const angleEnd = 465;
    const t0 = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - t0;
      const fadeIn = Math.min(elapsed / 500, 1);
      const sweep = Math.min(elapsed / 3000, 1);
      const fadeOut = elapsed > 3000 ? Math.min((elapsed - 3000) / 1000, 1) : 0;
      setEdgeProximity(easeOutCubic(fadeIn) * (1 - easeInCubic(fadeOut)));
      setCursorAngle(angleStart + (angleEnd - angleStart) * easeOutCubic(sweep));
      if (elapsed < 4000) raf = requestAnimationFrame(tick);
      else setSweepActive(false);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  const colorSensitivity = edgeSensitivity + 20;
  const isVisible = isHovered || sweepActive;
  const borderOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity)) * borderOpacityMax
    : 0;
  const glowOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity))
    : 0;

  const meshGradients = buildMeshGradients(colors);
  const angleDeg = `${cursorAngle.toFixed(3)}deg`;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`relative isolate ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        transform: "translate3d(0, 0, 0.01px)",
        ...style,
      }}
    >
      {/* mesh gradient border ring (sits on top of the card edge) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          borderRadius: `${borderRadius}px`,
          padding: "1.5px",
          background: meshGradients.join(", "),
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          opacity: borderOpacity,
          transition: isVisible ? "opacity 0.25s ease-out" : "opacity 0.6s ease-in-out",
        } as CSSProperties}
      />

      {/* outer glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute z-[1]"
        style={{
          inset: `${-glowRadius}px`,
          borderRadius: `${borderRadius + glowRadius}px`,
          maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          opacity: glowOpacity,
          mixBlendMode: "plus-lighter",
          transition: isVisible ? "opacity 0.25s ease-out" : "opacity 0.6s ease-in-out",
        }}
      >
        <span
          className="absolute"
          style={{
            inset: `${glowRadius}px`,
            borderRadius: `${borderRadius}px`,
            boxShadow: buildBoxShadow(glowColor, glowIntensity),
          }}
        />
      </span>

      {/* children render on their own layer */}
      <div className="relative z-0 h-full w-full" style={{ borderRadius: `${borderRadius}px` }}>
        {children}
      </div>
    </div>
  );
};

export default CardGlow;