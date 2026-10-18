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
    { ramGb: 16, cpuCores: 8, diskGb: 500, is64Bit: false, hasUefi: true }
  );
  assert.equal(result.canRun, false);
  assert.equal(result.tier, 'insufficient');
  assert.ok(result.missingRequirements.some(r => r.includes('64-bit')));
});

test('checkHardwareCompatibility gives optimal for high spec system', () => {
  const result = checkHardwareCompatibility(
    { ramGb: 32, cpuCores: 8, diskGb: 500, is64Bit: true, hasUefi: true }
  );
  assert.equal(result.canRun, true);
  assert.equal(result.tier, 'optimal');
  assert.equal(result.missingRequirements.length, 0);
});

test('checkHardwareCompatibility approves recommended specs', () => {
  const result = checkHardwareCompatibility(
    { ramGb: 8, cpuCores: 4, diskGb: 60, is64Bit: true, hasUefi: true }
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
  const hash = 'e7b92f3a408b1c592a83f9c6d4e1a7b8c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7';
  assert.equal(formatSha256(hash), 'e7b92f3a...c4d5e6f7');
});
