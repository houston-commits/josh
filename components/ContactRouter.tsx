'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import InquiryForm from './InquiryForm';
import KickerWithLines from './KickerWithLines';

const subjects = [
  {
    id: 'train',
    label: 'Train With Me',
    sub: 'Phoenix or fly-in',
    subject: 'Training Inquiry',
  },
  {
    id: 'camp',
    label: 'Host a Camp',
    sub: 'Bring me to your city',
    subject: 'Host a Camp Inquiry',
  },
  {
    id: 'partner',
    label: 'Partnership / Brand',
    sub: 'Sponsorships, brand collabs',
    subject: 'Partnership Inquiry',
  },
  { id: 'media', label: 'Media / Press', sub: 'Interviews, features', subject: 'Media Inquiry' },
];

function ContactRouterInner() {
  const params = useSearchParams();
  const initialSubject = params.get('subject');
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) setActive('partner');
  }, [initialSubject]);

  const activeSubject =
    subjects.find((s) => s.id === active)?.subject || initialSubject || '';

  return (
    <>
      <section className="section surface-cream">
        <div className="wrap">
          <KickerWithLines variant="ink">Choose Your Path</KickerWithLines>
          <h2 className="display-md reveal" style={{ marginBottom: 36 }}>
            What brings you here?
          </h2>

          <div className="router-grid">
            {subjects.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setActive(s.id);
                    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    textAlign: 'left',
                    border: `1.5px solid ${isActive ? 'var(--red)' : 'var(--hairline-ink)'}`,
                    background: isActive ? 'var(--ink)' : 'var(--white)',
                    color: isActive ? 'var(--cream)' : 'var(--ink)',
                    padding: 28,
                    borderRadius: 4,
                    transition: 'all 0.25s var(--ease-out)',
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--red-bright)' : 'var(--ash)',
                      marginBottom: 14,
                    }}
                  >
                    {s.sub}
                  </div>
                  <div
                    className="display-sm"
                    style={{ fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.05 }}
                  >
                    {s.label}
                  </div>
                </button>
              );
            })}
          </div>

          <style>{`
            .router-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 14px;
            }
            @media (min-width: 600px) { .router-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1000px) { .router-grid { grid-template-columns: repeat(4, 1fr); } }
          `}</style>
        </div>
      </section>

      <section
        id="inquiry-form"
        className="section surface-ink"
        style={{ borderTop: '1px solid var(--hairline)' }}
      >
        <div className="wrap" style={{ maxWidth: 920 }}>
          <KickerWithLines>The Inquiry</KickerWithLines>
          <h2 className="display-md reveal" style={{ marginBottom: 18 }}>
            Tell me what you need.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              color: 'var(--ash-soft)',
              marginBottom: 48,
              maxWidth: '54ch',
            }}
          >
            Every inquiry comes to my inbox. I personally read and route them. Expect a reply
            within 48 hours.
          </p>

          <InquiryForm
            key={activeSubject || 'default'}
            submitLabel="Send →"
            successCopy="Inquiry received. I personally read and route every one — expect a reply within 48 hours."
            fields={[
              { name: 'name', label: 'Your Name', required: true },
              { name: 'email', label: 'Email', type: 'email', required: true },
              { name: 'city', label: 'City / Country', placeholder: 'Phoenix, USA' },
              {
                name: 'role',
                label: 'You Are A',
                type: 'select',
                required: true,
                options: ['Player', 'Parent', 'Trainer', 'Coach', 'Brand', 'Media', 'Other'],
              },
              {
                name: 'subject',
                label: 'Subject',
                required: true,
                placeholder: 'What’s this about?',
                defaultValue: activeSubject,
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Tell me what you need.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}

export default function ContactRouter() {
  return (
    <Suspense fallback={null}>
      <ContactRouterInner />
    </Suspense>
  );
}
