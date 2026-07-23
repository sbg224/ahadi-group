CONTEXT.md

AI Engineering System (AES)

Structure : issue d’AES v1.1.0

Statut : 🟢 Vivant

Responsable : Développeur

Modification par un agent : Proposition uniquement (validation obligatoire)

Documents liés :

* SYSTEM.md
* STACK.md
* ARCHITECTURE.md
* DECISIONS.md
* AUDIT.md

⸻

1. Objectif

Ce document présente le contexte global du projet.

Il permet à un développeur ou à un agent IA de comprendre rapidement le projet, ses objectifs, son périmètre et ses contraintes.

Il constitue le point d’entrée fonctionnel du projet.

⸻

2. Présentation du projet

Nom

AHADI Group — Site vitrine & recrutement

Description

Site web officiel d'AHADI Group, société de supervision de projets pour la diaspora en Guinée (BTP, agriculture, commerce, démarches administratives). Description complète : voir README.md.

Objectifs

* Présenter l'offre de service AHADI Group.
* Faire fonctionner un module de recrutement complet (candidature en ligne + CV + emails automatisés).

Public cible

* Diaspora guinéenne souhaitant un accompagnement de projet (BTP, agriculture, commerce, démarches administratives).
* Candidats aux postes proposés par AHADI Group.

État du projet

Production (site live sur ahadi-group.com, déployé sur Vercel).

⸻

3. Fonctionnalités principales

* Vitrine : landing page à sections, direction artistique animée, bouton WhatsApp flottant, pages légales, SEO complet, pages d'erreur custom.
* Module de recrutement (`/nous-rejoindre`) : formulaire de candidature avec upload de CV, 4 postes ciblés, double email automatisé.
* Formulaire de contact avec envoi via Resend.

Détail complet : voir README.md §Fonctionnalités.

⸻

4. Contraintes

* Techniques : le projet utilise Next.js 16, une version dont les conventions divergent des versions antérieures (voir AGENTS.md à la racine) ; consulter `node_modules/next/dist/docs/` avant toute modification touchant une API Next.js.
* Sécurité : deux formulaires publics exposés à internet (contact, candidature), dont un avec upload de fichier — traités comme surface d'attaque réelle, pas comme une démo (voir README.md §Sécurité).
* Métier : pas de compte utilisateur ni de back-office ; le recrutement s'appuie sur des emails automatisés (Resend) et un Google Form externe pour l'évaluation complémentaire.
* Organisationnelles : projet développé et maintenu par une seule personne (MSB).

⸻

5. Règles métier

* 4 postes de recrutement valides côté serveur (enum) : Superviseur de chantier BTP, Superviseur de plantation / agriculture, Superviseur commercial, Superviseur administratif (`lib/constants.ts`).
* À la soumission d'une candidature : double email automatique (notification interne AHADI + accusé de réception candidat avec lien vers le formulaire d'évaluation complémentaire Google Form).
* Formulaire de contact : `replyTo` intelligent — si le champ « contact » saisi est une adresse email valide, il est utilisé comme `replyTo` de l'email envoyé.
* CV : taille maximale 5 Mo, formats acceptés PDF / DOC / DOCX validés par magic bytes.

⸻

6. Dépendances fonctionnelles

* Resend : seul canal de notification (contact + candidature) ; pas de base de données ni de back-office.
* Google Form (externe) : formulaire d'évaluation complémentaire envoyé aux candidats après candidature.
* Vercel : hébergement + injection automatique des variables d'URL utilisées par la vérification CSRF (`lib/origin.ts`).

Description technique (catégorie, justification, alternatives) : voir STACK.md.

⸻

7. Évolution

D'après la Roadmap du README.md :

* Court terme : tests automatisés sur les Route Handlers (validation, rate limit, honeypot) ; CI GitHub Actions (lint + build à chaque PR).
* Moyen terme : monitoring des soumissions (taux d'erreur Resend, tentatives bloquées par le rate limit).
* Long terme : passage du rate limiting en mémoire vers un store partagé (Redis/Upstash) si montée en charge multi-instances.

⸻

8. Mise à jour

Ce document est vivant.

Les agents doivent signaler toute information devenue obsolète ou incomplète.

Toute mise à jour reste soumise à la validation du développeur.

⸻

9. Références

Pour compléter la compréhension du projet, consulter également :

* SYSTEM.md
* STACK.md
* ARCHITECTURE.md
* DECISIONS.md
* AUDIT.md