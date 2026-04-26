import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EmailCapture from '@/components/EmailCapture';
import SectionHeader from '@/components/SectionHeader';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import FinalCTASection from '@/components/FinalCTASection';
import PullQuoteSection from '@/components/PullQuoteSection';

export const metadata: Metadata = {
  title: 'Skilled Game Apparel — Be Better. Be Different.',
  description:
    'Premium training apparel built for the work. Worn at The PHHacility, in 17 countries, by every pro I’ve trained.',
};

const products = [
  // PLACEHOLDER: pull live from existing Wix shop or migrated Shopify
  { name: 'SG Tee', price: '$38' },
  { name: 'SG Hoodie', price: '$78' },
  { name: 'BE BETTER Tee', price: '$42' },
  { name: 'PHHacility Cap', price: '$32' },
  { name: 'SG Shorts', price: '$48' },
  { name: 'Camp Tee', price: '$36' },
];

const externalShop = 'https://www.skilledgamebasketball.com/shop';

export default function ShopPage() {
  return (
    <>
      <PageHero
        kicker="Skilled Game Apparel"
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
        sub="Wear what we wear. Premium training apparel built for the work. Worn at The PHHacility, in 17 countries, by every pro I’ve trained."
        primaryCta={{ href: externalShop, label: 'Shop The Drop →' }}
        secondaryCta={{ href: '#waitlist', label: 'Drop Waitlist ↓' }}
        halftoneCorners={['bottom-left']}
      />

      {/* Drop Waitlist */}
      <section id="waitlist">
        <EmailCapture
          kicker="Next Drop"
          headline="First in line."
          sub="Limited drops every quarter. Members get 24-hour first access. Drop your email — we’ll tell you when."
          trustLine="No spam. Drop alerts only."
        />
      </section>

      {/* Featured Products */}
      <section
        className="section surface-cream"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HalftonePattern corner="top-right" size={260} opacity={0.3} />
        <div className="wrap">
          <SectionHeader
            kicker="Featured"
            headline={<>This season’s drop.</>}
            sub="The current run. Limited stock — when it’s gone, we move to the next."
            variant="cream"
          />
          <div className="product-grid reveal-stagger">
            {products.map((p) => (
              <Link
                key={p.name}
                href={externalShop}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                <article
                  style={{
                    border: '1px solid var(--hairline-ink)',
                    background: 'var(--white)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'transform 0.3s var(--ease-out), border-color 0.3s var(--ease-out)',
                  }}
                  className="product-card"
                >
                  <div
                    style={{
                      aspectRatio: '4 / 5',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    aria-label={`${p.name} — placeholder`}
                  >
                    {/* PLACEHOLDER product photo */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(40px, 6vw, 64px)',
                        color: 'rgba(176, 16, 29, 0.25)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        textAlign: 'center',
                        padding: 16,
                      }}
                    >
                      SG
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '20px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <h3
                      className="display-sm"
                      style={{ fontSize: 18, color: 'var(--ink)', letterSpacing: '0.02em' }}
                    >
                      {p.name}
                    </h3>
                    <span
                      className="mono"
                      style={{ color: 'var(--red-bright)', fontSize: 15, fontWeight: 600 }}
                    >
                      {p.price}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: '0 22px 20px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-60)',
                    }}
                  >
                    Add to Cart →
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <style>{`
            .product-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            @media (min-width: 760px) { .product-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
            .product-card { transition: transform 0.3s var(--ease-out), border-color 0.3s var(--ease-out); }
            .product-card:hover { transform: translateY(-4px); border-color: var(--red); }
          `}</style>
        </div>
      </section>

      {/* Brand Story */}
      <PullQuoteSection
        kicker="Why The Gear"
        quote="If it’s not good enough for me to train in, I don’t drop it."
        attribution="Joshua Villarreal"
      />

      <section className="section surface-ink">
        <div className="wrap">
          <div className="story-grid">
            <div>
              <KickerWithLines>The Standard</KickerWithLines>
              <h2 className="display-lg reveal" style={{ marginBottom: 24 }}>
                Earned. <em>Not sold.</em>
              </h2>
              <p
                className="reveal"
                style={{
                  fontSize: 'clamp(16px, 1.4vw, 19px)',
                  color: 'var(--ash-soft)',
                  lineHeight: 1.65,
                  maxWidth: '52ch',
                }}
              >
                I wear it. My pros wear it. My travelers wear it home. Every drop reflects the
                same standard I train at.
              </p>
            </div>
            <div
              className="reveal"
              style={{
                aspectRatio: '4 / 5',
                background: 'linear-gradient(135deg, var(--ink-90) 0%, var(--ink-60) 100%)',
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
              }}
              aria-label="Gear lifestyle photo placeholder"
            >
              <HalftonePattern corner="bottom-right" size={240} opacity={0.55} />
              {/* PLACEHOLDER gear lifestyle photo */}
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
              .story-grid { grid-template-columns: 1.2fr 1fr; gap: 80px; }
            }
          `}</style>
        </div>
      </section>

      {/* Team / Bulk */}
      <section
        className="section-tight surface-cream"
        style={{ borderTop: '1px solid var(--hairline-ink)' }}
      >
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2 className="display-md" style={{ marginBottom: 14 }}>
            Team Orders / Wholesale
          </h2>
          <p
            style={{
              color: 'var(--ink-60)',
              fontSize: 17,
              marginBottom: 28,
              maxWidth: '46ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Custom branding for your team, academy, or facility. Bulk pricing on request.
          </p>
          <Link href="/contact?subject=Team+Apparel" className="btn btn-ghost-ink">
            Inquire →
          </Link>
        </div>
      </section>

      <FinalCTASection
        headline={
          <>
            Wear the <em>work.</em>
          </>
        }
        sub="Limited drops, no resupplies. Get on the waitlist and get in early."
        primaryCta={{ href: externalShop, label: 'Shop The Drop →' }}
        secondaryCta={{ href: '#waitlist', label: 'Drop Waitlist' }}
      />
    </>
  );
}
