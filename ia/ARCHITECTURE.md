ARCHITECTURE.md

AI Engineering System (AES)

Structure : issue d’AES v1.1.0

Statut : 🟡 Référence

Responsable : Développeur

Modification par un agent : Proposition uniquement (validation obligatoire)

Documents liés :

* SYSTEM.md
* CONTEXT.md
* STACK.md
* DECISIONS.md
* STANDARDS.md
* AUDIT.md

⸻

1. Objectif

Ce document décrit l’architecture technique du projet.

Il présente son organisation, ses principaux composants et les relations entre eux.

Son objectif est de permettre à tout développeur ou agent IA de comprendre rapidement la structure globale du projet avant d’intervenir.

⸻

2. Vue d’ensemble

Site Next.js (App Router) monolithique, sans base de données ni back-office : une landing page vitrine, un module de recrutement, et deux Route Handlers d'API pour les formulaires. Toute persistance passe par des emails transactionnels (Resend) et un Google Form externe, pas par un stockage propre au projet.

⸻

3. Organisation du projet

app/       — pages, layout, metadata SEO, Route Handlers API
components/ — composants UI et animations, dont un sous-dossier recrutement/ dédié
lib/       — logique serveur partagée (email, sécurité, constantes)

⸻

4. Architecture applicative

* Interface utilisateur : `components/` (sections vitrine, composants animés, `recrutement/` pour le module candidature).
* Metadata / SEO : `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`.
* Logique serveur / sécurité : `lib/origin.ts` (CSRF), `lib/rateLimit.ts`, `lib/email.ts` (sanitization), `lib/constants.ts` (règles métier).
* Intégrations externes : Resend (`lib/resend.ts`), Google Form (lien statique, `lib/constants.ts`).
* Accès aux données : aucun — pas de base de données dans ce projet.

⸻

5. Flux principaux

Contact
1. Soumission du formulaire (`components/Contact.tsx`) → `POST /api/contact`.
2. Vérification Origin (CSRF) → rate limit (5/10 min par IP) → honeypot → validation des champs.
3. Envoi de l'email via Resend, avec `replyTo` intelligent si le champ contact est un email valide.

Candidature
1. Soumission du formulaire (`components/recrutement/FormulaireCandidat.tsx`) → `POST /api/candidature`.
2. Vérification Origin → rate limit (3/15 min par IP) → honeypot → validation des champs → validation du CV par magic bytes (PDF/DOC/DOCX, 5 Mo max).
3. Double envoi Resend : notification interne AHADI + accusé de réception candidat (avec lien Google Form).

⸻

6. Découpage des responsabilités

* `app/api/*` : réception, validation et orchestration des requêtes, aucune logique de sécurité inline.
* `lib/origin.ts`, `lib/rateLimit.ts` : sécurité transverse, réutilisée par les deux routes API.
* `lib/email.ts` : sanitization anti-XSS avant injection dans les templates d'email, indépendante du contenu métier.
* `lib/constants.ts` : source unique des valeurs métier (postes valides, taille max CV, URLs).
* `components/` : purement présentation ; aucune logique de sécurité côté client.

⸻

7. Évolutivité

Le rate limiting en mémoire est un point d'extension identifié (voir README.md §Roadmap) : à migrer vers un store partagé (Redis/Upstash) en cas de montée en charge multi-instances, la structure actuelle isolant déjà cette logique dans `lib/rateLimit.ts`.

⸻

8. Contraintes d’architecture

* Aucune base de données : toute évolution nécessitant de la persistance est un changement structurant (voir AES-R014).
* Sécurité par défaut sur toute route API publique : Origin, rate limit, honeypot, validation stricte — architecture actuelle à reproduire pour toute nouvelle route exposée publiquement.
* Version de Next.js non conventionnelle (voir AGENTS.md) : vérifier la documentation locale avant d'introduire une nouvelle convention de fichier ou d'API.

⸻

9. Mise à jour

Toute évolution importante de l’architecture doit entraîner une proposition de mise à jour de ce document.

Les modifications restent soumises à la validation du développeur.

⸻

10. Références

Pour une compréhension complète du projet, consulter également :

* SYSTEM.md
* CONTEXT.md
* STACK.md
* DECISIONS.md
* STANDARDS.md
* AUDIT.md