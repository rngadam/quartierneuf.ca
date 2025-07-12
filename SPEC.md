Développer un site web statique complet et responsive pour promouvoir l'initiative citoyenne 'Neuf' (pour le 9e Rue et l'idée de renouveau). Le site sera hébergé sur Google Pages via un dépôt GitHub.
Voici la structure et les fonctionnalités requises pour chaque page, incluant le contenu textuel. Merci de générer le code HTML, CSS, et JavaScript nécessaire, en organisant les fichiers de manière logique dans un dépôt GitHub, et en favorisant un code propre et maintenable.
1. Page d'Accueil (index.html)
 * Titre principal : "Neuf : Votre Quartier Prend Vie !"
 * Sous-titre/message clé : "Ensemble, on Renouvelle notre Quartier."
 * Message de bienvenue : "Bienvenue sur le site de Neuf, l'initiative citoyenne dédiée à la propreté et au renouveau de notre quartier. Nous agissons activement dans les secteurs de la 9e Rue, d'Everett, du parc Sandro-Pertini et de Saint-Michel jusqu'à l'entrée de JFK. Rejoignez-nous pour transformer notre environnement en un lieu plus sain, plus agréable et plus respectueux pour tous."
 * Section visuelle : Un carrousel d'images simple et responsive (JavaScript minimal, CSS pur si possible) présentant des photos inspirantes du quartier propre (placeholders pour l'instant) et potentiellement des avant/après.
 * Appels à l'action (CTA) : Trois boutons clairs et proéminents :
   * "Participer à une corvée" (lien vers participer.html)
   * "Signaler un problème" (lien vers participer.html#signaler)
   * "En savoir plus" (lien vers mission.html)
 * Témoignage : Une section pour une citation courte et impactante d'un futur participant (placeholder).
 * Actualités récentes : Un aperçu des 3 dernières actualités/mises à jour (titre et date), avec un lien vers la page "Actualités". Le contenu de ces aperçus sera géré via des fichiers Markdown qui pourront être intégrés plus tard par un script léger ou manuellement si besoin.
2. Notre Mission (mission.html)
 * Titre : "Notre Mission : Construire un Quartier Neuf"
 * Section "Qui sommes-nous ?" : "L'initiative Neuf est née de la conviction qu'un environnement propre est la base d'une communauté saine et vibrante. Lancée par des citoyens bénévoles, nous avons commencé par ramasser régulièrement les déchets dans notre voisinage. Nous avons constaté l'ampleur du problème, notamment après la fonte des neiges, et la nécessité d'une action continue. Notre mission est d'agir concrètement pour la propreté et d'encourager la prise en charge collective de notre environnement."
 * Section "Notre Engagement" : "Nous nous engageons à :
   * Propreté proactive : Agir de manière continue et régulière, au-delà des interventions ponctuelles.
   * Collaboration citoyenne : Mobiliser les résidents, les entreprises et les écoles.
   * Civisme et sensibilisation : Éduquer et inciter chacun à devenir un acteur du changement.
   * Dialogue avec la Ville : Travailler avec les autorités municipales pour des solutions durables."
 * Section "Notre Territoire" : "Nos actions se concentrent dans les secteurs suivants : la 9e Rue, le boulevard Everett, le parc Sandro-Pertini et la rue Saint-Michel jusqu'à l'entrée de JFK." Inclure un espace réservé pour une future carte simple.
 * Section "L'Importance du 'Neuf'" : "Le nom 'Neuf' symbolise à la fois notre point d'ancrage, la 9e Rue, et notre aspiration à un renouveau constant. Il incarne l'idée d'un quartier toujours plus propre, plus frais et plus accueillant, un 'nouveau' quartier chaque jour."
3. Agir Ensemble (participer.html)
 * Titre : "Agir Ensemble pour un Quartier Plus Propre"
 * Section "Comment S'Impliquer ?" :
   * Participer à une corvée : "Rejoignez nos prochaines corvées de nettoyage ! Chaque main compte pour faire une réelle différence.
     * Prochaines dates : (Liste à jour à venir, ex: Samedi 20 juillet, 10h-12h, Parc Sandro-Pertini)
     * Ce qu'il faut apporter : Votre bonne humeur, des gants de travail (si vous en avez).
     * Ce que nous fournissons : Sacs poubelles, pinces de ramassage (dans la limite des stocks)."
   * Signaler un problème (#signaler) : "Vous avez repéré un dépôt sauvage, une zone particulièrement sale ou un problème de déchets ?
     * Pour une intervention rapide : Contactez directement la Ville de Montréal au 311.
     * Pour documentation et suivi par Neuf : Utilisez notre formulaire ci-dessous pour nous signaler le problème. Cela nous aide à cibler nos actions et à interpeller les autorités."
   * Devenir bénévole régulier : "Vous souhaitez vous engager plus profondément et régulièrement avec l'initiative Neuf ? Nous recherchons des citoyens motivés pour aider à l'organisation, à la communication et aux actions de nettoyage. Contactez-nous pour en discuter !" (Lien vers la page Contact).
 * Section "Conseils pour un Quartier Propre" : "Chaque geste compte ! Voici quelques habitudes simples pour contribuer à la propreté de notre quartier :
   * Ramassez toujours les excréments de votre chien et jetez-les à la poubelle.
   * Utilisez les poubelles publiques ou rapportez vos déchets chez vous. Ne jetez pas de mégots au sol.
   * Triez vos déchets correctement (recyclage, compost) selon les consignes de la Ville.
   * Participez aux journées de nettoyage organisées dans le quartier."
 * Section "Ressources Utiles" : "
   * Ville de Montréal - Service 311 : [Lien vers la page du 311 de la Ville de Montréal]
   * Calendrier des collectes (Ville de Montréal) : [Lien vers la page des collectes de la Ville de Montréal]"
4. Nos Actions (actions.html)
 * Titre : "Nos Actions : L'Impact de 'Neuf' en Images"
 * Galerie Photo : Utilise une grille CSS (CSS Grid ou Flexbox) pour présenter des photos des corvées passées et des avant/après. Chaque image devrait être cliquable pour une vue plus grande (lightbox simple si possible). Prévois des placeholders pour 12-15 images.
 * Section "Rapports d'Activités" : "Depuis le mois d'avril, un bénévole de Neuf ramasse au moins deux sacs de poubelles tous les deux jours dans le quartier. Ces efforts constants, combinés à nos corvées de groupe, ont déjà permis de retirer des centaines de kilos de déchets de nos espaces publics.
   * Exemple de corvée récente : Lors de notre dernière corvée le [Date], [Nombre] participants ont ramassé l'équivalent de [Nombre] sacs de déchets dans le parc Sandro-Pertini. Merci à tous les bénévoles !"
 * Témoignages : Une petite section pour des citations ou des courtes descriptions de l'expérience de participants (placeholders pour l'instant).
5. Actualités (actualites.html)
 * Titre : "Actualités de 'Neuf'"
 * Liste d'articles : Afficher les articles de blog les plus récents (titre, date, courte description). Chaque article devrait être un lien vers une page individuelle (actualite-1.html, actualite-2.html, etc.).
 * Contenu des articles : Pour l'instant, prévois une structure de page d'exemple (actualite-exemple.html) avec le contenu suivant pour un premier article :
   * Titre : "Le nettoyage post-hivernal : Un défi constant"
   * Date : 12 juillet 2025
   * Contenu : "Chaque printemps, la fonte des bancs de neige révèle l'accumulation des déchets d'un hiver entier. Malgré nos efforts constants depuis avril, des paquets de cigarettes vides, des contenants de fast-food, des sacs de plastique, des excréments canins, des journaux et même des cigarettes électroniques envahissent nos gazons, pistes cyclables et arbustes. Récemment, nous avons même trouvé des animaux morts. Il est crucial que ce nettoyage devienne un processus continu et non un événement annuel tardif. Nous continuons à travailler avec la Ville pour une meilleure gestion et sollicitons l'aide de tous les citoyens et entreprises pour prendre en charge leur environnement."
6. Contact (contact.html)
 * Titre : "Contactez 'Neuf'"
 * Message : "Vous avez des questions, des suggestions, ou vous souhaitez devenir partenaire de l'initiative Neuf ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
 * Formulaire de contact : Un formulaire HTML simple (Nom, Prénom, Courriel, Sujet, Message). Spécifie que les soumissions seront envoyées à une adresse email via un service externe (ex: Formspree, Netlify Forms) ou directement si tu peux simuler un envoi par email.
 * Coordonnées : "Email : contact@neufquartier.org" (ou une adresse similaire, placeholder)
 * Réseaux Sociaux : Liens vers les profils Facebook et Instagram de l'initiative (placeholders pour les icônes).
Considérations Générales pour le Développement :
 * Structure du Dépôt GitHub : Organise les fichiers de manière logique :
   * index.html
   * css/style.css (pour le CSS global)
   * js/script.js (pour le JavaScript, ex: carrousel, lightbox)
   * pages/ (dossier pour mission.html, participer.html, actions.html, actualites.html, contact.html, et les pages d'articles individuels comme actualite-exemple.html)
   * images/ (dossier pour toutes les images)
   * content/ (dossier pour les fichiers Markdown des actualités, à convertir en HTML par tes soins)
 * Navigation : Inclure un menu de navigation responsive (barre de navigation fixe en haut si pertinent) sur toutes les pages, avec des liens vers toutes les sections principales.
 * Pied de page (footer) : Un pied de page simple sur toutes les pages avec le copyright (ex: "© 2025 Neuf. Tous droits réservés.") et les liens vers les réseaux sociaux.
 * Responsiveness : Assurer que le site s'affiche parfaitement sur toutes les tailles d'écran (mobile, tablette, desktop) en utilisant des media queries.
 * Code Propre : Générer un code HTML sémantique, un CSS bien organisé et un JavaScript efficace et minimal.
 * Placeholders : Utiliser des textes et des images placeholders pour l'instant.
Commence par la structure de base du dépôt GitHub et la page d'accueil. Ensuite, nous pourrons itérer sur les autres pages."
