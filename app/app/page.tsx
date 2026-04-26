import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import FAQ from '@/components/FAQ';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata: Metadata = {
  title: 'The Skilled Game App — Train With Me Anywhere',
  description:
    'Weekly programming, drill library, film breakdowns, global community. The Skilled Game App. Train with me from anywhere on Earth.',
};

const features = [
  {
    num: '01',
    title: 'Weekly Programming',
    body: 'New shooting + handle workouts every Monday. Same drills I run with my pros, scaled for your level.',
  },
  {
    num: '02',
    title: 'Drill Library',
    body: 'Every drill I run, indexed by skill. Search by name, save your favorites, return anytime.',
  },
  {
    num: '03',
    title: 'Film Breakdowns',
    body: 'Monthly NBA / EuroLeague game tape sessions. The same eye I bring to my pros — for you.',
  },
  {
    num: '04',
    title: 'Global Community',
    body: 'Train alongside players from 17 countries. Comment replies, monthly Q&A lives, member-only chat.',
  },
];

const compareRows = [
  {
    label: 'Where',
    app: 'Anywhere with a hoop',
    travelers: 'Phoenix, AZ',
    phx: 'The PHHacility',
  },
  {
    label: 'Time',
    app: '30–60 min/day, your schedule',
    travelers: '3, 5, or 7 days, in person',
    phx: 'Weekly, recurring',
  },
  {
    label: 'Best For',
    app: 'Players outside Phoenix who want my method',
    travelers: 'Serious players ready to fly in',
    phx: 'Phoenix-area players, all levels',
  },
  {
    label: 'Investment',
    app: 'Monthly, low',
    travelers: 'Trip-based, premium',
    phx: 'Membership, package, drop-in',
  },
];

