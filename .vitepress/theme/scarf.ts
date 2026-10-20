const SCARF_PIXEL_ID = 'f4268394-763c-425d-a910-07990f4fb21f';
const SCARF_PIXEL_ENDPOINT = 'https://static.on.auto/a.png';
const PRODUCTION_HOSTNAMES = new Set(['specdriven.com', 'www.specdriven.com']);

export interface ScarfWindow {
  location: Pick<Location, 'hostname' | 'origin' | 'pathname'>;
  navigator: { doNotTrack?: string | null };
  doNotTrack?: string | null;
  Image: new () => { referrerPolicy: string; src: string };
}

export function scarfPixelUrl(page: string): string {
  return `${SCARF_PIXEL_ENDPOINT}?x-pxid=${SCARF_PIXEL_ID}&page=${encodeURIComponent(page)}`;
}

export function createScarfTracker(win: ScarfWindow): () => void {
  let lastPage: string | undefined;

  return function trackScarfPageview() {
    try {
      if (!PRODUCTION_HOSTNAMES.has(win.location.hostname)) return;
      if (win.navigator.doNotTrack === '1' || win.doNotTrack === '1') return;

      const page = win.location.origin + win.location.pathname;
      if (page === lastPage) return;
      lastPage = page;

      const img = new win.Image();
      img.referrerPolicy = 'origin';
      img.src = scarfPixelUrl(page);
    } catch {}
  };
}
