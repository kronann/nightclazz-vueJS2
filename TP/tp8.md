## PW8 - Vuex

Pour terminer ce codelab, nous allons intégrer la bibliothèque **Vuex** (l'équivalent de Redux de React) afin de gérer les états de l'application.

* Installez le module `vuex` (npm install vuex --save)

* Créez le store qui sera utilisé dans l'ensemble de l'application.

* Lorsque l'utilisateur selectionne une bière, veuillez créer une mutation permettant d'ajouter la bière selectionnée au panier.

* Dans les composants `basket` et `menu`, utilisez le panier stocké dans le `store` pour afficher les informations nécessaires.

* Dans le composant principal, si la propriété stockée dans le `store` n'est pas définie, veuillez envoyer la requête vers le serveur, afin de l'initialiser.

* Faire la même chose pour la liste des bières de l'application
