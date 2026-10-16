import { ArrowDown, MapPin } from 'lucide-react';
import { candidate } from '../data/candidate';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>

      <div className="container hero-content">
        <div className="hero-text animate-slide-up">
          <span className="title">{candidate.title}</span>
          <h1>{candidate.shortName}</h1>
          <p className="intro">
            {candidate.bio} Ingeniero Civil con experiencia en obra pública, riego y administración municipal.
          </p>
          <div className="hero-actions">
            <a href="#perfil" className="btn btn-primary">
              Conocer trayectoria
            </a>
            <a href="#propuestas" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
              Ver propuestas
            </a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={16} /> {candidate.birthPlace.split(',')[0]}
          </p>
        </div>

        <div className="hero-photo animate-scale-in">
          <div className="hero-photo-frame">
            {/* Reemplazar con foto real del candidato */}
            <div className="hero-photo-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Foto del candidato<br />Reemplazar en /images/candidato/</span>
            </div>
          </div>
          <div className="hero-badge">{candidate.slogan}</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)' }}>
        <a href="#perfil" aria-label="Desplazarse hacia abajo">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
