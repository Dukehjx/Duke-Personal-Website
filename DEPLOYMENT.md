# Deploying to Vercel

Your project is now ready for deployment on Vercel! Here's how to deploy it:

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your project:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project settings
   - Your site will be deployed and you'll get a URL

4. **For production deployments:**
   ```bash
   vercel --prod
   ```

## Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

## Configuration Files Added

- **`vercel.json`**: Configures Vercel to handle SPA routing correctly
- **`.vercelignore`**: Excludes unnecessary files from deployment
- **Updated `package.json`**: Added deployment-friendly scripts

## Project Structure

Your project uses:
- **Framework**: React with Vite
- **Styling**: Tailwind CSS v4 (beta)
- **UI Components**: Custom magic UI components
- **Build Output**: `dist/` directory

## Environment Variables

If you need environment variables:
1. Create them in the Vercel dashboard under Project Settings > Environment Variables
2. Or use the Vercel CLI: `vercel env add`

## Custom Domain

To add a custom domain:
1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Domains
3. Add your custom domain and follow the DNS configuration instructions

## Automatic Deployments

Once connected to a Git repository, Vercel will automatically deploy:
- **Production**: When you push to the main/master branch
- **Preview**: When you create pull requests or push to other branches

Your website is now ready for the world! 🚀
