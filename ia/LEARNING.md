LEARNING.md

AI Engineering System (AES)

Structure : issue d’AES v1.1.0

Statut : 🟢 Vivant

Responsable : Développeur

Modification par un agent : Proposition uniquement (validation obligatoire)

Documents liés :

* AUDIT.md
* DECISIONS.md
* CHANGELOG.md
* CONTEXT.md

⸻

1. Objectif

Ce document conserve les enseignements tirés du projet.

Il centralise les connaissances acquises au cours du développement afin d’améliorer les pratiques et d’éviter de reproduire les mêmes erreurs.

⸻

2. Organisation

Chaque apprentissage reçoit un identifiant unique.

Exemple :

* AES-L001
* AES-L002
* AES-L003

Les identifiants ne sont jamais réutilisés.

⸻

3. Structure d’un apprentissage

Chaque entrée doit contenir au minimum :

Identifiant

Exemple :

AES-L001

Date

Date et heure de validation, au format AAAA-MM-JJ HH:MM, pour identifier chaque apprentissage de façon unique et chronologique.

Contexte

Situation ayant conduit à cet apprentissage.

Observation

Ce qui a été constaté.

Enseignement

Ce qui a été appris.

Recommandation

Bonne pratique à appliquer à l’avenir.

Références

Documents, audits ou décisions associés lorsque cela est pertinent.

⸻

4. Bonnes pratiques

Les apprentissages doivent être :

* concrets ;
* vérifiables lorsque cela est possible ;
* utiles pour les développements futurs.

Ils ne doivent pas décrire un simple événement, mais une connaissance réutilisable.

⸻

5. Évolution

Les apprentissages restent conservés afin de constituer une mémoire du projet.

Si un enseignement devient obsolète, il est mis à jour ou complété plutôt que supprimé.

⸻

6. Références

Ce document s’appuie sur AUDIT.md, DECISIONS.md, CHANGELOG.md et CONTEXT.md.

Les apprentissages peuvent également provenir de :

* retours d’expérience ;
* incidents ;
* améliorations réalisées.

Ils peuvent conduire à des évolutions des standards, du workflow ou de l’architecture lorsque cela est justifié.

⸻

Registre des apprentissages

AES-L001

Date : 2026-07-23 18:19
Contexte : Mise à jour de Next.js 16.2.9 → 16.2.11 (AES-A001, recommandation Élevée).
Observation : `npm run build` s'est bloqué indéfiniment après la mise à jour (aucune progression après « Creating an optimized production build ... », `.next/lock` présent plus de 10 minutes, process quasi inactif en CPU), sans message d'erreur. Le dossier `.next/` existant avait été généré par la version précédente (16.2.9) et n'avait pas été régénéré depuis.
Enseignement : Un changement de version de Next.js peut invalider silencieusement le cache de build existant (`.next/`) au lieu de produire une erreur explicite — le symptôme observable est un blocage sans message, pas un échec propre.
Recommandation : Après toute mise à jour de la version de Next.js (même mineure ou patch), supprimer le dossier `.next/` avant de relancer un build, plutôt que de diagnostiquer un blocage a posteriori.
Références : AES-A001 (AUDIT.md).

⸻

AES-L002

Date : 2026-07-23 19:16
Contexte : Ajout d'un hook `Stop` (`aes-closure-reminder.sh`) dans ce projet, destine a rappeler l'application de WORKFLOW.md Etape 9 (finalisation) a chaque fin de tour de l'agent, en complement du hook `UserPromptSubmit` (AES-R014) deja en place.
Observation : Le hook renvoyait `hookSpecificOutput.additionalContext` a chaque declenchement, sans lire le champ d'entree `stop_hook_active`. Sur un hook `Stop`, `additionalContext` force une continuation de la conversation (documente comme equivalent a `decision: "block"`), pas un simple rappel passif comme sur `UserPromptSubmit`. Resultat : chaque continuation forcee redeclenchait le hook, qui renvoyait a nouveau `additionalContext`, provoquant une boucle auto-entretenue (7 declenchements consecutifs observes, sans aucune saisie humaine, avant intervention manuelle pour desactiver le hook).
Enseignement : `additionalContext` a une semantique differente selon l'evenement de hook : passive sur `UserPromptSubmit` (rattachee a une invocation qui allait de toute facon se produire), active sur `Stop` (elle fabrique elle-meme l'invocation suivante). Meme corrige avec la garde `stop_hook_active`, `Stop` se declenche sur chaque tour sans possibilite de filtrage (aucun `matcher` supporte) : le cout (une continuation forcee apres chaque reponse, triviale ou non) reste disproportionne par rapport a un simple rappel de cloture de tache.
Recommandation : Ne pas utiliser de hook `Stop` pour des rappels de fin de tache dans ce projet. S'appuyer sur `UserPromptSubmit` (avec `additionalContext`, jamais `systemMessage`) pour les rappels en debut de tache, et sur des questions de cloture explicites posees par l'agent pour la discipline de fin de tache (CHECKLIST.md, LEARNING.md/AES-R005). Si un hook `Stop` est envisage a l'avenir pour un besoin different (ex. forcer une verification precise avant de clore), il doit imperativement verifier `stop_hook_active` avant de renvoyer `additionalContext` ou toute decision bloquante.
Références : AES-L001 (LEARNING.md), AUDIT.md (AES-A001).

⸻

AES-L003

Date : 2026-07-25 15:45
Contexte : Build (`npm run build`) bloque a plusieurs reprises pendant une session de travail longue (6 jours sans redemarrage machine, plusieurs applications et sessions actives en parallele).
Observation : Process `next build` reste bloque avant meme d'afficher sa banniere de demarrage, CPU quasi nul, aucune progression, y compris apres purge du cache `.next` (contrairement a AES-L001 ou la purge resolvait le blocage). La memoire systeme disponible etait tres faible au moment du blocage (~75 Mo libres). Apres liberation de memoire (fermeture d'applications, ~286 Mo libres), le meme build a abouti sans autre changement — compilation reussie, 13/13 pages generees — mais restait tres lent (environ 18 minutes au total, contre quelques secondes habituellement dans cette session).
Enseignement : La saturation memoire systeme apparait comme la cause la plus probable de ce blocage, sur la base d'une correlation observee (blocage total a memoire tres basse, aboutissement a memoire liberee), sans qu'un lien de causalite strict ait ete formellement isole ni qu'aucune autre variable n'ait change entre les deux tentatives. Un build bloque sans progression n'a donc pas toujours la meme cause qu'AES-L001 (cache obsolete).
Recommandation : En cas de blocage de build sans message d'erreur, verifier dans l'ordre : (1) age du cache `.next` vs derniere mise a jour de dependance (AES-L001), (2) memoire/charge systeme disponible (`vm_stat`, `uptime`, `ps aux`) comme cause probable, avant de conclure a un bug du projet. Si la memoire semble en cause, liberer des ressources plutot que de multiplier les tentatives a l'identique.
Références : AES-L001 (LEARNING.md).