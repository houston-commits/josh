'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/train', label: 'Train' },
  { href: '/travelers', label: 'Travelers' },
  { href: '/camps', label: 'Camps' },
  { href: '/app', label: 'App' },
  { href: '/shop', label: 'Shop' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
          transition: 'all 0.3s var(--ease-out)',
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
        >
          <Link
            href="/"
            aria-label="Skilled Game Basketball"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
            }}
          >
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                background: 'var(--red)',
                borderRadius: 1,
              }}
            />
            Skilled Game
          </Link>

          <nav
            aria-label="Primary"
            className="nav-desktop"
            style={{ display: 'none', alignItems: 'center', gap: 28 }}
          >
            {links.map((l) => {
              const active =
                pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--cream)' : 'var(--ash-soft)',
                    paddingBottom: 6,
                    borderBottom: active ? '2px solid var(--red)' : '2px solid transparent',
                    transition: 'color 0.2s var(--ease-out), border-color 0.2s var(--ease-out)',
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-red btn-sm">
              Connect →
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="nav-burger"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              padding: 10,
              marginRight: -10,
            }}
          >
            <span
              style={{
                width: 26,
                height: 2,
                background: 'var(--cream)',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 0.3s var(--ease-out)',
              }}
            />
            <span
              style={{
                width: 26,
                height: 2,
                background: 'var(--cream)',
                opacity: open ? 0 : 1,
                transition: 'opacity 0.2s var(--ease-out)',
              }}
            />
            <span
              style={{
                width: 26,
                height: 2,
                background: 'var(--cream)',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 0.3s var(--ease-out)',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile takeover */}
      <div
        className="nav-mobile-sheet"
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          background: 'var(--ink)',
          paddingTop: 96,
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s var(--ease-out)',
        }}
      >
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {links.map((l) => {
            const active =
              pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    textTransform: 'uppercase',
                    color: active ? 'var(--red-bright)' : 'var(--cream)',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--hairline)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="btn btn-red"
          style={{ marginTop: 28 }}
        >
          Connect →
        </Link>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .nav-desktop { display: flex !important; }
          .nav-burger { display: none !important; }
          .nav-mobile-sheet { display: none !important; }
        }
      `}</style>
    </>
  );
}
