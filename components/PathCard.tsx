import Link from 'next/link';

type Props = {
  number?: string;
  eyebrow?: string;
  title: string;
  body: string;
  href: string;
  cta?: string;
  external?: boolean;
};

export default function PathCard({
  number,
  eyebrow,
  title,
  body,
  href,
  cta = 'Explore →',
  external = false,
}: Props) {
  const content = (
    <article
      style={{
        position: 'relative',
        background: 'var(--ink-80)',
        border: '1px solid var(--hairline)',
        padding: 'clamp(28px, 3.5vw, 44px)',
        borderRadius: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        transition: 'transform 0.3s var(--ease-out), border-color 0.3s var(--ease-out), background 0.3s var(--ease-out)',
        overflow: 'hidden',
      }}
      className="path-card"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {number && (
          <span
            className="mono"
            style={{
              color: 'var(--red-bright)',
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            {number}
          </span>
        )}
        {eyebrow && (
          <span
            className="mono"
            style={{
              color: 'var(--ash-soft)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </span>
        )}
      </div>

      <h3
        className="display-sm path-card__title"
        style={{
          color: 'var(--cream)',
          paddingBottom: 4,
          display: 'inline-block',
          position: 'relative',
        }}
      >
        {title}
        <span
          aria-hidden
          className="path-card__underline"
          style={{
            position: 'absolute',
            left: 0,
            bottom: -4,
            height: 3,
            width: 0,
            background: 'var(--red)',
            transition: 'width 0.5s var(--ease-out)',
          }}
        />
      </h3>

      <p style={{ color: 'var(--ash-soft)', fontSize: 16, lineHeight: 1.55, flex: 1 }}>{body}</p>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--cream)',
          paddingTop: 8,
          borderTop: '1px solid var(--hairline)',
        }}
      >
        {cta}
      </div>

      <style>{`
        .path-card:hover {
          transform: translateY(-4px) scale(1.01);
          border-color: var(--red);
          background: var(--ink-60);
        }
        .path-card:hover .path-card__underline { width: 100%; }
      `}</style>
    </article>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} style={{ display: 'block' }}>
      {content}
    </Link>
  );
}
