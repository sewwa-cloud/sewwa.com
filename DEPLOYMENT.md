# 🚀 Deployment Guide

This document provides comprehensive information about deploying the blog to the Vultr VPS.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [GitHub Secrets Configuration](#github-secrets-configuration)
- [Deployment Workflow](#deployment-workflow)
- [Manual Deployment](#manual-deployment)
- [Rollback Procedure](#rollback-procedure)
- [Troubleshooting](#troubleshooting)
- [Server Setup](#server-setup)

## Overview

The blog uses a CI/CD pipeline via GitHub Actions that automatically deploys to Vultr VPS when:

- Code is pushed to the `main` branch
- A release is published on GitHub
- Manual trigger via GitHub Actions UI

### Deployment Strategy

The deployment uses a **release-based, zero-downtime** strategy:

1. Each deployment creates a timestamped release directory
2. The blog directory is symlinked to the latest release
3. Atomic symlink swap ensures zero downtime
4. Old releases are automatically cleaned up (keeps last 5 releases)

## Prerequisites

### GitHub Repository

1. Repository must be set up on GitHub
2. GitHub Actions must be enabled
3. Required secrets must be configured (see below)

### Server Requirements

1. Vultr VPS with SSH access
2. Nginx configured to serve static files
3. Proper directory structure:
   ```
   /var/www/sewwa.com/
   ├── html/                  # Application directory
   │   ├── current/           # Symlink to current release
   │   ├── releases/          # Release directories
   │   │   ├── 20250101_120000/
   │   │   ├── 20250101_130000/
   │   │   └── ...
   │   ├── backup_*/          # Backup directories
   │   └── logs/              # Deployment logs (optional)
   └── color-converter/       # Other applications (example)
   ```

### Required Permissions

- SSH user must have write permissions to `/var/www/sewwa.com/html/`
- Nginx must have read permissions to the blog directory
- User should be able to create directories and symlinks

## GitHub Secrets Configuration

Configure the following secrets in your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

### Required Secrets

| Secret Name | Description | Example |
|------------|-------------|---------|
| `SSH_HOST` | VPS IP address or hostname | `123.45.67.89` |
| `SSH_USER` | SSH username | `root` or `deploy` |
| `SSH_PRIVATE_KEY` | SSH private key (OpenSSH format) | Content of `~/.ssh/github_deploy` |
| `SSH_PORT` | SSH port (optional, defaults to 22) | `22` or `2222` |

### Getting Your SSH Private Key

Generate an SSH key pair on your server (recommended method):

```bash
# SSH to server
ssh root@your-server-ip

# Generate SSH key (ED25519 is more secure and faster than RSA)
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy -N ""

# Add to authorized_keys
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys

# Set proper permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh

# Display private key (copy this entire output!)
cat ~/.ssh/github_deploy
```

**Important Steps:**

1. **Copy the private key output** - The entire output from `cat ~/.ssh/github_deploy` including:
   - `-----BEGIN OPENSSH PRIVATE KEY-----`
   - All the key content
   - `-----END OPENSSH PRIVATE KEY-----`

2. **Add to GitHub Secrets:**
   - Go to GitHub → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `SSH_PRIVATE_KEY`
   - Value: Paste the entire private key content
   - Click "Add secret"

3. **Verify the key works:**
   ```bash
   # Test SSH connection (from your local machine or GitHub Actions)
   ssh -i ~/.ssh/github_deploy root@your-server-ip
   ```

**Security Note:** The private key (`github_deploy`) should only be copied to GitHub Secrets. Never commit it to your repository or share it publicly. The key file can remain on your server for reference, but ensure proper permissions are set.

## Deployment Workflow

### Automatic Deployment

#### Push to Main Branch

```bash
git push origin main
```

This triggers the deployment workflow automatically.

#### Create a Release

1. Go to GitHub → Releases → Draft a new release
2. Tag version (e.g., `v1.0.0`)
3. Publish the release

The deployment will trigger automatically.

### Manual Deployment

1. Go to GitHub → Actions
2. Select "Deploy Blog to Vultr" workflow
3. Click "Run workflow"
4. Select branch (usually `main`)
5. Click "Run workflow"

### Workflow Steps

The deployment workflow consists of 5 jobs:

1. **🔍 Lint Code** - Runs ESLint to check code quality
2. **🏗️ Build Blog** - Builds the Astro site and creates deployment archive
3. **🚀 Deploy to Vultr** - Uploads and deploys to server
4. **✅ Verify Deployment** - Checks deployment and performs health check
5. **📊 Deployment Summary** - Generates summary report

### Expected Duration

- Full deployment: ~3-5 minutes
- Lint: ~30 seconds
- Build: ~1-2 minutes
- Deploy: ~30-60 seconds
- Verify: ~10 seconds

## Manual Deployment

If you need to deploy manually from your local machine:

### Step 1: Build Locally

```bash
npm install
npm run build
```

### Step 2: Create Archive

```bash
tar -czf deploy.tar.gz dist/
```

### Step 3: Upload to Server

```bash
scp -P 22 deploy.tar.gz user@your-server:/tmp/deploy_manual.tar.gz
```

### Step 4: Deploy on Server

```bash
ssh user@your-server

# Variables
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
RELEASE_DIR="/var/www/sewwa.com/html/releases/$TIMESTAMP"
APP_DIR="/var/www/sewwa.com/html"
ARCHIVE="/tmp/deploy_manual.tar.gz"

# Create release directory
mkdir -p $RELEASE_DIR

# Extract archive to temporary location
TEMP_EXTRACT_DIR=$(mktemp -d)
tar -xzf $ARCHIVE -C $TEMP_EXTRACT_DIR

# Move all files from dist/ to release directory
mv $TEMP_EXTRACT_DIR/dist/* $RELEASE_DIR/
rm -rf $TEMP_EXTRACT_DIR

# Backup current (if exists)
if [ -L "$APP_DIR" ]; then
  CURRENT_RELEASE=$(readlink -f $APP_DIR)
  BACKUP_DIR="/var/www/sewwa.com/html/releases/backup_$(date +%Y%m%d_%H%M%S)"
  mkdir -p $BACKUP_DIR
  cp -al $CURRENT_RELEASE/* $BACKUP_DIR/ 2>/dev/null || true
fi

# Set permissions
chown -R www-data:www-data $RELEASE_DIR
chmod -R 755 $RELEASE_DIR

# Update symlink
mkdir -p $APP_DIR
ln -sfn $RELEASE_DIR $APP_DIR/current

# Cleanup
rm -f $ARCHIVE

echo "✅ Deployment complete!"
```

## Rollback Procedure

If you need to rollback to a previous release:

### Step 1: List Available Releases

```bash
ssh user@your-server 'ls -lt /var/www/sewwa.com/html/releases'
```

### Step 2: Check Current Release

```bash
ssh user@your-server 'readlink -f /var/www/sewwa.com/html/current'
```

### Step 3: Rollback to Previous Release

```bash
ssh user@your-server << 'EOF'
APP_DIR="/var/www/sewwa.com/html"
RELEASES_DIR="/var/www/sewwa.com/html/releases"

# Get the second most recent release (assuming first is current)
PREVIOUS_RELEASE=$(ls -dt $RELEASES_DIR/*/ | grep -E '[0-9]{8}_[0-9]{6}' | sed -n '2p')

if [ -n "$PREVIOUS_RELEASE" ]; then
  echo "Rolling back to: $PREVIOUS_RELEASE"
  ln -sfn $PREVIOUS_RELEASE $APP_DIR/current
  echo "✅ Rollback complete!"
else
  echo "❌ No previous release found"
fi
EOF
```

### Alternative: Rollback to Specific Release

```bash
ssh user@your-server << 'EOF'
APP_DIR="/var/www/sewwa.com/html"
RELEASE_DIR="/var/www/sewwa.com/html/releases/20250101_120000"  # Replace with actual timestamp

if [ -d "$RELEASE_DIR" ]; then
  ln -sfn $RELEASE_DIR $APP_DIR/current
  echo "✅ Rolled back to: $RELEASE_DIR"
else
  echo "❌ Release directory not found: $RELEASE_DIR"
fi
EOF
```

## Troubleshooting

### Deployment Fails at Lint Stage

**Problem:** ESLint errors prevent deployment

**Solution:**
```bash
# Fix errors locally
npm run lint:fix

# Or fix manually, then commit
git add .
git commit -m "fix: resolve linting errors"
git push
```

### Deployment Fails at Build Stage

**Problem:** Build errors

**Solution:**
1. Test build locally:
   ```bash
   npm run build
   ```
2. Fix errors
3. Test again
4. Commit and push

### Deployment Fails at Deploy Stage

**Problem:** SSH connection issues

**Solution:**
1. Verify SSH key is correct in GitHub Secrets
2. Test SSH connection manually:
   ```bash
   ssh -i ~/.ssh/your_key user@your-server
   ```
3. Verify SSH_HOST and SSH_USER secrets
4. Check server firewall settings

### Health Check Fails

**Problem:** Site returns non-200 status

**Solution:**
1. Check Nginx configuration:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```
2. Verify symlink exists:
   ```bash
   ls -la /var/www/sewwa.com/html/current
   ```
3. Check Nginx error logs:
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

### Permission Denied Errors

**Problem:** Cannot write to deployment directory

**Solution:**
```bash
# Set proper ownership
sudo chown -R $USER:www-data /var/www/sewwa.com/html/

# Set proper permissions
sudo chmod -R 755 /var/www/sewwa.com/html/
sudo chmod -R 775 /var/www/sewwa.com/html/releases/
```

### Site Not Updating After Deployment

**Problem:** Changes not visible on site

**Solution:**
1. Verify symlink points to latest release:
   ```bash
   readlink -f /var/www/sewwa.com/html/current
   ```
2. Clear Nginx cache (if enabled)
3. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Check browser cache

## Server Setup

### Initial Server Configuration

#### 1. Create Directory Structure

```bash
sudo mkdir -p /var/www/sewwa.com/html/releases
sudo mkdir -p /var/www/sewwa.com/html/logs
sudo chown -R $USER:www-data /var/www/sewwa.com/html/
sudo chmod -R 755 /var/www/sewwa.com/html/
sudo chmod -R 775 /var/www/sewwa.com/html/releases/
```

#### 2. Configure Nginx

Create or update Nginx configuration:

```nginx
server {
    listen 80;
    server_name www.sewwa.com;
    root /var/www/sewwa.com/html/current;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

#### 3. SSL Configuration (Optional but Recommended)

Use Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d www.sewwa.com
```

### Post-Deployment Verification

After deployment, verify:

1. **Check Deployment Directory:**
   ```bash
   ls -la /var/www/sewwa.com/html/current
   ```

2. **Verify Symlink:**
   ```bash
   readlink -f /var/www/sewwa.com/html/current
   ```

3. **Check File Permissions:**
   ```bash
   ls -la /var/www/sewwa.com/html/releases/
   ```

4. **Test Site:**
   ```bash
   curl -I https://www.sewwa.com/
   ```

5. **View Deployment Logs:**
   - GitHub Actions → Deploy Blog to Vultr → Latest run

## Monitoring

### Check Deployment Status

View latest deployment:

```bash
ssh user@your-server 'ls -lt /var/www/sewwa.com/html/releases/ | head -5'
```

### View Recent Deployments

GitHub Actions provides deployment history:

1. Go to GitHub → Actions
2. Select "Deploy Blog to Vultr"
3. View deployment history and logs

### Health Monitoring

Set up monitoring (optional):

```bash
# Simple health check script
curl -f https://www.sewwa.com/ || echo "Site is down!"
```

## Best Practices

1. **Always test locally** before pushing to main
2. **Review changes** in pull requests before merging
3. **Use releases** for important deployments
4. **Monitor deployment logs** after each deployment
5. **Keep backups** of important releases
6. **Document changes** in commit messages

## Support

For issues or questions:

1. Check GitHub Actions logs for error details
2. Review server logs: `/var/log/nginx/error.log`
3. Verify GitHub Secrets configuration
4. Test SSH connection manually
5. Check this deployment guide for common solutions

---

**Last Updated:** 2025-01-01  
**Maintained by:** Sewwa Team

