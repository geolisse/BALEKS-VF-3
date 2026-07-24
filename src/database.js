import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { GAME } from './config.js';
import { getBase, getDefaultLocation } from './catalog.js';
let db;
function addColumn(table, name, type) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  if (!cols.some((c) => c.name === name)) db.exec(`ALTER TABLE ${table} ADD COLUMN ${name} ${type}`);
}
export function initDatabase(file = './data/balekpets.sqlite') {
  const target = path.resolve(file); fs.mkdirSync(path.dirname(target), { recursive: true });
  db = new Database(target); db.pragma('journal_mode = WAL'); db.pragma('foreign_keys = ON');
  db.exec(`
    CREATE TABLE IF NOT EXISTS users(user_id TEXT PRIMARY KEY,balance INTEGER NOT NULL DEFAULT 0,created_at INTEGER NOT NULL,last_message_reward INTEGER NOT NULL DEFAULT 0,last_daily INTEGER NOT NULL DEFAULT 0);
    CREATE TABLE IF NOT EXISTS pets(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT NOT NULL,species_id TEXT NOT NULL,name TEXT NOT NULL,level INTEGER NOT NULL DEFAULT 1,xp INTEGER NOT NULL DEFAULT 0,food INTEGER NOT NULL DEFAULT 100,happiness INTEGER NOT NULL DEFAULT 100,vitality INTEGER NOT NULL DEFAULT 100,adopted_at INTEGER NOT NULL,last_stats_update INTEGER NOT NULL,last_feed INTEGER NOT NULL DEFAULT 0,last_hug INTEGER NOT NULL DEFAULT 0,last_rest INTEGER NOT NULL DEFAULT 0,is_active INTEGER NOT NULL DEFAULT 0,location_id TEXT,outfit_id TEXT,head_id TEXT,face_id TEXT,accessory_1_id TEXT,accessory_2_id TEXT,UNIQUE(user_id,species_id));
    CREATE TABLE IF NOT EXISTS inventory(user_id TEXT NOT NULL,item_id TEXT NOT NULL,quantity INTEGER NOT NULL DEFAULT 1,PRIMARY KEY(user_id,item_id));
    CREATE TABLE IF NOT EXISTS transactions(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT NOT NULL,amount INTEGER NOT NULL,reason TEXT NOT NULL,created_at INTEGER NOT NULL);
  `);
  addColumn('pets','accessory_2_id','TEXT');
  return db;
}
export function database(){ if(!db) throw new Error('Base non initialisée'); return db; }
export function ensureUser(userId, now=Date.now()) {
  database().prepare('INSERT OR IGNORE INTO users(user_id,balance,created_at) VALUES(?,?,?)').run(userId,GAME.starterBalance,now);
  return database().prepare('SELECT * FROM users WHERE user_id=?').get(userId);
}
export function grantDefaults(userId, species) {
  const ids=[getDefaultLocation()?.id,getBase(species)?.id].filter(Boolean);
  const stmt=database().prepare('INSERT OR IGNORE INTO inventory(user_id,item_id,quantity) VALUES(?,?,1)');
  for(const id of ids) stmt.run(userId,id);
}
