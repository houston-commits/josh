type Stat = { number: string; label: string };

type Props = {
  stats: Stat[];
  caption?: string;
  variant?: 'ink' | 'cream';
};

export default function StatStrip({ stats, caption, variant = 'ink' }: Props) {
  const isInk = variant === 'ink';
  return (
    <section
      className={`section-tight ${isInk ? 'surface-ink' : 'surface-cream'}`}
      style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}
    >
      <div className="wrap">
        <div className="stat-grid reveal-stagger">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                className="mono"
                style={{
                  fontSize: 'clamp(56px, 8vw, 112px)',
                  color: 'var(--red-bright)',
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isInk ? 'var(--ash-soft)' : 'var(--ash)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {caption && (
          <p
            className="reveal soul"
            style={{
              textAlign: 'center',
              marginTop: 56,
              fontSize: 'clamp(20px, 2vw, 28px)',
              color: isInk ? 'var(--cream)' : 'var(--ink-80)',
            }}
          >
            {caption}
          </p>
        )}
      </div>

      <style>{`
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 720px) {
          .stat-grid { grid-template-columns: repeat(${stats.length}, 1fr); gap: 32px; }
        }
      `}</style>
    </section>
  );
}
