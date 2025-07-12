# SPEC.V1.md: Landing Page

## Objectif

Créer une page d'accueil unique, claire et concise pour l'initiative "Neuf". La page doit être immédiatement publiable et optimisée pour le partage sur les réseaux sociaux.

## Contenu de la Page (`index.html`)

### 1. En-tête (Header)

-   **Titre principal :** "Neuf : Votre Quartier Prend Vie !"
-   **Sous-titre/message clé :** "Ensemble, on Renouvelle notre Quartier."

### 2. Message de bienvenue

-   "Bienvenue sur le site de Neuf, l'initiative citoyenne dédiée à la propreté et au renouveau de notre quartier. Nous agissons activement dans les secteurs de la 9e Rue, d'Everett, du parc Sandro-Pertini et de Saint-Michel jusqu'à l'entrée de JFK. Rejoignez-nous pour transformer notre environnement en un lieu plus sain, plus agréable et plus respectueux pour tous."

### 3. Actions à prendre (Call to Action)

-   **Titre de la section :** "Comment agir ?"
-   **Participer à une corvée :**
    -   "Rejoignez nos prochaines corvées de nettoyage ! Chaque main compte pour faire une réelle différence."
    -   "Prochaines dates : (à venir)"
    -   "Ce qu'il faut apporter : Votre bonne humeur, des gants de travail (si vous en avez)."
    -   "Ce que nous fournissons : Sacs poubelles, pinces de ramassage (dans la limite des stocks)."
-   **Signaler un problème :**
    -   "Vous avez repéré un dépôt sauvage, une zone particulièrement sale ou un problème de déchets ? Contactez directement la Ville de Montréal au 311."
-   **Devenir bénévole régulier :**
    -   "Vous souhaitez vous engager plus profondément et régulièrement avec l'initiative Neuf ? Contactez-nous à contact@neufquartier.org."
-   **Parler à vos voisins :**
    -   "Parlez à vos voisins et aux commerces pour les encourager à prendre en charge la propreté au-delà de leur terrain pour conserver un quartier propre."

### 4. Nos Actions en Images

-   **Titre de la section :** "Nos Actions en Images"
-   **Lien vers l'album photo :** Un bouton ou un lien proéminent "Voir notre album photo" qui pointe vers `https://photos.app.goo.gl/4F4gDjzjsxZbgyeL9`.

### 5. Notre Mission

-   **Titre de la section :** "Notre Mission"
-   "L'initiative Neuf est née de la conviction qu'un environnement propre est la base d'une communauté saine et vibrante. Notre mission est d'agir concrètement pour la propreté et d'encourager la prise en charge collective de notre environnement."

### 6. Pied de page (Footer)

-   "© 2025 Neuf. Tous droits réservés."
-   "Contact : contact@neufquartier.org"
-   Liens vers les réseaux sociaux (Facebook, Instagram).

## Optimisation pour les réseaux sociaux

Ajouter les balises Open Graph suivantes dans la section `<head>` de `index.html`:

-   `<meta property="og:title" content="Neuf : Votre Quartier Prend Vie !">`
-   `<meta property="og:description" content="Ensemble, on Renouvelle notre Quartier. Rejoignez l'initiative citoyenne pour un environnement plus propre.">`
-   `<meta property="og:image" content="URL_de_l_image_a_definir">` (une image représentative du projet)
-   `<meta property="og:url" content="URL_du_site_une_fois_deploye">`

## Structure des fichiers

-   `index.html`
-   `css/style.css`
-   `README.md`
-   `SPEC.V1.md`
-   `SPEC.V2.md`
-   `images/` (pour le logo et l'image de partage)
