# My Personal Portfolio Website

Portfolio website created using React and Vite, deployed on Vercel.

[LIVE DEMO](https://carlosriver.com)

## Development

Requires Node 22.

```bash
npm ci
npm run dev      # local dev server
npm test         # smoke tests (Vitest)
npm run lint
npm run build    # production build in dist/
```

Page content (bio, projects, social links) lives in `public/resumeData.json`.
The jQuery plugins in `public/js/` are loaded as plain scripts from `index.html`.

## Credits

Inspired by [Tim Baker (tbakerx)](https://github.com/tbakerx/react-resume-template/blob/master/README.md)
