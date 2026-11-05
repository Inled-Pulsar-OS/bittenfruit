/**
 * Shows a spinner over any image or video that is still loading.
 * Applied site-wide from Layout, so every page gets it automatically.
 */

const HOST_CLASS = 'asset-loading';
const BOUND_FLAG = 'assetSpinnerBound';

type Asset = HTMLImageElement | HTMLVideoElement;

function isReady(asset: Asset): boolean {
  if (asset instanceof HTMLImageElement) {
    return asset.complete && asset.naturalWidth > 0;
  }
  return asset.readyState >= 2; // HAVE_CURRENT_DATA: first frame available
}

function track(asset: Asset): void {
  if (asset.dataset[BOUND_FLAG] === 'true') return;
  asset.dataset[BOUND_FLAG] = 'true';
  if (isReady(asset)) return;

  const host = asset.parentElement;
  if (!host) return;

  host.classList.add(HOST_CLASS);

  let timeout: number | undefined;
  const settle = () => {
    window.clearTimeout(timeout);
    host.classList.remove(HOST_CLASS);
    asset.removeEventListener('load', settle);
    asset.removeEventListener('loadeddata', settle);
    asset.removeEventListener('canplay', settle);
    asset.removeEventListener('error', settle);
  };

  // Never leave a spinner stuck if the network stalls.
  timeout = window.setTimeout(settle, 15000);

  asset.addEventListener('load', settle);
  asset.addEventListener('loadeddata', settle);
  asset.addEventListener('canplay', settle);
  asset.addEventListener('error', settle);
}

function scan(root: ParentNode): void {
  root.querySelectorAll<Asset>('img, video').forEach(track);
}

let observer: MutationObserver | null = null;

export function initAssetSpinners(): void {
  scan(document);
  if (observer) return;

  observer = new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node instanceof HTMLImageElement || node instanceof HTMLVideoElement) {
          track(node);
        } else {
          scan(node);
        }
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

export function cleanupAssetSpinners(): void {
  observer?.disconnect();
  observer = null;
  document.querySelectorAll(`.${HOST_CLASS}`).forEach((el) => el.classList.remove(HOST_CLASS));
}
