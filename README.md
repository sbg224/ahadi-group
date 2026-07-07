# AHADI Group — Site vitrine & recrutement

Site web officiel d'**AHADI Group**, société de supervision de projets pour la diaspora en Guinée (BTP, agriculture, commerce, démarches administratives). Le site sert deux objectifs : présenter l'offre de service et faire tourner un module de recrutement complet (candidature en ligne + CV + emails automatisés).

**Live** : [ahadi-group.com](https://ahadi-group.com)

---

## Stack technique

| Catégorie | Techno | Usage dans le projet |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Rendu hybride SSR/SSG, Route Handlers pour l'API, Metadata API pour le SEO |
| UI | **React 19** | Server Components + Client Components (`'use client'` ciblé) |
| Langage | **TypeScript 5** | Typage strict sur les routes API, les constantes et les composants |
| Style | **Tailwind CSS 4** | Design system utilitaire, thème custom (palette verte/dorée AHADI) |
| Animations | **Framer Motion 12** | Halos animés, particules canvas, parallax, apparitions au scroll (`AuroraHalos`, `CanvasNetwork`, `ParallaxOrb`, `FloatingPaths`, `ScrollWatermark`, `TimelineDraw`) |
| Icônes | **lucide-react** | Iconographie de l'interface |
| Email transactionnel | **Resend** | Envoi des emails de contact et de candidature (SDK officiel) |
| Fonts | **next/font/google** (Outfit, DM Sans) | Chargement optimisé, zero layout shift |
| Lint | **ESLint 9** (flat config) + `eslint-config-next` | Qualité de code |
| Déploiement | **Vercel** | Hébergement, edge functions, variables d'environnement par environnement |

---

## Fonctionnalités

**Vitrine**
- Landing page à sections (`Hero`, `Devise`, `Legit`, `Methode`, `Stories`, `Scope`, `Values`, `PreuveTerrain`, `Contact`) assemblées dans `app/page.tsx`
- Direction artistique animée (halos, réseau de particules sur canvas, effets de parallax) via Framer Motion
- Bouton WhatsApp flottant pour contact direct
- Pages légales dédiées : mentions légales, politique de confidentialité, conditions générales (`LegalLayout` mutualisé)
- SEO complet : `sitemap.ts`, `robots.ts`, image Open Graph générée dynamiquement (`opengraph-image.tsx`), metadata structurée dans `layout.tsx`
- Page 404 et gestion d'erreur custom (`not-found.tsx`, `error.tsx`)

**Module de recrutement** (`/nous-rejoindre`)
- Formulaire de candidature (`FormulaireCandidat`) : nom, email, téléphone, ville, poste, motivation, upload CV
- 4 postes ciblés : superviseur BTP, agriculture, commercial, administratif
- Double email automatisé à la soumission : notification interne à AHADI + accusé de réception au candidat avec lien vers un formulaire d'évaluation complémentaire (Google Form)

**Formulaire de contact**
- Envoi via Resend avec `replyTo` intelligent (si le champ contact est un email valide)

---

## Sécurité — ce qui a été implémenté et pourquoi

C'est la partie la plus dense du projet, pensée comme un vrai formulaire public exposé à internet, pas une démo :

- **CSRF par vérification d'Origin** (`lib/origin.ts`) : allowlist stricte (`ahadi-group.com` + domaines Vercel injectés par la plateforme, jamais un pattern générique du type `*.vercel.app` qui serait contournable par un tiers)
- **Rate limiting en mémoire** (`lib/rateLimit.ts`) : 5 requêtes / 10 min par IP sur `/contact`, 3 / 15 min sur `/candidature`, avec purge périodique des entrées expirées pour éviter une fuite mémoire sur les instances longues
- **Anti-bot par honeypot** : champ invisible (`site_web`) — s'il est rempli, réponse succès factice renvoyée sans traitement, pour ne pas révéler la détection
- **Validation des CV par magic bytes**, pas par extension : vérification des 4 premiers octets du fichier pour confirmer qu'il s'agit bien d'un PDF, DOC (OLE2) ou DOCX (ZIP), indépendamment du type MIME déclaré par le client
- **Sanitization anti-XSS** (`lib/email.ts`) : échappement HTML systématique de toutes les entrées utilisateur avant injection dans les templates d'email
- **Validation stricte des entrées** : longueurs maximales par champ, regex email/téléphone, enum de postes valides côté serveur
- **Pas de fuite d'erreur** : les erreurs Resend sont loguées côté serveur uniquement, jamais renvoyées telles quelles au client

---

## Architecture

```
app/
  api/contact/route.ts        # Route Handler — formulaire de contact
  api/candidature/route.ts    # Route Handler — candidature + upload CV
  nous-rejoindre/page.tsx     # Page recrutement
  mentions-legales/           # Pages légales
  politique-de-confidentialite/
  conditions-generales/
  layout.tsx                  # Metadata, fonts, providers globaux
  sitemap.ts / robots.ts / opengraph-image.tsx

components/
  Hero, Nav, Footer, Contact, Values, Methode, Stories, Scope, ...
  animations/TimelineDraw.tsx
  recrutement/FormulaireCandidat.tsx, HeroRecrut.tsx, ValeursSuperviseur.tsx
  icons/SealBadge.tsx

lib/
  resend.ts       # Client Resend
  email.ts        # Échappement HTML
  rateLimit.ts    # Rate limiting mémoire
  origin.ts       # Vérification CSRF
  constants.ts    # Constantes métier (postes, URLs, tailles max)
```

---

## Installation locale

```bash
npm install
cp .env.example .env.local   # renseigner les variables ci-dessous
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi des emails transactionnels |
| `CONTACT_EMAIL` | Adresse de réception des formulaires (fallback : `contact@ahadi-group.com`) |

Les variables `VERCEL_URL`, `VERCEL_BRANCH_URL`, `VERCEL_PROJECT_PRODUCTION_URL` sont injectées automatiquement par Vercel en production, aucune configuration manuelle nécessaire.

---

## Scripts

| Commande | Action |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | Analyse ESLint |

---

## Roadmap

- [ ] Tests automatisés sur les Route Handlers (validation, rate limit, honeypot)
- [ ] CI GitHub Actions (lint + build à chaque PR)
- [ ] Monitoring des soumissions (taux d'erreur Resend, tentatives bloquées par le rate limit)
- [ ] Passage du rate limiting en mémoire vers un store partagé (Redis/Upstash) si montée en charge multi-instances

---

## Déploiement

Déployé sur **Vercel**, build automatique à chaque push sur `main`.

---

*Projet développé et maintenu par [MSB](https://github.com/sbg224).*
