import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--hairline)] py-16">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-[color:var(--text-soft)]">
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
      <Container className="mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-[color:var(--text-mute)] md:flex-row md:items-center">
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
    <div>
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text-mute)]">
        {title}
      </div>
      <ul className="space-y-2 text-sm">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link
              to={to}
              className="text-[color:var(--text-soft)] transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}