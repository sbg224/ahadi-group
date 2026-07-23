STACK.md

AI Engineering System (AES)

Structure : issue d’AES v1.1.0

Statut : 🟡 Référence

Responsable : Développeur

Modification par un agent : Proposition uniquement (validation obligatoire)

Documents liés :

* SYSTEM.md
* STANDARDS.md
* ARCHITECTURE.md
* CONTEXT.md
* DECISIONS.md

⸻

1. Objectif

Ce document recense l’ensemble des technologies, bibliothèques, frameworks, services et outils utilisés par le projet.

Il explique leur rôle, leur justification et leur périmètre d’utilisation.

Il constitue la référence technique de la stack du projet.

⸻

2. Technologies utilisées

Next.js 16 (App Router)
Catégorie : Framework
Rôle : Rendu hybride SSR/SSG, Route Handlers pour l'API, Metadata API pour le SEO.
Justification : App Router unifie pages, API et metadata dans un seul modèle de fichiers ; adapté à un site vitrine + quelques routes API sans back-office séparé.
Utilisation : L'ensemble du projet (`app/`).
Alternatives : Remix, Astro.
Documentation officielle : https://nextjs.org/docs — attention : voir AGENTS.md à la racine, cette version diverge des conventions habituelles.

React 19
Catégorie : Bibliothèque UI
Rôle : Server Components + Client Components (`'use client'` ciblé).
Justification : Requis par Next.js 16 ; Server Components réduisent le JS envoyé au client sur une landing page à fort contenu animé.
Utilisation : `components/`, `app/`.
Alternatives : Vue, Svelte.
Documentation officielle : https://react.dev

TypeScript 5
Catégorie : Langage
Rôle : Typage statique sur les routes API, les constantes et les composants.
Justification : Sécurise les entrées des formulaires publics (contact, candidature) et l'enum des postes valides.
Utilisation : Ensemble du projet.
Alternatives : JavaScript.
Documentation officielle : https://www.typescriptlang.org/

Tailwind CSS 4
Catégorie : Framework CSS
Rôle : Design system utilitaire, thème custom (palette verte/dorée AHADI).
Justification : Permet un thème de marque cohérent sans maintenir de CSS séparé par composant.
Utilisation : Ensemble des composants (`components/`).
Alternatives : CSS Modules, styled-components.
Documentation officielle : https://tailwindcss.com/

Framer Motion 12
Catégorie : Bibliothèque
Rôle : Halos animés, particules canvas, parallax, apparitions au scroll (`AuroraHalos`, `CanvasNetwork`, `ParallaxOrb`, `FloatingPaths`, `ScrollWatermark`, `TimelineDraw`).
Justification : Direction artistique animée identifiée comme différenciant de la vitrine.
Utilisation : `components/`, `components/animations/`.
Alternatives : GSAP, CSS animations natives.
Documentation officielle : https://www.framer.com/motion/

lucide-react
Catégorie : Bibliothèque (icônes)
Rôle : Iconographie de l'interface.
Justification : Cohérence visuelle, tree-shakable.
Utilisation : Ensemble des composants.
Alternatives : react-icons, Heroicons.
Documentation officielle : https://lucide.dev/

Resend
Catégorie : Service (email transactionnel)
Rôle : Envoi des emails de contact et de candidature.
Justification : SDK officiel simple pour un besoin d'envoi transactionnel sans infrastructure SMTP propre.
Utilisation : `lib/resend.ts`, `app/api/contact/`, `app/api/candidature/`.
Alternatives : SendGrid, Postmark, SMTP direct.
Documentation officielle : https://resend.com/docs

ESLint 9 (flat config) + eslint-config-next
Catégorie : Outil (lint)
Rôle : Qualité de code.
Justification : Configuration standard Next.js.
Utilisation : Ensemble du projet (`npm run lint`).
Alternatives : Biome.
Documentation officielle : https://eslint.org/

Vercel
Catégorie : Infrastructure / DevOps
Rôle : Hébergement, edge functions, variables d'environnement par environnement, build automatique à chaque push sur `main`.
Justification : Intégration native avec Next.js ; injection automatique des variables d'URL utilisées par la vérification CSRF (`lib/origin.ts`).
Utilisation : Déploiement du projet entier.
Alternatives : Netlify, hébergement Node.js autogéré.
Documentation officielle : https://vercel.com/docs

⸻

3. Règles

Chaque technologie utilisée dans le projet doit être documentée.

L’ajout d’une nouvelle dépendance doit entraîner une proposition de mise à jour de ce document.

Les technologies obsolètes doivent être retirées lorsqu’elles ne sont plus utilisées.

⸻

4. Contenu attendu

Le document peut notamment contenir :

* les langages ;
* les frameworks ;
* les bibliothèques ;
* les API externes ;
* les bases de données ;
* les outils de développement ;
* les outils DevOps ;
* les services cloud ;
* les solutions d’authentification ;
* les solutions de paiement ;
* les outils de tests ;
* les outils d’observabilité.

⸻

5. Exemple de fiche

Nom

TypeScript

Catégorie

Langage

Rôle

Ajouter un typage statique au projet.

Justification

Améliorer la robustesse du code, détecter les erreurs plus tôt et faciliter la maintenance.

Utilisation

Frontend et Backend.

Alternatives

JavaScript.

Documentation officielle

https://www.typescriptlang.org/

⸻

6. Références

Ce document s’appuie sur :

* SYSTEM.md
* STANDARDS.md
* ARCHITECTURE.md
* CONTEXT.md
* DECISIONS.md

Un choix de technologie découle souvent d’une décision documentée dans DECISIONS.md ; à l’inverse, une décision peut entraîner une mise à jour de ce document.

Il permet aux agents et aux développeurs de comprendre rapidement l’environnement technique du projet.