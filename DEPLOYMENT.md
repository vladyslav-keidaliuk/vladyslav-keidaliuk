# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio`, `my-website`, or `remix-project`)
5. Make sure it's **public** (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Update Configuration

1. **Open `remix-app/package.json`**
2. **Update the homepage URL**:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
   ```
   
   For example:
   ```json
   "homepage": "https://vladyslav-keidaliuk.github.io/portfolio"
   ```

3. **Update the base path in `remix-app/vite.config.ts`**:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPOSITORY_NAME/' : '/',
   ```

### 3. Initialize Git and Push Code

Open terminal in the project root directory:

```bash
# Navigate to the remix-app directory
cd remix-app

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Create a 404.html file for client-side routing
3. Push the built files to the `gh-pages` branch

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose the `gh-pages` branch
6. Leave the folder as `/ (root)`
7. Click "Save"

### 6. Access Your Website

After a few minutes, your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. **Make your changes** in the code
2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Deploy the updates**:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Common Issues

1. **404 Error on Direct Route Access**
   - Make sure the 404.html file is created during build
   - Check that the predeploy script includes the copy command

2. **Assets Not Loading**
   - Verify the `base` path in `vite.config.ts` matches your repository name
   - Check the `homepage` URL in `package.json`

3. **Build Fails**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run typecheck`

4. **GitHub Pages Not Updating**
   - Check the Actions tab in your GitHub repository for build status
   - Make sure you're pushing to the `gh-pages` branch
   - Wait a few minutes for changes to propagate

### Getting Help

If you encounter issues:

1. Check the GitHub repository's "Actions" tab for deployment logs
2. Verify all file paths and URLs are correct
3. Make sure your repository is public
4. Check GitHub Pages documentation for additional troubleshooting

## Custom Domain (Optional)

To use a custom domain:

1. **Add a CNAME file** to the `public` directory:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. **Update GitHub Pages settings**:
   - Go to repository Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## Security Notes

- Never commit sensitive information (API keys, passwords, etc.)
- Use environment variables for sensitive data
- Keep your dependencies updated

---

🎉 **Congratulations!** Your portfolio is now live on GitHub Pages!
