// Пререндер: рендерим App в строку через react-dom/server и вставляем
// в собранный dist/index.html. Нужен, чтобы в HTML был реальный текст —
// без этого поисковики и превью в мессенджерах видят пустой <div id="root">.
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const indexPath = path.join(root, 'dist', 'index.html')

const { render } = await import(path.join(root, '.ssr', 'entry-server.js'))
const html = render()

const template = await readFile(indexPath, 'utf-8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`Не нашёл ${marker} в dist/index.html — пререндер не выполнен`)
}

await writeFile(indexPath, template.replace(marker, `<div id="root">${html}</div>`), 'utf-8')
console.log(`prerender: в dist/index.html вставлено ${html.length} символов разметки`)
