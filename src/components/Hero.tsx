import { hero } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
      </div>
    </section>
  )
}
