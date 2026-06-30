# Vishal Chauhan Portfolio

Modern engineering portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React + React Icons

## Development

Install dependencies:

```bash
npm install
```

Run local server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

## CI/CD

- CI workflow: [.github/workflows/ci.yml](.github/workflows/ci.yml)
- Cloudflare deploy workflow: [.github/workflows/cloudflare-pages-deploy.yml](.github/workflows/cloudflare-pages-deploy.yml)

## Cloudflare Pages (GitHub Integration)

1. Push this project to your GitHub repository.
2. In Cloudflare Pages, create a new project and connect that repository.
3. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.

Optional (GitHub Action deploy):

- Add repository secrets:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
- Add repository variable:
  - `CLOUDFLARE_PROJECT_NAME` = your Cloudflare Pages project name (example: `vishal-portfolio`)

## How to create Cloudflare credentials

### 1) `CLOUDFLARE_API_TOKEN`

In Cloudflare Dashboard:

1. Go to **My Profile** → **API Tokens** → **Create Token**.
2. Use **Edit Cloudflare Workers** template (or custom token with Pages deploy permissions).
3. Scope it to your account.
4. Copy token and add to GitHub repo:
   - GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

### 2) `CLOUDFLARE_ACCOUNT_ID`

Find it in Cloudflare dashboard URL/account overview and add it as repository secret.

## Deploy verification checklist

- `main` branch push triggers both workflows.
- CI workflow passes build.
- Cloudflare deploy workflow succeeds.
- Live URL loads correctly.
- Internal section links work.
- Resume button points to `public/resume.pdf`.

## Custom domain (optional)

1. Open Cloudflare Pages project.
2. Go to **Custom domains**.
3. Add your domain and follow DNS instructions.
4. Wait for SSL provisioning and verify HTTPS.
