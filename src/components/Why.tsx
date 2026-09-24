import { why } from '../data/content'
import './Why.css'

export default function Why() {
  return (
    <section className="section section--warm" id="why">
      <div className="container why__layout">
        <div className="why__head">
          <p className="eyebrow">{why.eyebrow}</p>
          <h2 className="section-title">{why.title}</h2>
        </div>

        <ul className="why__list">
          {why.items.map((item) => (
            <li className="why__item" key={item.title}>
              <span className="why__check" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                  <path
                    d="M3 8.5 6.2 11.5 13 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="why__title">{item.title}</h3>
                <p className="why__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
