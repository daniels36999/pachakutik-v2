import { GraduationCap, Briefcase, Droplets, Building2, Map } from 'lucide-react';
import { candidate } from '../data/candidate';

const icons = {
  '2016': GraduationCap,
  '2016-2017': Briefcase,
  '2018-2019': Building2,
  '2020-2023': Droplets,
  '2023-2024': Map,
  '2025-2026': Briefcase,
};

const timelineData = [
  {
    year: '2016',
    title: 'Ingeniero Civil',
    institution: 'Universidad Nacional de Chimborazo',
    description: 'Título profesional obtenido.'
  },
  {
    year: '2016-2017',
    title: 'Emprendimiento',
    institution: 'Riobamba',
    description: 'Servicio de acabados para la construcción.'
  },
  {
    year: '2018-2019',
    title: 'Topógrafo',
    institution: 'GAD Municipal de Guamote',
    description: 'Levantamiento y fiscalización de obra civil.'
  },
  {
    year: '2020-2023',
    title: 'Técnico de Riego',
    institution: 'GADPCH — Guamote y Colta',
    description: 'Proyectos de tecnificación y optimización del uso del agua.'
  },
  {
    year: '2023-2024',
    title: 'Director General de Riego',
    institution: 'GAD Provincial de Chimborazo',
    description: 'Responsable de 1.200 sistemas de riego en 10 cantones.'
  },
  {
    year: '2025-2026',
    title: 'Asesoramiento técnico',
    institution: 'Comunidades de Guamote',
    description: 'Elaboración de proyectos de riego.'
  },
];

export default function Timeline() {
  return (
    <section id="trayectoria" className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Trayectoria</h2>
          <p>Formación académica y experiencia profesional a lo largo de los años.</p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="timeline">
          <div className="timeline-track">
            <div className="timeline-line" aria-hidden="true" />
            {timelineData.map((item) => {
              const Icon = icons[item.year] || Briefcase;
              return (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-node">
                    <Icon size={22} />
                  </div>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-inst">{item.institution}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="timeline-vertical">
          {timelineData.map((item) => {
            const Icon = icons[item.year] || Briefcase;
            return (
              <div key={item.year} className="timeline-v-item">
                <div className="timeline-v-node">
                  <Icon size={14} />
                </div>
                <div className="timeline-v-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-inst">{item.institution}</div>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
