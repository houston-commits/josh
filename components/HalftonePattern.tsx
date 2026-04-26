type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  corner?: Corner;
  /** Mobile size cap, defaults to 180. */
  mobileSize?: number;
  /** Desktop size cap, defaults to 320. */
  desktopSize?: number;
  opacity?: number;
  color?: string;
};

const positions: Record<Corner, React.CSSProperties> = {
  'top-left': { top: 0, left: 0 },
  'top-right': { top: 0, right: 0, transform: 'scaleX(-1)' },
  'bottom-left': { bottom: 0, left: 0, transform: 'scaleY(-1)' },
  'bottom-right': { bottom: 0, right: 0, transform: 'scale(-1, -1)' },
};

/**
 * Tight, graphic halftone — dots cluster densely in the corner and fade to nothing
 * along a diagonal. Reads as an intentional design accent, not scattered confetti.
 */
function buildDots(size: number) {
  const cols = 14;
  const rows = 14;
  const step = size / cols;
  const dots: { cx: number; cy: number; r: number }[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const dist = Math.sqrt(x * x + y * y);
      const maxDist = Math.sqrt(cols * cols + rows * rows) * 0.7;
      const norm = Math.max(0, 1 - dist / maxDist);
      // Steeper falloff curve so dots feel intentional
      const curved = Math.pow(norm, 1.6);
      const r = curved * step * 0.45;
      if (r > 0.6) {
        dots.push({ cx: x * step + step / 2, cy: y * step + step / 2, r });
      }
    }
  }
  return dots;
}

export default function HalftonePattern({
  corner = 'top-left',
  mobileSize = 180,
  desktopSize = 320,
  opacity = 0.55,
  color = '#b0101d',
}: Props) {
  // Build at a normalized 100×100 viewbox so we can scale freely.
  const viewSize = 100;
  const dots = buildDots(viewSize);

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      preserveAspectRatio="xMinYMin meet"
      style={
        {
          position: 'absolute',
          width: `clamp(${mobileSize}px, 22vw, ${desktopSize}px)`,
          height: `clamp(${mobileSize}px, 22vw, ${desktopSize}px)`,
          opacity,
          pointerEvents: 'none',
          zIndex: 1,
          ...positions[corner],
        } as React.CSSProperties
      }
    >
      <g fill={color}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
        ))}
      </g>
    </svg>
  );
}
