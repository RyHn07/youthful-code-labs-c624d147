import { useEffect } from "react";

export function ClickSpark() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const sparkles = 10;
      for (let i = 0; i < sparkles; i++) {
        const s = document.createElement("span");
        const angle = (i / sparkles) * Math.PI * 2;
        const distance = 36 + Math.random() * 14;
        s.style.cssText = `
          position:fixed;left:${e.clientX}px;top:${e.clientY}px;
          width:4px;height:4px;border-radius:9999px;background:rgba(255,255,255,0.9);
          pointer-events:none;z-index:9999;
          transform:translate(-50%,-50%);
          transition:transform 600ms cubic-bezier(.2,.7,.2,1),opacity 600ms ease;
          box-shadow:0 0 8px rgba(255,255,255,0.6);
        `;
        document.body.appendChild(s);
        requestAnimationFrame(() => {
          s.style.transform = `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.4)`;
          s.style.opacity = "0";
        });
        setTimeout(() => s.remove(), 700);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
  return null;
}