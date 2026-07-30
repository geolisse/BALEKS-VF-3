# BalekPets V1.0.1

Bot Discord Tamagotchi officiel de l’univers des Baleks.

Adoptez un BalekPet, prenez soin de lui, gagnez du Balekium en participant au serveur et personnalisez son apparence grâce à la boutique **Pink Studio**.

## Version actuelle

**BalekPets V1.0.1 — correctif de visibilité et d’administration**

- 3 espèces jouables : Cocobalek, Buffalek et Volpek
- 70 éléments référencés dans le catalogue
- 84 ressources graphiques intégrées
- images des animaux générées avec leur tenue et leur lieu actuels
- données persistantes dans une base SQLite
- compatibilité Node.js 20 et NorthHost
- toutes les commandes répondent publiquement
- `/admin-balekium` peut ajouter ou retirer du Balekium à un membre ou à tous les membres humains d’un rôle

## Commencer à jouer

Utilisez `/commencer` pour créer votre élevage.

Le premier compagnon est gratuit et doit être choisi parmi :

- 🐣 **Cocobalek**
- 🐃 **Buffalek**

Le message d’arrivée est public afin que le serveur puisse accueillir le nouveau joueur. Seul le joueur concerné peut utiliser le menu de sélection.

Les autres espèces s’obtiennent ensuite à **l’Élevage de Juju & Miky**.

## Commandes

| Commande | Fonction | Visibilité |
|---|---|---|
| `/commencer` | Créer son élevage et choisir son premier animal | Publique |
| `/animal` | Afficher et gérer son animal actif | Publique |
| `/profil [membre]` | Consulter sa collection ou celle d’un membre | Publique |
| `/elevage` | Ouvrir l’Élevage de Juju & Miky | Publique |
| `/pink` | Ouvrir la boutique Pink Studio | Publique |
| `/journalier` | Recevoir la prime quotidienne de 200 Balekium | Publique |
| `/balekium` | Consulter son solde | Publique |
| `/renommer` | Renommer son animal actif | Publique |
| `/admin-balekium` | Ajouter ou retirer du Balekium à un membre ou à un rôle | Publique, permission Gérer le serveur |

Les anciennes commandes en double `/adopter` et `/pink-studio` ont été retirées.

## Interface de l’animal

La commande `/animal` affiche publiquement :

- le propriétaire, le nom et l’espèce ;
- l’image de l’animal avec son apparence équipée ;
- la nourriture, le bonheur et la vitalité ;
- le niveau, l’XP et l’âge ;
- le lieu et les éléments de tenue actuels.

Boutons disponibles :

- 🍕 **Nourrir**
- 💗 **Câlin**
- 🌙 **Repos**
- ⚡ **Express**
- 👗 **Dressing**
- 🐾 **Changer d’animal**
- 🛍️ **Pink Studio**

Les boutons publics sont protégés. Si un autre membre clique dessus, le bot lui indique à qui appartient le BalekPet et l’invite à utiliser `/animal` pour gérer le sien.

Si un membre utilise `/animal` sans avoir commencé, le bot l’oriente vers `/commencer`.

## Profil et collection

La commande `/profil` présente un animal à la fois avec sa véritable apparence.

- l’animal actif apparaît en premier ;
- les flèches permettent de parcourir les autres animaux ;
- le solde, le nombre d’animaux, le niveau et la tenue sont affichés ;
- le profil d’un autre membre peut être consulté publiquement.

## Pink Studio et dressing

Pink Studio permet de :

- parcourir les collections du Cocobalek, du Buffalek et du Volpek ;
- filtrer les articles par espèce et catégorie ;
- visualiser un article avant l’achat ;
- acheter avec du Balekium ;
- équiper ou retirer les objets possédés dans le dressing ;
- changer de lieu ;
- revenir directement à son animal.

La boutique s’ouvre automatiquement sur l’espèce de l’animal actif lorsqu’elle est lancée depuis `/animal`.

## Animaux et prix

| Gamme | Espèces | Prix | Disponibilité |
|---|---|---:|---|
| Classique | Cocobalek, Buffalek | 2 000 | Jouables |
| Supérieure | Volpek, Cervobalek | 4 000 | Volpek jouable, Cervobalek à venir |
| Prestige | Lutrinabalek, Nheribalek | 6 000 | À venir |
| Dinobalek | Plusieurs races | 8 000 | À venir |

Le premier Cocobalek ou Buffalek choisi avec `/commencer` reste gratuit.

## Soins et progression

Les trois soins normaux disposent chacun d’un délai d’une heure.

- soin normal : **+7 XP**, même si la jauge est pleine ;
- repos avec vitalité déjà pleine : **+14 XP** ;
- soin express utile : **+3 XP** et +10 sur la jauge pour 50 Balekium ;
- soin express sur une jauge pleine : aucun XP et aucun Balekium dépensé.

La nourriture, le bonheur et la vitalité diminuent progressivement avec le temps.

## Économie

- gain aléatoire de Balekium en participant aux discussions ;
- délai entre deux récompenses de message ;
- prime `/journalier` de 200 Balekium toutes les 24 heures ;
- achats enregistrés dans l’inventaire ;
- commande administrateur pour ajouter ou retirer un montant sans uniformiser les soldes ;
- chaque opération indique publiquement l’administrateur, la cible et le montant, et reste enregistrée dans l’historique des transactions.

## Installation

Prérequis :

- Node.js 20 ou plus récent ;
- un bot créé sur le portail Discord ;
- les dépendances natives nécessaires à `sharp` et `better-sqlite3`.

```bash
npm install
```

Créez un fichier `.env` :

```env
DISCORD_TOKEN=votre_token
CLIENT_ID=identifiant_de_l_application
GUILD_ID=identifiant_du_serveur
DATABASE_PATH=./data/balekpets.sqlite
```

Enregistrez les commandes Discord :

```bash
npm run deploy
```

Lancez le bot :

```bash
npm start
```

Le fichier principal à utiliser sur NorthHost est `index.js`.

Après une mise à jour GitHub sur NorthHost :

1. arrêter le bot ;
2. récupérer la dernière version avec `git pull` ;
3. lancer `npm install` ;
4. redémarrer le bot.

> La commande de démarrage NorthHost doit autoriser le `git pull`. Une condition comme `[[ 0 == "1" ]] && git pull` désactive la récupération automatique.

## Vérification

```bash
npm run check
```

## Prochaines versions envisagées

- **V1.1** : nouveaux vêtements, lieux et tenues enregistrables ;
- **V1.2** : classements et fonctions sociales ;
- **V1.3** : événements et collections limitées ;
- **V2.0** : arrivée du Cervobalek ;
- **V3.0** : arrivée des différentes races de Dinobaleks et expéditions.

Les correctifs sans nouvelle fonctionnalité utiliseront des numéros comme `1.0.1`, `1.0.2`, etc.
