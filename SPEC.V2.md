# SPEC.V2.md: Site Web Complet

## Objectif

Développer un site web statique complet et responsive pour promouvoir l'initiative citoyenne 'Neuf'.

## Pages

### 1. Page d'Accueil (`index.html`)

-   **Carrousel d'images :** Un carrousel d'images simple et responsive présentant des photos inspirantes du quartier.
-   **Témoignages :** Une section pour des citations courtes et impactantes de participants.
-   **Actualités récentes :** Un aperçu des 3 dernières actualités, avec un lien vers la page "Actualités".

### 2. Notre Mission (`pages/mission.html`)

-   **Section "Qui sommes-nous ?" :** Description détaillée de l'initiative.
-   **Section "Notre Engagement" :** Liste des engagements de "Neuf".
-   **Section "Notre Territoire" :** Description de la zone d'action, avec une carte simple.
-   **Section "L'Importance du 'Neuf'" :** Explication du nom de l'initiative.

### 3. Agir Ensemble (`pages/participer.html`)

-   **Section "Conseils pour un Quartier Propre" :** Habitudes simples pour contribuer à la propreté.
-   **Section "Ressources Utiles" :** Liens vers le service 311 et le calendrier des collectes de la Ville de Montréal.

### 4. Nos Actions (`pages/actions.html`)

-   **Galerie Photo :** Une grille de photos des corvées passées et des avant/après, avec une lightbox.
-   **Rapports d'Activités :** Description des actions menées et des résultats.
-   **Témoignages :** Citations de participants.

### 5. Actualités (`pages/actualites.html`)

-   **Liste d'articles :** Affichage des articles de blog les plus récents.
-   **Pages d'articles individuels :** Chaque article aura sa propre page.
-   **Génération depuis Markdown :** Les articles seront générés à partir de fichiers Markdown situés dans un dossier `content/`.

### 6. Contact (`pages/contact.html`)

-   **Formulaire de contact :** Un formulaire HTML simple pour envoyer des messages à l'initiative.

## Fonctionnalités

-   **Navigation responsive :** Un menu de navigation qui s'adapte à toutes les tailles d'écran.
-   **JavaScript :** Pour le carrousel, la lightbox et la génération des actualités.

## Structure des fichiers

-   `index.html`
-   `css/style.css`
-   `js/script.js`
-   `pages/` (dossier pour les autres pages HTML)
-   `images/`
-   `content/` (dossier pour les fichiers Markdown des actualités)
-   `README.md`
-   `SPEC.V1.md`
-   `SPEC.V2.md`
-   `TEST.md`
