import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--window-size=1440,900'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2000));

// Get bounding rects of hero display and editions section
const report = async (scrollY) => {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await new Promise((r) => setTimeout(r, 900));
  return page.evaluate(() => {
    const hero = document.querySelector('#display-container');
    const editions = document.querySelector('#editions-section');
    const gallery = document.querySelector('#gallery-section');
    if (!hero || !editions) return null;
    const h = hero.getBoundingClientRect();
    const e = editions.getBoundingClientRect();
    const g = gallery?.getBoundingClientRect();
    const overlapEditions = h.bottom > e.top && h.top < e.bottom;
    return {
      scrollY: window.scrollY,
      heroTop: Math.round(h.top), heroBottom: Math.round(h.bottom),
      editionsTop: Math.round(e.top),
      galleryTop: g ? Math.round(g.top) : null,
      heroOverlapsEditions: overlapEditions,
      heroZ: getComputedStyle(hero).zIndex,
      heroPosition: getComputedStyle(hero).position,
    };
  });
};

// Scroll through key positions: near hero pin end and into editions
for (const y of [500, 1200, 1800, 2200, 2600, 3000, 3400, 3800]) {
  const r = await report(y);
  console.log(JSON.stringify(r));
}

await browser.close();
