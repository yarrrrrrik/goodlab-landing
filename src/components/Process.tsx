import { process } from '../data/content'
import './Process.css'

export default function Process() {
  return (
    <section className="section section--warm" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-lead">{process.lead}</p>
        </div>

        <ol className="grid grid--4 process__list">
          {process.steps.map((step) => (
            <li className="card card--hover process__step" key={step.n}>
              <span className="chip">{step.term}</span>
              <span className="process__n" aria-hidden="true">
                {step.n}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
