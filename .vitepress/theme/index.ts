import DefaultTheme from 'vitepress/theme';
import './custom.css';
import posthog from 'posthog-js';
import { h } from 'vue';
import AnimatedHero from './components/AnimatedHero.vue';
import ThemeImage from './components/ThemeImage.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(AnimatedHero),
    });
  },
  enhanceApp({ app, router }) {
    app.component('ThemeImage', ThemeImage);
    if (typeof window !== 'undefined') {
      // Prevent font swap jank: hide body until Barlow is loaded
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-ready');
      });

      const isLocal = window.location.hostname === 'localhost';

      posthog.init('phc_elW8D8ol33mfOT9p9OHf7oIeovn9r0wGE4QloAnoi0y', {
        api_host: isLocal ? 'https://us.i.posthog.com' : '/idata',
        capture_pageview: false,
        persistence: isLocal ? 'memory' : 'localStorage+cookie',
      });

      // Tag all events with environment
      posthog.register({ environment: isLocal ? 'development' : 'production' });

      // Capture initial page view
      posthog.capture('$pageview', { path: window.location.pathname });

      // Capture page views on route change
      router.onAfterRouteChanged = (to) => {
        posthog.capture('$pageview', { path: to });
      };
    }
  },
};
