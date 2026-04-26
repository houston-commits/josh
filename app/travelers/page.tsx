import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import PathCard from '@/components/PathCard';
import StatStrip from '@/components/StatStrip';
import PullQuoteSection from '@/components/PullQuoteSection';
import Testimonials from '@/components/Testimonials';
import InquiryForm from '@/components/InquiryForm';
import FAQ from '@/components/FAQ';
import FinalCTASection from '@/components/FinalCTASection';
import KickerWithLines from '@/components/KickerWithLines';

export const metadata: Metadata = {
  title: 'The Travelers Program — Skilled Game Basketball',
  description:
    'Fly to Phoenix and train 1-on-1 with NBA Skills Trainer Joshua Villarreal at The PHHacility.',
};

export default function TravelersPage() {
  return (
    <>
      <PageHero
        kicker="The Travelers Program"
        headline={[
          <>
            Fly to <em>Phoenix.</em>
          </>,
          <>
            Train at <em>The PHHacility.</em>
          </>,
        ]}
        sub="The Travelers Program is for serious players who don’t live in Phoenix. Fly to me. Train one-on-one for 3, 5, or 7 days at The PHHacility — the same floor where I work my pros."
        trustLine="By Application · 6th Grade & Up · Intermediate to Advanced"
        primaryCta={{ href: '#apply', label: 'Apply to Travel →' }}
        secondaryCta={{ href: '#how', label: 'How It Works ↓' }}
        bottomLeftBadge="20+ NBA · 17 COUNTRIES · 11 YEARS"
        faithMark
        halftoneCorners={['top-left']}
        bgSeed="sg-trav-hero-4"
      />

      {/* How it works */}
      <section id="how" className="section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="How It Works"
            headline={
              <>
                Three steps.
                <br />
                One trip.
              </>
            }
            sub="The Travelers Program is structured. You don’t fly out wondering what to expect. Here’s the path."
            variant="cream"
          />

          <div className="path-grid">
            <PathCard
              number="01"
              eyebrow="Apply"
              title="Submit Your App"
              body="Tell me your level, your goals, your timeline. I personally review every application — no automated filters."
              href="#apply"
              cta="Application Form ↓"
            />
            <PathCard
              number="02"
              eyebrow="Plan"
              title="We Build Your Trip"
              body="3, 5, or 7 days. We confirm dates, send you the prep packet, recommend lodging near The PHHacility."
              href="#apply"
              cta="See Trip Lengths"
            />
            <PathCard
              number="03"
              eyebrow="Train"
              title="Get In The Gym"
              body="2-a-day sessions. Skills + film + live work. You leave with footage, a plan, and a new standard."
              href="#apply"
              cta="What To Expect"
            />
          </div>

          <style>{`
            .path-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 760px) { .path-grid { grid-template-columns: repeat(3, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* The Method pull quote */}
      <PullQuoteSection
        kicker="The Method"
        quote="If it doesn’t transfer to a real-game moment, we don’t run it. Period."
        attribution="Joshua Villarreal"
      />

      {/* Stat strip */}
      <StatStrip
        stats={[
          { number: '20+', label: 'NBA Players' },
          { number: '17', label: 'Countries' },
          { number: '11', label: 'Years' },
        ]}
        caption="Skilled Game Basketball isn’t a brand. It’s a method."
      />

      {/* Inside the program */}
      <section className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="Inside the Trip"
            headline={
              <>
                What your week<br />
                actually looks like.
              </>
            }
            sub="Two-a-days. Film between sessions. Live work toward the back end. Every minute mapped to your goals."
          />
          <div className="inside-grid reveal-stagger">
            {[
              {
                num: '01',
                title: 'AM — Skills',
                body: 'Ball handling, footwork, finishing. The foundation. Same drills I run with my NBA guys, scaled to your game.',
              },
              {
                num: '02',
                title: 'PM — Game',
                body: 'Shooting under load, decision drills, live reads. Bridging the gym to live competition.',
              },
              {
                num: '03',
                title: 'Film',
                body: 'We sit down, watch your tape, watch NBA / EuroLeague tape. You see exactly what we’re building.',
              },
              {
                num: '04',
                title: 'Live Work',
                body: 'Back end of the trip. Structured live play with local pros and high-level travelers in town.',
              },
            ].map((b) => (
              <div
                key={b.num}
                style={{
                  border: '1px solid var(--hairline)',
                  background: 'var(--ink-80)',
                  padding: 32,
                  borderRadius: 4,
                }}
              >
                <span
                  className="mono"
                  style={{
                    color: 'var(--red-bright)',
                    fontSize: 13,
                    letterSpacing: '0.18em',
                  }}
                >
                  {b.num}
                </span>
                <h3 className="display-sm" style={{ marginTop: 14, marginBottom: 12 }}>
                  {b.title}
                </h3>
                <p style={{ color: 'var(--ash-soft)', lineHeight: 1.6 }}>{b.body}</p>
              </div>
            ))}
          </div>
          <style>{`
            .inside-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
            }
            @media (min-width: 720px) { .inside-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1100px) { .inside-grid { grid-template-columns: repeat(4, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        items={[
          {
            quote:
              'I flew in from Madrid for 5 days. I left with new footwork patterns I’d been missing for years.',
            name: 'Marcos',
            role: 'Pro Guard',
            country: 'Spain',
          },
          {
            quote:
              'Joshua doesn’t coach you for the camera. He coaches you for the next 10 years of your career.',
            name: 'Aaliyah',
            role: 'D1 Recruit',
            country: 'USA',
          },
          {
            quote:
              'The film sessions changed how I watch the game. That alone was worth the flight.',
            name: 'Tomer',
            role: 'EuroLeague Trainer',
            country: 'Israel',
          },
        ]}
      />

      {/* Application form */}
      <section id="apply" className="section surface-cream">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <KickerWithLines variant="ink">Travelers Application</KickerWithLines>
          <h2 className="display-lg reveal" style={{ marginBottom: 18 }}>
            Apply to <em>travel.</em>
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              color: 'var(--ink-60)',
              marginBottom: 48,
              maxWidth: '54ch',
            }}
          >
            I read every application. Tell me where you’re flying from, your level, what you want to
            walk out with, and we’ll build your trip together.
          </p>

          <InquiryForm
            variant="cream"
            submitLabel="Submit Application →"
            successCopy="Application received. I’ll personally review and reach out within 48 hours with next steps."
            fields={[
              { name: 'name', label: 'Your Name', required: true, placeholder: 'Full name' },
              { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@email.com' },
              { name: 'city', label: 'City / Country', required: true, placeholder: 'Madrid, Spain' },
              {
                name: 'role',
                label: 'You Are A',
                type: 'select',
                required: true,
                options: ['Player', 'Parent', 'Trainer', 'Coach', 'Other'],
              },
              { name: 'level', label: 'Current Level', placeholder: 'D1, EuroLeague, HS varsity, etc.' },
              {
                name: 'tripLength',
                label: 'Preferred Trip Length',
                type: 'select',
                options: ['3 Days', '5 Days', '7 Days', 'Not sure yet'],
              },
              { name: 'dates', label: 'Target Dates', placeholder: 'Roughly when you want to come' },
              {
                name: 'message',
                label: 'Goals & Context',
                type: 'textarea',
                required: true,
                placeholder: 'What do you want to walk out with?',
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        kicker="Travelers FAQ"
        heading="Everything you need to know."
        items={[
          {
            q: 'Who is this program for?',
            a: 'Intermediate to advanced players, 6th grade and up, who don’t live in Phoenix. Pros, college, recruits, dedicated HS players, and trainers studying the method.',
          },
          {
            q: 'How much does it cost?',
            a: 'Pricing varies by trip length and configuration. After you apply, I’ll send a detailed proposal that covers all sessions, film, and access. Lodging and flights are on you.',
          },
          {
            q: 'Where do I stay?',
            a: 'We send a prep packet with recommended hotels and short-term rentals near The PHHacility. Most travelers stay within 10 minutes of the gym.',
          },
          {
            q: 'How many sessions per day?',
            a: 'Two-a-days. AM is skills work. PM is game application + film. Recovery built in.',
          },
          {
            q: 'Can I bring a parent or coach?',
            a: 'Absolutely. They’re welcome on the floor and in film. Many parents fly in with their players.',
          },
          {
            q: 'What if I’m a trainer studying the method?',
            a: 'Trainers are welcome. Note it on your application — we structure the trip differently with shadowing and breakdowns.',
          },
          {
            q: 'Is this a one-time trip or can I come back?',
            a: 'Most travelers come back. Many run a Travelers trip every off-season as their reset.',
          },
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection
        headline={
          <>
            Pack your bag.
            <br />
            <em>Get in the gym.</em>
          </>
        }
        sub="The Travelers Program runs year-round. Slots are limited. Apply now and we’ll start mapping your trip."
        primaryCta={{ href: '#apply', label: 'Apply to Travel →' }}
        secondaryCta={{ href: '/train', label: 'Live in Phoenix?' }}
      />
    </>
  );
}
