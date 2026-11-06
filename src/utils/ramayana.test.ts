import test from 'node:test';
import assert from 'node:assert/strict';
import { getGoogleDriveEmbedUrl, formatAudioTime, getThemeConfig, KAANDAS } from './ramayana';

test('getGoogleDriveEmbedUrl correctly transforms /view?usp=drivesdk to /preview', () => {
  const raw = 'https://drive.google.com/file/d/1N85LT8iMW8Fze5GBOm4xSNnrPoMWc3DQ/view?usp=drivesdk';
  const embed = getGoogleDriveEmbedUrl(raw);
  assert.equal(embed, 'https://drive.google.com/file/d/1N85LT8iMW8Fze5GBOm4xSNnrPoMWc3DQ/preview');
});

test('getGoogleDriveEmbedUrl handles raw file ids with query param', () => {
  const raw = 'https://drive.google.com/open?id=1N85LT8iMW8Fze5GBOm4xSNnrPoMWc3DQ';
  const embed = getGoogleDriveEmbedUrl(raw);
  assert.equal(embed, 'https://drive.google.com/file/d/1N85LT8iMW8Fze5GBOm4xSNnrPoMWc3DQ/preview');
});

test('formatAudioTime formats seconds into mm:ss accurately', () => {
  assert.equal(formatAudioTime(0), '00:00');
  assert.equal(formatAudioTime(65), '01:05');
  assert.equal(formatAudioTime(320), '05:20');
  assert.equal(formatAudioTime(-10), '00:00');
});

test('getThemeConfig returns distinctive configs for Ram vs Ravana', () => {
  const ram = getThemeConfig('ram');
  const ravana = getThemeConfig('ravana');
  
  assert.equal(ram.name, 'श्री राम राज्य');
  assert.equal(ravana.name, 'रावण साम्राज्य');
  assert.notEqual(ram.primaryColor, ravana.primaryColor);
  assert.match(ram.shloka, /रामो विग्रहवान् धर्मः/);
  assert.match(ravana.shloka, /जटाटवीगलज्जलप्रवाह/);
});

test('KAANDAS contains all 6 epic parts in correct chronological order', () => {
  assert.equal(KAANDAS.length, 6);
  assert.equal(KAANDAS[0].id, 'bala');
  assert.equal(KAANDAS[5].id, 'yuddha');
});
