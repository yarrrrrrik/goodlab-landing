import { about } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="section-title">{about.title}</h2>
        <p className="about__body">{about.text}</p>
      </div>
    </section>
  )
}
