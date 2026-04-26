'use client';

import { useState } from 'react';
import KickerWithLines from './KickerWithLines';

type Props = {
  kicker: string;
  headline: string;
  sub: string;
  trustLine?: string;
  variant?: 'ink' | 'cream';
};

export default function EmailCapture({
  kicker,
  headline,
  sub,
  trustLine = 'No spam. Just work.',
  variant = 'ink',
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const isInk = variant === 'ink';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // PLACEHOLDER: connect to real ESP (ConvertKit / Klaviyo)
    setSubmitted(true);
  };

  return (
    <section className={`section ${isInk ? 'surface-ink' : 'surface-cream'}`}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>
        </div>
        <h2 className="display-lg reveal" style={{ marginBottom: 18 }}>
          {headline}
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 'clamp(16px, 1.3vw, 19px)',
            color: isInk ? 'var(--ash-soft)' : 'var(--ink-60)',
            marginBottom: 36,
            maxWidth: '46ch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {sub}
        </p>

        {submitted ? (
          <p className="soul" style={{ fontSize: 22 }}>
            You’re in. First drill drops Monday.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: 540,
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              style={{
                flex: '1 1 240px',
                background: 'transparent',
                border: 0,
                borderBottom: `1.5px solid ${isInk ? 'var(--hairline)' : 'var(--hairline-ink)'}`,
                padding: '14px 4px',
                color: isInk ? 'var(--cream)' : 'var(--ink)',
                fontSize: 17,
              }}
            />
            <button type="submit" className="btn btn-red">
              Subscribe →
            </button>
          </form>
        )}

        <p
          className="mono reveal"
          style={{
            marginTop: 24,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: isInk ? 'var(--ash)' : 'var(--ash)',
          }}
        >
          {trustLine}
        </p>
      </div>
    </section>
  );
}
