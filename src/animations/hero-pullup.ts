import { gsap } from '@/lib/gsap';

let ctx: gsap.Context | null = null;

/**
 * Cycles the hero pull-up subhead: one phrase at a time pulls up from below,
 * holds, then slides up and out while the next one pulls up.
 * Fully scoped with gsap.context() and safe for prefers-reduced-motion.
 */
export function initHeroPullUp(root: HTMLElement): void {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const items = Array.from(root.querySelectorAll<HTMLElement>('.pull-up-item'));
      if (!items.length) return;

      const STAY = 2.6; // seconds each phrase stays fully visible
      const SWAP = 0.5; // seconds for the pull-up / slide-out swap

      const tl = gsap.timeline({ repeat: -1 });

      // Items are absolutely centered in the viewport. Park phrases below, reveal in center.
      tl.set(items, { y: 60, opacity: 0 });
      tl.set(items[0], { y: 0, opacity: 1 });

      items.forEach((item, i) => {
        const next = items[(i + 1) % items.length];
        const at = i * (STAY + SWAP);
        tl.to(item, { y: -60, opacity: 0, duration: SWAP, ease: 'power3.in' }, at + STAY);
        tl.to(next, { y: 0, opacity: 1, duration: SWAP, ease: 'power3.out' }, at + STAY + 0.05);
      });
    });
  }, root);
}

export function cleanupHeroPullUp(): void {
  ctx?.revert();
  ctx = null;
}
