# BalekPets VF v3

Version complète reconstruite à partir du bot v2 fonctionnel.

## Fonctionnalités
- Premier animal gratuit : Cocobalek, Buffalek ou Volpek
- Élevage de Julien & Miky
- Boutique Pink Studio avec changement d’espèce et catégories propres
- Dressing et aperçu avant équipement
- Rendu Sharp avec animal et équipements à 75 % du décor
- SQLite persistant
- Nourriture, bonheur, vitalité, XP, niveau et âge
- Gains par message, prime quotidienne et commande administrateur
- 73 fichiers du pack renommé intégrés

## NorthHost
Le `MAIN_FILE` normal est `index.js`. Si l’image NorthHost utilise son test erroné, conserver la rustine déjà créée sur le serveur avec `MAIN_FILE=*.js` et le fichier `*.js` contenant `import './index.js';`.

## Variables .env
```
DISCORD_TOKEN=...
CLIENT_ID=...
GUILD_ID=...
DATABASE_PATH=./data/balekpets.sqlite
```
