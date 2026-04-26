import Link from 'next/link';
import KickerWithLines from './KickerWithLines';

const colTrain = [
  { href: '/about', label: 'About Joshua' },
  { href: '/train', label: 'Train With Us' },
  { href: '/travelers', label: 'Travelers Program' },
  { href: 'https://www.skilledgamebasketball.com/sgb-club', label: 'SGB Club', external: true },
];

const colMore = [
  { href: '/camps', label: 'Camps & Clinics' },
  { href: '/camps#host', label: 'Host a Camp' },
  { href: '/app', label: 'Virtual Academy' },
  { href: '/shop', label: 'Shop Apparel' },
];

const colConnect = [
  { href: 'https://instagram.com/skilledgame', label: 'Instagram' },
  { href: 'https://tiktok.com/@skilledgame', label: 'TikTok' },
  { href: 'https://youtube.com/@skilledgame', label: 'YouTube' },
  { href: 'https://bio.site/skilledgame', label: 'bio.site/skilledgame' },
  { href: 'mailto:info@skilledgamebasketball.com', label: 'info@skilledgamebasketball.com' },
];

function ColLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="footer-link">
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink-90)',
        color: 'var(--cream)',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <div
        className="wrap"
        style={{ paddingTop: 88, paddingBottom: 56 }}
      >
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: 14,
              }}
            >
              <span
                aria-hidden
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  background: 'var(--red)',
                  marginRight: 10,
                }}
              />
              Skilled Game
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                fontSize: 18,
                letterSpacing: '0.02em',
                color: 'var(--cream)',
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              Be Better.
              <br />
              Be Different.
            </p>
            <ul
              style={{
                listStyle: 'none',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                fontSize: 13,
                letterSpacing: '0.06em',
                color: 'var(--ash-soft)',
                lineHeight: 1.9,
              }}
            >
              <li>NBA Skills Trainer</li>
              <li>17 Countries</li>
              <li>Phoenix, AZ</li>
            </ul>
          </div>

          {/* Col 2 — Train */}
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18, color: 'var(--red-bright)' }}>
              Train
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {colTrain.map((l) => (
                <li key={l.href}>
                  <ColLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — More */}
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18, color: 'var(--red-bright)' }}>
              More
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {colMore.map((l) => (
                <li key={l.href}>
                  <ColLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <h3 className="eyebrow" style={{ marginBottom: 18, color: 'var(--red-bright)' }}>
              Connect
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {colConnect.map((l) => (
                <li key={l.href}>
                  <ColLink href={l.href} label={l.label} external />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Faith bar */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 36,
            borderTop: '1px solid var(--hairline)',
            textAlign: 'center',
          }}
        >
          <KickerWithLines>Faith Over Everything</KickerWithLines>
          <p className="faith-bar" style={{ fontSize: 22 }}>
            “James 4:7 ✝”
          </p>
        </div>

        {/* Legal */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid var(--hairline)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            color: 'var(--ash)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>© 2026 Skilled Game Basketball</span>
          <span>
            Site designed by{' '}
            <a
              href="https://houstonwindle.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cream)', borderBottom: '1px solid var(--red)' }}
            >
              Houston Windle
            </a>
          </span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 1.3fr 1fr 1fr 1.2fr; gap: 56px; }
        }
      `}</style>
    </footer>
  );
}
