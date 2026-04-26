import type { ReactNode } from 'react';
import Link from 'next/link';
import KickerWithLines from './KickerWithLines';
import HalftonePattern from './HalftonePattern';

type Cta = { href: string; label: string };
type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  kicker: string;
  headline: ReactNode;
  sub?: ReactNode;
  trustLine?: ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  bottomLeftBadge?: ReactNode;
  faithMark?: boolean;
  halftoneCorners?: Corner[];
  variant?: 'ink' | 'cream';
  size?: 'lg' | 'xl';
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
}: Props) {
  const isInk = variant === 'ink';
  return (
    <section
      className={`hero-on-load ${isInk ? 'surface-ink' : 'surface-cream'}`}
      style={{
        minHeight: '100svh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 120,
        paddingBottom: 72,
      }}
    >
      {halftoneCorners.map((c) => (
        <HalftonePattern
          key={c}
          corner={c}
          size={360}
          opacity={isInk ? 0.55 : 0.35}
          color="#b0101d"
        />
      ))}

      <div className="wrap" style={{ position: 'relative', width: '100%' }}>
        <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>

        <h1
          className={size === 'xl' ? 'display-xl' : 'display-lg'}
          style={{ marginBottom: 32, maxWidth: '17ch' }}
        >
          {headline}
        </h1>

        {sub && (
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(17px, 1.4vw, 21px)',
              lineHeight: 1.5,
              maxWidth: '54ch',
              color: isInk ? 'var(--cream)' : 'var(--ink-80)',
              marginBottom: 28,
            }}
          >
            {sub}
          </p>
        )}

        {trustLine && (
          <p
            className="reveal eyebrow"
            style={{
              color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
              marginBottom: 32,
            }}
          >
            {trustLine}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div
            className="reveal"
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
          >
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-red">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={isInk ? 'btn btn-ghost' : 'btn btn-ghost-ink'}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {bottomLeftBadge && (
          <div
            className="reveal"
            style={{
              position: 'absolute',
              left: 0,
              bottom: -32,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
            }}
          >
            {bottomLeftBadge}
          </div>
        )}

        {faithMark && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: -32,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.25em',
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
