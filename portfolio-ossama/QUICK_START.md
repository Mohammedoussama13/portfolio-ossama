# Quick Start Guide

## Project Overview

Your professional portfolio is built with:
- **Frontend:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Deployment:** Vercel (recommended)
- **Version Control:** GitHub

---

## Local Development

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (`npm install -g pnpm`)

### Installation

```bash
cd portfolio-ossama
pnpm install
```

### Running Locally

```bash
pnpm dev
```

Your portfolio will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
```

This creates an optimized build in the `dist/` directory.

---

## Project Structure

```
portfolio-ossama/
├── client/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── pages/          # Page components (Home, NotFound)
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                  # Server configuration (Express)
├── shared/                  # Shared types and constants
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Customization

### Update Your Information

Edit `client/src/pages/Home.tsx` to update:
- Your name and title
- About section content
- Education details
- Skills list
- Contact information

### Modify Colors

Edit `client/src/index.css` to change:
- Primary color (currently `#1a1a1a`)
- Accent color (currently `#00d9ff` - teal)
- Background and text colors

### Add New Sections

1. Create a new component in `client/src/components/`
2. Import and use it in `Home.tsx`
3. Add navigation link in the header

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel automatically deploys on each push to `main`

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

### Deploy to Other Platforms

The `dist/` folder can be deployed to:
- **Netlify:** Drag and drop the `dist/` folder
- **GitHub Pages:** Push to `gh-pages` branch
- **Any static hosting:** Upload the `dist/` folder

---

## Key Features

✅ **Responsive Design:** Works perfectly on mobile, tablet, and desktop
✅ **Fast Performance:** Optimized with Vite for quick load times
✅ **Modern Typography:** Uses Playfair Display and Inter fonts
✅ **Smooth Animations:** Subtle entrance and hover effects
✅ **Accessible:** Keyboard navigation and focus states
✅ **SEO Optimized:** Meta tags and semantic HTML

---

## Common Tasks

### Add a New Skill

In `Home.tsx`, find the `skills` array and add your skill:

```typescript
const skills = [
  "Economics",
  "Management",
  "Your New Skill", // ← Add here
];
```

### Update Education

In `Home.tsx`, find the `education` array and modify entries:

```typescript
const education = [
  {
    title: "Your Degree",
    institution: "Your University",
    year: "2024",
    details: "Your description",
  },
];
```

### Change Social Links

In `Home.tsx`, update the social links section:

```typescript
<a href="https://your-linkedin-url" target="_blank">
  <Linkedin size={24} />
</a>
```

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- --port 3001
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### TypeScript Errors

```bash
# Check for type errors
pnpm check

# Fix formatting issues
pnpm format
```

---

## Next Steps

1. **Customize Content:** Update your information in `Home.tsx`
2. **Deploy:** Follow `DEPLOYMENT_GUIDE.md` to deploy to Vercel
3. **Share:** Add your portfolio link to LinkedIn and other profiles
4. **Enhance:** Consider adding projects, blog posts, or case studies
5. **Monitor:** Track visitor analytics and engagement

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the deployment guide
3. Consult the official documentation links
4. Check GitHub issues for similar problems

Happy coding! 🚀
