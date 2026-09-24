import { services } from '../data/content'
import './Services.css'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className="section-title">{services.title}</h2>
          <p className="section-lead">{services.lead}</p>
        </div>

        <div className="grid grid--3">
          {services.items.map((item, i) => (
            <article className="card card--lg card--hover service" key={item.title}>
              <span className="service__n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service__title">{item.title}</h3>
              <p className="service__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
