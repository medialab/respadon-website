import { FC } from 'react';

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
              politiques du web en campagne électorale :
            </p>
            <ul>
              <li>
                l’émergence de “partis plateformes” (Gerbaudo, 2019), c’est-à-dire des organisations
                politiques labiles, constituées autour de plateformes numériques, structurées autour
                d’un leader et d’une masse de sympathisants ;
              </li>
              <li>
                un recours plus important à la mobilisation électorale des sympathisants sur les
                réseaux sociaux, notamment après les campagnes de Barack Obama en 2008 et 2012
                (Stromer-Galley, 2014 ; Gibson, 2020) ;
              </li>
              <li>
                historiquement en France, une présence importante des communautés numériques de
                gauche lors des campagnes présidentielles (Cardon et alii, 2011), puis, ces
                dernières années, un fort dynamisme des communautés politiques de droite et
                d’extrême droite sur Twitter (Chavalarias, Gaumont et Panahi, 2019).
              </li>
            </ul>

            <p>
              Concernant le cas d’étude longitudinale des communautés soutenant Jean-Luc Mélenchon,
              les hypothèses identifiées et à tester étaient :
            </p>
            <ol>
              <li>
                que la structuration de la communauté politique qui soutient Jean-Luc Mélenchon est
                révélatrice des configurations politiques dans lesquelles il a évolué : soutien
                d’une coalition de partis “traditionnels” en 2012, constitution d’un “parti
                plateforme” (La France insoumise) avec le soutien d’un parti traditionnel (le Parti
                communiste français) en 2017, soutien d’un parti plateforme uniquement en 2022 (LFI
                seule) ;
              </li>
              <li>
                que les modes d’organisation de la campagne en ligne reposent sur des supports
                dynamiques qui évoluent avec les usages du numérique, marquant un passage de
                campagnes électorales associées plutôt à des sites et des blogs (années 2010) à des
                campagnes reposant plutôt sur les réseaux sociaux (depuis 2017) ;
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
              archivées dans les sélections de la BnF, ont été identifiées :
            </p>
            <ul>
              <li>
                la page consacrée à{' '}
                <a href="https://fr.wikipedia.org/wiki/Jean-Luc_M%C3%A9lenchon">
                  Jean-Luc Mélenchon
                </a>
                ,
              </li>
              <li>
                la page dédiée à son parti (
                <a href="https://fr.wikipedia.org/wiki/Parti_de_gauche_(France)">Parti de gauche</a>
                ),
              </li>
              <li>
                la page consacrée à la coalition qui le soutient (
                <a href="https://fr.wikipedia.org/wiki/Front_de_gauche_(France)">Front de gauche</a>{' '}
                en 2012),
              </li>
              <li>
                et la page dédiée à son parti{' '}
                <a href="https://fr.wikipedia.org/wiki/La_France_insoumise">La France Insoumise</a>.
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
              regard différencié sur les données représentées :
            </p>
            <ul>
              <li>
                type d’acteur (individu ou organisation) : candidat, professionnel de la politique,
                formation politique, association, militant, site de campagne ;
              </li>
              <li>forme éditoriale : blog, réseau social, site, plateforme vidéo.</li>
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
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center col-12 col-lg-6">
              <img
                src="/pictures/story-politique/nombre_web_entites_par_annee.svg"
                className="figure-img img-fluid w-100"
                alt=""
              />
              <figcaption className="h6 text-black">
                Évolution du nombre de web entités traitées dans les 3 corpus en 2012, 2017 et 2022
              </figcaption>
            </figure>
            <figure className="text-center col-12 col-lg-6 mt-4 mt-lg-0">
              <img
                src="/pictures/story-politique/nombre_web_entites_par_annee.svg"
                className="figure-img img-fluid w-100"
                alt=""
              />
              <figcaption className="h6 text-black">
                Évolution du nombre de pages web crawlées et détectées et des liens trouvés dans les
                3 corpus en 2012, 2017 et 2022
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section className="large">
          <p>
            On observe que le corpus crawlé en 2017 à partir de l’archive BnF contient beaucoup de
            liens. Cela est dû au type de sites archivés.
          </p>

          <p>
            L’analyse comparative de ces trois corpus nécessite d’expérimenter de nouvelles formes
            de représentation graphique non disponibles dans Hyphe ou dans des outils traditionnels.
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
              <img
                src="/pictures/story-politique/IMG_9449.jpg"
                className="figure-img img-fluid maxw-800"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section className="large">
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
              <img
                src="/pictures/story-politique/2012%20to%202017.png"
                className="figure-img img-fluid w-100"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section className="large">
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
              <img
                src="/pictures/story-politique/2017%20to%202022.png"
                className="figure-img img-fluid w-100"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section className="large">
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

      <h1 className="text-center text-danger">TODO: Le reste des contenus du document</h1>
    </>
  );
};

export default StoryComponent;
