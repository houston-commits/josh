import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactRouter from '@/components/ContactRouter';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';

export const metadata: Metadata = {
  title: 'Connect — Skilled Game Basketball',
  description:
    'Whatever brings you here, I’ll route you right. I read every inquiry personally.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Connect"
        headline={
          <>
            <span className="hero-word hero-word--d1">
              <span>Let’s</span>
            </span>{' '}
            <span className="hero-word hero-word--d2">
              <span>
                <em>Work.</em>
              </span>
            </span>
          </>
        }
        sub="Whatever brings you here, I’ll route you right. I read every inquiry personally."
        faithMark
        halftoneCorners={['top-left']}
        size="lg"
      />

      <ContactRouter />

      {/* Direct contacts */}
      <section
        className="section surface-cream"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" size={260} opacity={0.3} />
        <div className="wrap">
          <KickerWithLines variant="ink">Direct</KickerWithLines>
          <h2 className="display-md reveal" style={{ marginBottom: 48 }}>
            Or reach out directly.
          </h2>

          <div className="direct-grid">
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ash)',
                  marginBottom: 10,
                }}
              >
                Phoenix Training
              </div>
              <a
                href="mailto:info@skilledgamebasketball.com"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  borderBottom: '2px solid var(--red)',
                  paddingBottom: 4,
                }}
              >
                info@skilledgamebasketball.com
              </a>
            </div>
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ash)',
                  marginBottom: 10,
                }}
              >
                Camps & Partnerships
              </div>
              <a
                href="mailto:info@skilledgamebasketball.com"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  borderBottom: '2px solid var(--red)',
                  paddingBottom: 4,
                }}
              >
                info@skilledgamebasketball.com
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
            }}
          >
            {[
              { label: 'Instagram', href: 'https://instagram.com/skilledgame' },
              { label: 'TikTok', href: 'https://tiktok.com/@skilledgame' },
              { label: 'YouTube', href: 'https://youtube.com/@skilledgame' },
              { label: 'Threads', href: 'https://threads.net/@skilledgame' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-ink btn-sm"
              >
                {s.label} →
              </a>
            ))}
          </div>

          <style>{`
            .direct-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 36px;
            }
            @media (min-width: 720px) { .direct-grid { grid-template-columns: 1fr 1fr; gap: 48px; } }
          `}</style>
        </div>
      </section>

      {/* Faith */}
      <section
        className="section-tight surface-ink"
        style={{ borderTop: '1px solid var(--hairline)', textAlign: 'center' }}
      >
        <div className="wrap">
          <p className="soul" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>
            “All glory to God. James 4:7 ✝”
          </p>
        </div>
      </section>
    </>
  );
}
