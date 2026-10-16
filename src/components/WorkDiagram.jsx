import { Droplets, Map, TrendingUp, Leaf, Monitor } from 'lucide-react';
import { areas, proposals } from '../data/proposals';

const iconMap = {
  Droplets, Map, TrendingUp, Leaf, Monitor
};

export default function WorkDiagram() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Trabajo</h2>
          <p>Propuestas agrupadas por ejes de gestión municipal.</p>
        </div>

        <div className="work-diagram">
          <div className="diagram-root">
            <div className="diagram-root-badge">
              Plan de Trabajo — Guamote
            </div>
          </div>

          <div className="diagram-branches">
            {areas.map((area) => {
              const Icon = iconMap[area.icon] || Map;
              const related = proposals.filter((p) => area.proposals.includes(p.id));
              return (
                <div key={area.id} className="diagram-branch">
                  <div className="diagram-branch-title">
                    <Icon size={18} />
                    {area.title}
                  </div>
                  {related.map((p) => (
                    <div key={p.id} className="diagram-leaf">
                      {p.shortTitle}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
