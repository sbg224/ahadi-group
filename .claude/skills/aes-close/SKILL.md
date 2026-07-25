---
description: Clôture une tâche selon WORKFLOW.md Étape 9 et CHECKLIST.md — collecte les déclarations de l'agent, produit une preuve de clôture vérifiée par aes-framework closure create/verify. Ne certifie jamais la véracité des déclarations, seulement leur présence et la fraîcheur de l'état git.
---

# /aes-close

Ce fichier embarque intégralement la procédure de clôture : checklist, documents vivants, statuts autorisés, règles de motif/référence, déroulement complet. Un agent qui ne consulte aucun autre document doit pouvoir l'appliquer sans ambiguïté.

Le rôle de ce skill est strictement celui d'un orchestrateur :

1. collecter les déclarations de l'agent ;
2. les présenter au développeur ;
3. construire un fichier d'entrée temporaire, hors du dépôt cible ;
4. appeler `closure create` ;
5. supprimer systématiquement le fichier temporaire ;
6. si la création a réussi, appeler `closure verify` ;
7. afficher intégralement le résultat.

Ce skill ne calcule jamais d'empreinte, n'écrit jamais `.aes/closure.json` directement, ne fournit jamais `created_at` ni `fingerprint`, ne modifie jamais `.gitignore`, ne valide jamais lui-même l'état git, et ne prétend jamais vérifier la véracité des déclarations qu'il collecte. Toute cette substance est déléguée à `install/closure.js`, jamais reproduite ici.

⸻

## 1. Identifier la tâche clôturée

Rédiger un résumé court et concret du changement **effectivement terminé** — jamais une intention future, jamais un objectif encore en cours.

⸻

## 2. Évaluer chaque item de checklist

16 items, répartis en trois groupes. **Aucun ne peut être omis.** Pour chacun, choisir exactement un statut :

* `verifie` — aucun motif requis ;
* `non_applicable` — motif obligatoire ;
* `ecart` — motif obligatoire.

### Générale

```
objectifs_atteints
exigences_fonctionnelles_respectees
standards_developpement_appliques
regles_framework_respectees
aucune_regression_connue
code_lisible_coherent
erreurs_gerees_correctement
impacts_identifies
```

### Techniques

```
compile_correctement
tests_executes
outils_analyse_sans_erreur_bloquante
performances_conformes
securite_respectee
```

### Fonctionnelles

```
comportement_attendu_obtenu
cas_principaux_fonctionnent
cas_erreur_pris_en_compte
```

⸻

## 3. Évaluer chaque document vivant

Sept documents, tous à évaluer, aucun omis :

```
CONTEXT.md
ARCHITECTURE.md
STACK.md
DECISIONS.md
AUDIT.md
CHANGELOG.md
LEARNING.md
```

Pour chacun, choisir exactement un statut :

