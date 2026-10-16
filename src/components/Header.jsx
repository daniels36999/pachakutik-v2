import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#propuestas', label: 'Propuestas' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header className="header" style={{ boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.15)' : 'none' }}>
      <div className="header-inner">
        <a href="#inicio" className="logo" aria-label="Inicio - Juan Altamirano">
          <span className="logo-mark">18</span>
          <span>Juan Altamirano</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? 'open' : ''}`} role="dialog" aria-label="Menú móvil">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleNav}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
