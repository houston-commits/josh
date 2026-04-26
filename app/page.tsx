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
import MediaImage from '@/components/MediaImage';

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
        headline={[
          'Be Better.',
          <>
            Be <em>Different.</em>
          </>,
        ]}
        sub="NBA Skills Trainer Joshua Villarreal. 11 years. 20+ NBA pros. Camps in 17 countries. Train anywhere on Earth — or fly to Phoenix and train at The PHHacility."
        primaryCta={{ href: '/train', label: 'Train With Me →' }}
        secondaryCta={{ href: '#paths', label: 'Watch Highlights ↓' }}
        faithMark
        halftoneCorners={['top-left']}
        bgSeed="sg-home-hero-9"
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

      {/* The Three Paths — now with imagery */}
      <section id="paths" className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="How Do You Want to Train?"
            headline={<>Pick Your Path.</>}
            sub="Three ways to work. Same method. Same standard. Different on-ramps."
          />
          <div className="paths-grid paths-grid--with-img">
            {[
              {
                num: '01',
                eyebrow: 'In Phoenix',
                title: 'Train In Phoenix',
                body: 'Memberships, packages, drop-ins. Train weekly at The PHHacility with Joshua and the Skilled Game team.',
                href: '/train',
                cta: 'Phoenix Training →',
                seed: 'sg-path-phx',
              },
              {
                num: '02',
                eyebrow: 'Fly To Me',
                title: 'Fly To Me',
                body: 'The Travelers Program. Come to Phoenix from anywhere on Earth. Train one-on-one for 3, 5, or 7 days.',
                href: '/travelers',
                cta: 'Travelers Program →',
                seed: 'sg-path-trv',
              },
              {
                num: '03',
                eyebrow: 'Anywhere',
                title: 'Train Anywhere',
                body: 'The Skilled Game App. Weekly programming, drill library, film breakdowns, global community.',
                href: '/app',
                cta: 'Skilled Game App →',
                seed: 'sg-path-app',
              },
            ].map((p) => (
              <Link
                key={p.num}
                href={p.href}
                className="path-card-img"
                aria-label={p.title}
              >
                <MediaImage
                  seed={p.seed}
                  alt=""
                  aspect="4 / 5"
                  tone="red"
                  width={900}
                  height={1125}
                />
                <div className="path-card-img__overlay">
                  <div className="path-card-img__top">
                    <span className="mono path-card-img__num">{p.num}</span>
                    <span className="mono path-card-img__eyebrow">{p.eyebrow}</span>
                  </div>
                  <div>
                    <h3 className="display-sm path-card-img__title">{p.title}</h3>
                    <p className="path-card-img__body">{p.body}</p>
                    <div className="mono path-card-img__cta">{p.cta}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Joshua's Story Tease — real photo */}
      <section
        className="section surface-cream"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" opacity={0.3} />
        <div className="wrap">
          <div className="story-grid">
            <MediaImage
              seed="sg-joshua-story"
              alt="Joshua Villarreal training at The PHHacility"
              aspect="4 / 5"
              tone="red"
            />
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
        </div>
      </section>

      {/* Ecosystem — image cards */}
      <section className="section surface-ink">
        <div className="wrap">
          <SectionHeader
            kicker="The Ecosystem"
            headline={<>More than training.</>}
            sub="Skilled Game is camps, club, apparel, and the Virtual Academy — all built around the same method."
          />
          <div className="paths-grid paths-grid--with-img">
            {[
              {
                title: 'Global Camps',
                eyebrow: 'Worldwide',
                body: 'Skilled Game Camps in 17 countries. Bring me to your city, or join a tour stop.',
                href: '/camps',
                cta: 'See Camps →',
                seed: 'sg-eco-camps',
              },
              {
                title: 'SGB Club',
                eyebrow: 'Phoenix',
                body: 'Phoenix-based youth club teams. Under Armour Next Boys Hoops affiliated. 2030, 2031, 2032 boys.',
                href: 'https://www.skilledgamebasketball.com/sgb-club',
                cta: 'SGB Club →',
                seed: 'sg-eco-club',
                external: true,
              },
              {
                title: 'The Apparel',
                eyebrow: 'Apparel',
                body: 'Wear what we wear. Premium training gear built for the work.',
                href: '/shop',
                cta: 'Shop The Drop →',
                seed: 'sg-eco-apparel',
              },
            ].map((p) => {
              const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="path-card-img"
                  >
                    {children}
                  </a>
                ) : (
                  <Link href={p.href} className="path-card-img">
                    {children}
                  </Link>
                );
              return (
                <Wrapper key={p.title}>
                  <MediaImage
                    seed={p.seed}
                    alt=""
                    aspect="4 / 5"
                    tone="duotone"
                    width={900}
                    height={1125}
                  />
                  <div className="path-card-img__overlay">
                    <div className="path-card-img__top">
                      <span className="mono path-card-img__eyebrow">{p.eyebrow}</span>
                    </div>
                    <div>
                      <h3 className="display-sm path-card-img__title">{p.title}</h3>
                      <p className="path-card-img__body">{p.body}</p>
                      <div className="mono path-card-img__cta">{p.cta}</div>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
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
