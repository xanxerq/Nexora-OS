import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkHardwareCompatibility,
  generateSetupCommand,
  formatFileSize,
  formatSha256
} from './nexoraUtils.ts';

test('checkHardwareCompatibility flags non-64bit systems', () => {
  const result = checkHardwareCompatibility(
    { ramGb: 16, cpuCores: 8, diskGb: 500, is64Bit: false, hasUefi: true },
    'client'
  );
  assert.equal(result.canRun, false);
  assert.equal(result.tier, 'insufficient');
  assert.ok(result.missingRequirements.some(r => r.includes('64-bit')));
});

test('checkHardwareCompatibility gives optimal for high spec client', () => {
  const result = checkHardwareCompatibility(
    { ramGb: 32, cpuCores: 8, diskGb: 500, is64Bit: true, hasUefi: true },
    'client'
  );
  assert.equal(result.canRun, true);
  assert.equal(result.tier, 'optimal');
  assert.equal(result.missingRequirements.length, 0);
});

test('checkHardwareCompatibility approves server with 4GB RAM', () => {
  const result = checkHardwareCompatibility(
    { ramGb: 4, cpuCores: 2, diskGb: 40, is64Bit: true, hasUefi: true },
    'server'
  );
  assert.equal(result.canRun, true);
  assert.equal(result.tier, 'recommended');
});

test('generateSetupCommand includes configured flags', () => {
  const cmd = generateSetupCommand({
    includeTestifyAi: true,
    blurIntensity: 16,
    dockFloating: true,
    installWallpapers: true,
    themeVariant: 'crystalline-dark'
  });
  assert.ok(cmd.includes('--floating-dock'));
  assert.ok(cmd.includes('--blur=16'));
  assert.ok(cmd.includes('--enable-testify-ai'));
  assert.ok(cmd.includes('--theme=crystalline-dark'));
});

test('formatFileSize converts bytes to human readable sizes', () => {
  assert.equal(formatFileSize(1024 * 1024 * 1024 * 4.2), '4.20 GB');
  assert.equal(formatFileSize(1024 * 1024 * 850), '850.0 MB');
});

test('formatSha256 abbreviates 64-character hash properly', () => {
  const hash = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f67890';
  assert.equal(formatSha256(hash), 'a1b2c3d4...e5f67890');
});
