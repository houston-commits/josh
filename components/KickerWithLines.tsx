import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'cream' | 'ink';
  className?: string;
};

export default function KickerWithLines({ children, variant = 'cream', className = '' }: Props) {
  const cls = `kicker ${variant === 'ink' ? 'kicker--ink' : ''} ${className}`.trim();
  return (
    <div className={cls}>
      <span className="kicker__line" aria-hidden="true" />
      <span>{children}</span>
      <span className="kicker__line" aria-hidden="true" />
    </div>
  );
}
