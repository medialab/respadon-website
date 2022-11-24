import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BASE_PATH } from '../../lib/consts';
import FullscreenPicture from '../FullscreenPicture';
import Note from '../Note';

const StoryComponent: FC = () => {
  return (
    <>
      <div className="container sections">
        <section>
          <div className="content">
            <h2 className="text-spectacles">1. Idée principale</h2>
            <p>
              L’objectif de ce travail sur une semaine est d’obtenir une cartographie générale des
              sites de critique des arts du spectacle, d’analyser leurs liens potentiels notamment
              avec les sites institutionnels et le monde du spectacle vivant, de préciser les écarts
              de couverture entre les différents sites d’arts du spectacle et enfin, d’analyser
              l’impact de la pandémie et les restructurations potentielles qu’elle a pu impliquer
              entre les différents acteurs de ce réseau (acteurs individuels, publics, privés et
              institutionnels).
            </p>
            <p>
              Ce travail s’appuie sur une première collecte ciblée de sites, réalisée depuis 2011
              par la Bibliothèque nationale de France. En effet, dans le cadre de sa mission
              patrimoniale de dépôt légal de l’internet, la BnF{' '}
              <a href="https://api.bnf.fr/fr/liste-des-adresses-url-des-collectes-ciblees-du-web-francais-par-la-bnf">
                collecte régulièrement un échantillon du web français
              </a>
              , constitué à partir de collectes larges et de collectes ciblées. Ces dernières
              regroupent les collectes « courantes », pour les sites de référence sur un champ
              disciplinaire donné et les collectes « projet », portant sur un événement ou un thème
              particulier.
            </p>
            <p>
              Après discussion, le groupe de travail a formulé plusieurs problématiques qui ont
              guidé cette expérimentation :
            </p>
            <ul>
              <li>
                dans quelle mesure les sites de critique parviennent-ils à créer des communautés ?
              </li>
              <li>
                les réseaux se structurent-ils différemment selon les disciplines : arts de la rue,
                de la marionnette, cirque, danse, music hall, stand-up, opéra et théâtre ?
              </li>
              <li>
                les types de critique (critique amateur, professionnelle, académique, presse)
                diffèrent-elles selon les acteurs liés ?{' '}
              </li>
              <li>
                la fermeture des salles de spectacle a-t-elle eu une influence sur la structuration
                de la critique et cela se traduit-il par un changement observable dans la
                structuration du réseau ?{' '}
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-spectacles">2. Aspects méthodologiques</h2>
            <h3>Hypothèses</h3>
            <p>
              Pour étudier les problématiques énoncées en introduction, plusieurs hypothèses sont
              formulées. Elles sont organisées selon deux approches, l’une synchronique, prenant en
              compte l’ensemble de la structuration, l’autre diachronique, essayant de mettre en
              évidence les évolutions et la restructuration du phénomène à l’étude. L’idée étant
              d’analyser les représentations graphiques des trois corpus construits afin de voir
              dans quelle mesure il est possible de de vérifier ou d’infirmer ces hypothèses :
            </p>
            <ul>
              <li>
                Point de vue synchronique :
                <ul>
                  <li>
                    Hypothèse globale : Une structuration claire des acteurs et de leurs relations
                    ou rôles respectifs ressort-elle des réseaux ?
                  </li>
                  <li>
                    Hypothèse disciplinaire : Est-il possible à travers les réseaux de retrouver une
                    structuration disciplinaire au sein des arts du spectacle ?
                  </li>
                  <li>
                    Hypothèse étatique et gouvernementale : On sait que le théâtre entretient des
                    relations avec les puissances publiques. Quel est le rôle de la puissance
                    publique ? Quel est le rôle des institutions étatiques ? Peut-on voir une
                    différence entre les théâtres publics et les théâtres privés dans la relation
                    entre les critiques et ces théâtres ?
                  </li>
                  <li>
                    Hypothèse académique : Est-ce que la critique académique parvient à se
                    positionner comme un acteur intérieur au réseau de la critique ou bien
                    reste-t-elle en marge de ce réseau ?
                  </li>
                </ul>
              </li>
              <li className="mt-2">
                Point de vue diachronique sur l’ensemble des différentes collectes n0, n1, n-2 :
                <ul>
                  <li>
                    Hypothèse Covid : Est-ce que la pandémie a bouleversé la structuration de notre
                    réseau d’acteurs ? Peut-on observer une restructuration des relations à la suite
                    de la pandémie ?
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Construction du corpus initial et paramétrage des collectes</h3>
            <p>
              Le corpus initial est constitué des 645 sites dédoublonnés et identifiés par la BnF
              dans le cadre de{' '}
              <a href="https://www.bnf.fr/fr/collectes-ciblees-de-linternet-francais">
                la collecte ciblée
              </a>
               de 2021 . Après un nettoyage manuel de{' '}
              <Note>
                <span>cette première sélection</span>
                <>
                  La liste des sites sélectionnés de 2011 à 2021 <br />
                  par le département Arts du spectacle de la BnF <br />
                  est téléchargeable sur{' '}
                  <a href="https://www.data.gouv.fr/fr/datasets/r/edba6cc1-984c-4102-85c0-c014d5898946">
                    data.gouv.fr
                  </a>{' '}
                  notamment au format csv.
                </>
              </Note>
              , 102 sites sont choisis et le corpus est complété avec 50 nouvelles urls. L’ensemble
              de ces 152 urls constitue
              <a href="https://hyphe.medialab.sciences-po.fr/respadon-sprint/%23/project/theatre_critique-1/monitorCrawls">
                 le corpus{' '}
              </a>
              de départ exploré en utilisant l’outil{' '}
              <a href={`${BASE_PATH}/context#hyphe-curation-corpus`}>Hyphe</a>
            </p>
            <p>
              Trois collectes sont lancées dans les archives du web sur des fenêtres temporelles de
              deux ans :
              <ul>
                <li>
                  La première collecte n0 (fenêtre temporelle de 2020-02-03 à 2022-01-31, profondeur
                  1) se positionne pendant la vague de confinements et de restrictions sanitaires
                  liés au Covid. Après curation de cette collecte de 8536 pages crawlées, le corpus
                  comprend 303 web entités.{' '}
                </li>
                <li>
                  La seconde collecte n-1 (fenêtre temporelle de 2018-02-02 à 2020-01-31, profondeur
                  1) se positionne pendant la période pré-Covid. 17058 pages sont crawlées et le
                  corpus est constitué de 317 web entités.{' '}
                </li>
                <li>
                  La troisième et dernière collecte n-2 (fenêtre temporelle de 2016-02-03 à
                  2018-01-31, profondeur 0) permet d’avoir une vue sur les données plus anciennes,
                  hors pandémie. 15226 pages sont crawlées et le corpus compte au final 317 web
                  entités.
                </li>
              </ul>
            </p>
            <p>
              Les trois corpus collectés sont ensuite taggués dans Hyphe selon deux typologies
              différentes et complémentaires qui faciliteront l’analyse des représentations
              graphiques :
              <ul>
                <li>Les types d’acteurs : Critique, Théâtre, Institutionnel, Festival, Edition;</li>

                <li>
                  La nature de la critique : Individu ( individus ou collectifs d’individus sans
                  activité professionnelle liée au spectacle vivant) , Professionnel (les
                  journalistes et personnes inscrites au syndicat, ainsi que des professionnels du
                  spectacle vivant), Presse (les journaux avec une périodicité inférieure à 1 mois),
                  Académique (des revues animées par des chercheurs et chercheuses).
                </li>
              </ul>
              <p>
                L’intérêt est de pouvoir caractériser les liens entre les différentes entités du
                réseau et de pouvoir, éventuellement, observer une structuration claire des acteurs
                et de leurs relations ou rôles respectifs.
              </p>
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-spectacles">3. Analyse synchronique</h2>
            <h3>
              a) Hypothèse globale : existe-t-il une structuration claire des acteurs et de leurs
              relations ou rôles respectifs ?
            </h3>
            <p>
              Les représentations graphiques en réseau ci-après montre :
              <ul>
                <li>
                  Une distinction claire entre acteurs privés et acteurs publics qui se retrouve
                  dans la spatialisation des graphes;
                </li>
                <li>
                  Les sites importants de critique des arts du spectacle apparaissent davantage liés
                  aux théâtres publics et se retrouvent donc proches dans les représentations;.
                </li>
                <li>
                  Certains sites de critiques semblent avoir une place prépondérante et des liens
                  très forts avec les théâtres privés (deux acteurs, en particulier), et certains
                  acteurs professionnels envers le théâtre public.{' '}
                </li>
                <li>
                  Il y a des liens entre les sites de critiques et une communauté qui se construit
                  entre eux.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme
                privés/publics
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/public_prive.png'}
                caption="Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme privés/publics"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              On observe la nette séparation entre les théâtres privés à gauche de la ligne rouge et
              les théâtres publics à droite. Cette ligne en pointillée a été tracée sur le réseau a
              postériori pour donner une grille de lecture. Elle ne repose pas sur une typologie des
              acteurs a priori. Le réseau met également en évidence l’association des théâtres
              parisiens avec l’acteur privé. Les sites de critiques sont davantage tournés vers le
              théâtre public ainsi que les acteurs institutionnels. Il est intéressant de regarder
              de plus près des acteurs comme le festival d’Avignon (côté public) et le Off Avignon
              (côté privé).
            </p>
          </div>
        </section>
      </div>
      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme
                publics/critiques
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/public.png'}
                caption="Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme publics/critiques"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Le réseau montre une présence prédominante des sites de critiques professionnels dans
              le monde du théâtre public. Les trois sites de critique Journal-Laterrasse,
              Lestroiscoups et Sceneweb émergent du réseau alors qu’ils n’étaient pas dans la
              collecte ciblée. Certains théâtres publics apparaissent comme très cités par les sites
              de critique : Theatre-Odeon, Comedie-Francaise, Theatredelaville, Colline,
              Theatre-Chaillot.
            </p>
          </div>
        </section>
      </div>
      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme
                privés/critiques
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/critiques_indiv_acteurs_prives.png'}
                caption=" Réseau issu de la collecte n0 montrant la structuration des acteurs identifiés comme privés/critiques"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container sections">
        <section>
          <div className="content">
            <p>
              La taille des acteurs (nœuds du réseau) est calculée en fonction du nombre de liens
              sortants. On observe que les sites de critique les plus influents se situent vers
              l’extérieur (
              <Note>
                <>outdegree</>
                <>
                  L'OUTDEGREE d'une entité web est le nombre d'autres entités Web qu'elle cite
                  (liens sortants).
                </>
              </Note>
              ) du réseau, étant pas ou peu cités par les sites de théâtres (
              <Note>
                <>indegree</>
                <>
                  L'INDEGREE d'une entité web est le nombre d'autres entités Web qui la citent
                  (liens entrants).
                </>
              </Note>
              ).
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h3>
              b) Hypothèse disciplinaire : est-il possible à travers l’analyse du réseau de
              retrouver une structuration disciplinaire au sein des “arts du spectacle”?
            </h3>
            <p>
              <ul>
                <li>
                  On observe dans les représentations graphiques une structuration disciplinaire
                  pour la danse, discipline qui est bien couverte par des sites spécialisés ;
                </li>
                <li>
                  La durée, très courte, de l’expérience du data sprint n’a pas permis de
                  diversifier les points de vue disciplinaires : des sites spécialisés dans
                  l'illusionnisme, le stand-up, le music-hall ont été sélectionnés mais n’ont pu
                  être intégrés aux collectes ;
                </li>
                <li>
                  Enfin, il s’est révélé difficile d’identifier des sites de critique spécialisés
                  dans les arts de la rue, du cirque et de la marionnette.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau issu de la collecte n0 montrant les sites qui s’intéressent à la danse
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/danse.png'}
                caption="Réseau issu de la collecte n0 montrant les sites qui s’intéressent à la danse"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            <p>
              Le réseau montre des théâtres, principalement publiques (Operadeparis,
              Chatelet-Theatre), proposant de la danse classique, contemporaine et urbaine et des
              sites de critiques de danse animés notamment par des amateurs
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h3>
              c) Hypothèse académique : est-ce que la critique académique parvient à se positionner
              comme un acteur intérieur au réseau de la critique ou bien reste-t-elle en marge de ce
              réseau ?
            </h3>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau issu de la collecte n0 montrant les sites de critique académique (des revues
                animées par des chercheurs et chercheuses)
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/academique.png'}
                caption=" Réseau issu de la collecte n0 montrant les sites de critique académique (des revues animées par des chercheurs et chercheuses)"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              On voit que dans le cadre de la collecte n0, les sites académiques de critique (en
              rose dans le graphe) sont positionnés en bordure de réseau. On les retrouve
              majoritairement sur les plateformes universitaires (openedition, hypothèses) ou
              hébergé sur les sites des Universités.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Matrice heatmap normalisée réalisée avec les données de la collecte n0, taguées
                selon la nature de la critique
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-600 m-auto"
                src={
                  BASE_PATH + '/pictures/story-spectacles/heatmap_critique_nature_normalized_n0.png'
                }
                caption="Matrice heatmap normalisée réalisée avec les données de la collecte n0, taguées selon la nature de la critique"
                downloadLink={{
                  text: 'Télécharger le réseau',
                  href: BASE_PATH + '/data/story-spectacles/theatre_critique_n0_fixed.gexf',
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Cette matrice permet de voir qui cite qui parmi l’ensemble des entités de la collecte
              n0 :
              <ul>
                <li>les sites académiques citent surtout d’autres sites académiques, </li>
                <li>
                  les sites tenus par des individus ou collectifs d’individus sans activité
                  professionnelle liée au spectacle vivant citent des sites de presse ou d’autres
                  sites tagués individu.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-spectacles">
              4. Approche diachronique : observer les phénomènes de structuration et d’évolution
            </h2>
            <p>
              D’un point de vue diachronique, l’idée est de voir s’il existe une évolution claire,
              entre la période marquée par le covid et les périodes pré-covid, entre le réseau issu
              de la collecte n0 et ceux, issus des archives du web plus anciennes, c’est-à-dire des
              collectes n-1 et n-2. Sur chacune des hypothèses évoquées en approche synchronique, il
              s’agit d’observer si ces réseaux présentent des restructurations fortes avant et après
              la pandémie et la fermeture des salles de spectacle.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: ajouter les réseaux d'une manière ou d'une autre</h2>
            <figure className="text-center col-12 col-lg-4">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                src={BASE_PATH + '/pictures/story-spectacles/nombre_web_entites_par_annee.svg'}
                caption=" Réseau issu de la collecte n0 collecte n0 (période covid -> 2022-01-31)"
              />
              <figcaption className="h6 text-black mt-3">
                Réseau issu de la collecte n0 (période covid <BsArrowRight /> 2022-01-31)
              </figcaption>
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                src={BASE_PATH + '/pictures/story-spectacles/nombre_pages_liens_par_annee.svg'}
                caption="Réseau issu de la collecte n-1 (02/02/2018  - 31/01/2020) "
                downloadLink={{
                  text: 'Télécharger les données',
                  href: BASE_PATH + '/data/story-spectacles/comparaison-corpus.csv',
                }}
              />
              <figcaption className="h6 text-black mt-3">
                Réseau issu de la collecte n-1 (02/02/2018 - 31/01/2020)
              </figcaption>
            </figure>
            <figure className="text-center col-12 col-lg-4 mt-4 mt-lg-0">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                src={BASE_PATH + '/pictures/story-spectacles/nombre_pages_liens_par_annee.svg'}
                caption=" Réseau issu de la collecte n-2 (03/02/2016  - 31/01/2018)"
                downloadLink={{
                  text: 'Télécharger les données',
                  href: BASE_PATH + '/data/story-politique/comparaison-corpus.csv',
                }}
              />
              <figcaption className="h6 text-black mt-3">
                Réseau issu de la collecte n-2 (03/02/2016 - 31/01/2018)
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            <p>
              La structuration entre les trois réseaux ci-dessus change peu et est assez stable
              entre les catégories public/privé, les théâtres parisiens privés sont toujours cités
              par un petit groupe de blogs de critique dans les trois périodes.
            </p>
            <p>
              Il est très difficile de comparer des réseaux lorsqu’on donne à les voir de manière
              globale. Bien que la structure et les liens entre les différentes entités soient
              stables, l’orientation du réseau complique la lecture. Il s’agit d’un problème
              méthodologique de lecture de ce type de représentation graphique qui n’est pas
              nouveau.
            </p>
            <p>
              Pour aller un peu plus loin que les outils et les représentations disponibles dans
              Hyphe, plusieurs technologies sont utilisées dans cette expérimentation, notamment{' '}
              <a href="https://github.com/medialab/nansi">Nansi</a>,{' '}
              <a href="https://graphology.github.io/">Graphology</a>,{' '}
              <a href="https://www.sigmajs.org/">Sigma.js</a>, ipysigma et{' '}
              <a href="https://d3js.org/">D3.js</a>.
            </p>
            <p>
              Dans le cadre de cette étude, l’objectif est de pouvoir comparer les contenus de trois
              réseaux différents dans le temps (n0, n-1 et n-2) afin d’en mesurer la pérennité
              (stabilité des acteurs et des liens dans le temps) et l’évolution (apparition et
              disparition d’acteurs et de liens).
            </p>
            <p>
              Sont représentés en mauve les liens qui sont communs d’une période à l’autre, en rouge
              les liens qui disparaissent d’une période à l’autre, et en vert les liens qui
              apparaissent.
            </p>
            <p>
              On observe que la césure entre théâtre privé et théâtre public demeure dans les
              réseaux n0, n-1 et n-2.
            </p>
            <p>
              L’évolution des liens entre critiques montre une augmentation des liens entre les
              sites de critique sur n-2 et n-1. Cette tendance a infléchi sur n 0 et n-1 (pendant la
              pandémie).
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: ajouter le réseau d'une autre manière ?</h2>
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n0
                et n-1
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-600 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/n-1_n0.png'}
                caption="Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n0 et n-1
                "
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            <p>
              Si on exclut le nœud très relié en rouge dans la partie basse du réseau, dû à un
              problème méthodologique, les liens entre les sites de critique en ligne ont
              majoritairement perdurés entre 2018 (réseau n-1) et 2021 (réseau n0). L’hypothèse
              faite à la lecture de ce réseau n’est pas que le Covid a chamboulé les relations entre
              acteurs mais, a contrario, qu’il les a cristallisées au moins un temps. Ainsi, très
              peu de nouveaux liens sont créés pendant cette période.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: ajouter le réseau d'une autre manière ?</h2>
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n-1
                et n-2
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-600 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/todo.png'}
                caption="Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n-1 et n-2                "
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            <p>
              Entre 2016 et 2019 les liens entre les sites de critique en ligne ont beaucoup
              augmenté par rapport à la période 2018-2021.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: ajouter le réseau d'une autre manière ?</h2>
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n0
                et n-1
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-600 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/todo.png'}
                caption="Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n0 et n-1
                "
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            <p>En 2020 et 2021 les sites de critique en ligne ont créé peu de nouveaux liens</p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: ajouter le réseau d'une autre manière ?</h2>
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n-1
                et n-2
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="spectacles"
                className="maxw-600 m-auto"
                src={BASE_PATH + '/pictures/story-spectacles/todo.png'}
                caption="Réseau mettant en lumière les liens entre les sites de critique dans les réseaux n-1 et n-2"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section></section>
        <section>
          <div className="content">
            En 2018 et en 2019 les sites de critique en ligne ont créé beaucoup de nouveaux liens
            par rapport à 2016 et 2017.
          </div>
        </section>

        <section>
          <div className="content">
            <h2 className="text-spectacles">5. Points d’attention</h2>
            <p>
              <ul>
                <li>
                  Dans cette expérimentation, lesentités web présentes dans les trois collectes sont
                  à peu près stables dans le temps car lesentités collectées sont issues d’une même
                  liste d’URLs initiale archivée. Cependant, prendre les archives web comme source
                  de collecte ne garantit pas d’avoir l’ensemble des données que l’on souhaite
                  disponibles à un instant précis.
                </li>
                <li>
                  Le choix de l’échelle temporelle a un impact important sur la structure des
                  réseaux et l’interprétation que l’on peut en faire. Ainsi, dans cette
                  expérimentation il aurait peut-être été pertinent de faire seulement deux
                  collectes au lieu de trois avec un focus avant l’épidémie de covid et un autre
                  après.
                </li>
                <li>
                  Il est regrettable de ne pas avoir eu accès à plus de métadonnées sur la collecte
                  ciblée ayant servi d’URLs de départ des collectes afin de renforcer et d’appuyer
                  les interprétations des visualisations. Par exemple, il aurait été judicieux
                  d’avoir des informations techniques telle que la profondeur de la collecte ciblée,
                  qui n’est pas la même profondeur de collecte que celles réalisées via Hyphe.
                </li>
                <li>
                  Un autre point d’attention important est que Hyphe ne propose pas de suivi des
                  ajouts d’entités web dans l’activité de prospection. Ainsi, il est compliqué de
                  garder traces et de documenter la manière dont on modifie la couverture du corpus
                  initial. A l’avenir, il pourrait être intéressant d’avoir accès à des logs
                  permettant d’identifier clairement l’ensemble des opérations faites sur les
                  corpus, y compris l’ajout ou la suppression d’entités web. Cela rendrait la
                  méthodologie proposée par l’outil plus robuste et reproductible.
                </li>
                <li>
                  Enfin, la comparaison des trois collectes dans le temps souligne le manque
                  d’outils simples à prendre en main pour mettre en évidence et montrer l’apparition
                  et/ou la disparition de liens.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row">
          <hr />
        </div>
      </div>

      <div className="container sections">
        <section className="large small">
          <h3 className="text-politique">Références</h3>
          <ul>
            <li>
              {' '}
              Larre David, Reiss Myrto, Robert Catherine, « Situation de la critique théâtrale en
              ligne », in Marion Chénetier-Alev et Valérie Vignaux (dir.),{' '}
              <i>
                Le texte critique : Expérimenter le théâtre et le cinéma aux XX
                <sup>e</sup>
                -XXI
                <sup>e</sup>
                 siècles
              </i>
              , Tours, Presses universitaires François-Rabelais, 2013, pp. 409-423.
            </li>
            <li>
              {' '}
              Liste des sites de critique en ligne :{' '}
              <a href="https://books.openedition.org/pufr/7574?lang%3Dfr">
                https://books.openedition.org/pufr/7574?lang=fr
              </a>
            </li>
            <li>
              Sélection de blogs et de site consacrés à l'art dramatique proposée par le magazine{' '}
              <i>Théâtre(s)</i> :{' '}
              <a
                className="c20"
                href="https://www.google.com/url?q=https://www.magazinetheatres.com/blogs-sites&sa=D&source=editors&ust=1669302635413863&usg=AOvVaw3_VguJN38OmzKSEWos0mlj"
              >
                https://www.magazinetheatres.com/blogs-sites
              </a>
            </li>
            <li>
              Sites dans la liste des membres du Syndicat professionnel de la critique de théâtre,
              musique et danse:{' '}
              <a href="https://associationcritiquetmd.com/liste-de-membres-old/liste-des-membres/">
                https://associationcritiquetmd.com/liste-de-membres-old/liste-des-membres/
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default StoryComponent;
