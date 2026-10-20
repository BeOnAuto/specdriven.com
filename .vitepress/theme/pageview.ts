export type PageLocation = Pick<Location, 'origin' | 'pathname'>;

export interface Pageview {
  url: string;
  path: string;
}

export function createPageviewTracker(
  location: PageLocation,
  onPageview: (pageview: Pageview) => void,
): () => void {
  let lastUrl: string | undefined;

  return function trackPageview() {
    try {
      const path = location.pathname;
      const url = location.origin + path;
      if (url === lastUrl) return;
      lastUrl = url;
      onPageview({ url, path });
    } catch {}
  };
}
