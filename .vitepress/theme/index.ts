import DefaultTheme from 'vitepress/theme';
import './custom.css';
import posthog from 'posthog-js';

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      const isLocal = window.location.hostname === 'localhost';

      posthog.init('phc_elW8D8ol33mfOT9p9OHf7oIeovn9r0wGE4QloAnoi0y', {
        api_host: isLocal ? 'https://us.i.posthog.com' : '/idata',
        capture_pageview: false, // We'll capture manually for SPA
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
