import { gsap } from '@/lib/gsap';

let ctx: gsap.Context | null = null;

export function initHeroReveal(root: HTMLElement): void {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Entrance timeline
      const heroTl = gsap.timeline({ delay: 0.1 });

      heroTl
        .from('.gsap-reveal-hero', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.out',
        });

      // 2. Display Frame Scroll Pin & Zoom (Apple Signature pattern)
      const trigger = root.querySelector('#hero-trigger');
      const display = root.querySelector<HTMLElement>('#display-container');
      if (trigger && display) {
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero-trigger',
            start: 'top top',
            end: '+=800',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        pinTl
          .to('#hero-text', {
            autoAlpha: 0,
            y: -80,
            scale: 0.94,
            duration: 0.4,
            ease: 'power1.in',
          }, 0)
          .to('#display-stand', {
            autoAlpha: 0,
            height: 0,
            duration: 0.3,
            ease: 'power1.in',
          }, 0)
          .to('#display-container', {
            scale: 1.3,
            y: -60,
            duration: 1,
            ease: 'power1.inOut',
          }, 0);
      }
    });
  }, root);
}

export function cleanupHeroReveal(): void {
  ctx?.revert();
  ctx = null;
}
