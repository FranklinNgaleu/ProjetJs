# ProjetJs

## Objectif :

Créer un quiz en utilisant JavaScript qui affiche plusieurs questions et permet à l'utilisateur de sélectionner des réponses pour chaque question. Le quiz doit afficher les propositions de réponses de manière aléatoire pour chaque question et afficher le score total de l'utilisateur une fois toutes les questions soumises.

## Instructions :

1. Créez une page HTML contenant un formulaire avec plusieurs questions. Les questions peuvent être de différents types, tels que des questions à choix multiples, des questions vrai/faux, des questions à réponse courte, etc.

2. Pour chaque question, créez un tableau contenant les propositions de réponses, puis mélangez les éléments du tableau de manière aléatoire. Vous pouvez utiliser la méthode Math.random() pour mélanger les éléments du tableau.

3. Affichez les propositions de réponses mélangées sur la page HTML en utilisant des boutons radio, des cases à cocher ou d'autres éléments de formulaire appropriés.

4. Ajoutez un bouton "Soumettre" qui appellera une fonction JavaScript lorsque l'utilisateur aura terminé le quiz.

5. Dans cette fonction, créez une variable pour chaque question et récupérez la valeur sélectionnée par l'utilisateur pour chaque question. Vous pouvez utiliser la méthode getElementById() pour récupérer les valeurs des champs de formulaire correspondants.

6. Comparez les réponses de l'utilisateur avec les réponses correctes pour chaque question et calculez le score total du quiz.

7. Affichez le score total de l'utilisateur dans une boîte de dialogue ou dans une zone de texte sur la page.

8. Ajoutez une minuterie pour limiter le temps que l'utilisateur a pour répondre à chaque question.

9. Ajoutez un bouton "Réinitialiser" qui permet à l'utilisateur de recommencer le quiz à zéro.

### Bonus :

10. Ajouter une fonctionnalité de hints : Si l'utilisateur ne connaît pas la réponse à une question, il peut cliquer sur un bouton d'indice pour recevoir une indication ou une aide pour trouver la réponse. Cette fonctionnalité peut aider l'utilisateur à continuer et à terminer le quiz sans frustration.
