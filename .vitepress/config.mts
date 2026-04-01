import { defineConfig } from 'vitepress'

const base = '/'
const siteUrl = 'https://specdriven.com'

export default defineConfig({
  base,
  srcDir: 'docs',
  vite: {
    server: {
      allowedHosts: ['.ngrok.pizza'],
    },
  },
  lang: 'en-US',
  title: 'Spec-Driven',
  description: 'Specifications are becoming a new software medium. Spec-Driven Development is the shift from disposable prompts to structured, executable models.',
  appearance: 'dark',
  cleanUrls: true,
  redirects: {
    'perspectives/the-spec-driven-shift/post-1': 'perspectives/the-spec-driven-shift/your-ai-codebase-is-a-ticking-time-bomb',
    'perspectives/the-spec-driven-shift/post-2': 'perspectives/the-spec-driven-shift/stop-calling-it-a-spec-if-its-not-specific',
  },
  transformHead({ pageData }) {
    const head: Array<[string, Record<string, string>]> = []
    const image = pageData.frontmatter.image
    const title = pageData.frontmatter.title || pageData.title
    const description = pageData.frontmatter.description || pageData.description

    if (title) {
      head.push(['meta', { property: 'og:title', content: title }])
      head.push(['meta', { name: 'twitter:title', content: title }])
    }
    if (description) {
      head.push(['meta', { property: 'og:description', content: description }])
      head.push(['meta', { name: 'twitter:description', content: description }])
    }
    if (image) {
      head.push(['meta', { property: 'og:image', content: `${siteUrl}${image}` }])
      head.push(['meta', { name: 'twitter:image', content: `${siteUrl}${image}` }])
    }

    return head
  },
  head: [
    // Favicons
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: `${base}favicon-96x96.png`,
        sizes: '96x96',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['link', { rel: 'shortcut icon', href: `${base}favicon.ico` }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${base}apple-touch-icon.png`,
      },
    ],
    ['link', { rel: 'manifest', href: `${base}site.webmanifest` }],
    // Barlow font for hero headings
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,400;0,600;0,800;1,200;1,400;1,600;1,800&display=swap', rel: 'stylesheet' }],
    // OpenGraph
    [
      'meta',
      {
        property: 'og:title',
        content: 'Spec-Driven — Code Writes Itself. Specs Never Will.',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Specifications are becoming a new software medium. Spec-Driven Development is the shift from disposable prompts to structured, executable models.',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: siteUrl,
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: `${siteUrl}/og-image.png`,
      },
    ],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: 'Spec-Driven Development - Specifications are the new programming languages.',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'Spec-Driven' }],
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Spec-Driven — Code Writes Itself. Specs Never Will.',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Specifications are becoming a new software medium. Spec-Driven Development is the shift from disposable prompts to structured, executable models.',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${siteUrl}/og-image.png`,
      },
    ],
  ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    siteTitle: 'Spec-Driven',
    nav: [
      { text: 'Why', link: '/why' },
      {
        text: 'What',
        items: [
          { text: 'What Are Specs?', link: '/what' },
          { text: 'The Manifesto', link: '/manifesto' },
          { text: 'Spec Dialects', link: '/dialects/' },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guides/' },
          { text: 'Writing Your First Spec', link: '/guides/writing-your-first-spec' },
          { text: 'See It In Action', link: '/guides/see-it' },
          { text: 'Using Specs with LLMs', link: '/guides/specs-with-llms' },
        ]
      },
      {
        text: 'Landscape',
        items: [
          { text: 'Tool Landscape', link: '/landscape/' },
          { text: 'Evaluation Framework', link: '/landscape/evaluation' },
        ]
      },
      {
        text: 'Perspectives',
        items: [
          { text: 'The Spec-Driven Shift (20-part series)', link: '/perspectives/the-spec-driven-shift/' },
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Community', link: '/community' },
          { text: 'Notable People', link: '/people' },
          { text: 'Timeline', link: '/timeline' },
          { text: 'Resources', link: '/resources' },
        ]
      },
    ],
    sidebar: {
      '/why': [
        {
          text: 'The Case for Specs',
          items: [
            { text: 'Why Spec-Driven?', link: '/why' },
            { text: 'Quality & Specifications', link: '/quality/' },
          ]
        }
      ],
      '/quality/': [
        {
          text: 'The Case for Specs',
          items: [
            { text: 'Why Spec-Driven?', link: '/why' },
            { text: 'Quality & Specifications', link: '/quality/' },
          ]
        }
      ],
      '/dialects/': [
        {
          text: 'Spec Dialects',
          items: [
            { text: 'What Are Spec Dialects?', link: '/dialects/' },
            { text: 'Narrative-Driven (NDD)', link: '/dialects/narrative-driven' },
          ]
        }
      ],
      '/guides/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Guides Overview', link: '/guides/' },
            { text: 'Writing Your First Spec', link: '/guides/writing-your-first-spec' },
            { text: 'See It In Action', link: '/guides/see-it' },
          ]
        },
        {
          text: 'Working with Specs',
          items: [
            { text: 'Using Specs with LLMs', link: '/guides/specs-with-llms' },
            { text: 'Making Specs Executable', link: '/guides/executable-specs' },
            { text: 'Context Management', link: '/guides/context-management' },
          ]
        },
        {
          text: 'Going Deeper',
          items: [
            { text: 'Model-Based Specifications', link: '/guides/model-based-specs' },
            { text: 'When You Need Dedicated Tools', link: '/guides/choosing-tools' },
            { text: 'Specs in Your SDLC', link: '/guides/specs-in-your-sdlc' },
          ]
        },
        {
          text: 'Discovery',
          items: [
            { text: 'Where Specs Come From', link: '/guides/discovery' },
            { text: 'Techniques Reference', link: '/guides/discovery-techniques' },
          ]
        },
      ],
      '/perspectives/the-spec-driven-shift/': [
        {
          text: 'Week 1: The Wake-Up Call',
          items: [
            { text: '1. Your AI Codebase Is a Ticking Time Bomb', link: '/perspectives/the-spec-driven-shift/your-ai-codebase-is-a-ticking-time-bomb' },
            { text: '2. Stop Calling It a Spec If It\'s Not Specific', link: '/perspectives/the-spec-driven-shift/stop-calling-it-a-spec-if-its-not-specific' },
          ]
        },
        {
          text: 'Week 2: The Lineage — Coming Soon',
          items: [
            { text: 'April 6-10', link: '/perspectives/the-spec-driven-shift/#week-2-the-lineage' },
          ]
        },
        {
          text: 'Week 3: The Practice — Coming Soon',
          items: [
            { text: 'April 13-17', link: '/perspectives/the-spec-driven-shift/#week-3-the-practice' },
          ]
        },
        {
          text: 'Week 4: The Future — Coming Soon',
          items: [
            { text: 'April 20-24', link: '/perspectives/the-spec-driven-shift/#week-4-the-future' },
          ]
        },
      ],
      '/landscape/': [
        {
          text: 'Tool Landscape',
          items: [
            { text: 'Overview', link: '/landscape/' },
            { text: 'Evaluation Framework', link: '/landscape/evaluation' },
            { text: 'Auto', link: '/landscape/auto' },
            { text: 'GitHub Spec Kit', link: '/landscape/github-spec-kit' },
            { text: 'Intent (Augment)', link: '/landscape/intent' },
            { text: 'Kiro (AWS)', link: '/landscape/kiro' },
            { text: 'OpenSpec', link: '/landscape/openspec' },
            { text: 'Tessl', link: '/landscape/tessl' },
          ]
        }
      ],
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BeOnAuto/specdriven.com' },
      { icon: 'discord', link: 'https://discord.com/invite/B8BKcKMRm8' },
    ],
    footer: {
      message: 'An initiative by <a href="https://on.auto">Auto</a>',
      copyright: '© 2026 OnAuto, Inc. All rights reserved.',
    },
    editLink: {
      pattern: 'https://github.com/BeOnAuto/specdriven.com/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
