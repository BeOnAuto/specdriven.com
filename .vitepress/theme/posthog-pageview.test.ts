import { describe, expect, it } from 'vitest';
import { createPosthogPageviewTracker } from './posthog-pageview';

function fakePosthog() {
  const captured: { event: string; properties: unknown }[] = [];
  return {
    captured,
    capture(event: string, properties?: unknown) {
      captured.push({ event, properties });
      return undefined;
    },
  };
}

describe('createPosthogPageviewTracker', () => {
  it('captures one $pageview for the first load even when VitePress also reports it as a route change', () => {
    const location = new URL('https://specdriven.com/what');
    const posthog = fakePosthog();
    const track = createPosthogPageviewTracker(location, posthog);

    track();
    track();

    expect(posthog.captured).toEqual([{ event: '$pageview', properties: { path: '/what' } }]);
  });

  it('captures one $pageview per in-site navigation to a different path', () => {
    const location = new URL('https://specdriven.com/');
    const posthog = fakePosthog();
    const track = createPosthogPageviewTracker(location, posthog);

    track();
    location.href = 'https://specdriven.com/what';
    track();
    location.href = 'https://specdriven.com/privacy';
    track();

    expect(posthog.captured.map((c) => c.properties)).toEqual([
      { path: '/' },
      { path: '/what' },
      { path: '/privacy' },
    ]);
  });

  it('captures nothing for hash clicks or query changes on the same page', () => {
    const location = new URL('https://specdriven.com/what');
    const posthog = fakePosthog();
    const track = createPosthogPageviewTracker(location, posthog);

    track();
    location.href = 'https://specdriven.com/what#think-about-it';
    track();
    location.href = 'https://specdriven.com/what?ref=nav#another-section';
    track();
    location.href = 'https://specdriven.com/what';
    track();

    expect(posthog.captured).toHaveLength(1);
  });

  it('captures again when back navigation returns to a previous path', () => {
    const location = new URL('https://specdriven.com/');
    const posthog = fakePosthog();
    const track = createPosthogPageviewTracker(location, posthog);

    track();
    location.href = 'https://specdriven.com/what';
    track();
    location.href = 'https://specdriven.com/';
    track();

    expect(posthog.captured.map((c) => c.properties)).toEqual([
      { path: '/' },
      { path: '/what' },
      { path: '/' },
    ]);
  });

  it('sends the path without query string or hash', () => {
    const location = new URL('https://specdriven.com/guides/start-here?utm_source=newsletter#slice');
    const posthog = fakePosthog();

    createPosthogPageviewTracker(location, posthog)();

    expect(posthog.captured).toEqual([
      { event: '$pageview', properties: { path: '/guides/start-here' } },
    ]);
  });

  it('never throws when capture fails', () => {
    const track = createPosthogPageviewTracker(new URL('https://specdriven.com/'), {
      capture() {
        throw new Error('posthog unavailable');
      },
    });

    expect(() => track()).not.toThrow();
  });
});
