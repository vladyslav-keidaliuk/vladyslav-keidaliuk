import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false, // Enable SPA mode for GitHub Pages deployment
  basename: process.env.NODE_ENV === 'production' ? '/vladyslav-keidaliuk' : '/',
  // prerender: ["/", "/portfolio"], // Prerender these routes for better SEO
} satisfies Config;
