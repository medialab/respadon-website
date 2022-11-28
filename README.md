# ResPaDon 2022

Découvrir le projet : [https://medialab.github.io/respadon-website/](https://medialab.github.io/respadon-website/)

Ce dépôt contient le code et les contenu du site relatant les expérimentations et les enseignements méthologiques de l'atelier ResPadon ayant eu lieu à la BNF en Avril 2022.

## Contenus

Les contenus sont écrits directement dans le code. Pour appliquer des modifications ou corrections :

- `components/stories` : ce dossier contient les contenus HTML/React des 4 stories
- `lib/consts.ts` : ce fichier contient la liste et les métadonnées des stories et des images du making of
- `public/data` : contient les fichiers de données télécahrgeables depuis les stories
- `public/pictures` : contient les illustrations des stories

## Formatage des stories

Les stories sont des composants React qui utilisent toutes la même structure.

```jsx
<div className="container sections">
  <section>
    <div className="content">
      <h2 className="text-covid">1. Idée principale</h2>
      <p>L’idée principale est de...</p>
    </div>
  </section>
  <section>
    <div className="content">
      <h2 className="text-covid">2. Titre 2</h2>
      <p>bla bla bla..</p>
    </div>
  </section>
</div>
```

Les stories sont des listes de `<section>`. A chaque changement de section l'alignement change de côté.

Pour ajouter des illustrations il faut insérer des composants `FullscreenPicture` agancées dans une div `figure-container` en voisin des `container sections`.

````jsx
<div className="figure-container">
    <div className="container">
        <div className="row">
        <figure className="text-center">
            <figcaption className="h6 text-black">
            Représentation des graphes des 2 corpus 2020 et 2022 par type d’acteurs
            </figcaption>
            <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/networks_2020_2022_acteurs.png'}
                targetXL={{
                    type: 'iframe',
                    src: 'https://medialab.github.io/respadon-datasprint-2022/covid/time-networks/build-15-04-sans-2021/',
                }}
                legendData={domaineThemeLegend}
                downloadLink={{
                    text: 'Télécharger le réseau au format GEXF',
                    href: `${BASE_PATH}/data/story-covid/some_files.gexf`,
                }}
            />
        </figure>
        </div>
    </div>
</div>
```

Une illustration peut être composée de:
-  ```src``` : une image vignette
- ```targetXL``` : une image ou une iframe pour la version plein écran
- ```legendData``` : une liste de label/couleur pour une légende (en plein écran)
- ```downloadLink``` : un lien text/href pour télécharger les données (en plein écran)

Il est possible de mettre plusieurs ```FullscreenPicture``` dans un seul ```figure-container``` en utilisant les classes bootstrap pour l'agencement.

En ajoutant un ```figure-container``` on casse la logique des sections. Si vous souhaitez qu'une section ancrée à droite reste ancrer du même côté après avoir été interrompue par une figure il suffit d'ajouter une section vide après l'interruption.

## Architecture technique

Ce projet a été développé sous [Next.js](https://nextjs.org/) initié par [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Déploiement

Ce site est compilé et déployé par une action GitHub : ```.github/workflows/deploy.yml```
Voir ce fichier pour les différentes étapes.

En résumé pour exporter les fichiers prêts pour publication sur un serveur web faire :

```bash
npm i
npm run build
npm run export
cp -R ./out/* /some_web_folder/
```

### Développement

Lancer le serveur:

```bash
npm run dev
# or
yarn dev
````

Ouvrir [http://localhost:3000/respadon-website/](http://localhost:3000/respadon-website/) dans un navigateur.

## A propos du **base path**

Si le site venait à devoir changer de chemin de publication (actuellement `/respadon-website`), le ``basePath` doit être mis à jour:

1. ce fichier `README.md`
2. dans `next.config.js`, pour `"basePath"` et `"assetPrefix"`
3. dans `styles/_variables.scss`, voir la variable `$BASE_PATH`
