import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import StatStrip from '@/components/StatStrip';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import FinalCTASection from '@/components/FinalCTASection';
import SectionHeader from '@/components/SectionHeader';
import MediaImage from '@/components/MediaImage';

export const metadata: Metadata = {
  title: 'The Story — Joshua Villarreal · Skilled Game Basketball',
  description:
    'Eighteen. Ben Gordon. Seventeen countries. Eleven years of Skilled Game.',
};

const chapters = [
  {
    num: '01',
    chapter: 'Eighteen',
    title: 'I started training pros at 18.',
    body: 'I had no business being there. I just paid attention. I watched what real work looked like, asked the right questions, and showed up early. The pros let me run drills. The pros let me run more drills. That’s where it started.',
    seed: 'sg-about-ch1',
  },
  {
    num: '02',
    chapter: 'Nineteen',
    title: 'Ben Gordon. The road. The NBA.',
    body: 'The next year, I was on the road with Ben Gordon — the NBA’s 2005 Sixth Man of the Year — as his on-the-road skill development trainer. Hotels, arenas, shootarounds. I learned what NBA work actually looks like, day in and day out.',
    seed: 'sg-about-ch2',
  },
  {
    num: '03',
    chapter: 'The Method',
    title: 'A decade of refining.',
    body: 'Over the next decade I trained 20+ NBA players, dozens of pros and college athletes, and thousands of kids. The Skilled Game curriculum isn’t a brand — it’s the system I refined session by session, drill by drill, decision by decision.',
    seed: 'sg-about-ch3',
  },
  {
    num: '04',
    chapter: 'Global',
    title: '17 countries. Same God.',
    body: 'Since 2018 I’ve been running camps internationally. 17 countries. 5 continents. Same method. Different floors. Same God. Spain, Israel, Turkey, Australia, Saudi Arabia, Lebanon, Taiwan, Chile — and the list keeps growing.',
    seed: 'sg-about-ch4',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The Story"
        headline={[
          'Eighteen.',
          'Ben Gordon.',
          <>
            <em>Seventeen Countries.</em>
          </>,
        ]}
        sub={
          <span className="soul" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
            Eleven years of Skilled Game.
          </span>
        }
        halftoneCorners={['top-left']}
        faithMark
        bgSeed="sg-about-hero-3"
      />

      {/* Story Arc */}
      {chapters.map((c, i) => (
        <section
          key={c.num}
          className={i % 2 === 0 ? 'surface-cream' : 'surface-ink'}
          style={{
            paddingTop: 'clamp(64px, 9vw, 140px)',
            paddingBottom: 'clamp(64px, 9vw, 140px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {i === 0 && <HalftonePattern corner="bottom-right" opacity={0.3} />}
          {i === chapters.length - 1 && <HalftonePattern corner="top-left" opacity={0.5} />}
          <div className="wrap">
            <div className={`chapter-grid ${i % 2 === 1 ? 'chapter-grid--reverse' : ''}`}>
              <MediaImage
                seed={c.seed}
                alt={`${c.chapter} — ${c.title}`}
                aspect="4 / 5"
                tone={i % 2 === 0 ? 'red' : 'duotone'}
              />
              <div>
                <KickerWithLines variant={i % 2 === 0 ? 'ink' : 'cream'}>
                  Chapter {c.num} · {c.chapter}
                </KickerWithLines>
                <h2 className="display-lg reveal" style={{ marginBottom: 24 }}>
                  {c.title}
                </h2>
                <p
                  className="reveal"
                  style={{
                    fontSize: 'clamp(16px, 1.4vw, 19px)',
                    lineHeight: 1.65,
                    color: i % 2 === 0 ? 'var(--ink-60)' : 'var(--ash-soft)',
                    maxWidth: '52ch',
                  }}
                >
                  {c.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stat Strip */}
      <StatStrip
        stats={[
          { number: '20+', label: 'NBA' },
          { number: '17', label: 'Countries' },
          { number: '11+', label: 'Years' },
          { number: '5', label: 'Continents' },
        ]}
      />

      {/* Faith Block */}
      <section
        className="surface-ink"
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <HalftonePattern corner="top-right" opacity={0.4} />
        <HalftonePattern corner="bottom-left" opacity={0.4} />
        <div className="wrap" style={{ position: 'relative' }}>
          <h2 className="display-xl reveal" style={{ marginBottom: 32 }}>
            All Glory <em>To God.</em>
          </h2>
          <p className="soul reveal" style={{ fontSize: 'clamp(20px, 2.4vw, 32px)' }}>
            “James 4:7 ✝”
          </p>
        </div>
      </section>

      {/* Method Pillars */}
      <section className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="The Method"
            headline={<>Three pillars. One standard.</>}
            sub="What we run with NBA pros, EuroLeague guards, and 6th graders alike."
            variant="cream"
          />
          <div className="pillars-grid">
            {[
              {
                num: '01',
                title: 'Skills',
                body: 'The fundamentals. Ball handling, footwork, finishing, shooting, passing. The work below the work.',
              },
              {
                num: '02',
                title: 'Game',
                body: 'Where most trainers stop — we don’t. We bridge what you learn in the gym to what you do in a game. Film, decisions, IQ.',
              },
              {
                num: '03',
                title: 'Transfer',
                body: 'Every drill ladders to a real-game moment. If it doesn’t transfer, we don’t run it.',
              },
            ].map((p) => (
              <div key={p.num} className="reveal">
                <div
                  className="mono"
                  style={{
                    color: 'var(--red-bright)',
                    fontSize: 14,
                    letterSpacing: '0.2em',
                    marginBottom: 14,
                  }}
                >
                  {p.num} ·
                </div>
                <h3 className="display-md" style={{ marginBottom: 14 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--ink-60)', lineHeight: 1.6, fontSize: 17 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <style>{`
            .pillars-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
            }
            @media (min-width: 760px) { .pillars-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; } }
          `}</style>
        </div>
      </section>

      {/* Partnerships */}
      <section
        className="section-tight surface-ink"
        style={{ borderTop: '1px solid var(--hairline)' }}
      >
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KickerWithLines>Trusted By</KickerWithLines>
          </div>
          {/* PLACEHOLDER partner logos */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(20px, 4vw, 48px)',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 36,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 2vw, 28px)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--ash)',
            }}
          >
            <span>Under Armour</span>
            <span style={{ color: 'var(--red-bright)' }}>·</span>
            <span>NBA</span>
            <span style={{ color: 'var(--red-bright)' }}>·</span>
            <span>WNBA</span>
            <span style={{ color: 'var(--red-bright)' }}>·</span>
            <span>EuroLeague</span>
            <span style={{ color: 'var(--red-bright)' }}>·</span>
            <span>FIBA</span>
          </div>
        </div>
      </section>

      <FinalCTASection
        headline={
          <>
            Get in <em>the gym.</em>
          </>
        }
        sub="Story aside — the work is what matters. Pick your path."
        primaryCta={{ href: '/train', label: 'Train In Phoenix →' }}
        secondaryCta={{ href: '/travelers', label: 'Fly To Me' }}
      />
    </>
  );
}
