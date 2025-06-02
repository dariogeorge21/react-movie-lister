#!/bin/bash

# Deploy React Movie Lister to GitHub Pages
# This script builds the app and deploys it to the gh-pages branch

set -e

echo "🚀 Starting deployment to GitHub Pages..."

# Build the application
echo "📦 Building the application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Clean up any existing git in dist
rm -rf dist/.git

# Add a .nojekyll file to tell GitHub Pages not to use Jekyll
echo "📝 Adding .nojekyll file..."
touch dist/.nojekyll

# Initialize git in dist directory
cd dist
echo "🔧 Initializing git in dist directory..."
git init
git add -A
git commit -m "Deploy React Movie Lister to GitHub Pages - $(date)"

# Add remote and push to gh-pages branch (force push to overwrite)
echo "🚀 Pushing to gh-pages branch..."
git remote add origin https://github.com/dariogeorge21/react-movie-lister.git
git push -f origin main:gh-pages

cd ..

echo "✅ Deployment completed successfully!"
echo "🌐 Your app will be available at: https://dariogeorge21.github.io/react-movie-lister/"
echo "⏳ It may take a few minutes for GitHub Pages to update."
