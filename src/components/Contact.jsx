import { MapPin, Phone, Mail, Share2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Información de contacto oficial de la candidatura.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-item">
            <MapPin size={28} style={{ margin: '0 auto 1rem', color: 'var(--accent-cyan)' }} />
            <h3>Ubicación</h3>
            <p>Cantón Guamote<br />Provincia de Chimborazo<br />Ecuador</p>
          </div>
          <div className="contact-item">
            <Phone size={28} style={{ margin: '0 auto 1rem', color: 'var(--accent-orange)' }} />
            <h3>Teléfono</h3>
            <p className="contact-placeholder">Agregar teléfono oficial</p>
          </div>
          <div className="contact-item">
            <Mail size={28} style={{ margin: '0 auto 1rem', color: 'var(--accent-green)' }} />
            <h3>Correo</h3>
            <p className="contact-placeholder">Agregar correo oficial</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Share2 size={20} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle', color: 'var(--accent-cyan)' }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            Agregar enlace oficial a redes sociales
          </span>
        </div>
      </div>
    </section>
  );
}
