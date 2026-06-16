import { siteCard } from "@beonauto/og/meta";
import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import ogConfig from "../og.config.js";

const base = "/";
const siteUrl = ogConfig.siteUrl;

// Resolved homepage card (also feeds `og generate` via og.config.js). Per-page
// og:title/og:description/og:image are still built by transformHead below; this
// is just the one shared value that doesn't vary per page.
const ogCard = siteCard({
	siteUrl,
	srcDir: ogConfig.srcDir,
	siteName: ogConfig.siteName,
	image: ogConfig.ogImagePath,
});

const learnSidebar = [
	{
		text: "Learn",
		items: [
			{ text: "What Are Specs?", link: "/what" },
			{ text: "Why Spec-Driven?", link: "/why" },
			{ text: "The Manifesto", link: "/manifesto" },
			{ text: "Common Objections", link: "/objections" },
			{ text: "History of Specifications in Software", link: "/timeline" },
			{ text: 'Where "Spec-Driven Development" Came From', link: "/origins" },
			{ text: "Notable People", link: "/people" },
			{ text: "Resources", link: "/resources" },
		],
	},
];

export default defineConfig({
	base,
	srcDir: "docs",
	markdown: {
		config: (md) => {
			md.use(footnote);
		},
	},
	vite: {
		server: {
			allowedHosts: [".ngrok.pizza"],
		},
	},
	lang: "en-US",
	title: "Spec-Driven",
	description:
		"Specifications are becoming a new software medium. Spec-Driven Development is the shift from disposable prompts to structured, executable models.",
	appearance: "dark",
	cleanUrls: true,
	transformHead({ pageData, siteData }) {
		const head: Array<[string, Record<string, string>]> = [];
		const image = pageData.frontmatter.image;
		const title = pageData.frontmatter.title || pageData.title;
		const description =
			pageData.frontmatter.description ||
			pageData.description ||
			siteData.description;

		const rel = pageData.relativePath.replace(/\.md$/, "");
		const path =
			rel === "index"
				? ""
				: rel.endsWith("/index")
					? rel.slice(0, -"/index".length)
					: rel;
		const pageUrl = path ? `${siteUrl}/${path}` : siteUrl;

		head.push(["link", { rel: "canonical", href: pageUrl }]);
		head.push(["meta", { property: "og:url", content: pageUrl }]);

		if (title) {
			head.push(["meta", { property: "og:title", content: title }]);
			head.push(["meta", { name: "twitter:title", content: title }]);
		}
		if (description) {
			head.push(["meta", { property: "og:description", content: description }]);
			head.push([
				"meta",
				{ name: "twitter:description", content: description },
			]);
		}

		const imagePath = image || "/og-image.png";
		const imageUrl = `${siteUrl}${imagePath}`;
		head.push(["meta", { property: "og:image", content: imageUrl }]);
		head.push(["meta", { name: "twitter:image", content: imageUrl }]);

		return head;
	},
	head: [
		// Favicons
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: `${base}favicon-96x96.png`,
				sizes: "96x96",
			},
		],
		[
			"link",
			{ rel: "icon", type: "image/svg+xml", href: `${base}favicon.svg` },
		],
		["link", { rel: "shortcut icon", href: `${base}favicon.ico` }],
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: `${base}apple-touch-icon.png`,
			},
		],
		["link", { rel: "manifest", href: `${base}site.webmanifest` }],
		// Barlow font for hero headings
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		[
			"link",
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		],
		[
			"link",
			{
				href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,400;0,600;0,800;1,200;1,400;1,600;1,800&display=swap",
				rel: "stylesheet",
			},
		],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:site_name", content: "Spec-Driven" }],
		[
			"meta",
			{
				property: "og:image:alt",
				content: `${ogCard.name}. ${ogCard.headline}`,
			},
		],
		["meta", { name: "twitter:card", content: "summary_large_image" }],
	],
	themeConfig: {
		logo: {
			light: "/logo-light.svg",
			dark: "/logo-dark.svg",
		},
		siteTitle: "Spec-Driven",
		// Nav structure: Learn | Practice | Ecosystem | Perspectives
		nav: [
			{
				text: "Learn",
				items: [
					{
						text: "Start Here",
						items: [
							{ text: "What Are Specs?", link: "/what" },
							{ text: "Why Spec-Driven?", link: "/why" },
							{ text: "The Manifesto", link: "/manifesto" },
							{ text: "Common Objections", link: "/objections" },
						],
					},
					{
						text: "Foundations",
						items: [{ text: "First Principles", link: "/first-principles/" }],
					},
					{
						text: "History",
						items: [
							{
								text: "History of Specifications in Software",
								link: "/timeline",
							},
							{
								text: 'Where "Spec-Driven Development" Came From',
								link: "/origins",
							},
							{ text: "Notable People", link: "/people" },
						],
					},
				],
			},
			{
				text: "Practice",
				items: [
					{ text: "The Spec-Driven Lifecycle", link: "/guides/" },
					{ text: "Start Here: Specify a Slice", link: "/guides/start-here" },
					{
						text: "Phases",
						items: [
							{ text: "Discover", link: "/guides/discovery" },
							{ text: "Design", link: "/guides/requirements-to-specs" },
							{ text: "Deliver", link: "/guides/executable-specs" },
							{ text: "Distill", link: "/guides/three-sources-of-insight" },
						],
					},
					{ text: "Going Deeper", link: "/guides/model-based-specs" },
					{ text: "Brownfield", link: "/guides/tackling-spec-debt" },
					{ text: "ROI", link: "/guides/roi" },
				],
			},
			{
				text: "Ecosystem",
				items: [
					{
						text: "Tools",
						items: [
							{ text: "Tool Landscape", link: "/landscape/" },
							{ text: "Evaluation Framework", link: "/landscape/evaluation" },
						],
					},
					{
						text: "Dialects",
						items: [
							{ text: "What Are Spec Dialects?", link: "/dialects/" },
							{
								text: "Narrative-Driven Development",
								link: "/dialects/narrative-driven",
							},
							{
								text: "Submit a Spec Dialect",
								link: "/community#submit-a-spec-dialect",
							},
						],
					},
					{
						text: "Community",
						items: [
							{
								text: "Spec-Driven Communities",
								link: "/community#spec-driven-communities",
							},
							{ text: "Resources", link: "/resources" },
						],
					},
				],
			},
			{
				text: "Perspectives",
				items: [
					{
						text: "The Spec-Driven Shift",
						link: "/perspectives/the-spec-driven-shift/",
					},
					{
						text: "Specs Are Fractal",
						link: "/perspectives/specs-are-fractal",
					},
					{
						text: "Code Is Not Enough",
						link: "/perspectives/code-is-not-enough",
					},
				],
			},
			{ text: "Subscribe", link: "#subscribe" },
		],
		sidebar: {
			"/what": learnSidebar,
			"/manifesto": learnSidebar,
			"/objections": learnSidebar,
			"/timeline": learnSidebar,
			"/origins": learnSidebar,
			"/people": learnSidebar,
			"/resources": learnSidebar,
			"/why": [
				{
					text: "The Case for Specs",
					items: [
						{ text: "Why Spec-Driven?", link: "/why" },
						{ text: "Quality & Specifications", link: "/quality/" },
					],
				},
			],
			"/first-principles/": [
				{
					text: "First Principles",
					items: [
						{ text: "Overview", link: "/first-principles/" },
						{
							text: "The Nature of Information Systems",
							link: "/first-principles/information-systems",
						},
						{
							text: "Value, Quality, and Throughput",
							link: "/first-principles/value-quality-throughput",
						},
						{
							text: "The Feedback Principle",
							link: "/first-principles/feedback-principle",
						},
						{
							text: "The Lifecycle of a Specification",
							link: "/first-principles/spec-lifecycle",
						},
						{
							text: "The Fractal Nature of Design",
							link: "/first-principles/fractal-design",
						},
					],
				},
			],
			"/quality/": [
				{
					text: "The Case for Specs",
					items: [
						{ text: "Why Spec-Driven?", link: "/why" },
						{ text: "Quality & Specifications", link: "/quality/" },
					],
				},
			],
			"/dialects/": [
				{
					text: "Spec Dialects",
					items: [
						{ text: "What Are Spec Dialects?", link: "/dialects/" },
						{
							text: "Narrative-Driven (NDD)",
							link: "/dialects/narrative-driven",
						},
					],
				},
			],
			"/guides/": [
				{
					text: "Overview",
					items: [
						{ text: "The Spec-Driven Lifecycle", link: "/guides/" },
						{ text: "Start Here: Specify a Slice", link: "/guides/start-here" },
					],
				},
				{
					text: "Discover",
					items: [
						{ text: "Where Specs Come From", link: "/guides/discovery" },
						{
							text: "Discovery Techniques",
							link: "/guides/discovery-techniques",
						},
						{
							text: "From Discovery to Requirements",
							link: "/guides/discovery-to-requirements",
						},
					],
				},
				{
					text: "Design",
					items: [
						{
							text: "From Requirements to Specifications",
							link: "/guides/requirements-to-specs",
						},
						{
							text: "Writing Your First Spec",
							link: "/guides/writing-your-first-spec",
						},
						{
							text: "Using AI to Explore Solutions",
							link: "/guides/ai-explore-solutions",
						},
						{
							text: "Choosing Your Spec Format",
							link: "/guides/choosing-spec-format",
						},
						{ text: "See It In Action", link: "/guides/see-it" },
					],
				},
				{
					text: "Deliver",
					items: [
						{
							text: "Making Specs Executable",
							link: "/guides/executable-specs",
						},
						{
							text: "Test Harness Engineering",
							link: "/guides/test-harness-engineering",
						},
						{ text: "Using Specs with LLMs", link: "/guides/specs-with-llms" },
						{
							text: "Guardrail Engineering",
							link: "/guides/guardrail-engineering",
						},
						{ text: "Specs in Your SDLC", link: "/guides/specs-in-your-sdlc" },
					],
				},
				{
					text: "Distill",
					items: [
						{
							text: "Three Sources of Insight",
							link: "/guides/three-sources-of-insight",
						},
						{
							text: "Evolving Specs Over Time",
							link: "/guides/evolving-specs",
						},
					],
				},
				{
					text: "Going Deeper",
					items: [
						{
							text: "Model-Based Specifications",
							link: "/guides/model-based-specs",
						},
						{ text: "Context Management", link: "/guides/context-management" },
						{
							text: "Adopting Spec-Driven in a Team",
							link: "/guides/adopting-spec-driven",
						},
					],
				},
				{
					text: "Brownfield",
					items: [
						{ text: "Tackling Spec Debt", link: "/guides/tackling-spec-debt" },
						{
							text: "Two Entry Points for Adoption",
							link: "/guides/two-entry-points",
						},
					],
				},
				{
					text: "ROI",
					items: [
						{ text: "The ROI of Spec-Driven Development", link: "/guides/roi" },
					],
				},
			],
			"/perspectives/the-spec-driven-shift/": [
				{
					text: "Week 1: The Wake-Up Call",
					items: [
						{
							text: "1. Your AI Codebase Is a Ticking Time Bomb",
							link: "/perspectives/the-spec-driven-shift/your-ai-codebase-is-a-ticking-time-bomb",
						},
						{
							text: "2. Stop Calling It a Spec If It's Not Specific",
							link: "/perspectives/the-spec-driven-shift/stop-calling-it-a-spec-if-its-not-specific",
						},
						{
							text: "3. Over Half Your Bugs Aren't Code Bugs",
							link: "/perspectives/the-spec-driven-shift/over-half-your-bugs-arent-code-bugs",
						},
						{
							text: "4. Your AI Doesn't Know What It Doesn't Know",
							link: "/perspectives/the-spec-driven-shift/your-ai-doesnt-know-what-it-doesnt-know-you-do",
						},
						{
							text: "5. Code Was Always a Hindrance",
							link: "/perspectives/the-spec-driven-shift/code-was-always-a-hindrance-i-just-didnt-know-it-yet",
						},
					],
				},
				{
					text: "Week 2: The Lineage",
					items: [
						{
							text: "6. I Coined 'Spec-Driven Development' in 2016",
							link: "/perspectives/the-spec-driven-shift/i-coined-spec-driven-development-in-2016-nobody-cared-until-ai-broke-everything",
						},
						{
							text: "7. 60 Years of Specification in 3 Minutes",
							link: "/perspectives/the-spec-driven-shift/60-years-of-specification-in-3-minutes",
						},
						{
							text: "8. TDD Was Never About Testing",
							link: "/perspectives/the-spec-driven-shift/tdd-was-never-about-testing",
						},
						{
							text: "9. Dan North Wasn't Talking About AI",
							link: "/perspectives/the-spec-driven-shift/dan-north-wasnt-talking-about-ai-but-he-could-have-been",
						},
						{
							text: "10. Specs That Ignore Time Ignore Half the Story",
							link: "/perspectives/the-spec-driven-shift/specs-that-ignore-time-ignore-half-the-story",
						},
					],
				},
				{
					text: "Week 3: The Practice",
					items: [
						{
							text: "11. 5 Spec Smells That Turn Every AI Prompt Into a Guessing Game",
							link: "/perspectives/the-spec-driven-shift/5-spec-smells-that-turn-every-ai-prompt-into-a-guessing-game",
						},
						{
							text: "12. A PRD Is Not a Spec",
							link: "/perspectives/the-spec-driven-shift/a-prd-is-not-a-spec-heres-why-that-matters",
						},
						{
							text: "13. Jira Is Where Specs Go to Die",
							link: "/perspectives/the-spec-driven-shift/jira-is-where-specs-go-to-die-your-ai-just-showed-up-with-a-shovel",
						},
						{
							text: "14. Give Me the Freedom of a Tight Brief",
							link: "/perspectives/the-spec-driven-shift/give-me-the-freedom-of-a-tight-brief-why-specs-are-the-ultimate-ai-prompt",
						},
						{
							text: "15. The Best AI Developers Are Spec-Driven",
							link: "/perspectives/the-spec-driven-shift/the-best-ai-developers-are-spec-driven-they-just-havent-named-it-yet",
						},
					],
				},
				{
					text: "Week 4: The Future",
					items: [
						{
							text: "16. Specs Are the Next Programming Languages",
							link: "/perspectives/the-spec-driven-shift/specs-are-the-next-programming-languages",
						},
						{
							text: "17. Most Specs Fail Because They Start Too Low",
							link: "/perspectives/the-spec-driven-shift/most-specs-fail-because-they-start-too-low-start-here-instead",
						},
						{
							text: "18. When Coding Becomes Instant",
							link: "/perspectives/the-spec-driven-shift/when-coding-becomes-instant-specs-are-all-that-matters",
						},
						{
							text: "19. Fool Me Once, I Write a Spec",
							link: "/perspectives/the-spec-driven-shift/fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice",
						},
						{
							text: "20. The Question Isn't Whether AI Can Code",
							link: "/perspectives/the-spec-driven-shift/the-question-isnt-whether-ai-can-code-its-whether-you-can-specify",
						},
					],
				},
			],
			"/perspectives/specs-are-fractal": [
				{
					text: "Perspectives",
					items: [
						{
							text: "The Spec-Driven Shift",
							link: "/perspectives/the-spec-driven-shift/",
						},
						{
							text: "Specs Are Fractal",
							link: "/perspectives/specs-are-fractal",
						},
						{
							text: "Code Is Not Enough",
							link: "/perspectives/code-is-not-enough",
						},
					],
				},
				{
					text: "Related Reading",
					items: [
						{ text: "What Is a Spec?", link: "/what" },
						{
							text: "The Fractal Nature of Design",
							link: "/first-principles/fractal-design",
						},
						{
							text: "Narrative-Driven (NDD)",
							link: "/dialects/narrative-driven",
						},
					],
				},
			],
			"/perspectives/code-is-not-enough": [
				{
					text: "Perspectives",
					items: [
						{
							text: "The Spec-Driven Shift",
							link: "/perspectives/the-spec-driven-shift/",
						},
						{
							text: "Specs Are Fractal",
							link: "/perspectives/specs-are-fractal",
						},
						{
							text: "Code Is Not Enough",
							link: "/perspectives/code-is-not-enough",
						},
					],
				},
				{
					text: "Related Reading",
					items: [
						{ text: "What Is a Spec?", link: "/what" },
						{
							text: "Model-Based Specifications",
							link: "/guides/model-based-specs",
						},
						{
							text: "Narrative-Driven (NDD)",
							link: "/dialects/narrative-driven",
						},
					],
				},
			],
			"/landscape/": [
				{
					text: "Tool Landscape",
					items: [
						{ text: "Overview", link: "/landscape/" },
						{ text: "Evaluation Framework", link: "/landscape/evaluation" },
						{ text: "Auto", link: "/landscape/auto" },
						{ text: "GitHub Spec Kit", link: "/landscape/github-spec-kit" },
						{ text: "Intent (Augment)", link: "/landscape/intent" },
						{ text: "Kiro (AWS)", link: "/landscape/kiro" },
						{ text: "OpenSpec", link: "/landscape/openspec" },
					],
				},
			],
		},
		search: {
			provider: "local",
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/BeOnAuto/specdriven.com" },
			{ icon: "discord", link: "https://discord.com/invite/B8BKcKMRm8" },
		],
		footer: {
			message:
				'An initiative by <a href="https://on.auto">Auto</a> · <a href="/community">Community</a>',
			copyright: "© 2026 OnAuto, Inc. All rights reserved.",
		},
		editLink: {
			pattern:
				"https://github.com/BeOnAuto/specdriven.com/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
	},
});