export default function AppPage() {
  return (
    <>
      <PageHero
        kicker="The Skilled Game App"
        headline={
          <>
            <span className="hero-word hero-word--d1">
              <span>Train with me</span>
            </span>
            <br />
            <span className="hero-word hero-word--d2">
              <span>in your pocket.</span>
            </span>
          </>
        }
        sub="Weekly programming. Drill library. Film breakdowns. The same work I run with my pros, scaled for your level. Available worldwide."
        trustLine="First 7 Days Free · Cancel Anytime · Worldwide"
        primaryCta={{ href: '#pricing', label: 'Start Free Trial →' }}
        secondaryCta={{ href: '#features', label: 'Watch Sample ↓' }}
        halftoneCorners={['bottom-right']}
      />

      {/* Features */}
      <section id="features" className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="What You Get"
            headline={<>What’s inside.</>}
            sub="Four things — built to give you the same work my pros do, on your schedule."
            variant="cream"
          />

          <div className="feat-grid reveal-stagger">
            {features.map((f) => (
              <div
                key={f.num}
                style={{
                  border: '1px solid var(--hairline-ink)',
                  background: 'var(--white)',
                  padding: 32,
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
                  {f.num}
                </div>
                <h3 className="display-sm" style={{ marginBottom: 12, fontSize: 'clamp(20px, 2vw, 28px)' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--ink-60)', lineHeight: 1.6 }}>{f.body}</p>
              </div>
            ))}
          </div>

          <style>{`
            .feat-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 600px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="section surface-ink"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" size={300} opacity={0.4} />
        <HalftonePattern corner="bottom-left" size={300} opacity={0.4} />
        <div className="wrap" style={{ maxWidth: 720, textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KickerWithLines>One Membership</KickerWithLines>
          </div>
          <h2 className="display-lg reveal" style={{ marginBottom: 48 }}>
            Simple price. <em>Real work.</em>
          </h2>

          {/* PLACEHOLDER: confirm with Joshua before pitch */}
          <div
            style={{
              border: '1.5px solid var(--red)',
              padding: 'clamp(40px, 6vw, 64px)',
              borderRadius: 4,
              background: 'var(--ink-80)',
            }}
          >
            <p
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ash-soft)',
                marginBottom: 16,
              }}
            >
              Membership
            </p>
            <div
              className="display-xl"
              style={{
                color: 'var(--red-bright)',
                fontSize: 'clamp(80px, 12vw, 144px)',
                lineHeight: 0.9,
              }}
            >
              $29<span style={{ fontSize: '0.4em', color: 'var(--cream)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--ash-soft)', marginTop: 18, marginBottom: 36 }}>
              First week free. Cancel anytime. Includes all features.
            </p>
            <Link
              href="https://www.skilledgamebasketball.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="How Does It Fit?"
            headline={<>App, Travelers, or Phoenix?</>}
            sub="Three ways in. Different on-ramps for different lives."
            variant="cream"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 16,
              border: '1px solid var(--hairline-ink)',
              background: 'var(--white)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <div className="compare-grid compare-grid--head">
              <div></div>
              <div>The App</div>
              <div>Travelers</div>
              <div>Phoenix</div>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className="compare-grid">
                <div className="compare-label">{row.label}</div>
                <div>{row.app}</div>
                <div>{row.travelers}</div>
                <div>{row.phx}</div>
              </div>
            ))}
          </div>

          <style>{`
            .compare-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 8px;
              padding: 20px 24px;
              border-top: 1px solid var(--hairline-ink);
              font-size: 15px;
              color: var(--ink-60);
              line-height: 1.5;
            }
            .compare-grid:first-of-type { border-top: 0; }
            .compare-grid--head {
              background: var(--ink);
              color: var(--cream);
              font-family: var(--font-mono);
              font-size: 11px;
              letter-spacing: 0.2em;
              text-transform: uppercase;
            }
            .compare-grid--head div + div { color: var(--red-bright); }
            .compare-label {
              font-family: var(--font-mono);
              font-size: 11px;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: var(--ash);
            }
            @media (min-width: 760px) {
              .compare-grid {
                grid-template-columns: 0.7fr 1fr 1fr 1fr;
                gap: 24px;
                align-items: start;
              }
              .compare-grid--head .compare-label { color: var(--ash-soft); }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        kicker="App FAQ"
        heading="Quick answers."
        items={[
          {
            q: 'What’s the difference between this and your TikTok content?',
            a: 'TikTok is bite-sized clips. The App is structured weekly programming, the full drill library, monthly film breakdowns, and a member community. Apples to a steady meal plan.',
          },
          {
            q: 'Do I need equipment? A gym? A hoop?',
            a: 'A ball, a hoop, and floor space. Most weeks have indoor and outdoor options. Some shooting work can be done in a backyard with a single hoop.',
          },
          {
            q: 'What level is this for? I’m not a pro.',
            a: 'Every workout has scaled options — beginner, intermediate, advanced. We have 12-year-olds, college players, and weekend warriors all on the same plan, scaled to their level.',
          },
          {
            q: 'Can I cancel? What’s the refund policy?',
            a: 'Cancel anytime in-app. First week is free. Monthly renewals are pro-rated within the first 14 days.',
          },
          {
            q: 'Will Joshua personally see my work?',
            a: 'Yes — I personally answer comments and questions in the member community. Monthly Q&A lives are with me, not a coach. Travelers get hands-on; App members get the same eyes.',
          },
          {
            q: 'How is this different from the Travelers Program?',
            a: 'Travelers fly to Phoenix and train with me in person for 3, 5, or 7 days. The App is for everyone who can’t fly here — same method, different delivery.',
          },
          {
            q: 'Is the App included with camp registration?',
            a: 'Yes. Every camp registrant gets 3 months of premium App access included.',
          },
          {
            q: 'What if I want to train in Phoenix but live overseas?',
            a: 'Pair the App with a Travelers trip. App for the year-round work, Travelers for the in-person reset.',
          },
        ]}
      />

      <FinalCTASection
        headline={
          <>
            First week <em>free.</em>
            <br />
            Get in the gym.
          </>
        }
        sub="No card to start. Cancel anytime. Train with me from anywhere."
        primaryCta={{
          href: 'https://www.skilledgamebasketball.com/app',
          label: 'Start Free Trial →',
        }}
        secondaryCta={{ href: '/travelers', label: 'Or fly to Phoenix' }}
      />
    </>
  );
}
