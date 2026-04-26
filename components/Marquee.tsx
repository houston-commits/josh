type Props = {
  items: string[];
  variant?: 'white' | 'ink';
  size?: 'sm' | 'md' | 'lg';
};

export default function Marquee({ items, variant = 'white', size = 'lg' }: Props) {
  const isWhite = variant === 'white';
  const fontSize =
    size === 'lg'
      ? 'clamp(36px, 5vw, 56px)'
      : size === 'md'
        ? 'clamp(24px, 3vw, 36px)'
        : 'clamp(16px, 2vw, 24px)';
  // Duplicate the list so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <section
      style={{
        background: isWhite ? 'var(--white)' : 'var(--ink)',
        color: isWhite ? 'var(--ink)' : 'var(--cream)',
        borderTop: `1px solid ${isWhite ? 'var(--hairline-ink)' : 'var(--hairline)'}`,
        borderBottom: `1px solid ${isWhite ? 'var(--hairline-ink)' : 'var(--hairline)'}`,
        padding: 'clamp(24px, 3vw, 40px) 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee" aria-hidden="true">
        <div
          className="marquee__track"
          style={{
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase',
            fontSize,
            letterSpacing: '0.01em',
            lineHeight: 1,
            alignItems: 'center',
          }}
        >
          {doubled.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 60 }}>
              <span>{item}</span>
              <span style={{ color: 'var(--red-bright)', fontSize: '0.7em' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
