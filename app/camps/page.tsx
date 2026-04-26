import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import InquiryForm from '@/components/InquiryForm';
import FinalCTASection from '@/components/FinalCTASection';
import MediaImage from '@/components/MediaImage';

export const metadata: Metadata = {
  title: 'Skilled Game Camps — 17 Countries · Skilled Game Basketball',
  description:
    'Skilled Game Camps in 17 countries. Bring me to your city, or join a tour stop on the next international run.',
};

const countries = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇮🇱', name: 'Israel' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇹🇷', name: 'Turkey' },
  { flag: '🇬🇪', name: 'Georgia' },
  { flag: '🇱🇧', name: 'Lebanon' },
  { flag: '🇹🇼', name: 'Taiwan' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇯🇴', name: 'Jordan' },
  { flag: '🇨🇱', name: 'Chile' },
  { flag: '🇲🇽', name: 'Mexico' },
  { flag: '🇸🇻', name: 'El Salvador' },
  { flag: '🇬🇹', name: 'Guatemala' },
];

const upcoming = [
  // PLACEHOLDER upcoming camps — swap with real events
  {
    location: 'Madrid, Spain',
    dates: 'June 12–14, 2026',
    partner: 'Hosted by Madrid Hoops Academy',
    href: 'https://www.skilledgamebasketball.com/camps',
  },
  {
    location: 'Tel Aviv, Israel',
    dates: 'July 8–10, 2026',
    partner: 'In partnership with Israel Basketball Foundation',
    href: 'https://www.skilledgamebasketball.com/camps',
  },
  {
    location: 'Phoenix, AZ',
    dates: 'August 1–3, 2026',
    partner: 'The PHHacility · Home Tour Stop',
    href: 'https://www.skilledgamebasketball.com/camps',
  },
  {
    location: 'Sydney, Australia',
    dates: 'October 5–7, 2026',
    partner: 'Hosted by AU Hoops Group',
    href: 'https://www.skilledgamebasketball.com/camps',
  },
];

