import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_PAGE_CONTENT,
  verifyAdminCredentials
} from './contentStore.ts';

test('verifyAdminCredentials accepts exact credentials', () => {
  assert.equal(verifyAdminCredentials('xanxer', 'oV4rDm2m'), true);
  assert.equal(verifyAdminCredentials(' xanxer ', 'oV4rDm2m'), true);
});

test('verifyAdminCredentials rejects wrong credentials', () => {
  assert.equal(verifyAdminCredentials('xanxer', 'wrongpass'), false);
  assert.equal(verifyAdminCredentials('admin', 'oV4rDm2m'), false);
  assert.equal(verifyAdminCredentials('', ''), false);
});

test('DEFAULT_PAGE_CONTENT has non-empty values', () => {
  assert.equal(DEFAULT_PAGE_CONTENT.heroTitle, 'NEXORA OS');
  assert.ok(DEFAULT_PAGE_CONTENT.heroSubtitle.includes('KDE Plasma 6'));
  assert.ok(DEFAULT_PAGE_CONTENT.announcementActive);
});