* `aucune_mise_a_jour` — aucun motif ni référence requis ;
* `mise_a_jour_proposee` — `reference` obligatoire (ex. `AES-A007`, ou l'entrée de CHANGELOG.md concernée) ;
* `non_applicable` — motif obligatoire ;
* `ecart` — motif obligatoire.

⸻

## 4. Présenter la synthèse avant création

Avant d'exécuter quoi que ce soit, afficher au développeur :

* le résumé de tâche ;
* les éventuels écarts ;
* les éléments non applicables, avec leur motif ;
* les mises à jour documentaires proposées, avec leur référence.

Cette présentation n'est **pas** une demande de validation interactive obligatoire : elle informe, puis la procédure se poursuit directement, sauf si les données collectées sont incomplètes ou contradictoires (dans ce cas, corriger avant de poursuivre, jamais avancer avec des données connues comme fausses).

⸻

## 5. Créer le fichier temporaire hors du dépôt

Le fichier d'entrée doit être créé dans le répertoire temporaire du système (ex. via `mktemp`), **jamais** dans le dépôt cible, **jamais** dans `.aes/`, et jamais conservé après l'exécution.

Structure exacte attendue (`aes-closure-input/1`) :

```json
{
  "schema_version": "aes-closure-input/1",
  "task": {
    "summary": "<résumé court et concret de la tâche terminée>"
  },
  "checklist": {
    "generale": {
      "objectifs_atteints": { "statut": "verifie" },
      "exigences_fonctionnelles_respectees": { "statut": "verifie" },
      "standards_developpement_appliques": { "statut": "verifie" },
      "regles_framework_respectees": { "statut": "verifie" },
      "aucune_regression_connue": { "statut": "verifie" },
      "code_lisible_coherent": { "statut": "verifie" },
      "erreurs_gerees_correctement": { "statut": "non_applicable", "motif": "<motif>" },
      "impacts_identifies": { "statut": "verifie" }
    },
    "techniques": {
      "compile_correctement": { "statut": "non_applicable", "motif": "<motif>" },
      "tests_executes": { "statut": "verifie" },
      "outils_analyse_sans_erreur_bloquante": { "statut": "non_applicable", "motif": "<motif>" },
      "performances_conformes": { "statut": "non_applicable", "motif": "<motif>" },
      "securite_respectee": { "statut": "verifie" }
    },
    "fonctionnelles": {
      "comportement_attendu_obtenu": { "statut": "verifie" },
      "cas_principaux_fonctionnent": { "statut": "verifie" },
      "cas_erreur_pris_en_compte": { "statut": "verifie" }
    }
  },
  "documents_vivants": {
    "CONTEXT.md": { "statut": "non_applicable", "motif": "<motif>" },
    "ARCHITECTURE.md": { "statut": "non_applicable", "motif": "<motif>" },
    "STACK.md": { "statut": "non_applicable", "motif": "<motif>" },
    "DECISIONS.md": { "statut": "non_applicable", "motif": "<motif>" },
    "AUDIT.md": { "statut": "mise_a_jour_proposee", "reference": "<référence>" },
    "CHANGELOG.md": { "statut": "mise_a_jour_proposee", "reference": "<référence>" },
    "LEARNING.md": { "statut": "non_applicable", "motif": "<motif>" }
  }
}
```

N'ajouter **aucun** champ en dehors de ceux-ci. En particulier, ne jamais ajouter `created_at` ni `fingerprint` : ces champs sont générés exclusivement par `closure create`, leur présence dans l'entrée est un refus garanti.

⸻

## 6. Exécuter la création

Même convention de localisation de l'installateur que le reste du dépôt (voir `install/README.md` §3) : la commande publiée si elle est disponible, sinon l'équivalent local depuis une copie du dépôt AES.

```
aes-framework closure create <chemin-projet> --input <fichier-temporaire>
```

Si la commande publiée n'est pas disponible dans ce contexte :

```
node <chemin-aes>/install/installer.js closure create <chemin-projet> --input <fichier-temporaire>
```

⸻

## 7. Supprimer systématiquement le fichier temporaire

La suppression a lieu dans **tous** les cas, sans exception : après une réussite, après un refus de schéma, après un refus git, après toute autre erreur. Jamais uniquement sur le chemin de succès.

En shell, l'équivalent d'un bloc `finally` :

```sh
FICHIER_TEMPORAIRE="$(mktemp)"
trap 'rm -f "$FICHIER_TEMPORAIRE"' EXIT
# ... écriture, puis closure create ...
```

Si les commandes sont exécutées une par une plutôt que dans un seul script, supprimer explicitement le fichier immédiatement après avoir obtenu le résultat de `closure create` — succès ou échec — avant toute autre action. Ne jamais supprimer un autre fichier que celui créé par ce skill.

⸻

## 8. Exécuter la vérification

Uniquement si `closure create` a réussi :

```
aes-framework closure verify <chemin-projet>
```

Afficher sa sortie complète, sans la résumer ni en remplacer le verdict par une reformulation.

Si `closure create` a échoué :

* afficher l'erreur intégralement ;
* ne **pas** exécuter `closure verify` ;
* ne **jamais** prétendre que la tâche est clôturée.

⸻

## 9. Rappeler la limite de la certification

Le résultat final rappelle toujours que :

* le programme vérifie la présence et la structure des déclarations ;
* le programme vérifie que l'état git n'a pas changé depuis la clôture ;
* le programme **ne certifie jamais** la véracité ou la pertinence des évaluations fournies par l'agent — cette responsabilité reste entièrement celle du développeur qui relit la synthèse de l'étape 4.
