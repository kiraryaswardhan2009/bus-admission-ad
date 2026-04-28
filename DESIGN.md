# Design Brief: Saraswati Shishu Mandir School Bus Advertisement

## Direction
Confident, professional, warm — iconic school bus brand identity emphasizing safety, trust, and quality education through a bold yellow-navy color system with layered card architecture.

## Tone
Bold & Trustworthy: Yellow as primary action color signals enthusiasm and safety; navy secondary creates professional authority. Warm, approachable messaging for parents and students.

## Palette
| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary (Bus Yellow) | 0.75 0.21 84 | CTA buttons, accents, key highlights |
| Secondary (Navy) | 0.25 0.08 255 | Headers, footer, card accents, trust |
| Accent (Warm Orange) | 0.65 0.18 45 | Secondary actions, enthusiasm highlights |
| Background | 0.98 0.01 200 | Soft off-white, low saturation |
| Foreground | 0.18 0.02 250 | Deep near-black text, accessibility |
| Muted | 0.92 0.02 200 | Secondary text, subtle elements |
| Border | 0.88 0.02 200 | Subtle dividers and input borders |

## Typography
| Role | Font | Scale | Weight |
|------|------|-------|--------|
| Display | Bricolage Grotesque | 3xl–6xl | Bold (700–900) |
| Body | General Sans | 16px–18px | Regular (400) |
| Mono | JetBrains Mono | 14px | Regular (400) |

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | Navy bg with yellow accent line, white text, logo left, nav right | Trust, navigation entry |
| Hero | Cream background with yellow/navy bus illustration, large headline, yellow CTA | Admission focus, immediate engagement |
| Service Cards | Navy bg with yellow left border, white text, elevated shadow | Feature highlights, safety/facilities emphasis |
| Footer | Navy bg, white text, contact details, yellow accent bar | Accessibility, information anchor |

## Shape Language
- Corners: `0.625rem` (lg) for cards, `0.375rem` (sm) for inputs, `full` for badges
- Shadows: Elevated (`0 8px 24px rgba(0,0,0,0.12)`), Subtle (`0 2px 8px rgba(0,0,0,0.08)`)
- Spacing: 16px, 24px, 32px, 48px rhythm; generous whitespace for premium feel

## Component Patterns
- **Hero CTA**: Yellow bg, navy text, rounded-lg, elevated shadow, hover scale + transition
- **Feature Cards**: Navy bg, white text, left yellow border (4px), top shadow, hover lift effect
- **Labels**: Yellow background, navy text, rounded-full, 12px padding
- **Dividers**: Yellow accent bar (4px left border) for section breaks

## Motion & Animation
- **Entry**: Fade-in-up (0.5s) for cards on scroll, staggered timing
- **Interaction**: Transition-smooth (0.3s) on button hover, hover:scale-105 for CTAs
- **Ambient**: Pulse-subtle (2s infinite) on secondary action badges
- Choreography: Cards animate on entry; buttons respond on hover/focus

## Differentiation
Iconic yellow-navy school bus brand system with **yellow-as-primary-action** (uncommon in educational apps), creating instant visual recognition. Card-elevated treatment with yellow accent bars reinforces safety hierarchy. Warm, approachable typography paired with bold geometric display font.

## Constraints
- No gradients on text; only button backgrounds and decorative elements
- Max 3-color palette in any section (yellow, navy, white/cream)
- All interactive elements must have visible focus states (ring-primary)
- Dark mode maintains navy-yellow contrast; background shifts to near-black (0.12 L)
- No animation longer than 0.6s; prefer instant feedback on user actions
