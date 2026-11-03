import { gsap } from '@/lib/gsap';

let ctx: gsap.Context | null = null;

export function initHeroReveal(root: HTMLElement): void {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Entrance timeline (texto, subtítulo, CTAs y banda de comunidad)
      gsap.from('.gsap-reveal-hero', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.1,
      });
    });
  }, root);
}

export function cleanupHeroReveal(): void {
  ctx?.revert();
  ctx = null;
}
