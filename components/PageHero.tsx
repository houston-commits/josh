import type { ReactNode } from 'react';
import Link from 'next/link';
import KickerWithLines from './KickerWithLines';
import HalftonePattern from './HalftonePattern';

type Cta = { href: string; label: string };
type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  kicker: string;
  /** Lines render as separate stacked blocks. Pass an array for line-by-line stagger. */
  headline: ReactNode | ReactNode[];
  sub?: ReactNode;
  trustLine?: ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  bottomLeftBadge?: ReactNode;
  faithMark?: boolean;
  halftoneCorners?: Corner[];
  variant?: 'ink' | 'cream';
  size?: 'lg' | 'xl';
  /** Optional accent — controls which corner the red radial glow originates from. */
  glowCorner?: 'tr' | 'tl' | 'br' | 'bl';
  /** No-op kept for backwards compatibility with the old API. */
  bgSeed?: string;
  withBg?: boolean;
};

const glowMap: Record<NonNullable<Props['glowCorner']>, string> = {
  tr: 'radial-gradient(ellipse 90% 80% at 90% 0%, rgba(199, 18, 30, 0.55) 0%, rgba(199, 18, 30, 0.18) 30%, rgba(0,0,0,0) 60%)',
  tl: 'radial-gradient(ellipse 90% 80% at 10% 0%, rgba(199, 18, 30, 0.55) 0%, rgba(199, 18, 30, 0.18) 30%, rgba(0,0,0,0) 60%)',
  br: 'radial-gradient(ellipse 90% 80% at 90% 100%, rgba(199, 18, 30, 0.5) 0%, rgba(199, 18, 30, 0.16) 30%, rgba(0,0,0,0) 60%)',
  bl: 'radial-gradient(ellipse 90% 80% at 10% 100%, rgba(199, 18, 30, 0.5) 0%, rgba(199, 18, 30, 0.16) 30%, rgba(0,0,0,0) 60%)',
};

export default function PageHero({
  kicker,
  headline,
  sub,
  trustLine,
  primaryCta,
  secondaryCta,
  bottomLeftBadge,
  faithMark = false,
  halftoneCorners = ['top-left'],
  variant = 'ink',
  size = 'xl',
  glowCorner = 'tr',
}: Props) {
  const isInk = variant === 'ink';
  const lines = Array.isArray(headline) ? headline : [headline];

  return (
    <section
      className={`hero hero-on-load ${isInk ? 'surface-ink' : 'surface-cream'}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {isInk && (
        <>
          {/* Base atmospheric layer — pure CSS, never fails */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              background: `linear-gradient(180deg, var(--ink-90) 0%, var(--ink-80) 40%, var(--ink-90) 100%)`,
            }}
          />
          {/* Red radial accent */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              background: glowMap[glowCorner],
              mixBlendMode: 'screen',
            }}
          />
          {/* Diagonal hairline texture */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              opacity: 0.08,
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 6px)',
            }}
          />
          {/* Bottom darken */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)',
            }}
          />
        </>
      )}

      {halftoneCorners.map((c) => (
        <HalftonePattern
          key={c}
          corner={c}
          opacity={isInk ? 0.65 : 0.5}
          color="#b0101d"
        />
      ))}

      <div
        className="wrap hero__content"
        style={{ position: 'relative', zIndex: 2, width: '100%' }}
      >
        <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>

        <h1
          className={`hero__headline ${size === 'xl' ? 'hero__headline--xl' : 'hero__headline--lg'}`}
        >
          {lines.map((line, i) => (
            <span key={i} className={`hero-line hero-line--d${i + 1}`}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        {sub && <p className="hero__sub reveal">{sub}</p>}

        {trustLine && (
          <p
            className="reveal eyebrow"
            style={{
              color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
              marginBottom: 28,
            }}
          >
            {trustLine}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="hero__ctas reveal">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-red btn-lg">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={isInk ? 'btn btn-ghost btn-lg' : 'btn btn-ghost-ink btn-lg'}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {bottomLeftBadge && (
          <div
            className="reveal hero__badge"
            style={{
              color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
            }}
          >
            {bottomLeftBadge}
          </div>
        )}

        {faithMark && (
          <div
            className="hero__faith"
            style={{
              color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
            }}
          >
            JAMES 4:7 ✝
          </div>
        )}
      </div>
    </section>
  );
}
