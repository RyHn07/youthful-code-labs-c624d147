# Plan — Premium IT Agency Website

A modern, mostly-static monochrome website for an IT services agency built on a university-talent network model, with two dynamic forms and a minimal admin panel.

## Design system

- **Theme:** Dark monochrome. Backgrounds `#0f0f10`, `#111111`, `#181818`; text white / soft gray.
- **Aesthetic:** Linear / Vercel / Raycast feel — glassmorphism, hairline borders, soft inner glow, generous spacing.
- **Typography:** Geist or Inter for body; a tighter display face (Geist Sans / Space Grotesk) for H1/H2 with tight tracking.
- **Motion:** Restrained, cinematic. Framer Motion for entrances; GSAP only if needed for scroll-pinned sections.
- All colors as semantic tokens in `src/styles.css` (oklch). No raw hex in components.

## Route architecture (TanStack Start)

Each major surface gets its own route with unique `head()` metadata.

```
src/routes/
  __root.tsx            shell + floating dock + ClickSpark wrapper
  index.tsx             home (all marketing sections)
  about.tsx
  services.tsx
  work.tsx              recent projects showcase
  talent.tsx            student talent showcase + community pitch
  careers.tsx           join the network (application form)
  contact.tsx           contact form
  _authenticated.tsx    admin auth guard
  _authenticated/admin/index.tsx       dashboard
  _authenticated/admin/projects.tsx    CRUD projects
  _authenticated/admin/applications.tsx
  _authenticated/admin/messages.tsx
  login.tsx
  api/public/...        (only if needed for webhooks; not required here)
```

Home page composes hero → about teaser → services → why us → talent showcase → workflow → projects → logos → stats → CTA → footer. Sub-pages reuse the same section components in fuller form.

## Component library

Reusable, in `src/components/`:

- `Section`, `Container`, `Eyebrow`, `SectionHeading`
- `GlassCard`, `ReflectiveCard`, `BorderGlowCard`
- `DecryptedText`, `ScrollFloatText`, `CountUp`
- `LogoLoop`, `CardSwap`, `FloatingDock`, `ClickSpark`
- Backgrounds: `ParticlesBackground`, `AuroraBackground`, `LightPillarBackground` (CSS + canvas; no heavy WebGL libs)
- Forms: `ContactForm`, `ApplicationForm` built on shadcn `form` + zod

All ReactBits-style effects are reimplemented locally (no runtime dependency on reactbits) so we control styling and performance.

## Section breakdown (home)

1. **Hero** — Aurora/particles background, `DecryptedText` headline ("Affordable high-quality digital solutions powered by young talent."), subtitle, two CTAs (Start a project / Join the network).
2. **About** — three-column glass cards: the model, supervision, affordability.
3. **Services** — 11 services in a responsive bento/card grid with hover lift + border glow. Categorized: Design · Engineering · Brand & Content · Growth · AI/Automation.
4. **Why Choose Us** — feature list with monochrome icons.
5. **Student Talent Showcase** — reflective tilt cards for sample roles, each linking to `/talent`.
6. **Workflow** — 6-step vertical timeline with scroll-progress line.
7. **Recent Projects** — CardSwap stack (top card swaps to back on click/auto-rotate) driven by data from Supabase.
8. **Trusted By** — infinite `LogoLoop` marquee.
9. **Stats** — 4 `CountUp` tiles triggered on scroll into view.
10. **Join CTA** — short pitch + link to `/careers`.
11. **Footer** — minimal; `FloatingDock` appears after ~30% scroll with quick links.

## Dynamic features (Lovable Cloud)

Enable Lovable Cloud for: database, auth, storage.

**Tables**
- `projects` (id, title, slug, category, summary, cover_url, gallery jsonb, tags text[], year, created_at)
- `applications` (id, name, email, university, role, portfolio_url, message, status, created_at)
- `messages` (id, name, email, subject, body, status, created_at)
- `profiles` (id → auth.users, display_name, created_at)
- `user_roles` (id, user_id, role enum: admin) with `has_role()` SECURITY DEFINER fn

**RLS**
- `projects`: public SELECT; INSERT/UPDATE/DELETE only `has_role(auth.uid(),'admin')`
- `applications` / `messages`: public INSERT; SELECT/UPDATE only admin
- `profiles`: owner read/update
- `user_roles`: admin-only read; no client writes (seeded via migration)

**Server functions** (`src/lib/*.functions.ts`)
- `submitContact`, `submitApplication` — public, zod-validated, insert via authed supabase client (RLS allows insert).
- `listProjects` — public read.
- Admin CRUD functions guarded by `requireSupabaseAuth` + role check.

**Forms** validate client-side with zod (length caps, email, URL, regex) and re-validate server-side.

## Admin panel

- `/login` — email + password (Lovable Cloud auth). Google sign-in optional.
- `_authenticated` layout guards everything under `admin/`.
- Component-level `has_role('admin')` check; non-admins are redirected to `/`.
- Pages: Projects (table + create/edit dialog with cover upload to Supabase Storage), Applications (list, mark reviewed), Messages (list, mark read/replied).
- Minimal monochrome UI consistent with the marketing site.

## Animations & performance

- Framer Motion for entrance/hover; `prefers-reduced-motion` respected everywhere.
- Particles via lightweight canvas (no three.js).
- Lazy-load below-the-fold sections; intersection observers for `CountUp` and reveals.
- Images via `<img loading="lazy" decoding="async">`; generated covers stored in `src/assets/`.

## SEO

- Per-route `head()`: distinct title, description, og:title/description; og:image at leaf routes only.
- Single H1 per page, semantic landmarks, alt text on every image, JSON-LD `Organization` on home.

## Build order

1. Enable Lovable Cloud; create schema + RLS migration; seed admin role.
2. Design tokens in `src/styles.css`; base layout + `__root` shell with `FloatingDock` + `ClickSpark`.
3. Reusable primitives: `Section`, `GlassCard`, `ReflectiveCard`, text animations (`DecryptedText`, `ScrollFloat`, `CountUp`), `LogoLoop`, `CardSwap`, background components.
4. Home page sections wired to static content + `listProjects` for the showcase.
5. Sub-routes: `/about`, `/services`, `/work`, `/talent`, `/careers`, `/contact` with their forms + server fns.
6. Auth + admin panel (login, projects CRUD, applications, messages).
7. Generate hero/cover imagery, polish motion, responsive QA at mobile/tablet/desktop.

## Out of scope (unless asked later)

- Blog/CMS beyond projects
- Payments / client portal
- Multi-language
- Heavy 3D/WebGL backgrounds

Confirm and I'll start with Cloud setup + design tokens.
