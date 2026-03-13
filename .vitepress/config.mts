import { defineConfig } from 'vitepress'

const base = '/'
const siteUrl = 'https://specdriven.com'

export default defineConfig({
  base,
  srcExclude: ['README.md'],
  lang: 'en-US',
  title: 'Spec-Driven',
  description: 'Specifications are the new programming languages. Spec-Driven Development is the paradigm for building software in the age of AI.',
  appearance: 'dark',
  cleanUrls: true,
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
    // OpenGraph
    [
      'meta',
      {
        property: 'og:title',
        content: 'Spec-Driven Development',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Specifications are the new programming languages. Spec-Driven Development is the paradigm for building software in the age of AI.',
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
        content: 'Spec-Driven Development',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Specifications are the new programming languages. Spec-Driven Development is the paradigm for building software in the age of AI.',
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
        text: 'How',
        items: [
          { text: 'See It In Action', link: '/see-it' },
          { text: 'Discovery', link: '/discovery' },
          { text: 'Discovery Techniques', link: '/discovery-techniques' },
          { text: 'The AI-Native SDLC', link: '/sdlc' },
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
      copyright: '© 2025 Auto. All rights reserved.',
    },
    editLink: {
      pattern: 'https://github.com/BeOnAuto/specdriven.com/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
