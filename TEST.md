# Plan de Test Manuel

Ce document décrit les étapes pour tester manuellement le site web de l'initiative "Neuf".

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge).
- Les fichiers du site web en local ou hébergés sur un serveur.

## Procédure de Test

### 1. Navigation

1.  Ouvrez `index.html` dans le navigateur.
2.  Cliquez sur chaque lien de la barre de navigation :
    - "Accueil" doit mener à `index.html`.
    - "Notre Mission" doit mener à `pages/mission.html`.
    - "Agir Ensemble" doit mener à `pages/participer.html`.
    - "Nos Actions" doit mener à `pages/actions.html`.
    - "Actualités" doit mener à `pages/actualites.html`.
    - "Contact" doit mener à `pages/contact.html`.
3.  Sur chaque page, vérifiez que la barre de navigation est présente et que les liens sont corrects.
4.  Dans le pied de page, vérifiez que les liens vers les réseaux sociaux (placeholders) sont présents.

### 2. Page d'Accueil (`index.html`)

1.  Vérifiez que le titre principal et le sous-titre sont corrects.
2.  Vérifiez que le message de bienvenue s'affiche correctement.
3.  Vérifiez que les boutons d'appel à l'action sont présents et fonctionnels :
    - "Participer à une corvée" doit mener à `pages/participer.html`.
    - "Signaler un problème" doit mener à `pages/participer.html#signaler`.
    - "En savoir plus" doit mener à `pages/mission.html`.
4.  Vérifiez que la section des actualités récentes affiche le premier article et que le lien mène à `pages/actualite-exemple.html`.

### 3. Page Notre Mission (`pages/mission.html`)

1.  Vérifiez que le contenu de chaque section ("Qui sommes-nous ?", "Notre Engagement", "Notre Territoire", "L'Importance du 'Neuf'") est correct.
2.  Vérifiez que le placeholder pour la carte est présent.

### 4. Page Agir Ensemble (`pages/participer.html`)

1.  Vérifiez que le contenu de chaque section ("Comment S'Impliquer ?", "Conseils pour un Quartier Propre", "Ressources Utiles") est correct.
2.  Vérifiez que les liens externes dans la section "Ressources Utiles" s'ouvrent dans un nouvel onglet.

### 5. Page Nos Actions (`pages/actions.html`)

1.  Vérifiez que la galerie de photos affiche les placeholders.
2.  Vérifiez que le contenu de la section "Rapports d'Activités" et "Témoignages" est correct.

### 6. Page Actualités (`pages/actualites.html`)

1.  Vérifiez que la liste des articles affiche le premier article.
2.  Vérifiez que le lien de l'article mène à `pages/actualite-exemple.html`.

### 7. Page Contact (`pages/contact.html`)

1.  Vérifiez que le formulaire de contact s'affiche correctement avec tous les champs.
2.  Vérifiez que l'adresse e-mail de contact est correcte.

### 8. Responsive Design

1.  Redimensionnez la fenêtre du navigateur pour simuler différentes tailles d'écran (mobile, tablette, bureau).
2.  Vérifiez que le contenu s'adapte correctement et que le site reste lisible et fonctionnel sur toutes les tailles d'écran.
3.  Vérifiez que le menu de navigation devient vertical sur les petits écrans.
