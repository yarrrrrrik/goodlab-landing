import { stack } from '../data/content'
import './Stack.css'

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{stack.eyebrow}</p>
          <h2 className="section-title">{stack.title}</h2>
          <p className="section-lead">{stack.lead}</p>
        </div>

        <div className="stack__groups">
          {stack.groups.map((group) => (
            <div className="stack__group" key={group.title}>
              <h3 className="stack__group-title">{group.title}</h3>
              <ul className="stack__tags">
                {group.items.map((item) => (
                  <li className="stack__tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
