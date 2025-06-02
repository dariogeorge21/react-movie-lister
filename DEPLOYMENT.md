# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy the React Movie Lister app to GitHub Pages using the manual gh-pages branch approach.

## 📋 Prerequisites

- Git repository on GitHub: `https://github.com/dariogeorge21/react-movie-lister`
- Node.js and npm installed
- Git configured with your GitHub credentials

## 🔧 Deployment Setup

The project is already configured for GitHub Pages deployment with:

1. **Vite Configuration** (`vite.config.js`):
   - Base path set to `/react-movie-lister/`
   - Build output directory configured

2. **Package.json Scripts**:
   - `npm run build` - Builds the production version
   - `npm run deploy` - Automated deployment script

3. **Deployment Script** (`deploy.sh`):
   - Automated build and deployment process

## 🚀 Deployment Methods

### Method 1: Using the Deployment Script (Recommended)

```bash
# Make sure you're in the project root
./deploy.sh
```

### Method 2: Using npm Script

```bash
npm run deploy
```

### Method 3: Manual Deployment

```bash
# 1. Build the application
npm run build

# 2. Navigate to dist directory
cd dist

# 3. Initialize git and add files
git init
touch .nojekyll
git add -A
git commit -m "Deploy to GitHub Pages"

# 4. Push to gh-pages branch
git remote add origin https://github.com/dariogeorge21/react-movie-lister.git
git push -f origin main:gh-pages

# 5. Go back to project root
cd ..
```

## 🌐 Accessing the Deployed App

After deployment, your app will be available at:
**https://dariogeorge21.github.io/react-movie-lister/**

## ⚙️ GitHub Pages Configuration

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/ (root)** folder
5. Click **Save**

## 🔄 Updating the Deployment

To update the deployed app:

1. Make your changes to the source code
2. Commit and push changes to the main branch
3. Run the deployment script again:
   ```bash
   ./deploy.sh
   ```

## 📝 Important Notes

- The `.nojekyll` file is automatically added to prevent Jekyll processing
- The deployment uses force push to overwrite the gh-pages branch
- It may take a few minutes for changes to appear on GitHub Pages
- Make sure your OMDb API key is set in the environment variables

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages**
   - Check that the base path in `vite.config.js` matches your repository name
   - Ensure the gh-pages branch exists and has the built files

2. **Build Fails**
   - Run `npm install` to ensure all dependencies are installed
   - Check for any TypeScript or linting errors

3. **API Key Issues**
   - Remember to set your OMDb API key in the deployed environment
   - GitHub Pages doesn't support server-side environment variables
   - Consider using GitHub Secrets for sensitive data

4. **Permission Denied**
   - Make sure the deploy script is executable: `chmod +x deploy.sh`
   - Check your Git credentials and repository access

## 🔐 Environment Variables for Production

Since GitHub Pages is a static hosting service, environment variables need to be handled differently:

1. **For Development**: Use `.env` file with `VITE_OMDB_API_KEY`
2. **For Production**: The API key needs to be embedded during build time

## 📊 Deployment Status

- ✅ **Deployed**: https://dariogeorge21.github.io/react-movie-lister/
- 🌿 **Branch**: gh-pages
- 📦 **Build Tool**: Vite
- 🚀 **Hosting**: GitHub Pages

---

**Happy Deploying! 🎉**
