# SAE303 - Visualisation de données

Composition de l'équipe : Thibaut Debroucke, Michael Balois

__Description__

Notre architecture de visualisation de données se compose de deux parties distinctes. On retrouve tout d'abord la liste de tous les puzzles disponibles, triés par famille. Il suffit de cliquer sur un puzzle en particulier pour avoir accès à des statistiques sur celui-ci. Cela redirige l'utilisateur en bas de page, là où se trouvent différents graphiques présentant ces données. En actualisant la page, il est possible de recommencer avec un autre puzzle.

__Bibliothèque utilisée__

Nous avons opté pour l'utilisation de Github pour la gestion de projet, et chart.js pour les graphiques du projet qui sont :

  - Un camembert présentant pour un puzzle spécifique le nombre de solver ayant réussi, perdu, ou autre.
  - Un classement des solvers ayant réussi le puzzle en fonction du temps qu'ils ont mis.
  - Un histogramme qui donne le temps de chaque solver pour un puzzle, afin de pouvoir comparer plus aisément les temps de chaque réussite.
  - Un graphique en toile d'araignée comportant les échecs, réussites et autres du puzzle ainsi que ceux de sa famille, comparés à ceux de la totalité des puzzles.

__Problèmes rencontrés__

- Erreurs et difficultés avec git pour régler certains conflits
- Il est obligatoire d'actualiser la page pour changer de graphiques concernant les puzzles, une fois des données affichées, elles ne se suppriment pas sauf si la page et rechargée pour laisser place à d'autres données sélectionnées, et nous n'avons pas trouvé de solution.



![Capture d’écran 2023-01-04 160933](https://user-images.githubusercontent.com/98033699/210585831-86c227e9-32a0-419f-beb2-771d3043335d.png)
![Capture d’écran 2023-01-04 161036](https://user-images.githubusercontent.com/98033699/210586034-ae4fd1fb-593f-458b-99cc-14c2038075fd.png)