export default function CampsPage() {
  return (
    <>
      <PageHero
        kicker="17 Countries · 5 Continents"
        headline={[
          'Skilled Game',
          <>
            <em>Camps.</em>
          </>,
        ]}
        sub="I’ve been running camps internationally since 2018. Thousands of players, trainers, and coaches in 17 countries have experienced the Skilled Game method. Join a stop on the next tour — or bring me to your city."
        primaryCta={{ href: '#upcoming', label: 'See Upcoming Camps →' }}
        secondaryCta={{ href: '#host', label: 'Host a Camp ↓' }}
        halftoneCorners={['top-left']}
        bgSeed="sg-camps-hero-2"
      />

      {/* Country Roster */}
      <section className="section surface-cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <HalftonePattern corner="top-right" opacity={0.3} />
        <div className="wrap">
          <SectionHeader
            kicker="Where I've Been"
            headline={<>Seventeen passport stamps.</>}
            sub="Every country has its own basketball culture. The Skilled Game method scales to all of them."
            variant="cream"
          />

          <div className="country-grid reveal-stagger">
            {countries.map((c) => (
              <div
                key={c.name}
                style={{
                  border: '1px solid var(--hairline-ink)',
                  padding: '20px 12px',
                  borderRadius: 4,
                  textAlign: 'center',
                  background: 'var(--white)',
                  transition: 'transform 0.2s var(--ease-out), border-color 0.2s var(--ease-out)',
                }}
              >
                <div style={{ fontSize: 36, lineHeight: 1, marginBottom: 8 }}>{c.flag}</div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-60)',
                  }}
                >
                  {c.name}
                </div>
              </div>
            ))}
          </div>

          <p
            className="reveal mono"
            style={{
              textAlign: 'center',
              marginTop: 36,
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ash)',
            }}
          >
            + More tour stops announced quarterly.
          </p>

          <style>{`
            .country-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
            @media (min-width: 600px) { .country-grid { grid-template-columns: repeat(5, 1fr); gap: 12px; } }
            @media (min-width: 980px) { .country-grid { grid-template-columns: repeat(9, 1fr); gap: 14px; } }
          `}</style>
        </div>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="Upcoming"
            headline={<>Tour stops on deck.</>}
            sub="The 2026 international run. New stops announced quarterly — get on the email list to hear them first."
          />

          <div className="upcoming-grid reveal-stagger">
            {upcoming.map((c, i) => (
              <article
                key={c.location}
                style={{
                  border: '1px solid var(--hairline)',
                  background: 'var(--ink-80)',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <MediaImage
                  seed={`sg-camp-${i}`}
                  alt={c.location}
                  aspect="16 / 10"
                  tone="duotone"
                  width={800}
                  height={500}
                />
                <div
                  style={{
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--red-bright)',
                    }}
                  >
                    {c.dates}
                  </div>
                  <h3 className="display-sm" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
                    {c.location}
                  </h3>
                  <p style={{ color: 'var(--ash-soft)', fontSize: 14, flex: 1 }}>{c.partner}</p>
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Register →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <style>{`
            .upcoming-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 600px) { .upcoming-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1000px) { .upcoming-grid { grid-template-columns: repeat(4, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Camp Experience */}
      <section className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="What to Expect"
            headline={<>The camp experience.</>}
            sub="Every Skilled Game Camp follows the same arc — wherever in the world we run it."
            variant="cream"
          />
          <div className="exp-grid reveal-stagger">
            {[
              {
                num: '01',
                title: 'Skills Work',
                body: 'Ball handling, footwork, finishing, shooting, passing — taught with the same detail I bring to my pros.',
              },
              {
                num: '02',
                title: 'Game Film',
                body: 'We watch tape together. NBA, EuroLeague, FIBA. You see exactly how the skills you’re learning show up at the highest level.',
              },
              {
                num: '03',
                title: 'Live Competition',
                body: 'Drills aren’t enough. Every camp ends with structured live play so you can use what you learned.',
              },
              {
                num: '04',
                title: '3 Months Free On The App',
                body: 'Every camp registrant gets 3 months of premium access to the Skilled Game App included.',
              },
            ].map((e) => (
              <div
                key={e.num}
                style={{
                  border: '1px solid var(--hairline-ink)',
                  background: 'var(--white)',
                  padding: 28,
                  borderRadius: 4,
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    letterSpacing: '0.2em',
                    color: 'var(--red-bright)',
                    marginBottom: 14,
                  }}
                >
                  {e.num}
                </div>
                <h3 className="display-sm" style={{ marginBottom: 12, fontSize: 'clamp(20px, 2vw, 26px)' }}>
                  {e.title}
                </h3>
                <p style={{ color: 'var(--ink-60)', lineHeight: 1.6 }}>{e.body}</p>
              </div>
            ))}
          </div>
          <style>{`
            .exp-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 600px) { .exp-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1100px) { .exp-grid { grid-template-columns: repeat(4, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Host a Camp */}
      <section
        id="host"
        className="section surface-ink"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="bottom-left" opacity={0.4} />
        <div className="wrap" style={{ maxWidth: 980 }}>
          <KickerWithLines>Bring Me to Your City</KickerWithLines>
          <h2 className="display-lg reveal" style={{ marginBottom: 20 }}>
            Host a Skilled Game Camp.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              color: 'var(--ash-soft)',
              marginBottom: 48,
              maxWidth: '54ch',
            }}
          >
            Facilities, programs, federations, and brands worldwide bring me in to run camps. If
            you’ve got the floor, the players, and the intent — let’s talk.
          </p>

          {/* PLACEHOLDER form handler */}
          <InquiryForm
            submitLabel="Send Camp Inquiry →"
            successCopy="Inquiry received. I’ll personally review and reach out within 48 hours to scope the camp."
            fields={[
              { name: 'organization', label: 'Organization', required: true, placeholder: 'Facility / federation / brand' },
              { name: 'name', label: 'Contact Name', required: true },
              { name: 'email', label: 'Email', type: 'email', required: true },
              { name: 'city', label: 'City / Country', required: true, placeholder: 'Madrid, Spain' },
              { name: 'dates', label: 'Expected Camp Dates', placeholder: 'Roughly when' },
              { name: 'players', label: 'Expected Players', placeholder: 'e.g. 60–100 players' },
              {
                name: 'partnerships',
                label: 'Partnerships in Place',
                placeholder: 'Under Armour, Nike, federation, etc.',
              },
              {
                name: 'message',
                label: 'Tell Me More',
                type: 'textarea',
                required: true,
                placeholder: 'Vision for the camp, who it’s for, anything else.',
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection
        headline={
          <>
            Bring the work.
            <br />
            <em>Anywhere.</em>
          </>
        }
        sub="Every continent, same standard. Sign up for a tour stop or apply to host."
        primaryCta={{ href: '#upcoming', label: 'See Upcoming Camps' }}
        secondaryCta={{ href: '#host', label: 'Host a Camp' }}
      />
    </>
  );
}
