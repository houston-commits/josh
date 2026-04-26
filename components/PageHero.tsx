import type { ReactNode } from 'react';
import Image from 'next/image';
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
  /** Picsum seed for the hero background */
  bgSeed?: string;
  /** Set false to hide the bg image (useful for the lighter About hero) */
  withBg?: boolean;
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
  bgSeed,
  withBg = true,
}: Props) {
  const isInk = variant === 'ink';
  const lines = Array.isArray(headline) ? headline : [headline];

  return (
    <section
      className={`hero hero-on-load ${isInk ? 'surface-ink' : 'surface-cream'}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {withBg && bgSeed && isInk && (
        <>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
            }}
          >
            <Image
              src={`https://picsum.photos/seed/${encodeURIComponent(bgSeed)}/1920/1200`}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: 'cover',
                filter: 'grayscale(0.85) contrast(1.25) brightness(0.45)',
              }}
            />
          </div>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.85) 100%), radial-gradient(ellipse at 75% 25%, rgba(176,16,29,0.45) 0%, rgba(176,16,29,0) 55%)',
            }}
          />
        </>
      )}

      {halftoneCorners.map((c) => (
        <HalftonePattern
          key={c}
          corner={c}
          opacity={isInk ? 0.55 : 0.5}
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
