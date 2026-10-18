export interface HardwareSpecs {
  ramGb: number;
  cpuCores: number;
  diskGb: number;
  is64Bit: boolean;
  hasUefi: boolean;
}

export interface CompatibilityResult {
  canRun: boolean;
  tier: 'insufficient' | 'minimum' | 'recommended' | 'optimal';
  missingRequirements: string[];
}

export function checkHardwareCompatibility(
  specs: HardwareSpecs
): CompatibilityResult {
  const missingRequirements: string[] = [];

  if (!specs.is64Bit) {
    missingRequirements.push('Se requiere procesador x86_64 de 64-bit.');
  }

  if (specs.ramGb < 2) {
    missingRequirements.push('Mínimo 2 GB de memoria RAM (recomendado 8 GB).');
  }
  if (specs.cpuCores < 2) {
    missingRequirements.push('Mínimo procesador Dual-Core 2.0 GHz.');
  }
  if (specs.diskGb < 20) {
    missingRequirements.push('Mínimo 20 GB de espacio libre en almacenamiento.');
  }

  if (missingRequirements.length > 0) {
    return { canRun: false, tier: 'insufficient', missingRequirements };
  }

  if (specs.ramGb >= 16 && specs.cpuCores >= 6 && specs.diskGb >= 100) {
    return { canRun: true, tier: 'optimal', missingRequirements: [] };
  }
  if (specs.ramGb >= 8 && specs.cpuCores >= 4 && specs.diskGb >= 50) {
    return { canRun: true, tier: 'recommended', missingRequirements: [] };
  }
  return { canRun: true, tier: 'minimum', missingRequirements: [] };
}

export interface SetupOptions {
  includeTestifyAi: boolean;
  blurIntensity: number; // e.g. 16
  dockFloating: boolean;
  installWallpapers: boolean;
  themeVariant: 'crystalline-dark' | 'crystalline-pure-abyssal';
}

export function generateSetupCommand(options: SetupOptions): string {
  const flags: string[] = ['--apply'];
  if (options.dockFloating) flags.push('--floating-dock');
  if (options.installWallpapers) flags.push('--wallpapers-4k');
  if (options.includeTestifyAi) flags.push('--enable-testify-ai');
  flags.push(`--blur=${options.blurIntensity}`);
  flags.push(`--theme=${options.themeVariant}`);

  return `curl -sSL https://raw.githubusercontent.com/xanxer/nexora-os/main/scripts/install-crystalline.sh | bash -s -- ${flags.join(' ')}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  const gb = mb / 1024;
  return `${gb.toFixed(2)} GB`;
}

export function formatSha256(checksum: string): string {
  const clean = checksum.trim().toLowerCase();
  if (clean.length !== 64) return clean;
  return `${clean.slice(0, 8)}...${clean.slice(-8)}`;
}
