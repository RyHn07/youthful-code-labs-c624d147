import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="section-dark relative overflow-hidden border-t border-white/10 py-16">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-[color:var(--brand-indigo)]/30 blur-3xl" />
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-on-dark-soft">
            Affordable high-quality digital solutions powered by young talent
            and guided by professionals.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <FooterCol
            title="Studio"
            links={[
              ["/about", "About"],
              ["/work", "Work"],
              ["/talent", "Talent"],
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              ["/services", "Services"],
              ["/careers", "Careers"],
              ["/contact", "Contact"],
            ]}
          />
          <FooterCol
            title="Admin"
            links={[["/login", "Sign in"]]}
          />
        </div>
      </Container>
      <Container className="relative mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-on-dark-mute md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Novara Studio. All rights reserved.</p>
        <p>Built by talented students, guided by professionals.</p>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <div className="relative">
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-on-dark-mute">
        {title}
      </div>
      <ul className="space-y-2 text-sm">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link
              to={to}
              className="text-on-dark-soft transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}