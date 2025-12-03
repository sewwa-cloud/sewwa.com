# Astro Blog - LekoArts Minimal Blog Theme

This blog is built using the [LekoArts Minimal Blog Theme](https://github.com/LekoArts/astro-theme-minimal-blog), a beautiful and feature-rich Astro theme.

## ✨ Features

- ✅ Minimal, clean design with Tailwind CSS
- ✅ MDX support with custom components
- ✅ Code blocks powered by Expressive Code
- ✅ Custom asides component (note, tip, caution, danger)
- ✅ Live coding powered by Sandpack
- ✅ RSS Feed & Sitemap
- ✅ Light/Dark/System color mode toggle
- ✅ Tag-based organization
- ✅ Pagefind search functionality
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data

## 🚀 Project Structure

This theme follows the standard Astro project structure:

```text
├── public/          # Static assets (favicon, images)
├── content/         # Blog posts (MDX files)
├── scripts/         # CLI assistant for creating posts
├── src/
│   ├── components/  # Astro/React components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes (index, blog, about, tags)
│   ├── assets/      # MDX content (hero, about)
│   └── styles/      # Global CSS
├── astro.config.ts  # Astro configuration
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

### Creating Blog Posts

This theme includes a CLI assistant to help you create new blog posts:

```bash
npm run assistant
```

This will guide you through creating a new post with proper frontmatter.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run build:pagefind`  | Build Pagefind search index                      |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Run ESLint to check code quality                 |
| `npm run lint:fix`        | Fix ESLint errors automatically                  |
| `npm run format`          | Format code with Prettier                        |
| `npm run assistant`       | Create a new blog post with CLI assistant        |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 Theme Information

This project uses the [LekoArts Minimal Blog Theme](https://github.com/LekoArts/astro-theme-minimal-blog) for Astro. The theme includes:

- Beautiful typography and clean design
- Expressive Code for syntax highlighting
- Sandpack for live code examples
- Custom MDX components (asides, playgrounds)
- Pagefind for site search
- Full TypeScript support

For more information about customizing the theme, visit the [theme repository](https://github.com/LekoArts/astro-theme-minimal-blog).

## 🚀 Deployment

This project is configured for automatic deployment to a Vultr VPS using GitHub Actions. The blog is served at `/blog` subpath.

### Quick Start

1. **Configure GitHub Secrets** (see below)
2. **Push to main branch** - Deployment triggers automatically
3. **Or create a release** - Auto-deploys when published
4. **Or manual trigger** - Use GitHub Actions UI

### Deployment Features

- ✅ **Zero-downtime deployments** - Atomic symlink swaps
- ✅ **Release-based strategy** - Each deployment creates a timestamped release
- ✅ **Automatic rollback support** - Previous releases kept for easy rollback
- ✅ **Health checks** - Automatic verification after deployment
- ✅ **Cleanup** - Old releases automatically removed (keeps last 5)

### Required GitHub Secrets

Configure the following secrets in your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

- `SSH_HOST` - VPS IP address or hostname
- `SSH_USER` - SSH username (usually `root` or a deploy user)
- `SSH_PRIVATE_KEY` - SSH private key (PEM format)
- `SSH_PORT` - SSH port (optional, defaults to 22)

### Workflow Steps

The deployment workflow consists of 5 jobs:

1. **🔍 Lint Code** - Runs ESLint to check code quality
2. **🏗️ Build Blog** - Builds the Astro site and creates deployment archive
3. **🚀 Deploy to Vultr** - Uploads and deploys to server with zero downtime
4. **✅ Verify Deployment** - Checks deployment and performs health check
5. **📊 Deployment Summary** - Generates summary report

### Nginx Configuration

Add the following location block to your Nginx server configuration for `www.sewwa.com`:

```nginx
location /blog {
    alias /var/www/sewwa.com/blog;
    try_files $uri $uri/ /blog/index.html;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Ensure your server block includes the root directory:

```nginx
server {
    listen 80;
    server_name www.sewwa.com;
    root /var/www/sewwa.com;
    
    # ... other configurations ...
    
    include /etc/nginx/conf.d/blog.conf;  # or add the location block directly
}
```

After configuring, restart Nginx:

```bash
sudo systemctl restart nginx
```

### Comprehensive Deployment Guide

For detailed deployment information, troubleshooting, rollback procedures, and server setup, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

The deployment guide covers:
- Complete setup instructions
- GitHub Secrets configuration
- Manual deployment procedures
- Rollback procedures
- Troubleshooting common issues
- Server configuration details
- Monitoring and best practices
