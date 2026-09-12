import { gsap, ScrollTrigger } from '@/lib/gsap';

let ctx: gsap.Context | null = null;
const cleanupFns: Array<() => void> = [];

export function initMediaGalleryScroll(root: HTMLElement): void {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Pinned, scroll-scrubbed horizontal track on desktop.
    // On smaller screens the wrapper keeps native overflow-x scrolling.
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const track = root.querySelector<HTMLElement>('#media-card-track');
      const section = root.querySelector<HTMLElement>('#gallery-section');
      const wrapper = root.querySelector<HTMLElement>('#gallery-track-wrapper');

      if (!track || !section || !wrapper) return;

      // GSAP owns horizontal movement on desktop: reset native scroll offset.
      wrapper.scrollLeft = 0;

      // Distance needed so the END of the last card lands exactly at the right
      // edge of the viewport (nothing clipped, track fully shown).
      // Functions are re-evaluated on ScrollTrigger.refresh (resize, late loads).
      const scrollAmount = () =>
        Math.max(0, track.scrollWidth - document.documentElement.clientWidth);

        gsap.to(track, {
        x: () => -scrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollAmount() + 400}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1, // engages smoothly instead of snapping after the hero
          refreshPriority: 2, // refreshed before the later pins (story, video reel)
          invalidateOnRefresh: true,
        },
      });
    });

    // Videos/posters load after init and shift layout heights, which would
    // leave the pin's start/end stale (pin briefly releases and re-engages).
    // Recalculate once everything has loaded.
    const refreshOnLoad = () => ScrollTrigger.refresh();
    if (document.readyState === 'complete') {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener('load', refreshOnLoad, { once: true });
    }

    // Keep a reference so we can remove it on cleanup if load never fired.
    cleanupFns.push(() => window.removeEventListener('load', refreshOnLoad));
  }, root);
}

export function cleanupMediaGalleryScroll(): void {
  ctx?.revert();
  ctx = null;
  cleanupFns.forEach((fn) => fn());
  cleanupFns.length = 0;
}
