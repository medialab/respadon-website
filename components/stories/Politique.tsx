import React, { FC } from 'react';

import FullscreenPicture from '../FullscreenPicture';
import { BASE_PATH } from '../../lib/consts';
import Note from '../Note';

const actorsColors = [
  { color: '#e7af8f', label: 'militant' },
  { color: '#a9d6a8', label: 'candidat' },
  { color: '#7cd6d1', label: 'professionnel de la politique' },
  { color: '#d5ca95', label: 'campagne' },
  { color: '#eda0b9', label: 'formation politique' },
  { color: '#87c3e9', label: 'autre' },
  { color: '#e4afb5', label: 'association' },
  { color: '#ceb3e4', label: 'média ami' },
];
const editorialColors = [
  { color: '#d2b1d5', label: 'site' },
  { color: '#d5c695', label: 'blog' },
  { color: '#86d2ce', label: 'réseau social' },
];

const StoryComponent: FC = () => {
  return (
    <>
      <div className="container sections">
        <section>
          <div className="content">
            <h2 className="text-politique">1. Idée principale</h2>

            <p>
              L’objectif de ce projet était d’étudier les transformations au fil du temps des
              communautés politiques de soutien aux candidats à l’élection présidentielle. Dans le
              cadre du datasprint, l’exemple particulier des communautés de soutien à Jean-Luc
              Mélenchon a été choisi du fait de sa présence lors des trois derniers scrutins en
              2012, 2017 et 2022.
            </p>

            <p>
              La littérature internationale pointe différentes ruptures intervenues dans les usages
              politiques du web en campagne électorale&nbsp;:
            </p>
            <ul>
              <li>
                l’émergence de “partis plateformes” (Gerbaudo, 2019<sup className="footnote"><a id="ref_4" href="#biblio">[ref]</a></sup>), c’est-à-dire des organisations
                politiques labiles, constituées autour de plateformes numériques, structurées autour
                d’un leader et d’une masse de sympathisants&nbsp;;
              </li>
              <li>
                un recours plus important à la mobilisation électorale des sympathisants sur les
                réseaux sociaux, notamment après les campagnes de Barack Obama en 2008 et 2012
                (Stromer-Galley, 2014<sup className="footnote"><a id="ref_6" href="#biblio">[ref]</a></sup>&nbsp;; Gibson, 2020<sup className="footnote"><a id="ref_5" href="#biblio">[ref]</a></sup>)&nbsp;;
              </li>
              <li>
                historiquement en France, une présence importante des communautés numériques de
                gauche lors des campagnes présidentielles (Cardon et alii, 2011<sup className="footnote"><a id="ref_2" href="#biblio">[ref]</a></sup>), puis, ces
                dernières années, un fort dynamisme des communautés politiques de droite et
                d’extrême droite sur Twitter (Chavalarias, Gaumont et Panahi, 2019<sup className="footnote"><a id="ref_3" href="#biblio">[ref]</a></sup>).
              </li>
            </ul>

            <p>
              Concernant le cas d’étude longitudinale des communautés soutenant Jean-Luc Mélenchon,
              les hypothèses identifiées et à tester étaient&nbsp;:
            </p>
            <ol>
              <li>
                que la structuration de la communauté politique qui soutient Jean-Luc Mélenchon est
                révélatrice des configurations politiques dans lesquelles il a évolué&nbsp;: soutien
                d’une coalition de partis “traditionnels” en 2012, constitution d’un “parti
                plateforme” (La France insoumise) avec le soutien d’un parti traditionnel (le Parti
                communiste français) en 2017, soutien d’un parti plateforme uniquement en 2022 (LFI
                seule)&nbsp;;
              </li>
              <li>
                que les modes d’organisation de la campagne en ligne reposent sur des supports
                dynamiques qui évoluent avec les usages du numérique, marquant un passage de
                campagnes électorales associées plutôt à des sites et des blogs (années 2010) à des
                campagnes reposant plutôt sur les réseaux sociaux (depuis 2017)&nbsp;;
              </li>
              <li>
                que l’amplitude de la mobilisation des communautés politiques numériques de gauche
                en ligne en campagne s’affaiblit au fil du temps, au profit notamment de l’extrême
                droite.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="content">
            <h2 className="text-politique">2. Aspects méthodologiques</h2>

            <p>
              La démarche d’identification des communautés politiques soutenant Jean-Luc Mélenchon
              en ligne s’appuie sur les archives du web de la BnF en 2012 et 2017, puis sur le web
              vivant en 2022. Il s’agit donc de construire trois corpus distincts pour chacun de ces
              scrutins.
            </p>

            <p>
              Dans l’optique de pouvoir comparer les représentations obtenues, un ensemble de pages
              web de départ ont été définies pour extraire les premiers liens vers les communautés
              recherchées. Ainsi, 4 pages wikipedia communes aux trois scrutins dont deux sont
              archivées dans les sélections de la BnF, ont été identifiées&nbsp;:
            </p>
            <ul>
              <li>
                la page consacrée à{' '}
                <a
                  className="link-politique fw-bold"
                  href="https://fr.wikipedia.org/wiki/Jean-Luc_M%C3%A9lenchon"
                >
                  Jean-Luc Mélenchon
                </a>
                ,
              </li>
              <li>
                la page dédiée à son parti (
                <a
                  className="link-politique fw-bold"
                  href="https://fr.wikipedia.org/wiki/Parti_de_gauche_(France)"
                >
                  Parti de gauche
                </a>
                ),
              </li>
              <li>
                la page consacrée à la coalition qui le soutient (
                <a
                  className="link-politique fw-bold"
                  href="https://fr.wikipedia.org/wiki/Front_de_gauche_(France)"
                >
                  Front de gauche
                </a>{' '}
                en 2012),
              </li>
              <li>
                et la page dédiée à son parti{' '}
                <a
                  className="link-politique fw-bold"
                  href="https://fr.wikipedia.org/wiki/La_France_insoumise"
                >
                  La France Insoumise
                </a>
                .
              </li>
            </ul>

            <p>
              Le crawl, réalisé avec Hyphe, est initialement délimité temporellement pour commencer
              au moment de la publication des candidatures par le Conseil constitutionnel et pour
              s’arrêter aux résultats du 1er tour (soit une fenêtre temporelle d’environ 1 mois).
            </p>

            <p>
              Les pages wikipedia sont crawlées avec une profondeur 0 lors d’une première itération
              pour identifier les liens externes présents dans chacune. Les crawls sont lancés sur
              le web vivant pour 2022 et dans les archives du web de la BnF pour 2017 et 2012. Une
              vérification manuelle des entités retournées par ces crawls initiaux est effectuée et
              permet de lancer un deuxième crawl en profondeur 3 pour 2022 et pour 2017, puis en
              profondeur 1 pour 2012 afin de rester dans le temps imparti au data sprint. Ce
              deuxième crawl est partiellement vérifié (vérification des web entités comportant au
              moins 3 liens sortants), ce qui ouvre à une troisième itération, elle-même vérifiée
              selon le même principe. À partir du deuxième crawl, il est décidé d’étendre le bornage
              chronologique à l’ensemble de l’année de l’élection, du fait que beaucoup de sites web
              ne sont archivés qu’une fois par an par la BnF dans le cadre de la collecte large.
            </p>

            <p>
              Les crawls comportent au final 89 web entités sélectionnées pour 2012 (6157
              découvertes), 116 pour 2017 (6345 découvertes) et 136 pour 2022 (6006 découvertes).
            </p>

            <p>
              Ces crawls ont conduit à opérer des choix méthodologiques, tels que l’exclusion de
              certaines web entités (sites institutionnels, presse et médias par exemple) et la
              vérification de nombreux liens à la main.
            </p>

            <p>
              L’usage des archives et le choix méthodologique d’étendre les crawls à toute l’année
              civile afin d’avoir des résultats riches dans l’archive de la BnF peuvent conduire à
              des biais, notamment la sur-représentation des acteurs politiques (cf. candidats aux
              élections législatives) par rapport aux militants (longue traîne non repérable lors
              d’un premier crawl), ainsi que la probable sous-représentation des comptes de réseaux
              sociaux (peu archivés en 2017). La représentation des données crawlées en 2022 sur le
              web vivant n’est pas comparable stricto sensu aux précédentes, dans la mesure où ce
              crawl s’arrête aux dates du datasprint (5-8 avril 2022, donc quelques jours avant le
              1er tour de l’élection présidentielle de 2022, qui a eu lieu le 10 avril). Néanmoins,
              en ce qui concerne les sites les plus centraux, la représentation obtenue fait bien
              apparaître l’importance prise par la centralisation autour du leader et de son parti
              plateforme, par rapport à la coalition de partis qui structurait l’espace en 2012.
            </p>

            <p>
              Enfin, les web entités sont étiquetées en fonction de deux typologies permettant un
              regard différencié sur les données représentées&nbsp;:
            </p>
            <ul>
              <li>
                type d’acteur (individu ou organisation)&nbsp;: candidat, professionnel de la politique,
                formation politique, association, militant, site de campagne&nbsp;;
              </li>
              <li>forme éditoriale&nbsp;: blog, réseau social, site, plateforme vidéo.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="content">
            <h2 className="text-politique">3. Représentations</h2>

            <p>
              Plusieurs types de représentation sont mises en œuvre dans le cadre de cette
              expérimentation afin de comparer les trois corpus crawlés.
            </p>

            <p>
              Dans un premier temps, des histogrammes très simples sont produits afin d’avoir une
              vision synthétique des contenus des corpus et de faire un bref contrôle qualité des
              données crawlées à partir de l’archive de la BnF.
            </p>
            
            <p>
              On observe que le corpus crawlé en 2017 à partir de l’archive BnF contient beaucoup de
              liens. Cela est dû au type de sites archivés.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center col-12 col-lg-6">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/nombre_web_entites_par_annee.svg'}
                caption="Évolution du nombre de web entités traitées dans les 3 corpus en 2012, 2017 et 2022"
                downloadLink={{
                  text: 'Consulter et télécharger les données',
                  href: 'https://docs.google.com/spreadsheets/d/1e28rzZsbzYLk_Kb_APqh8dirbVacff4JAYDQAujHeNY/edit#gid=937479108'
                }}
              />
              <figcaption className="h6 text-black mt-3">
                Évolution du nombre de web entités traitées dans les 3 corpus en 2012, 2017 et 2022
              </figcaption>
            </figure>
            <figure className="text-center col-12 col-lg-6 mt-4 mt-lg-0">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/nombre_pages_liens_par_annee.svg'}
                caption="Évolution du nombre de pages web crawlées et détectées et des liens trouvés dans les 3 corpus en 2012, 2017 et 2022"
                downloadLink={{
                  text: 'Consulter et télécharger les données',
                  href: 'https://docs.google.com/spreadsheets/d/1e28rzZsbzYLk_Kb_APqh8dirbVacff4JAYDQAujHeNY/edit#gid=0'
                }}
              />
              <figcaption className="h6 text-black mt-3">
                Évolution du nombre de pages web crawlées et détectées et des liens trouvés dans les
                3 corpus en 2012, 2017 et 2022
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            L’analyse comparative de ces trois corpus nécessite d’expérimenter de nouvelles
            formes de représentation graphique non disponibles dans Hyphe ou dans des outils
            traditionnels.
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Exploration et recherche pour comparer graphiquement plusieurs réseaux de liens
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-politique/IMG_9449.jpg'}
                caption="Exploration et recherche pour comparer graphiquement plusieurs réseaux de liens"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            Après avoir exploré différentes pistes (cf photo ci-dessus), un script sur mesure est
            développé pour visualiser des réseaux en “triptyque” permettant de comparer les données
            dans le temps. Un tel modèle visuel permet de faire ressortir la structure pérenne des
            web entités communes aux deux périodes mais aussi de visualiser les entités et
            communautés apparues et disparues entre les deux réseaux.
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Présence des web entités entre 2012 et 2017
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/2012%20to%202017.png'}
                caption="Présence des web entités entre 2012 et 2017"
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Ftriptyque_2012_to_2017_noverlapped.gexf&s=o&sa[]=o&sa[]=r&ca[]=ig-s&ca[]=f&ca[]=a&ca[]=pe&ca[]=ca%20&st[]=f&st[]=a&st[]=pe&nr=0.659&er=0.591&ec=o&ed=d&lt=2.216&ds=1'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/triptyque_2012_to_2017_noverlapped.gexf'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            À gauche, en rouge, on voit les communautés (web entités) présentes seulement en 2012. À
            droite, en vert, on voit celles présentes uniquement en 2017. Au centre du triptyque, en
            bleu, celles qui existaient en 2012 et ont continué à exister en 2017. D’un point de vue
            méthodologique, il aurait été intéressant de peupler encore plus les graphes (ici
            seulement 80 web entités sont visualisées pour 2012) pour permettre d’observer plus de
            web entités ainsi que les liens qu’elles entretiennent les unes avec les autres. Le
            temps très contraint du data sprint ne l’a pas permis.
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Présence des web entités entre 2017 et 2022
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/2017%20to%202022.png'}
                caption="Présence des web entités entre 2017 et 2022"
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Ftriptyque_2017_to_2022_noverlapped.gexf&s=o&sa[]=o&sa[]=r&ca[]=ig-s&ca[]=f&ca[]=a&ca[]=pe&ca[]=ca%20&st[]=f&st[]=a&st[]=pe&nr=0.659&er=0.591&ec=o&ed=d&lt=2.216&ds=1'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/triptyque_2017_to_2022_noverlapped.gexf'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            On observe par ailleurs des différences quantitatives entre les graphes de 2012 (80
            nœuds) et 2017 (112 nœuds). En conséquence, le graphe de la transition entre 2017 et
            2022, au centre en bleu, est plus fourni et structuré que celui entre 2012 et 2017. On
            note notamment la disparition d’éléments structurants importants comme le site du Parti
            communiste français, qui ne soutient plus en 2022 la candidature de Jean-Luc Mélenchon
            (au profit de la candidature de Fabien Roussel).
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Part des formes éditoriales des web entités entre 2012 et 2022
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/part_formes_editoriales.svg'}
                caption="Part des formes éditoriales des web entités entre 2012 et 2022"
                downloadLink={{
                  text: 'Consulter et télécharger les données',
                  href: 'https://docs.google.com/spreadsheets/d/1e28rzZsbzYLk_Kb_APqh8dirbVacff4JAYDQAujHeNY/edit#gid=1365370115'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            Les web entités sont catégorisées dans les trois corpus en suivant deux typologies, une
            typologie d’acteurs et une typologie caractérisant les formes éditoriales. L’histogramme
            ci-dessus compare la part des web entités qui sont des réseaux sociaux, des blogs ou
            bien des sites web. On note un net changement entre 2012 et 2017 avec une diminution
            très forte de la proportion de blogs et le développement massif des réseaux sociaux,
            notamment Twitter. Cette organisation se renforce en 2022 avec toute une partie de la
            campagne électorale qui se déplace vers les réseaux sociaux Twitter, Instagram, TikTok,
            etc.
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <p className="text-center h5 text-black">
              Répartition des web entités par forme éditoriale
            </p>
          </div>
          <div className="row">
            <figure className="text-center col-12 col-lg-4">
              <figcaption className="h6 text-black">en 2012</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2012_formes.png'}
                caption="Répartition des web entités par forme éditoriale en 2012"
                legendData={editorialColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2012_formes.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2012_formes.gexf'
                }}
              />
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <figcaption className="h6 text-black">en 2017</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2017_formes.png'}
                caption="Répartition des web entités par forme éditoriale en 2017"
                legendData={editorialColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2017_formes.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2017_formes.gexf'
                }}
              />
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <figcaption className="h6 text-black">en 2022</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2022_formes.png'}
                caption="Répartition des web entités par forme éditoriale en 2022"
                legendData={editorialColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2022_formes.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2022_formes.gexf'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            La figure ci-dessus montre les trois graphes issus des trois corpus de 2012, 2017 et
            2022 caractérisés par leur forme éditoriale.
          </p>

          <p>
            A gauche, le graphe de 2012 est très concentré. On ne distingue pas vraiment de
            communautés. Au centre, le graphe de 2017 montre bien l’apparition des comptes Twitter.
          </p>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Histogramme comparatif des acteurs entre 2012 et 2017
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/acteurs.svg'}
                caption="Histogramme comparatif des acteurs entre 2012 et 2017"
                downloadLink={{
                  text: 'Consulter et télécharger les données',
                  href: 'https://docs.google.com/spreadsheets/d/1e28rzZsbzYLk_Kb_APqh8dirbVacff4JAYDQAujHeNY/edit#gid=929478153'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            Les résultats concernant le type d’acteurs présents sur le web soutenant Jean-Luc
            Mélenchon permettent de confirmer certains éléments propres au contexte français et de
            mettre en perspective les acquis de la littérature internationale sur les campagnes
            numériques&nbsp;:
          </p>

          <ul>
            <li>
              La “professionnalisation” des campagnes numériques semble se renforcer&nbsp;: les supports
              de campagne, développés spécialement pour l’élection présidentielle, sont
              proportionnellement plus nombreux et très connectés à l’univers de soutien au
              candidat. Ce qui signifie que, dans le cas de Jean-Luc Mélenchon au moins, son équipe
              dispose des ressources lui permettant de créer des supports spécifiques et des liens
              communautaires dans un délai relativement court (environ un an avant l’élection).
            </li>
            <li>
              Sur les trois dernières échéances présidentielles, le poids de la présence personnelle
              du candidat et de sa campagne se renforce nettement, au détriment des formations
              politiques. Cela peut apparaître comme logique au regard du fait que le Front de
              gauche de 2012 était un large rassemblement de partis, chaque parti disposant de
              supports de communication&nbsp;; alors que ce nombre d’organisations était plus restreint
              en 2017 avec l’émergence de La France insoumise. Néanmoins, en 2022, le passage
              désormais institutionnalisé au “parti plateforme” n’entraîne pas (ou pas encore) de
              refocalisation des supports de communication autour d’une organisation politique
              renouvelée et de son label. Cela peut apparaître comme logique au regard de “l’hyper
              leadership” des partis plateformes, mais mériterait d’être ré-examiné dans l’hypothèse
              d’un retrait de Jean-Luc Mélenchon après 2022.
            </li>
            <li>
              Contrairement à ce qui est généralement pointé depuis la campagne Obama, le poids des
              internautes engagés est de moins en moins perceptible d’une élection à l’autre&nbsp;: les
              supports militants sont de moins en moins repérables. Cela peut-être dû à des limites
              méthodologiques de l’étude et/ou à une migration de la bataille présidentielle vers
              les réseaux sociaux.
            </li>
            <li>
              Il est très intéressant et significatif de voir émerger en 2022 la catégorie “média
              ami” (avec Lemedia.fr). Dans un contexte de désaffection à l’égard de la forme parti,
              les acteurs politiques et les organisations investissent d’autres formes&nbsp;: celle du
              mouvement citoyen, celle du média.
            </li>
          </ul>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <p className="text-center h5 text-black">
              Répartition des web entités par type d’acteur
            </p>
          </div>
          <div className="row">
            <figure className="text-center col-12 col-lg-4">
              <figcaption className="h6 text-black">en 2012</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2012_acteurs.png'}
                caption="Répartition des web entités par type d’acteur en 2012"
                legendData={actorsColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2012_acteurs.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2012_acteurs.gexf'
                }}
              />
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <figcaption className="h6 text-black">en 2017</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2017_acteurs.png'}
                caption="Répartition des web entités par type d’acteur en 2017"
                legendData={actorsColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2017_acteurs.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2017_acteurs.gexf'
                }}
              />
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <figcaption className="h6 text-black">en 2022</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="politique"
                src={BASE_PATH + '/pictures/story-politique/melenchon_2022_acteurs.png'}
                caption="Répartition des web entités par type d’acteur en 2022"
                legendData={actorsColors}
                targetXL={{
                  type: 'iframe',
                  src: 'https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fmedialab.github.io%2Frespadon-datasprint-2022%2Fcommunautes_politiques%2Fdata%2Fmelenchon_2022_acteurs.gexf&sa[]=pt&sa[]=u&sa[]=o&sa[]=r&sa[]=ig-n&sa[]=pc&ca[]=cae&ca[]=ca%20&ca[]=f&ca[]=a&ca[]=pt&ca[]=u&ca[]=ig-n&ca[]=o&ca[]=pc&ca[]=r&st[]=a&st[]=f&st[]=h&ec=o&lt=0.659&nr=0.8'
                }}
                downloadLink={{
                  text: 'Télécharger le graphe au format GEXF',
                  href: 'https://medialab.github.io/respadon-datasprint-2022/communautes_politiques/data/melenchon_2022_acteurs.gexf'
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <p>
            Les différentes visualisations présentées ci-dessus et issues des crawls faits avec
            Hyphe montrent bien comment l’espace numérique de soutien à Jean-Luc Mélenchon s’est
            restructuré sur dix ans, autour&nbsp;:
          </p>

          <ul>
            <li>
              des réseaux sociaux au détriment des sites (qui restent présents) et blogs&nbsp;; avec une
              transition très perceptible dans les résultats 2017 par rapport à 2012&nbsp;;
            </li>
            <li>
              des sites personnels de Jean-Luc Mélenchon, de ses sites de campagne et du site de La
              France Insoumise, au détriment des partis plus institutionnalisés (PCF, PG)&nbsp;;
            </li>
            <li>
              de la personnalisation de la communication (ce point est à nuancer car c’est peut-être
              un phénomène propre à l’élection présidentielle), au détriment des militants et des
              partis&nbsp;;
            </li>
            <li>
              de l’apparition en 2022 de “médias amis” qui montrent l’investissement par La France
              Insoumise de la forme propres aux sites de médias.
            </li>
          </ul>

          <p>
            Cette expérimentation a permis de confirmer le poids des réseaux sociaux comme étant des
            lieux de mobilisation électorale, ainsi que l’émergence du “parti plateforme” dans un
            rôle pivot, ainsi que la désinstitutionnalisation des organisations partisanes, au
            détriment des partis traditionnels. En revanche, il n’a pas été possible de tester la
            troisième hypothèse de l’affaiblissement éventuel des communautés numériques de gauche
            en ligne par rapport à celles de droite.
          </p>

          <p>
            Plusieurs phénomènes visibles dans les résultats obtenus sont étonnants, notamment&nbsp;:
          </p>
          <ul>
            <li>l’arrivée de la “forme média” en 2022&nbsp;;</li>
            <li>la place finalement faible des sites/blogs/comptes militants.</li>
          </ul>
          <p>
            Attention cependant, ces premiers résultats d’expérimentation, bien qu’encourageants,
            sont à prendre avec prudence car il faudrait pouvoir les retravailler sur un temps plus
            long.
          </p>
        </section>
      </div>
       
      <div className="container sections">
        <section>
          <h2 className="text-politique">4. Points d’attention</h2>

          <p>
            D’un point de vue méthodologique, les points d’attention que soulève cette
            expérimentation sont les suivants&nbsp;:
          </p>

          <ul>
            <li>
              Dans un objectif de comparaison longitudinale, il est important de bien appliquer la
              même méthodologie de création et curation des corpus web pour chaque occurrence
              (points de départ, paramètres de crawl, critères de sélection des entités IN, etc.).
              Concernant les points de départ, il peut être difficile de trouver une source
              cohérente et pérenne à travers le temps&nbsp;; les pages wikipedia dédiées au sujet se sont
              avérées en conséquence un bon compromis.
            </li>
            <li>
              Crawler les archives du web ajoute de nouvelles contraintes relatives à la précision
              temporelle&nbsp;: l’idéal pour ce cas d’étude aurait été d’accéder au web correspondant
              précisément aux semaines ayant précédé la campagne en 2012 et 2017. Cependant, comme
              de nombreux sites ne sont archivés qu’une fois par an à une date potentiellement trop
              en amont ou en aval de l’événement considéré, il a été nécessaire d’élargir beaucoup
              la fenêtre, avec pour conséquence de récolter parfois de nombreux éléments en réalité
              décorrélés de la campagne.
            </li>
            <li>
              Le contrôle qualité des web entités collectées, important lors de collectes sur le web
              vivant, s’avère critique pour un travail qualitatif de collecte sur les archives du
              web. En effet, les évolutions de nombreux sites web, parfois toujours existants mais
              sans avoir aucunement évolué depuis de longues années, parfois disparus, parfois
              devenus des “parkings de liens publicitaires”, rendent indispensable la vérification
              une à une de chaque entité pour chaque tranche temporelle car elles encourent le
              risque de récolter un grand nombre de faux positifs.
            </li>
            <li>
              De plus, l’évolution de certains réseaux sociaux vers des technologies problématiques
              pour les collectes automatiques (sites passés ces dernières années en javascript
              intégral notamment pour Facebook et Twitter par exemple) cause un effet inverse en
              provoquant la disparition artificielle de nombreux liens issus de ces plateformes vers
              le reste des corpus.
            </li>
            <li>
              Enfin, comparer des réseaux constitués de listes de nœuds différentes deux à deux est
              un travail complexe qui nécessite le développement de nouveaux instruments d’analyse
              visuelle et statistique.
            </li>
          </ul>
        </section>
      </div>

      <div className="container">
        <div className="row">
          <hr />
        </div>
      </div>

      <div className="container sections">
        <section className="large small">
          <h3 id="biblio" className="text-politique">Références</h3>
          <ul>
            <li>
              Valérie Beaudouin, Zeynep Pehlivan.{' '}
              <em>
                Cartographie de la Grande Guerre sur le Web&nbsp;: Rapport final de la phase 2 du projet
                « Le devenir en ligne du patrimoine numérisé&nbsp;: l’exemple de la Grande Guerre »
              </em>
              . [Rapport de recherche] Bibliothèque nationale de France; Bibliothèque de
              documentation internationale contemporaine; Télécom ParisTech. 2017. ffhal-01425600f.{' '}
              <a
                className="link-politique fw-bold"
                href="https://hal.archives-ouvertes.fr/hal-01425600/document"
              >
                Lire
              </a>
              .
            </li>
            <li><a className="refnote" href="#ref_2">↑</a>
              Cardon D., Fouetillou G., Lerondeau C. et Prieur C.{' '}
              <em>« Esquisse de géographie de la blogosphère politique (2007-2009) »</em> in
              Greffet, F. (dir),{' '}
              <a className="link-politique fw-bold" href="https://www.Continuerlalutte.com">
                Continuerlalutte.com
              </a>
              , Paris, Presses de Sciences Po, 2011, pp. 73-94.
            </li>
            <li><a className="refnote" href="#ref_3">↑</a>
              David Chavalarias, Noe Gaumont, Maziyar Panahi.{' '}
              <em>
                Hostilité et prosélytisme des communautés politiques&nbsp;: Le militantisme politique à
                l’ère des réseaux sociaux
              </em>
              . Réseaux&nbsp;: communication, technologie, société, Lavoisier, La Découverte, 2019,
              Enquêter à partir des traces textuelles du web, pp.67. ff10.3917/res.214.0067ff.
              ffhal-02429929f.{' '}
              <a
                className="link-politique fw-bold"
                href="https://hal.archives-ouvertes.fr/hal-02429929/document"
              >
                Lire
              </a>
              .
            </li>
            <li><a className="refnote" href="#ref_4">↑</a>
              Gerbaudo Paulo (2019),{' '}
              <em>The Digital Party, Political Organisation and Online Democracy</em>, Pluto Press.
            </li>
            <li><a className="refnote" href="#ref_5">↑</a>
              Gibson Rachel K.,{' '}
              <em>
                When the Nerds Go Marching In: How Digital Technology Moved from the Margins to the
                Mainstream of Political Campaigns
              </em>
              , OXFORD STUDIES DIGITAL POLITICS SERIES (New York, 2020; online edn, Oxford Academic,
              20 Aug. 2020),{' '}
              <a
                className="link-politique fw-bold"
                href="https://doi.org/10.1093/oso/9780195397789.001.0001"
              >
                Lire
              </a>
              .
            </li>
            <li><a className="refnote" href="#ref_6">↑</a>
              Stromer-Galley Jennifer.{' '}(2014).{' '}<em>Presidential Campaigning in the Internet Age</em>,
              Oxford Studies in Digital Politics (online edn, Oxford Academic, 16 Apr. 2014),{' '}
              <a
                className="link-politique fw-bold"
                href="https://doi.org/10.1093/acprof:oso/9780199731930.001.0001"
              >
                Lire
              </a>
              .
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default StoryComponent;
