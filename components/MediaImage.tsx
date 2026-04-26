import Image from 'next/image';

type Tone = 'red' | 'ink' | 'duotone' | 'natural';

type Props = {
  /** Picsum seed — same seed always returns same photo */
  seed: string;
  alt: string;
  width?: number;
  height?: number;
  tone?: Tone;
  /** CSS aspect ratio for the wrapper, e.g. '4 / 5' */
  aspect?: string;
  priority?: boolean;
  className?: string;
};

const overlays: Record<Tone, React.CSSProperties> = {
  red: {
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.7) 100%), radial-gradient(circle at 70% 30%, rgba(176,16,29,0.55) 0%, rgba(176,16,29,0) 65%)',
    mixBlendMode: 'normal',
  },
  ink: {
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)',
  },
  duotone: {
    background:
      'linear-gradient(180deg, rgba(176,16,29,0.45) 0%, rgba(0,0,0,0.7) 100%)',
    mixBlendMode: 'multiply',
  },
  natural: {
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%)',
  },
};

const filters: Record<Tone, string> = {
  red: 'grayscale(0.6) contrast(1.15) brightness(0.78)',
  ink: 'grayscale(1) contrast(1.2) brightness(0.65)',
  duotone: 'grayscale(0.85) contrast(1.25) brightness(0.7)',
  natural: 'contrast(1.05) brightness(0.95)',
};

export default function MediaImage({
  seed,
  alt,
  width = 1200,
  height = 1500,
  tone = 'red',
  aspect = '4 / 5',
  priority = false,
  className = '',
}: Props) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        borderRadius: 4,
        background: 'var(--ink-90)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 800px"
        priority={priority}
        style={{
          objectFit: 'cover',
          filter: filters[tone],
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          ...overlays[tone],
        }}
      />
    </div>
  );
}
