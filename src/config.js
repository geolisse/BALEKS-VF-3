export const GAME = Object.freeze({
  currency: 'Balekium',
  starterBalance: 0,
  dailyReward: 200,
  messageRewardMin: 10,
  messageRewardMax: 25,
  messageCooldownMs: 5000,
  careCooldownMs: 60 * 60 * 1000,
  careGain: 20,
  careXp: 5,
  expressCost: 50,
  expressGain: 10,
  canvasSize: 1024,
  petScale: 0.75,
});

export const SPECIES = Object.freeze({
  cocobalek: { id: 'cocobalek', name: 'Cocobalek', price: 1800, starter: true, emoji: '🐣', description: 'Petit compagnon vif, électrique et très expressif.' },
  buffalek: { id: 'buffalek', name: 'Buffalek', price: 2600, starter: true, emoji: '🐃', description: 'Une force tranquille au cœur massif.' },
  volpek: { id: 'volpek', name: 'Volpek', price: 4200, starter: true, emoji: '🦊', description: 'Rapide, élégant et légèrement chapardeur.' },
  cervobalek: { id: 'cervobalek', name: 'Cervobalek', price: 5200, starter: false, unavailable: true, emoji: '🦌', description: 'Bientôt disponible.' },
  dinobalek: { id: 'dinobalek', name: 'Dinobalek', price: 8000, starter: false, unavailable: true, emoji: '🦖', description: 'Bientôt disponible.' }
});

export const SLOT_DEFS = Object.freeze({
  cocobalek: [
    { id: 'tenue', label: 'Tenue', column: 'outfit_id', emoji: '👕' },
    { id: 'coiffe', label: 'Coiffe', column: 'head_id', emoji: '🎩' },
    { id: 'accessoire', label: 'Accessoire', column: 'accessory_1_id', emoji: '🦯' },
    { id: 'visage', label: 'Visage', column: 'face_id', emoji: '😎' }
  ],
  buffalek: [
    { id: 'tenue', label: 'Tenue', column: 'outfit_id', emoji: '👕' },
    { id: 'cornes', label: 'Cornes', column: 'head_id', emoji: '🦬' },
    { id: 'accessoire', label: 'Accessoire', column: 'accessory_1_id', emoji: '✨' },
    { id: 'chaussures', label: 'Chaussures', column: 'accessory_2_id', emoji: '👟' }
  ],
  volpek: [
    { id: 'tenue', label: 'Tenue', column: 'outfit_id', emoji: '👕' },
    { id: 'visage', label: 'Visage', column: 'face_id', emoji: '🎭' },
    { id: 'queue', label: 'Queue', column: 'accessory_1_id', emoji: '🦊' }
  ]
});
