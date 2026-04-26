import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EmailCapture from '@/components/EmailCapture';
import SectionHeader from '@/components/SectionHeader';
import KickerWithLines from '@/components/KickerWithLines';
import HalftonePattern from '@/components/HalftonePattern';
import FinalCTASection from '@/components/FinalCTASection';
import PullQuoteSection from '@/components/PullQuoteSection';
import MediaImage from '@/components/MediaImage';

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
        headline={[
          'Be Better.',
          <>
            Be <em>Different.</em>
          </>,
        ]}
        sub="Wear what we wear. Premium training apparel built for the work. Worn at The PHHacility, in 17 countries, by every pro I’ve trained."
        primaryCta={{ href: externalShop, label: 'Shop The Drop →' }}
        secondaryCta={{ href: '#waitlist', label: 'Drop Waitlist ↓' }}
        halftoneCorners={['bottom-left']}
        bgSeed="sg-shop-hero-2"
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
        <HalftonePattern corner="top-right" opacity={0.3} />
        <div className="wrap">
          <SectionHeader
            kicker="Featured"
            headline={<>This season’s drop.</>}
            sub="The current run. Limited stock — when it’s gone, we move to the next."
            variant="cream"
          />
          <div className="product-grid reveal-stagger">
            {products.map((p, i) => (
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
                  }}
                  className="product-card"
                >
                  <MediaImage
                    seed={`sg-product-${i}`}
                    alt={p.name}
                    aspect="4 / 5"
                    tone="ink"
                    width={800}
                    height={1000}
                  />
                  <div
                    style={{
                      padding: '18px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <h3
                      className="display-sm"
                      style={{ fontSize: 17, color: 'var(--ink)', letterSpacing: '0.02em' }}
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
                      padding: '0 20px 18px',
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
            <MediaImage
              seed="sg-shop-lifestyle"
              alt="Skilled Game gear at The PHHacility"
              aspect="4 / 5"
              tone="red"
            />
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
