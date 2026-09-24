import { BRAND, nav } from '../data/content'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#main">
            <span className="footer__mark" aria-hidden="true" />
            {BRAND}
          </a>
          <p className="footer__tagline">
            Аутсорс-разработка веб- и мобильных продуктов: от MVP до поддержки в проде.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Разделы сайта">
          <h2 className="footer__col-title">Разделы</h2>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {BRAND}
        </span>
      </div>
    </footer>
  )
}
