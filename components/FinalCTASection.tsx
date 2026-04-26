import type { ReactNode } from 'react';
import Link from 'next/link';
import HalftonePattern from './HalftonePattern';

type Cta = { href: string; label: string };

type Props = {
  headline: ReactNode;
  sub?: ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  halftoneCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export default function FinalCTASection({
  headline,
  sub,
  primaryCta,
  secondaryCta,
  halftoneCorner = 'bottom-right',
}: Props) {
  return (
    <section
      className="surface-ink"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(100px, 12vw, 180px)',
        paddingBottom: 'clamp(100px, 12vw, 180px)',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <HalftonePattern corner={halftoneCorner} opacity={0.45} />
      <div className="wrap" style={{ position: 'relative' }}>
        <h2 className="display-xl reveal" style={{ maxWidth: '15ch', marginBottom: 28 }}>
          {headline}
        </h2>
        {sub && (
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(17px, 1.4vw, 21px)',
              lineHeight: 1.5,
              maxWidth: '50ch',
              color: 'var(--ash-soft)',
              marginBottom: 40,
            }}
          >
            {sub}
          </p>
        )}
        <div
          className="reveal"
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {primaryCta && (
            <Link href={primaryCta.href} className="btn btn-red btn-lg">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn btn-ghost btn-lg">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
