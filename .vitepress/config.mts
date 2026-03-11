import { defineConfig } from 'vitepress'

const base = '/'
const siteUrl = 'https://specdriven.com'

export default defineConfig({
  base,
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
      { text: 'What Are Specs?', link: '/what' },
      { text: 'Manifesto', link: '/manifesto' },
      { text: 'Dialects', link: '/dialects/' },
      { text: 'Quality', link: '/quality/' },
      { text: 'Auto', link: '/auto' },
      { text: 'Community', link: '/community' },
    ],
    sidebar: {
      '/dialects/': [
        {
          text: 'Spec Dialects',
          items: [
            { text: 'What Are Spec Dialects?', link: '/dialects/' },
            { text: 'Narrative-Driven (NDD)', link: '/dialects/narrative-driven' },
          ]
        }
      ],
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
