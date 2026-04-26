import type { ReactNode } from 'react';
import KickerWithLines from './KickerWithLines';

type Props = {
  kicker: string;
  headline: ReactNode;
  sub?: ReactNode;
  variant?: 'ink' | 'cream';
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
};

export default function SectionHeader({
  kicker,
  headline,
  sub,
  variant = 'ink',
  align = 'left',
  size = 'md',
}: Props) {
  const isInk = variant === 'ink';
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '36ch' : '24ch',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        marginBottom: 56,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
      >
        <KickerWithLines variant={isInk ? 'cream' : 'ink'}>{kicker}</KickerWithLines>
      </div>
      <h2 className={size === 'lg' ? 'display-lg reveal' : 'display-md reveal'}>{headline}</h2>
      {sub && (
        <p
          className="reveal"
          style={{
            marginTop: 18,
            fontSize: 'clamp(16px, 1.4vw, 19px)',
            lineHeight: 1.55,
            color: isInk ? 'var(--ash-soft)' : 'var(--ink-60)',
            maxWidth: '54ch',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
