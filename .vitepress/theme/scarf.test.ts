import { describe, expect, it } from 'vitest';
import { createScarfTracker, type ScarfWindow } from './scarf';

const PIXEL = 'https://static.on.auto/a.png?x-pxid=f4268394-763c-425d-a910-07990f4fb21f&page=';

function fakeWindow(href: string, doNotTrack: string | null = null) {
  const images: { referrerPolicy: string; src: string }[] = [];
  const win = {
    location: new URL(href),
    navigator: { doNotTrack },
    Image: class {
      referrerPolicy = '';
      src = '';
      constructor() {
        images.push(this);
      }
    },
  } satisfies ScarfWindow;
  return { win, images };
}

describe('createScarfTracker', () => {
  it('requests the pixel with the page address and an origin-only referrer on specdriven.com', () => {
    const { win, images } = fakeWindow('https://specdriven.com/what');

    createScarfTracker(win)();

    expect(images).toEqual([
      { referrerPolicy: 'origin', src: `${PIXEL}https%3A%2F%2Fspecdriven.com%2Fwhat` },
    ]);
  });

  it('requests the pixel on www.specdriven.com', () => {
    const { win, images } = fakeWindow('https://www.specdriven.com/');

    createScarfTracker(win)();

    expect(images.map((img) => img.src)).toEqual([
      `${PIXEL}https%3A%2F%2Fwww.specdriven.com%2F`,
    ]);
  });

  it('leaves the query string and hash out of the page address', () => {
    const { win, images } = fakeWindow(
      'https://specdriven.com/guides/start-here?utm_source=newsletter&email=a%40b.c#slice',
    );

    createScarfTracker(win)();

    expect(images.map((img) => img.src)).toEqual([
      `${PIXEL}https%3A%2F%2Fspecdriven.com%2Fguides%2Fstart-here`,
    ]);
  });

  it.each([
    'http://localhost:5173/',
    'http://127.0.0.1:4173/what',
    'https://beonauto.github.io/specdriven.com/',
    'https://next.specdriven.com/',
    'https://specdriven.com.example.net/',
    'https://on.auto/',
  ])('does nothing on %s', (href) => {
    const { win, images } = fakeWindow(href);

    createScarfTracker(win)();

    expect(images).toEqual([]);
  });

  it('does nothing when navigator.doNotTrack is "1"', () => {
    const { win, images } = fakeWindow('https://specdriven.com/', '1');

    createScarfTracker(win)();

    expect(images).toEqual([]);
  });

  it('does nothing when window.doNotTrack is "1"', () => {
    const { win, images } = fakeWindow('https://specdriven.com/');

    createScarfTracker({ ...win, doNotTrack: '1' })();

    expect(images).toEqual([]);
  });

  it.each(['0', 'unspecified', null])('tracks when doNotTrack is %s', (doNotTrack) => {
    const { win, images } = fakeWindow('https://specdriven.com/', doNotTrack);

    createScarfTracker(win)();

    expect(images).toHaveLength(1);
  });

  it('requests the pixel once per distinct page across route changes', () => {
    const { win, images } = fakeWindow('https://specdriven.com/');
    const track = createScarfTracker(win);

    track();
    win.location.href = 'https://specdriven.com/#features';
    track();
    win.location.href = 'https://specdriven.com/why';
    track();
    win.location.href = 'https://specdriven.com/why?ref=nav';
    track();
    win.location.href = 'https://specdriven.com/';
    track();

    expect(images.map((img) => img.src)).toEqual([
      `${PIXEL}https%3A%2F%2Fspecdriven.com%2F`,
      `${PIXEL}https%3A%2F%2Fspecdriven.com%2Fwhy`,
      `${PIXEL}https%3A%2F%2Fspecdriven.com%2F`,
    ]);
  });

  it('never throws when the image cannot be created', () => {
    const { win } = fakeWindow('https://specdriven.com/');
    const track = createScarfTracker({
      ...win,
      Image: class {
        referrerPolicy = '';
        src = '';
        constructor() {
          throw new Error('blocked');
        }
      },
    });

    expect(() => track()).not.toThrow();
  });

  it('never throws when the window is unusable', () => {
    const track = createScarfTracker({} as ScarfWindow);

    expect(() => track()).not.toThrow();
  });
});
