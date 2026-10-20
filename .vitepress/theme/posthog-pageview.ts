import type { PostHog } from 'posthog-js';
import { createPageviewTracker, type PageLocation } from './pageview';

export function createPosthogPageviewTracker(
  location: PageLocation,
  posthog: Pick<PostHog, 'capture'>,
): () => void {
  return createPageviewTracker(location, ({ path }) => {
    posthog.capture('$pageview', { path });
  });
}
