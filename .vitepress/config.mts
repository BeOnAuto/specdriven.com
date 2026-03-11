import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/specdriven.com/',
  title: 'Spec-Driven',
  description: 'Specifications are the new programming languages. Spec-Driven Development is the paradigm for building software in the age of AI.',
  head: [
    ['meta', { property: 'og:title', content: 'Spec-Driven Development' }],
    ['meta', { property: 'og:description', content: 'Specifications are the new programming languages.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://specdriven.com' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Spec-Driven Development' }],
    ['meta', { name: 'twitter:description', content: 'Specifications are the new programming languages.' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Spec-Driven',
    nav: [
      { text: 'Why', link: '/why' },
      { text: 'What Are Specs?', link: '/what' },
      { text: 'Manifesto', link: '/manifesto' },
      { text: 'Dialects', link: '/dialects/' },
      { text: 'Quality', link: '/quality/' },
      { text: 'Auto Engineer', link: '/auto' },
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
      '/quality/': [
        {
          text: 'Quality & Specifications',
          items: [
            { text: 'What Is Quality?', link: '/quality/' },
            { text: 'Preventing Bugs', link: '/quality/bug-prevention' },
            { text: 'Testing Strategy', link: '/quality/testing-strategy' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BeOnAuto/specdriven.com' },
      { icon: 'discord', link: 'https://discord.gg/onauto' },
    ],
    footer: {
      message: 'An initiative by <a href="https://xolv.io">Xolv.io</a> — Delivering higher quality software, faster.',
      copyright: '© 2025 Xolv.io. All rights reserved.',
    },
    editLink: {
      pattern: 'https://github.com/BeOnAuto/specdriven.com/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
