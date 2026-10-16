import { GraduationCap, Briefcase, MapPin, User } from 'lucide-react';
import { candidate } from '../data/candidate';

export default function Profile() {
  return (
    <section id="perfil" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Quién es</h2>
          <p>Ingeniero Civil, líder indígena y profesional comprometido con el desarrollo del cantón Guamote.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div className="indicator" style={{ textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="indicator-icon"><User size={20} /></div>
            <div>
              <strong style={{ color: 'var(--color-dark)', display: 'block' }}>Nombre</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{candidate.name}</span>
            </div>
          </div>
          <div className="indicator" style={{ textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="indicator-icon"><MapPin size={20} /></div>
            <div>
              <strong style={{ color: 'var(--color-dark)', display: 'block' }}>Origen</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{candidate.birthPlace}</span>
            </div>
          </div>
          <div className="indicator" style={{ textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="indicator-icon"><GraduationCap size={20} /></div>
            <div>
              <strong style={{ color: 'var(--color-dark)', display: 'block' }}>Formación</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ingeniero Civil — UNACH 2016</span>
            </div>
          </div>
          <div className="indicator" style={{ textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="indicator-icon"><Briefcase size={20} /></div>
            <div>
              <strong style={{ color: 'var(--color-dark)', display: 'block' }}>Experiencia</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Obra pública, riego y gestión municipal</span>
            </div>
          </div>
        </div>

        <p style={{
          maxWidth: '720px',
          margin: '0 auto 3rem',
          textAlign: 'center',
          fontSize: '1.05rem',
          lineHeight: 1.7
        }}>
          {candidate.summary}
        </p>

        <div className="indicators">
          {candidate.indicators.map((ind) => (
            <div key={ind.label} className="indicator">
              <div className="indicator-value">{ind.value}</div>
              <div className="indicator-label">{ind.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
