'use client';

import { useState } from 'react';

export type InquiryField = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
};

type Props = {
  fields: InquiryField[];
  submitLabel?: string;
  successCopy?: string;
  toEmail?: string;
  variant?: 'ink' | 'cream';
};

export default function InquiryForm({
  fields,
  submitLabel = 'Send →',
  successCopy = 'Got it. I read every inquiry personally — expect a reply within 48 hours.',
  toEmail = 'info@skilledgamebasketball.com',
  variant = 'ink',
}: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // PLACEHOLDER form handler — for spec build, mailto fallback
    const data = new FormData(e.currentTarget);
    const lines: string[] = [];
    fields.forEach((f) => {
      const value = data.get(f.name);
      if (value) lines.push(`${f.label}: ${value}`);
    });
    const body = encodeURIComponent(lines.join('\n\n'));
    const subject = encodeURIComponent(
      String(data.get('subject') || data.get('organization') || 'Skilled Game Inquiry'),
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const fieldClass = variant === 'ink' ? 'field' : 'field field--ink';

  if (submitted) {
    return (
      <div
        style={{
          padding: 32,
          border: '1px solid var(--red)',
          borderRadius: 4,
          background: 'rgba(176, 16, 29, 0.08)',
        }}
      >
        <p className="soul" style={{ fontSize: 22 }}>
          {successCopy}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
    >
      <div className="inquiry-grid">
        {fields.map((f) => (
          <div
            key={f.name}
            className={fieldClass}
            style={{ gridColumn: f.type === 'textarea' ? '1 / -1' : 'auto' }}
          >
            <label htmlFor={f.name}>
              {f.label}
              {f.required && <span style={{ color: 'var(--red-bright)' }}> *</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                placeholder={f.placeholder}
                rows={4}
              />
            ) : f.type === 'select' ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue={f.defaultValue || ''}
              >
                <option value="" disabled>
                  Select…
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type || 'text'}
                required={f.required}
                placeholder={f.placeholder}
                defaultValue={f.defaultValue}
              />
            )}
          </div>
        ))}
      </div>

      <div>
        <button type="submit" className="btn btn-red">
          {submitLabel}
        </button>
      </div>

      <style>{`
        .inquiry-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 720px) {
          .inquiry-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
      `}</style>
    </form>
  );
}
