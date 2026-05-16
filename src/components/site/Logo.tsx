import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4L12 2.5z"
          stroke="#252525"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.4" fill="#252525" />
      </svg>
      <span
        style={{
          fontFamily:
            '"Saans SemiMono-TRIAL SemiBold", "Saans SemiMono-TRIAL SemiBold Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace',
          fontWeight: 700,
          fontSize: "18px",
          letterSpacing: "-0.01em",
          color: "#252525",
        }}
      >
        QODRAN
      </span>
    </Link>
  );
}