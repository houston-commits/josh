'use client';

import { useState } from 'react';
import KickerWithLines from './KickerWithLines';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  country: string;
};

type Props = {
  kicker?: string;
  heading?: string;
  items: Testimonial[];
};

export default function Testimonials({
  kicker = 'In Their Words',
  heading = 'Players, Worldwide.',
  items,
}: Props) {
  const [i, setI] = useState(0);
  const t = items[i];

  return (
    <section className="section surface-ink" style={{ borderTop: '1px solid var(--hairline)' }}>
      <div className="wrap" style={{ maxWidth: 980, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <KickerWithLines>{kicker}</KickerWithLines>
        </div>
        <h2 className="display-md reveal" style={{ marginBottom: 56 }}>
          {heading}
        </h2>

        <blockquote
          className="soul"
          style={{
            fontSize: 'clamp(24px, 3vw, 40px)',
            lineHeight: 1.25,
            color: 'var(--cream)',
            marginBottom: 36,
          }}
        >
          “{t.quote}”
        </blockquote>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 18,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ash-soft)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: 'var(--cream)' }}>{t.name}</span>
          <span style={{ color: 'var(--red-bright)' }}>·</span>
          <span>{t.role}</span>
          <span style={{ color: 'var(--red-bright)' }}>·</span>
          <span>{t.country}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              style={{
                width: idx === i ? 32 : 10,
                height: 4,
                background: idx === i ? 'var(--red)' : 'var(--hairline)',
                border: 0,
                borderRadius: 2,
                transition: 'all 0.3s var(--ease-out)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
