AUDIT.md

AI Engineering System (AES)

Structure : issue d’AES v1.1.0

Statut : 🟢 Vivant

Responsable : Développeur

Modification par un agent : Proposition uniquement (validation obligatoire)

Documents liés :

* STANDARDS.md
* CHECKLIST.md
* DECISIONS.md
* CHANGELOG.md
* CONTEXT.md
* ARCHITECTURE.md

⸻

1. Objectif

Ce document centralise les résultats des audits réalisés sur le projet.

Il permet de suivre son niveau de qualité, d’identifier les risques et de mesurer les améliorations au fil du temps.

⸻

2. Portée

L’audit évalue l’état global du projet.

Il permet d’identifier les forces, les faiblesses, les risques et les axes d’amélioration qui dépassent une tâche individuelle.

Un audit peut conduire à des recommandations, des plans d’action ou des décisions d’architecture.

⸻

3. Organisation

Chaque audit doit être enregistré sous un identifiant unique.

Exemple :

* AES-A001
* AES-A002
* AES-A003

Les identifiants ne sont jamais réutilisés.

⸻

4. Structure d’un audit

Chaque audit doit contenir au minimum :

Identifiant

Exemple :

AES-A001

Date

Date et heure de réalisation, au format AAAA-MM-JJ HH:MM, pour identifier chaque audit de façon unique et chronologique.

Auteur

Développeur ou agent ayant réalisé l’audit.

Domaine

Exemples :

* Qualité
* Architecture
* Sécurité
* Performance
* Documentation
* Accessibilité

Résumé

Présentation synthétique des conclusions.

Constats

Liste des observations réalisées.

Recommandations

Actions proposées pour améliorer le projet.

Priorité

Par exemple :

* Critique
* Élevée
* Moyenne
* Faible

Statut

Par exemple :

* Ouvert
* En cours
* Corrigé
* Fermé

⸻

5. Bonnes pratiques

Les audits doivent être :

* factuels ;
* vérifiables ;
* reproductibles ;
* argumentés.

Les recommandations doivent être justifiées.

⸻

6. Évolution

Un audit n’est jamais modifié pour masquer son historique.

Si la situation évolue, un nouvel audit ou une mise à jour de son statut est enregistré.

⸻

7. Références

Ce document s’appuie sur :

* STANDARDS.md ;
* CHECKLIST.md.

Les audits peuvent entraîner des mises à jour de :

* DECISIONS.md ;
* CHANGELOG.md ;
* CONTEXT.md ;
* ARCHITECTURE.md.

⸻

8. Conclusion

L’audit complète la checklist.

La checklist valide une tâche.

L’audit évalue durablement la qualité du projet.

⸻

Registre des audits

AES-A001

Date : 2026-07-23 17:35
Auteur : Agent (Claude Code)
Domaine : Sécurité, Architecture

Résumé
Audit initial du projet à l'adoption d'AES. Posture de sécurité globalement solide sur les points déjà documentés (en-têtes HTTP, CSRF, honeypot, validation CV, anti-XSS), mais une dépendance vulnérable en production (Next.js) nécessite une mise à jour, et deux écarts mineurs de cohérence documentation/plateforme ont été identifiés.

Constats
1. `npm audit` (dépendances de production) signale 3 vulnérabilités de sévérité High sur la version installée de Next.js (16.2.9) : SSRF via rewrites, DoS de l'API Image Optimization via SVG, désclosure des endpoints Server Functions internes, plus des vulnérabilités héritées via `postcss` (XSS, lecture de fichier arbitraire) et `sharp` (CVE libvips). Correctif disponible : mise à jour vers Next.js 16.2.11+.
2. En-têtes de sécurité HTTP (`next.config.ts`) : CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CORP — tous correctement configurés. Conforme.
3. CSRF (`lib/origin.ts`) : allowlist stricte en production, bypass total si `NODE_ENV !== 'production'` — comportement attendu, pas un défaut.
4. Rate limiting (`lib/rateLimit.ts`) : en mémoire (`Map`), donc par instance serverless. Limite déjà connue et documentée (README §Roadmap, ARCHITECTURE.md §7) ; confirmée non résolue à ce jour, pas un nouveau constat.
5. Le fichier `.env.example` référencé dans les instructions d'installation du README.md n'existe pas dans le dépôt — un nouveau développeur suivant le README échouerait dès `cp .env.example .env.local`.
6. `.env.local` n'a jamais été commité (historique Git vide sur ce fichier) et reste couvert par `.env*` dans `.gitignore`. Aucune fuite de secret détectée.
7. Validation du CV (`app/api/candidature/route.ts`) : type MIME déclaré + magic bytes + taille max 5 Mo (`CV_MAX_SIZE`) — défense en profondeur correcte. Point non vérifié : la limite de payload par défaut des Serverless Functions Vercel (habituellement 4,5 Mo) est inférieure à `CV_MAX_SIZE` (5 Mo) ; un CV entre 4,5 et 5 Mo pourrait être rejeté par la plateforme avant validation applicative, avec un message d'erreur générique plutôt que le message métier prévu.
8. Échappement anti-XSS (`lib/email.ts`) appliqué systématiquement avant injection dans les templates email. Conforme.
9. Aucune route API ne déclare de limite explicite de taille de requête avant lecture du corps (`req.formData()` / `req.json()`) — repose entièrement sur la limite de plateforme Vercel, non documentée dans le projet.

