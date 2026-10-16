import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function CandidateModal({ candidate, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!candidate) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        <div className="modal-header">
          <h3 id="modal-title">{candidate.name}</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            Concejal {candidate.type === 'urbano' ? 'Urbano' : 'Rural'} — {candidate.role}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            {candidate.origin}
          </p>
        </div>

        <div className="modal-body">
          {candidate.education?.length > 0 && (
            <div className="modal-section">
              <h4>Formación</h4>
              <div className="modal-list">
                {candidate.education.map((ed, i) => (
                  <div key={i} className="modal-list-item">
                    <strong>{ed.level}</strong>
                    {ed.title && ` — ${ed.title}`}
                    {ed.year && ` (${ed.year})`}
                    <br />
                    <span>{ed.institution}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {candidate.experience?.length > 0 && (
            <div className="modal-section">
              <h4>Experiencia</h4>
              <div className="modal-list">
                {candidate.experience.map((ex, i) => (
                  <div key={i} className="modal-list-item">
                    {ex.year && <strong>{ex.year} — </strong>}
                    {ex.role}
                    {ex.institution && (
                      <>
                        <br />
                        <span>{ex.institution}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {candidate.alternate && (
            <div className="modal-section">
              <h4>Suplente</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-dark)' }}>
                {candidate.alternate.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
