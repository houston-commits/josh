type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  corner?: Corner;
  size?: number;
  opacity?: number;
  color?: string;
};

const positions: Record<Corner, React.CSSProperties> = {
  'top-left': { top: 0, left: 0 },
  'top-right': { top: 0, right: 0, transform: 'scaleX(-1)' },
  'bottom-left': { bottom: 0, left: 0, transform: 'scaleY(-1)' },
  'bottom-right': { bottom: 0, right: 0, transform: 'scale(-1, -1)' },
};

export default function HalftonePattern({
  corner = 'top-left',
  size = 320,
  opacity = 0.7,
  color = '#b0101d',
}: Props) {
  const dots: { cx: number; cy: number; r: number }[] = [];
  const cols = 18;
  const rows = 18;
  const step = size / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const dist = Math.sqrt(x * x + y * y);
      const maxDist = Math.sqrt(cols * cols + rows * rows);
      const norm = 1 - dist / maxDist; // 1 near corner, 0 far
      const r = Math.max(0, norm * step * 0.42);
      if (r > 0.4) dots.push({ cx: x * step + step / 2, cy: y * step + step / 2, r });
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...positions[corner],
      }}
    >
      <g fill={color}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
        ))}
      </g>
    </svg>
  );
}
