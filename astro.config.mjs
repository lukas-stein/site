// @ts-check
import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://lukas-stein.github.io/site/.
// To serve from the domain root (or a custom domain), drop `base`.
export default defineConfig({
	site: 'https://lukas-stein.github.io',
	base: '/site',
	trailingSlash: 'ignore',
});
