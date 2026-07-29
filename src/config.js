export const GAME = Object.freeze({
  currency: 'Balekium',
  starterBalance: 0,
  dailyReward: 200,
  messageRewardMin: 10,
  messageRewardMax: 25,
  messageCooldownMs: 5000,
  careCooldownMs: 60 * 60 * 1000,
  careGain: 20,
  careXp: 7,
  vitalityFullXp: 14,
  expressXp: 3,
  expressCost: 50,
  expressGain: 10,
  canvasSize: 1024,
  petScale: 0.75,
});

export const SPECIES = Object.freeze({
  cocobalek: { id: 'cocobalek', name: 'Cocobalek', price: 2000, starter: true, emoji: '🐣', description: 'Petit compagnon vif, électrique et très expressif.' },
  buffalek: { id: 'buffalek', name: 'Buffalek', price: 2000, starter: true, emoji: '🐃', description: 'Une force tranquille au cœur massif.' },
  volpek: { id: 'volpek', name: 'Volpek', price: 4000, starter: false, emoji: '🦊', description: 'Rapide, élégant et légèrement chapardeur.' },
  cervobalek: { id: 'cervobalek', name: 'Cervobalek', price: 4000, starter: false, unavailable: true, emoji: '🦌', description: 'Bientôt disponible.' },
  lutrinabalek: { id: 'lutrinabalek', name: 'Lutrinabalek', price: 6000, starter: false, unavailable: true, emoji: '🦦', description: 'Une loutre Balek malicieuse. Bientôt disponible.' },
  nheribalek: { id: 'nheribalek', name: 'Nheribalek', price: 6000, starter: false, unavailable: true, emoji: '🦔', description: 'Un hérisson Balek. Bientôt disponible.' },
  dinobalek: { id: 'dinobalek', name: 'Dinobalek', price: 8000, starter: false, unavailable: true, emoji: '🦖', description: 'Plusieurs races de Dinobaleks arriveront bientôt.' }
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
