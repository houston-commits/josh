import type { ReactNode } from 'react';
import KickerWithLines from './KickerWithLines';

type Props = {
  kicker: string;
  quote: ReactNode;
  attribution?: string;
  variant?: 'ink' | 'cream';
};

export default function PullQuoteSection({
  kicker,
  quote,
  attribution,
  variant = 'ink',
}: Props) {
  const isInk = variant === 'ink';
  return (
    <section className={`section ${isInk ? 'surface-ink' : 'surface-cream'}`}>
      <div className="wrap">
        <div style={{ maxWidth: '52ch', margin: '0 auto', textAlign: 'center' }}>
          <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>
          <blockquote
            className="soul reveal"
            style={{
              fontSize: 'clamp(28px, 4.2vw, 56px)',
              lineHeight: 1.15,
              marginTop: 14,
              color: isInk ? 'var(--cream)' : 'var(--ink)',
            }}
          >
            “{quote}”
          </blockquote>
          {attribution && (
            <p
              className="reveal mono"
              style={{
                marginTop: 28,
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
              }}
            >
              — {attribution}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
