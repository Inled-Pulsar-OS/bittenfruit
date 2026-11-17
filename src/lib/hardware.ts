export type CheckStatus = 'ok' | 'fail' | 'unknown';

export interface ScanResult {
  arch: CheckStatus;
  ram: CheckStatus;
}

/** Pulsar OS minimum RAM in GB. */
const MIN_RAM_GB = 4;

interface UAData {
  getHighEntropyValues(hints: string[]): Promise<{ architecture?: string; bitness?: string }>;
}

/** Is the CPU 64-bit x86 (AMD64)? Chromium exposes it via userAgentData; others fall back to the UA string. */
async function checkArch(): Promise<CheckStatus> {
  const uaData = (navigator as Navigator & { userAgentData?: UAData }).userAgentData;
  if (uaData) {
    try {
      const { architecture, bitness } = await uaData.getHighEntropyValues(['architecture', 'bitness']);
      if (architecture === 'arm') return 'fail';
      if (architecture === 'x86') return bitness === '64' ? 'ok' : bitness === '32' ? 'fail' : 'unknown';
    } catch {
      // fall through to UA string
    }
  }
  const ua = navigator.userAgent;
  if (/arm64|aarch64/i.test(ua)) return 'fail';
  if (/x86_64|x64|win64|wow64|amd64/i.test(ua)) return 'ok';
  return 'unknown';
}

/** `deviceMemory` is Chromium-only and capped at 8 GB, so only the lower bound is trustworthy. */
function checkRam(): CheckStatus {
  const gb = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  if (typeof gb !== 'number') return 'unknown';
  return gb >= MIN_RAM_GB ? 'ok' : 'fail';
}

export async function scanHardware(): Promise<ScanResult> {
  return { arch: await checkArch(), ram: checkRam() };
}

/** Fail only on a trusted failure; "ok" needs every check to pass. */
export function verdict(r: ScanResult): CheckStatus {
  const all = [r.arch, r.ram];
  if (all.includes('fail')) return 'fail';
  return all.every((s) => s === 'ok') ? 'ok' : 'unknown';
}
