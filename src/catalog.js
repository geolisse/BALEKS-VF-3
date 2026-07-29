import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(fs.readFileSync(path.resolve(here, '../assets/manifest.json'), 'utf8'));
const manifestItems = Array.isArray(manifest) ? manifest : manifest.items;

if (!Array.isArray(manifestItems)) {
  throw new Error('Le manifeste des assets doit contenir un tableau "items".');
}

const slotMap = { location: 'lieu', base: 'base', tenue: 'tenue', coiffes: 'coiffe', coiffe: 'coiffe', visages: 'visage', visage: 'visage', accessoires: 'accessoire', accessoire: 'accessoire', cornes: 'cornes', chaussures: 'chaussures', queues: 'queue', queue: 'queue' };

export const ITEMS = manifestItems.map((raw) => ({
  ...raw,
  slot: slotMap[raw.slot] ?? raw.slot,
  assetPath: path.resolve(here, '../assets', raw.dest),
  shopVisible: !raw.default && raw.slot !== 'base',
}));

export const ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));
export const LOCATIONS = ITEMS.filter((item) => item.slot === 'lieu');
export function getItem(id) { return id ? ITEM_BY_ID.get(id) ?? null : null; }
export function getBase(species) { return ITEMS.find((item) => item.species === species && item.slot === 'base') ?? null; }
export function getDefaultLocation() { return LOCATIONS.find((item) => item.default) ?? LOCATIONS[0]; }
export function getShopItems(species, slot) {
  return ITEMS.filter((item) => item.shopVisible && item.slot === slot && (item.species === species || item.species === 'all'));
}
export function getOwnedCandidates(species, slot) {
  return ITEMS.filter((item) => (item.species === species || item.species === 'all') && item.slot === slot);
}
