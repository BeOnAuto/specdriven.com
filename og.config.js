// Open Graph image config — read by `og generate` (@beonauto/og). The card copy
// comes from the homepage frontmatter in docs/index.md (title, description,
// animatedHero); the per-page <meta> tags are still built by transformHead in
// .vitepress/config.mts from the same frontmatter.

export default {
	siteUrl: "https://specdriven.com",
	srcDir: "docs",
	siteName: "Spec-Driven",
	ogImagePath: "/og-image.png",

	generate: {
		root: ".",
		template: "scripts/og/template.html",
		outputDir: "docs/public",
		variants: [
			{ theme: "dark", output: "og-dark.png" },
			{ theme: "light", output: "og-light.png" },
		],
		defaultOutput: "og-dark.png",
		// The Lottie player is imported from esm.sh, so networkidle never settles.
		waitUntil: "domcontentloaded",
		waitFor: "window.__OG_READY === true",
		extraParams: ({ origin }) => ({
			animation: `${origin}/docs/public/animations/design-to-specs.json`,
		}),
	},
};
