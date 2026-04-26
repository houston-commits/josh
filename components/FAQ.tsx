'use client';

import { useState } from 'react';
import KickerWithLines from './KickerWithLines';

export type FaqItem = { q: string; a: string };

type Props = {
  kicker?: string;
  heading?: string;
  items: FaqItem[];
  variant?: 'ink' | 'cream';
};

export default function FAQ({
  kicker = 'Frequently Asked',
  heading = 'Questions, answered.',
  items,
  variant = 'ink',
}: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const isInk = variant === 'ink';

  return (
    <section className={`section ${isInk ? 'surface-ink' : 'surface-cream'}`}>
      <div className="wrap" style={{ maxWidth: 980 }}>
        <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>
        <h2 className="display-md reveal" style={{ marginBottom: 56, maxWidth: '20ch' }}>
          {heading}
        </h2>

        <ul style={{ listStyle: 'none' }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                style={{
                  borderTop: i === 0 ? `1px solid ${isInk ? 'var(--hairline)' : 'var(--hairline-ink)'}` : 'none',
                  borderBottom: `1px solid ${isInk ? 'var(--hairline)' : 'var(--hairline-ink)'}`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    padding: '24px 0',
                    textAlign: 'left',
                  }}
                >
                  <span
                    className="display-sm"
                    style={{
                      fontSize: 'clamp(20px, 2.4vw, 28px)',
                      lineHeight: 1.15,
                      color: isInk ? 'var(--cream)' : 'var(--ink)',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      flex: '0 0 32px',
                      width: 32,
                      height: 32,
                      border: `1.5px solid ${isInk ? 'var(--hairline)' : 'var(--hairline-ink)'}`,
                      borderRadius: '50%',
                      position: 'relative',
                      transition: 'background-color 0.2s var(--ease-out)',
                      background: isOpen ? 'var(--red)' : 'transparent',
                      borderColor: isOpen ? 'var(--red)' : undefined,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 12,
                        height: 1.5,
                        background: isOpen ? 'var(--white)' : isInk ? 'var(--cream)' : 'var(--ink)',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 12,
                        height: 1.5,
                        background: isOpen ? 'var(--white)' : isInk ? 'var(--cream)' : 'var(--ink)',
                        transform: `translate(-50%, -50%) rotate(${isOpen ? 0 : 90}deg)`,
                        transition: 'transform 0.25s var(--ease-out)',
                      }}
                    />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s var(--ease-out)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 17,
                      lineHeight: 1.65,
                      color: isInk ? 'var(--ash-soft)' : 'var(--ink-60)',
                      paddingBottom: 28,
                      maxWidth: '70ch',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
