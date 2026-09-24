import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/base.css'
import App from './App'

const root = document.getElementById('root')!
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// После `npm run build` разметка уже лежит в index.html (см. scripts/prerender.mjs),
// поэтому в проде гидрируем, а в dev — монтируем с нуля.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
