import type { Metadata } from 'next';
import { Anton, Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealMount from '@/components/RevealMount';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
});

const instrument = Instrument_Serif({
  weight: '400',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-soul-loaded',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-loaded',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skilled Game Basketball — Be Better. Be Different.',
  description:
    'NBA Skills Trainer Joshua Villarreal. 11 years. 20+ NBA pros. Camps in 17 countries. Phoenix, Arizona.',
  metadataBase: new URL('https://skilledgamebasketball.com'),
  openGraph: {
    title: 'Skilled Game Basketball — Be Better. Be Different.',
    description:
      'NBA Skills Trainer Joshua Villarreal. 11 years. 20+ NBA pros. Camps in 17 countries. Phoenix, Arizona.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${instrument.variable} ${mono.variable}`}
    >
      <body>
        <RevealMount />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
