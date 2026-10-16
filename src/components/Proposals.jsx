import {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users
} from 'lucide-react';
import { proposals } from '../data/proposals';

const iconMap = {
  Droplets,
  Route,
  Map,
  TrendingUp,
  Leaf,
  ShieldAlert,
  Monitor,
  Users,
};

export default function Proposals() {
  return (
    <section id="propuestas" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Plan de Trabajo</h2>
          <p>
            Propuestas establecidas de acuerdo con las competencias del GAD Municipal,
            conforme al artículo 55 del COOTAD.
          </p>
        </div>

        <div className="proposals-grid">
          {proposals.map((p) => {
            const Icon = iconMap[p.icon] || Droplets;
            return (
              <article
                key={p.id}
                className="proposal-card"
                style={{ '--card-accent': p.color }}
              >
                <div className="proposal-number">{p.number}</div>
                <div className="proposal-icon">
                  <Icon size={24} />
                </div>
                <h3 className="proposal-title">{p.title}</h3>
                <p className="proposal-objective">{p.objective}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
