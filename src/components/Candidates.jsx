import { useState } from 'react';
import { Users, MapPin } from 'lucide-react';
import { urbanCouncilors, ruralCouncilors } from '../data/candidates';
import CandidateModal from './CandidateModal';

function CandidateCard({ person, onOpen }) {
  return (
    <article className="candidate-card">
      <div className="candidate-photo">
        <div className="candidate-photo-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="candidate-role-badge">{person.role}</span>
      </div>
      <div className="candidate-info">
        <h3 className="candidate-name">{person.shortName || person.name}</h3>
        <p className="candidate-origin">
          <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
          {person.origin.split(',')[0]}
        </p>
        <div className="candidate-meta">
          {person.education?.[0]?.title || person.education?.[0]?.institution || 'Líder comunitario'}
        </div>
        <div className="candidate-actions">
          <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem 1rem' }} onClick={() => onOpen(person)}>
            Ver perfil
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Candidates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="equipo" className="section candidates-section">
      <div className="container">
        <div className="section-title">
          <h2>Equipo de Concejales</h2>
          <p>Profesionales y líderes comunitarios comprometidos con el desarrollo de Guamote.</p>
        </div>

        {/* Organigram visual */}
        <div className="organigram">
          <div className="organigram-root">Alcaldía — Ing. Juan Altamirano</div>
          <div className="organigram-branches">
            <div className="organigram-branch">
              <div className="organigram-branch-label">Concejales Urbanos</div>
              <div className="organigram-leaves">
                {urbanCouncilors.map((c) => (
                  <div key={c.id} className="organigram-leaf">{c.shortName}</div>
                ))}
              </div>
            </div>
            <div className="organigram-branch">
              <div className="organigram-branch-label">Concejales Rurales</div>
              <div className="organigram-leaves">
                {ruralCouncilors.map((c) => (
                  <div key={c.id} className="organigram-leaf">{c.shortName}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="candidates-group">
          <h3 className="candidates-group-title">
            <Users size={22} /> Concejales Urbanos
          </h3>
          <div className="candidates-grid">
            {urbanCouncilors.map((person) => (
              <CandidateCard key={person.id} person={person} onOpen={setSelected} />
            ))}
          </div>
        </div>

        <div className="candidates-group">
          <h3 className="candidates-group-title">
            <MapPin size={22} /> Concejales Rurales
          </h3>
          <div className="candidates-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {ruralCouncilors.map((person) => (
              <CandidateCard key={person.id} person={person} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <CandidateModal candidate={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
