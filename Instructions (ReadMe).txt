/------------- Liens Importants -------------/

Repo GitHub: https://github.com/papatou15/Sanexen365
Formulaire de ticket: http://antoiner2.sg-host.com/
Console Sanity: https://sanexen365.sanity.studio/desk
Présentation finale: https://view.genial.ly/63fe16b33f6dc200188241f7/dossier-sanexen365

/------------- Installation -------------/

1. Cloner le projet github
2. Installer Node.js (avec options pour chocolatey)
3. Faire la commande "npm install" dans le CLI de VSCode dans les dossiers suivants: Sanexen365, sanity et WebsiteClient/sanexen-365-clientsite

**Instructions spécifiques pour lancer chaque app**

4a-1. Pour lancer l'application react native (Sanexen365), faire la commande "npx expo start" dans le dossier /Sanexen365
4a-2. Scanner le code QR qui apparait dans le CLI avec l'application Expo Go sur le téléphone mobile (s'assurer que les deux appareils soit sur le même réseau)

4b. Pour lancer le studio Sanity, faire la commande "npm run dev" dans le dossier /sanity

4c. Pour lancer le site web de façon locale, faire la commande "npm start" dans le dossier WebsiteClient/sanexen-365-clientsite

/------------- Hiérarchie du projet -------------/

root
|
|---Sanexen365 -> Ce dossier comprends l'application principale. Tout commence à partir de app.js et découle à partir de là.
|	|
|	|---components -> La majorité des components se trouve dans ce fichier.
|	|	|
|	|	|---appelsUrgence -> Comprends les fichiers liés aux appels d'urgence
|	|	|
|	|	|---listeChantiers -> Comprends la majoritée de l'application (section des projets et chantiers)
|	|	|
|	|	|---nav -> Comprends la navigation du projet
|	|
|	|---connexion -> Comprends les fichiers de connexion
|	|
|	|---design -> Comprends quelques variables globales pour le design de l'app
|	|
|	|---utils -> Comprends des utilitaires utilisés un peu partout à travers l'app
|
|
|---sanity -> Comprends la configuration pour le studio Sanity
|	|
|	|---schemas -> Comprends tout ce qui a d'important dans le projet.
|
|
|---WebsiteClient/sanexen-365-clientsite -> Comprends le site web de ticket
				|
				|---App.jsx -> One-pager pour le site web de ticket
				|
				|---utils -> Comprends les utilitaires du site web (client sanity)