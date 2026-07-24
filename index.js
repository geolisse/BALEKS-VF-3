import 'dotenv/config';
import { startBot } from './src/bot.js';
startBot().catch((error) => {
  console.error('[BalekPets] Erreur fatale :', error);
  process.exit(1);
});
