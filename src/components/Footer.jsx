export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#inicio" className="logo">
              <span className="logo-mark">18</span>
              <span>Juan Altamirano</span>
            </a>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Candidato a Alcalde del Cantón Guamote
            </p>
          </div>

          <nav className="footer-nav" aria-label="Enlaces del pie">
            <a href="#inicio">Inicio</a>
            <a href="#perfil">Perfil</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#propuestas">Propuestas</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-accents">
            <span className="footer-dot" style={{ background: '#D81119' }} />
            <span className="footer-dot" style={{ background: '#EE8D09' }} />
            <span className="footer-dot" style={{ background: '#36A036' }} />
            <span className="footer-dot" style={{ background: '#3FA5DD' }} />
          </div>
          <p>
            © {year} Candidatura Juan Altamirano — Cantón Guamote. Todos los derechos reservados.
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
            Sitio informativo. No constituye propaganda electoral oficial.
          </p>
        </div>
      </div>
    </footer>
  );
}
