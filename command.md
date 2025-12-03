Act as a Senior Frontend Architect and DevOps Engineer. I need you to scaffold a complete AstroJS project with a specific CI/CD pipeline.

**Project Requirements:**

1.  **Framework & Theme:**
    - Initialize a new AstroJS project.
    - Use the "Minimal Blog" starter theme (equivalent to `npm create astro@latest -- --template minimal` or similar structure).
    - Ensure the project structure is clean and modular.

2.  **Configuration (`astro.config.mjs`):**
    - **Output:** Set the build output to `'static'` (SSG).
    - **Base URL:** The blog will live in a subdirectory.
      - Set `site` to `https://www.sewwa.com`.
      - Set `base` to `/blog`.
    - Ensure trailing slashes are handled correctly for this subpath structure.

3.  **Code Quality (Linting & Formatting):**
    - Install and configure **ESLint** and **Prettier**.
    - Include `eslint-plugin-astro` to properly lint `.astro` files.
    - Create a `.eslintrc.cjs` (or `eslint.config.mjs`) and `.prettierrc` with standard best practices.
    - Add scripts to `package.json` for `lint` and `format`.

4.  **CI/CD Pipeline (GitHub Actions -> Vultr VPS):**
    - Create a GitHub Action workflow file at `.github/workflows/deploy.yml`.
    - **Trigger:** Push to the `main` branch.
    - **Jobs:**
      1. Checkout code.
      2. Install dependencies (`npm ci`).
      3. Lint code (fail build if lint errors exist).
      4. Build the project (`npm run build`).
      5. **Deploy:** Use `rsync` via SSH to deploy the `dist/` folder to a Vultr VPS.
      6. apply zero downtime deployment
    - **Secrets:** The workflow must use the following GitHub Secrets:
      - `SSH_HOST` (IP Address)
      - `SSH_USER` (Username, usually root or a sudo user)
      - `SSH_PRIVATE_KEY` (PEM key)
      - `TARGET_DIRECTORY` (Path on server, e.g., `/var/www/html/sewwa.com/blog`)

5.  **Deliverables:**
    - Generate the `astro.config.mjs`.
    - Generate the `package.json` (showing dependencies and scripts).
    - Generate the `.github/workflows/deploy.yml` file.
    - Generate the `.eslintrc.cjs` and `.prettierrc` files.
    - Provide a brief `README.md` snippet explaining how to set up the Nginx/Apache config on the Vultr server to serve the `/blog` subpath.

Please write the code for these files now.