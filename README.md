# Good Lab Agency — лендинг

Одностраничник на русском. Vite + React 18 + TypeScript, CSS без фреймворков.

## Запуск

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```

Сборка статическая, `base: './'` — `dist/` кладётся в любой подкаталог любого
хостинга. Внешних запросов при загрузке нет: Inter лежит рядом в
`public/fonts/` (variable woff2, латиница + кириллица отдельными сабсетами,
источник — `@fontsource-variable/inter@5`).

## Где что лежит

| Путь | Что |
|---|---|
| `src/data/content.ts` | **весь текст** — править здесь |
| `src/styles/tokens.css` | палитра, радиусы, сетка, типографские константы |
| `src/styles/base.css` | сброс, `.section` / `.container` / `.btn` / `.card` / `.grid` |
| `src/components/*.tsx` + `*.css` | по файлу на секцию |
| `index.html` | `<title>`, description, OG/Twitter, `@font-face` |
| `public/fonts/` | Inter woff2 |
| `public/CNAME`, `public/.nojekyll` | для GitHub Pages |

## GitHub Pages

Сайт живёт на `https://goodlabagency.ru/`. В `public/` лежат `CNAME` с доменом
и пустой `.nojekyll` — Vite копирует их в `dist/` как есть. Публикуется
содержимое `dist/`.

## Адаптив

Брейкпоинты: 1024 / 900 / 860 / 768 / 640 / 560 / 480. Рассчитано на 1440, 1024 и 390.
