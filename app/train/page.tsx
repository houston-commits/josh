import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PathCard from '@/components/PathCard';
import FAQ from '@/components/FAQ';
import FinalCTASection from '@/components/FinalCTASection';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import MediaImage from '@/components/MediaImage';

export const metadata: Metadata = {
  title: 'Train at The PHHacility — Phoenix, AZ · Skilled Game Basketball',
  description:
    'Memberships, packages, drop-ins. Train weekly at The PHHacility in Phoenix, Arizona, with Joshua and the Skilled Game team.',
};

const pillars = [
  { title: 'Ball Handling', body: 'Live-dribble pressure, change-of-pace, real defenders.' },
  { title: 'Footwork', body: 'Pivots, jab series, deceleration, balance work.' },
  { title: 'Finishing', body: 'Off two, off one, with contact, with reads.' },
  { title: 'Shooting', body: 'Form, footwork, repetition, off-the-catch + pull-up.' },
  { title: 'Passing', body: 'Live reads, pocket passes, kick-outs, IQ work.' },
];

export default function TrainPage() {
  return (
    <>
      <PageHero
        kicker="Phoenix, AZ · The PHHacility"
        headline={[
          'Train at',
          <>
            The <em>PHHacility.</em>
          </>,
        ]}
        sub="Memberships, packages, drop-ins. Train weekly with Joshua and the Skilled Game team. Phoenix, Arizona."
        trustLine="For Intermediate to Advanced Players · 6th Grade & Up"
        primaryCta={{ href: '#tiers', label: 'Sign Up for Training →' }}
        secondaryCta={{ href: '#booking', label: 'Open Calendar ↓' }}
        halftoneCorners={['top-left']}
        bgSeed="sg-train-hero-2"
      />

      {/* Three Tiers */}
      <section id="tiers" className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="How We Work"
            headline={<>Three ways in.</>}
            sub="Pick the tier that matches your commitment. Move up when you’re ready."
            variant="cream"
          />
          {/* PLACEHOLDER pricing — Houston confirms with Joshua before pitch */}
          <div className="paths-grid">
            <PathCard
              number="01"
              eyebrow="Best For Serious Players"
              title="Memberships"
              body="Weekly recurring training. Best for serious players committing to the long game. Locked rate, locked schedule."
              href="https://www.skilledgamebasketball.com/arizonabasketballtraining"
              external
              cta="Become a Member →"
            />
            <PathCard
              number="02"
              eyebrow="Lock In + Save"
              title="Packages"
              body="Multi-session bundles. Lock in your sessions and save vs drop-in pricing. Use within 90 days."
              href="https://www.skilledgamebasketball.com/arizonabasketballtraining"
              external
              cta="See Packages →"
            />
            <PathCard
              number="03"
              eyebrow="Casual or Visiting"
              title="Drop-Ins"
              body="Single sessions. For visitors and casual training. Subject to availability."
              href="https://www.skilledgamebasketball.com/arizonabasketballtraining"
              external
              cta="Book a Drop-In →"
            />
          </div>
          <style>{`
            .paths-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 760px) { .paths-grid { grid-template-columns: repeat(3, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="What We Work On"
            headline={<>The five pillars.</>}
            sub="The Skilled Game curriculum — the same framework I run with my pros."
          />
          <div className="curriculum-grid reveal-stagger">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  border: '1px solid var(--hairline)',
                  background: 'var(--ink-80)',
                  padding: 28,
                  borderRadius: 4,
                }}
              >
                <div
                  className="mono"
                  style={{
                    color: 'var(--red-bright)',
                    fontSize: 12,
                    letterSpacing: '0.2em',
                    marginBottom: 14,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="display-sm"
                  style={{ marginBottom: 10, fontSize: 'clamp(20px, 2vw, 26px)' }}
                >
                  {p.title}
                </h3>
                <p style={{ color: 'var(--ash-soft)', lineHeight: 1.55 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <style>{`
            .curriculum-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 600px) { .curriculum-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1000px) { .curriculum-grid { grid-template-columns: repeat(5, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Inside the facility — gallery */}
      <section
        className="section surface-cream"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" opacity={0.3} />
        <div className="wrap">
          <SectionHeader
            kicker="The Facility"
            headline={<>Inside The PHHacility.</>}
            sub="Phoenix, Arizona. Where the work happens."
            variant="cream"
          />
          <div className="gallery-grid reveal-stagger">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                style={{ gridColumn: n === 1 ? 'span 2' : 'span 1' }}
              >
                <MediaImage
                  seed={`sg-phh-${n}`}
                  alt={`Inside The PHHacility — frame ${n}`}
                  aspect={n === 1 ? '16 / 10' : n % 3 === 0 ? '4 / 5' : '1 / 1'}
                  tone={n % 2 === 0 ? 'red' : 'duotone'}
                  width={n === 1 ? 1600 : 800}
                  height={n === 1 ? 1000 : n % 3 === 0 ? 1000 : 800}
                />
              </div>
            ))}
          </div>
          <style>{`
            .gallery-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }
            @media (min-width: 600px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; } }
          `}</style>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="Local Booking"
            headline={<>Reserve your sessions.</>}
            sub="Calendar updated weekly. Memberships and packages can book ahead — drop-ins last."
          />

          {/* PLACEHOLDER: embed his existing Wix booking calendar via iframe or link out */}
          <div
            style={{
              border: '1px dashed var(--hairline)',
              borderRadius: 4,
              padding: 'clamp(40px, 8vw, 96px)',
              textAlign: 'center',
              background: 'var(--ink-80)',
            }}
          >
            <p
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ash)',
                marginBottom: 24,
              }}
            >
              Booking Calendar Embed
            </p>
            <h3 className="display-sm" style={{ marginBottom: 18 }}>
              Open the live calendar.
            </h3>
            <p style={{ color: 'var(--ash-soft)', maxWidth: '50ch', margin: '0 auto 28px' }}>
              The live calendar lives on the existing booking system. Click through to view this
              week’s open slots and reserve.
            </p>
            <Link
              href="https://www.skilledgamebasketball.com/arizonabasketballtraining"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
            >
              Open Booking Calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        kicker="Phoenix Training FAQ"
        heading="Questions, answered."
        items={[
          {
            q: 'Who is this for?',
            a: 'Intermediate to advanced players, 6th grade and up. We train pros, college players, recruits, dedicated HS players, and serious middle schoolers.',
          },
          {
            q: 'What’s the difference between membership, package, and drop-in?',
            a: 'Membership is recurring and gets you priority booking + locked rate. Packages are multi-session bundles to save vs drop-in pricing. Drop-ins are single sessions, subject to availability.',
          },
          {
            q: 'How often should I train?',
            a: 'Most members come 2–4x/week. Packages are perfect for 1–2x/week. Drop-ins for once-in-a-while. We help you pick.',
          },
          {
            q: 'Can I cancel my membership?',
            a: 'Yes. Memberships can be paused or cancelled month-to-month — no long contracts.',
          },
          {
            q: 'Is there a group session option?',
            a: 'Yes — small group sessions are available within memberships and packages. Reach out and we’ll match you to the right group.',
          },
          {
            q: 'Do you train youth players?',
            a: '6th grade and up. Younger than that, we point you to a few partner trainers in the Phoenix network.',
          },
          {
            q: 'Where exactly is The PHHacility?',
            a: 'Phoenix, Arizona. We share the exact address with members and confirmed bookings only.',
          },
          {
            q: 'Do you train remotely if I can’t make it to Phoenix?',
            a: 'Yes — that’s the Skilled Game App and the Travelers Program. Pick the right one for your situation.',
          },
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection
        headline={
          <>
            Pick your tier.
            <br />
            <em>Get in the gym.</em>
          </>
        }
        sub="Phoenix players: this is your home court. Members get first dibs on every slot."
        primaryCta={{
          href: 'https://www.skilledgamebasketball.com/arizonabasketballtraining',
          label: 'Sign Up Now →',
        }}
        secondaryCta={{ href: '/contact', label: 'Have a question?' }}
      />
    </>
  );
}
