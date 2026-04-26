type Tone = 'red' | 'ink' | 'duotone' | 'natural';

type Props = {
  /** Used to deterministically vary the visual */
  seed: string;
  alt: string;
  /** Kept for API compatibility */
  width?: number;
  height?: number;
  tone?: Tone;
  /** CSS aspect ratio for the wrapper, e.g. '4 / 5' */
  aspect?: string;
  priority?: boolean;
  className?: string;
};

/**
 * CSS-only atmospheric tile. Variety driven by a hash of the seed so the same
 * seed always produces the same look, but no network image is fetched —
 * works on every device, every network, every time.
 */
function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const toneBase: Record<Tone, string> = {
  red: 'var(--ink-90)',
  ink: 'var(--ink-90)',
  duotone: 'var(--ink-80)',
  natural: 'var(--ink-80)',
};

const toneAccent: Record<Tone, string> = {
  red: 'rgba(199, 18, 30, 0.65)',
  ink: 'rgba(110, 110, 110, 0.45)',
  duotone: 'rgba(199, 18, 30, 0.55)',
  natural: 'rgba(176, 16, 29, 0.4)',
};

export default function MediaImage({
  seed,
  alt,
  tone = 'red',
  aspect = '4 / 5',
  className = '',
}: Props) {
  const h = hash(seed);
  const angle = (h % 360);
  const xPos = 25 + (h % 50);
  const yPos = 20 + ((h >> 4) % 60);
  const dotPos = (h >> 8) % 4; // which corner gets a halftone-like treatment
  const corners = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
  ];
  const dotsCorner = corners[dotPos];

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        borderRadius: 4,
        background: `
          radial-gradient(ellipse 80% 70% at ${xPos}% ${yPos}%, ${toneAccent[tone]} 0%, transparent 55%),
          linear-gradient(${angle}deg, ${toneBase[tone]} 0%, var(--ink-60) 100%)
        `,
      }}
    >
      {/* hairline diagonal texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, transparent 1px, transparent 5px)',
        }}
      />
      {/* halftone-like dot accent in one corner */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          ...dotsCorner,
          opacity: 0.5,
          backgroundImage:
            'radial-gradient(circle, rgba(199,18,30,0.55) 0%, rgba(199,18,30,0.55) 35%, transparent 36%)',
          backgroundSize: '14px 14px',
          backgroundPosition: '0 0',
          maskImage: `radial-gradient(circle at ${dotPos === 0 || dotPos === 2 ? '0%' : '100%'} ${dotPos === 0 || dotPos === 1 ? '0%' : '100%'}, black 0%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(circle at ${dotPos === 0 || dotPos === 2 ? '0%' : '100%'} ${dotPos === 0 || dotPos === 1 ? '0%' : '100%'}, black 0%, transparent 80%)`,
        }}
      />
      {/* bottom shade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