Recommandations
* [Élevée] Mettre à jour Next.js vers 16.2.11 ou supérieur pour corriger les 3 vulnérabilités High. Mise à jour de dépendance majeure : nécessite validation explicite avant exécution (AES-R003).
* [Moyenne] Créer un `.env.example` réel (`RESEND_API_KEY`, `CONTACT_EMAIL` en placeholders) pour que le README reste exécutable tel quel.
* [Moyenne] Vérifier en conditions réelles qu'un CV de 4,6 à 5 Mo n'est pas rejeté en amont par la limite de payload Vercel ; ajuster `CV_MAX_SIZE` ou documenter la limite réelle sinon.
* [Faible] Documenter la limite de payload de la plateforme comme contrainte d'infrastructure dans ARCHITECTURE.md ou STACK.md.

Priorité : Élevée
Statut : Fermé (postcss/sharp restent un risque residuel accepte, aucun correctif disponible sans casser le projet)

Suivi (2026-07-23)
* Next.js mis à jour vers 16.2.11 (`package.json`, `package-lock.json`) : résout le constat 1 (SSRF via rewrites, DoS Image Optimization SVG, désclosure des Server Functions) et la recommandation Élevée associée.
* Vérifications exécutées après mise à jour : `npm run lint` (aucune erreur), `npm run build` (succès, 13/13 pages générées) — un blocage initial du build a été identifié et corrigé (cache `.next/` obsolète datant d'avant la montée de version, supprimé puis régénéré).
* `npm audit fix` a corrigé une vulnérabilité High supplémentaire (`brace-expansion`), apparue de façon incidente via la mise à jour d'`eslint-config-next`, sans changement cassant.
* `postcss` et `sharp` restent non corrigés : dépendances internes de Next.js lui-même, aucune version de Next.js disponible ne les corrige sans revenir à Next 9.3.3 (changement cassant, non retenu).
* Recommandations Moyenne (`.env.example`, vérification `CV_MAX_SIZE` vs limite de payload Vercel) et Faible (documentation de la limite de payload) restent ouvertes.

Suivi (2026-07-24)
* Verification fonctionnelle runtime effectuee (next start, mode production reel) : CSRF (Origin), rate limiting (contact 5/10min, candidature 3/15min), honeypot, validation des champs, en-tetes de securite — tous conformes, aucune regression apres la mise a jour Next.js. Chemin de succes complet (envoi reel via Resend) volontairement non teste, pour ne pas envoyer d'email reel.

Suivi (2026-07-24, suite)
* .env.example cree (README executable), exception .gitignore ajoutee.
* CV_MAX_SIZE ramene a 4 Mo (sous la limite Vercel de 4,5 Mo, confirmee via la documentation officielle), message d'erreur rendu dynamique, contrainte documentee dans ARCHITECTURE.md §8. Build, lint et test fonctionnel direct verifies.

⸻

AES-A002 — Audit ciblé de coherence documentation/code

Date : 2026-07-24 19:22
Auteur : Agent (Claude Code)
Domaine : Documentation, Coherence

Résumé : audit comparant les documents AES, le README et le code réel. Aucune faille de sécurité trouvée ; un écart documentaire relevé entre ARCHITECTURE.md et le code.

Constats :
* ARCHITECTURE.md §6 affirme que lib/constants.ts est "la source unique des valeurs métier". En réalité, les seuils de rate limit (contact, candidature), ALLOWED_CV_TYPES et PHONE_RE étaient codés en dur dans les routes API, hors de lib/constants.ts.
* Aucun autre écart trouvé entre README, docs AES et code réel à cette date.

Recommandations :
* [Faible] Centraliser ces valeurs dans lib/constants.ts pour que l'affirmation d'ARCHITECTURE.md §6 soit exacte.

Priorité : Faible
Statut : Corrigé — RATE_LIMIT_CONTACT, RATE_LIMIT_CANDIDATURE, ALLOWED_CV_TYPES et PHONE_RE déplacés dans lib/constants.ts, routes mises à jour en conséquence.