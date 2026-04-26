import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Marquee from '@/components/Marquee';
import SectionHeader from '@/components/SectionHeader';
import PathCard from '@/components/PathCard';
import StatStrip from '@/components/StatStrip';
import Testimonials from '@/components/Testimonials';
import EmailCapture from '@/components/EmailCapture';
import FinalCTASection from '@/components/FinalCTASection';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';

export const metadata: Metadata = {
  title: 'Skilled Game Basketball — Be Better. Be Different.',
  description:
    'NBA Skills Trainer Joshua Villarreal. 11 years. 20+ NBA pros. Camps in 17 countries. Train with me anywhere on Earth — or fly to Phoenix.',
};

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="Phoenix, AZ · 17 Countries"
        headline={
          <>
            <span className="hero-word hero-word--d1">
              <span>Be Better.</span>
            </span>
            <br />
            <span className="hero-word hero-word--d2">
              <span>Be Different.</span>
            </span>
          </>
        }
        sub="NBA Skills Trainer Joshua Villarreal. 11 years. 20+ NBA pros. Camps in 17 countries. Train with me anywhere on Earth — or fly to Phoenix and train at The PHHacility."
        primaryCta={{ href: '/train', label: 'Train With Me →' }}
        secondaryCta={{ href: '#paths', label: 'Watch Highlights ↓' }}
        faithMark
        halftoneCorners={['top-left']}
      />

      {/* NBA Roster Marquee */}
      <Marquee
        items={[
          'Ben Gordon',
          '20+ NBA Pros',
          'WNBA Trainer',
          'Global Camp Clinician',
          'Under Armour Partner',
          '17 Countries',
          '5 Continents',
          '11 Years',
          'Be Better',
          'Be Different',
        ]}
      />

      {/* The Three Paths */}
      <section id="paths" className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="How Do You Want to Train?"
            headline={<>Pick Your Path.</>}
            sub="Three ways to work. Same method. Same standard. Different on-ramps."
          />
          <div className="paths-grid">
            <PathCard
              number="01"
              eyebrow="In Phoenix"
              title="Train In Phoenix"
              body="Memberships, packages, drop-ins. Train weekly at The PHHacility with Joshua and the Skilled Game team."
              href="/train"
              cta="Phoenix Training →"
            />
            <PathCard
              number="02"
              eyebrow="Fly To Me"
              title="Fly To Me"
              body="The Travelers Program. Come to Phoenix from anywhere on Earth. Train one-on-one for 3, 5, or 7 days."
              href="/travelers"
              cta="Travelers Program →"
            />
            <PathCard
              number="03"
              eyebrow="Anywhere"
              title="Train Anywhere"
              body="The Skilled Game App. Weekly programming, drill library, film breakdowns, global community. From anywhere."
              href="/app"
              cta="Skilled Game App →"
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

      {/* Joshua's Story Tease */}
      <section
        className="section surface-cream"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" size={300} opacity={0.3} />
        <div className="wrap">
          <div className="story-grid">
            <div
              className="reveal"
              style={{
                aspectRatio: '4 / 5',
                background: 'linear-gradient(135deg, var(--ink-90) 0%, var(--ink-60) 100%)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
              }}
              aria-label="Photo of Joshua Villarreal — placeholder"
            >
              {/* PLACEHOLDER: Joshua portrait */}
              <HalftonePattern corner="bottom-left" size={220} opacity={0.55} />
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  right: 24,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ash-soft)',
                }}
              >
                Photo · The PHHacility
              </div>
            </div>
            <div>
              <KickerWithLines variant="ink">Meet Joshua</KickerWithLines>
              <h2 className="display-lg reveal" style={{ marginBottom: 24 }}>
                From Ben Gordon to <em>17 countries.</em>
              </h2>
              <p
                className="reveal"
                style={{
                  fontSize: 'clamp(16px, 1.4vw, 19px)',
                  lineHeight: 1.6,
                  color: 'var(--ink-60)',
                  marginBottom: 28,
                  maxWidth: '50ch',
                }}
              >
                I started training pros at 18. By 19, I was on the road with Ben Gordon. Now I run
                Skilled Game Basketball — camps in 17 countries, training at The PHHacility, and
                the Skilled Game App in players’ pockets all over the world.
              </p>
              <p
                className="soul reveal"
                style={{ fontSize: 24, color: 'var(--red-bright)', marginBottom: 32 }}
              >
                “All glory to God. Get in The Gym.”
              </p>
              <Link href="/about" className="btn btn-ghost-ink">
                Read My Story →
              </Link>
            </div>
          </div>
          <style>{`
            .story-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 48px;
              align-items: center;
            }
            @media (min-width: 880px) {
              .story-grid { grid-template-columns: 1fr 1.2fr; gap: 80px; }
            }
          `}</style>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="The Ecosystem"
            headline={<>More than training.</>}
            sub="Skilled Game is camps, club, apparel, and the Virtual Academy — all built around the same method."
          />
          <div className="paths-grid">
            <PathCard
              eyebrow="Worldwide"
              title="Global Camps"
              body="Skilled Game Camps in 17 countries. Bring me to your city, or join a tour stop."
              href="/camps"
              cta="See Camps →"
            />
            <PathCard
              eyebrow="Phoenix"
              title="SGB Club"
              body="Phoenix-based youth club teams. Under Armour Next Boys Hoops affiliated. 2030, 2031, 2032 boys."
              href="https://www.skilledgamebasketball.com/sgb-club"
              external
              cta="SGB Club →"
            />
            <PathCard
              eyebrow="Apparel"
              title="The Apparel"
              body="Wear what we wear. Premium training gear built for the work. Be Better. Be Different."
              href="/shop"
              cta="Shop The Drop →"
            />
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <StatStrip
        stats={[
          { number: '20+', label: 'NBA Players' },
          { number: '17', label: 'Countries' },
          { number: '11', label: 'Years' },
        ]}
        caption="Skilled Game Basketball isn’t a brand. It’s a method."
      />

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
              'Brought him to our federation’s top 50 camp. The kids are still talking about it 6 months later.',
            name: 'Coach Levi',
            role: 'Federation Director',
            country: 'Australia',
          },
        ]}
      />

      {/* Email Capture */}
      <EmailCapture
        kicker="Be Better. Be Different."
        headline="Get Drills Weekly."
        sub="Free weekly drill, monthly free workout, drop alerts first. Straight to your inbox."
        trustLine="No spam. Just work."
      />

      {/* Final CTA */}
      <FinalCTASection
        headline={
          <>
            Ready to <em>work?</em>
          </>
        }
        sub="Pick your path. Get in the gym."
        primaryCta={{ href: '/train', label: 'Phoenix Training →' }}
        secondaryCta={{ href: '/travelers', label: 'The Travelers Program' }}
      />
    </>
  );
}
