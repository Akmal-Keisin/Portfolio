# Akmal Keisin — Developer Portfolio

A modern, high-performance portfolio website built with **Astro v6** and **Tailwind CSS v4**. This project showcases my work, skills, and articles, utilizing a headless architecture with a Laravel-based REST API.

## 🚀 Features

- **High Performance:** 100/100 Lighthouse scores, optimized for speed.
- **SSR (Server-Side Rendering):** Dynamic content delivery powered by Astro.
- **Headless CMS:** Consumes data from a custom Laravel API.
- **Modern Styling:** Built with Tailwind CSS v4 and custom animations.
- **Type Safe:** Fully implemented in TypeScript.
- **Interactive UI:** Features custom cursor, scroll reveal effects, and responsive design.

## 🛠 Tech Stack

- **Framework:** [Astro v6](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Backend:** [Laravel](https://laravel.com/) (REST API)

## 📦 Getting Started

### Prerequisites

- Node.js (>= 22.12.0)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file (or set `PUBLIC_API_URL` environment variable) to point to your backend API.
   ```env
   PUBLIC_API_URL=http://localhost:8000/api
   ```

### Local Development

Run the development server:
```sh
npm run dev
```
Visit `localhost:4321` in your browser.

### Build & Preview

```sh
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```text
├── src/
│   ├── assets/        # Local fonts and logos
│   ├── components/    # Reusable UI components (Navbar, Footer, etc.)
│   ├── content/       # Local Markdown/MDX collections
│   ├── layouts/       # Page layouts
│   ├── lib/           # API clients and utilities
│   ├── pages/         # Page routes
│   ├── sections/      # Page-specific components (Hero, About, etc.)
│   └── styles/        # Global CSS and Tailwind theme
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## 📄 License

This project is open-source and available under the MIT License.
