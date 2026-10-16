import {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users
} from 'lucide-react';
import { proposals } from '../data/proposals';

const iconMap = {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users
};

export default function Roadmap() {
  return (
    <section className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Roadmap del Plan</h2>
          <p>Recorrido visual de las 8 propuestas prioritarias para el cantón.</p>
        </div>

        <div className="roadmap">
          <div className="roadmap-track">
            {proposals.map((p, i) => {
              const Icon = iconMap[p.icon] || Droplets;
              return (
                <div key={p.id} className="roadmap-item">
                  <div className="roadmap-num">{p.number}</div>
                  <div className="roadmap-icon">
                    <Icon size={28} />
                  </div>
                  <div className="roadmap-title">{p.shortTitle}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
