# Max's Personal Next.js Template 🚀

A modern, opinionated Next.js template featuring TypeScript, SCSS, and best practices for rapid development.

## ✨ Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety with strict mode
- **SCSS** - Modern styling with CSS custom properties
- **PNPM** - Fast, efficient package management
- **ESLint** - Code quality and consistency
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Automatic theme switching
- **Performance Optimized** - Built for speed

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [SCSS](https://sass-lang.com/) - Enhanced CSS
- [PNPM](https://pnpm.io/) - Package manager
- [ESLint](https://eslint.org/) - Linting

## 🚀 Quick Start

1. **Clone or use this template**

   ```bash
   git clone <your-repo-url>
   cd nextjs-typescript-template
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.scss      # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── page.module.scss  # Homepage styles
├── components/           # Reusable components (add as needed)
├── styles/              # Additional stylesheets (add as needed)
└── types/               # TypeScript type definitions (add as needed)
```

## 🎨 Styling Architecture

This template uses a modern SCSS architecture with:

- **CSS Custom Properties** - For consistent theming
- **SCSS Modules** - Component-scoped styles
- **Responsive Design** - Mobile-first breakpoints
- **Dark Mode** - Automatic theme switching
- **Design Tokens** - Consistent spacing, colors, and typography

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors

## 🔧 Customization

### Colors & Theming

Edit the SCSS custom properties in `src/app/globals.scss`:

```scss
:root {
  --primary: #2563eb;
  --secondary: #64748b;
  --accent: #f59e0b;
  // ... more variables
}
```

### Typography

The template uses Geist fonts by default. Update in `src/app/layout.tsx` to change fonts.

### Components

Add new components in the `src/components/` directory with their corresponding SCSS modules.

## 📚 Best Practices

- **SOLID Principles** - All code follows SOLID design principles
- **Type Safety** - Comprehensive TypeScript coverage
- **Performance** - Optimized for Core Web Vitals
- **Accessibility** - WCAG compliant markup and styles
- **SEO** - Proper meta tags and semantic HTML

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Max**
