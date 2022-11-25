import { FC } from 'react';
import { BASE_PATH } from '../../lib/consts';
import FullscreenPicture from '../FullscreenPicture';
import Note from '../Note';

const StoryComponent: FC = () => {
  return (
    <>
      <div className="container sections">
        <section>
          <div className="content">
            <h2 className="text-covid">1. Idée principale</h2>
            <p>
              L’idée principale est de réaliser une cartographie des discours qui permet d’explorer
              le positionnement entre les acteurs du web et les sites institutionnels qui traitent
              de la crise de la covid-19 entre janvier 2020 et avril 2022.
            </p>
            <p>
              Il s’agit de comprendre comment circule l’information sur la covid-19 entre les
              différents types d’acteurs identifiés : collectivités territoriales, établissements de
              santé, presse et plateforme médicale, presse généraliste et locale, syndicats et
              associations dans le domaine de la santé, blogs, sites de vulgarisation, médias
              influence / infox…
            </p>
            <p>
              L’hypothèse est que les acteurs produisant de l’information sur la covid-19 se
              repositionnent durant la première vague et le confinement de mars 2020, notamment en
              citant les sites institutionnels et gagneraient en centralité durant cette période.
              Cette orientation vers les institutions se relâcherait par la suite, lors des vagues
              suivantes.
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-covid">2. Aspects méthodologiques</h2>
            <p>
              La méthode retenue consiste à utiliser les sélections réalisées par les chargés de
              collection dans le cadre de la collecte sur la Covid-19 et de crawler ces urls avec
              l’outil Hyphe pour établir trois cartographies. Le premier crawl porte sur les
              archives du web de 2020, période du premier confinement, et le second sur les archives
              de 2021. Une dernière cartographie a été établie en crawlant directement le web vivant
              et représente ainsi un dernier état pour l’année 2022. L’objectif est de pouvoir
              comparer dans le temps les résultats obtenus à partir d’une même base de départ. Il y
              a donc trois corpus réalisés avec Hyphe : deux corpus représentent une cartographie
              des archives de la BnF sur le thème du covid pour 2020 et 2021 ; un troisième corpus
              représente une cartographie du web vivant pour 2022. Les questionnements sur la nature
              des données représentées à travers ces trois différents corpus, les archives de la BnF
              ou le web vivant, sont un élément méthodologique central de cette expérimentation qui
              va nécessairement avoir un impact fort sur l’interprétation des résultats et
              l’appréciation des évolutions cartographiques observées.
            </p>
            <p>
              L’objectif du groupe pour ce datasprint consiste à mettre au point une méthodologie
              reproductible, destinée au chercheur, qui lui permettra de crawler les archives du web
              et le web vivant en chargeant dans Hyphe un corpus massif préalablement structuré.
              Ainsi, l’outil Hyphe n’est pas utilisé lors de la première phase de constitution du
              corpus pour la découverte et l’annotation des premières entités. Le chargement initial
              en masse permet de peupler le corpus et de récupérer des jeux d’annotation
              préexistants pour pouvoir lancer rapidement un premier crawl et produire une
              cartographie ou plusieurs cartographies des archives sur des périodes définies.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <h2>TODO: mettre à jour l'image </h2>
            <figure className="text-center">
              <figcaption className="h6 text-black">Schéma méthodologique</figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/methodo.png'}
                caption="Schéma méthodologique"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section />
        <section>
          <div className="content">
            <p>
              Une chaîne méthodologique de production et de transformation de données, en quatre
              étapes, a été mise au point.
            </p>
            <ol>
              <li>
                Le groupe est parti des sélections documentaires de la BnF en prenant l’intégralité
                des fiches réalisées par les chargés de collections contenant le mot clé
                “coronavirus”. Ces fiches sont mises à disposition à travers{' '}
                <a href="https://collecteweb.bnf.fr/login">
                  l’application BnF Collecte du web (BCweb)
                </a>
                . Cette application est destinée à gérer des ensembles de{' '}
                <Note style={{ maxWidth: '800px' }}>
                  <>sites web</>
                  <>
                    <h6>Comment consulter les sites collectés ? </h6>
                    <p>
                      Les listes de sites sélectionnés sont disponibles sous licence ouverte sur le
                      site BnF API et jeux de données ainsi que sur la plateforme{' '}
                      <a href="http://data.gouv.fr">data.gouv.fr</a>.
                    </p>
                    <p>
                      Les sites collectés sont consultables dans les collections des archives de
                      l'internet, accessibles sur une application dédiée, dans les salles de
                      recherche de la BnF et des bibliothèques partenaires en région.
                    </p>
                  </>
                </Note>{' '}
                devant être capturés, conservés et communiqués par la Bibliothèque nationale de
                France au titre du dépôt légal de l'internet. Elle permet aux agents de la BnF et de
                ses partenaires de sélectionner et de gérer (saisir, modifier, inactiver, contrôler)
                des sites à collecter. Cette sélection permet d’extraire un fichier csv contenant
                6443 fiches qu’il convient de trier.
              </li>
              <li>
                La seconde étape de cette chaîne méthodologique consiste à passer en revue
                l’ensemble de ces fiches afin d’identifier les acteurs intéressants au regard de la
                problématique de cette expérimentation. Ce travail ne pouvant se faire que
                difficilement à la main, il a fallu mobiliser des compétences techniques pour
                produire un script capable d’identifier les mots clés récurrents et avoir une
                meilleure visibilité du contenu du fichier. Cette étape est venue outiller un
                travail qualitatif manuel qui a permis d’identifier 965 URLs correspondants à des
                acteurs pertinents.
              </li>
            </ol>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Nuage de mots clés associant mots clés et fiches réalisées par les chargés de
                collection de la BnF sur le coronavirus.
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/tagcloud.png'}
                caption="Nuage de mots clés associant mots clés et fiches réalisées par les chargés de collection de la BnF sur le coronavirus."
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section />
        <section>
          <div className="content">
            <ol start={3}>
              <li>
                <p>
                  Pour monitorer le travail de collecte des trois corpus dans Hyphe et centraliser
                  les opérations faites sur la base de données ainsi créée, le groupe s’est doté d’
                  <a href="https://docs.google.com/spreadsheets/d/12VZEwkpYcngWqRvyxUEY2RnvXleFBdynUh77C1UsA5g/edit#gid=0">
                    un tableau de suivi
                  </a>{' '}
                  afin d’avoir une vue complète des données et de bien distinguer les différents
                  corpus (corpus 1, la première partie de la pandémie : janvier 2020 à juillet 2020,
                  corpus 2 : l’intégralité de l’année 2021, corpus 3 : le web vivant en 2022).{' '}
                </p>
                <p>
                  Ce tableau a permis d’optimiser l’activité d'étiquetage des données. Hyphe permet
                  de visualiser les données collectées sous la forme d’un graphe dans lequel chaque
                  nœud est une web entité, ici un acteur, et où chaque couleur de nœud représente un
                  type d’acteurs différents (par exemple jaune pour les acteurs institutionnels,
                  bleu pour la presse, etc). Ces valeurs sont mutuellement exclusives. Cela signifie
                  que, dans Hyphe, un nœud de la catégorie “acteur” ne pourra prendre qu’une valeur.
                  Autrement dit un nœud qui aura pour valeur “presse” ne pourra pas prendre
                  également la valeur “blog” dans la catégorie “acteur”.
                </p>
                <p>
                  Ce tableau a également permis de circonvenir ce problème et d’optimiser l’activité
                  d’étiquetage en ouvrant la possibilité de donner des étiquettes multivaluées aux
                  web entités pour les importer dans un second temps.
                </p>
                <p>
                  Ce tableau a également été un outil de travail important pour vérifier la
                  pertinence des demandes de collecte à adresser à Hyphe. Ainsi un script a été mis
                  au point pour vérifier que les URLs étaient pérennes dans les archives de la BnF
                  et collectables d’une période à l’autre afin d’éviter des tentatives de collectes
                  inutiles et la surcharge du serveur.{' '}
                </p>
                <p>
                  Un second script d’import, garantissant l’uniformité des données sur les trois
                  corpus dans Hyphe, a été programmé. C’est aussi à ce niveau que se joue un des
                  enjeux du passage du web archivé au web vivant. Ici le choix de l’uniformisation
                  des données va favoriser la cohérence des données représentées sur les trois
                  périodes successives et faciliter les opérations de comparaison entre les trois
                  corpus.
                </p>
              </li>
              <li>
                Deux crawls avec Hyphe en profondeur 3 sont lancés sur les archives de la BnF pour
                collecter les corpus 1 et 2 et un crawl est lancé sur le web vivant pour collecter
                le 3e corpus. La question de la granularité de la collecte a été discutée. L’idée
                est, pour cette expérimentation, de rester sur des collectes au niveau des
                sous-domaines pour rester sur la représentation des acteurs et ne pas tenter de
                représenter les divers contenus des pages.
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-covid">3. Représentations</h2>
            <p>
              Pour aller un peu plus loin que les outils et les représentations disponibles dans
              Hyphe, plusieurs technologies ont été utilisées, notamment{' '}
              <a href="https://github.com/medialab/nansi">Nansi</a>,{' '}
              <a href="https://graphology.github.io/">Graphology</a>,
              <a href="https://www.sigmajs.org/">Sigma.js</a>, <a href="https://d3js.org/">D3.js</a>
              . Dans le cadre de cette expérimentation, l’objectif était de pouvoir comparer les
              contenus de 3 corpus différents dans le temps afin d’en mesurer la pérennité
              (stabilité des acteurs dans le temps) et l’évolution (apparition et disparition
              d’acteurs). Pour cela, il a fallu créer des visualisations ad-hoc qui contraignent la
              spatialisation des nœuds pérennes afin qu’on puisse s’en servir comme point de repère
              au moment de l’analyse.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Représentation des graphes des 3 corpus 2020, 2021 et 2022 par type d’acteurs
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/networks_2020_2021_2022_acteurs.png'}
                targetXL={{
                  type: 'iframe',
                  src: 'https://medialab.github.io/respadon-datasprint-2022/covid/time-networks/build-15-04-triple/',
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <h3>Atouts</h3>
            <p>
              Comparer ces trois graphes en maintenant une cohérence dans la spatialisation des
              nœuds permet également de faire un contrôle qualité sur les données représentées et de
              se rendre compte que, dans le cas du corpus 2021, aucun des sites de vulgarisation
              n’entretient de liens. Il s’agit d’un problème au niveau des collectes de la BnF sur
              la période. Les sites n’ayant été collectés que partiellement, il est impossible de
              reconstruire proprement la structure du réseau de liens. In fine, il est plus
              intéressant de faire l’impasse sur ce corpus et de comparer 2020 avec 2022.
            </p>
          </div>
        </section>
      </div>

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
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Premier point positif, la comparaison entre les corpus 2020 et 2022 permet de faire
              émerger une structure de graphe commune entre web archivé et web vivant qui valide, en
              termes de contrôle qualité, la cohérence et la complétude de la collecte réalisée en
              2020 par la BnF.
            </p>
            <p>
              Comme on le voit sur l’image ci-dessus, les contenus s’organisent autour des mêmes
              acteurs institutionnels centraux. Le cluster des acteurs de vulgarisation est
              faiblement connecté mais reste pérenne d’une période à l’autre.
            </p>
            <p>
              Second point positif, cette visualisation montre que pour des collectes massives, la
              représentation sous la forme de graphe pourrait être à la fois une bonne solution de
              documentation mais aussi une piste pertinente pour naviguer dans l’archive BnF.
            </p>
            <h3>Quelques Observations</h3>
            <p>
              Plusieurs observations ont été faites à partir des cartographies du web archivé et du
              web vivant.
            </p>
            <p>
              Un cluster de sites de vulgarisation scientifique a pu être mis en évidence. Ce
              cluster renvoie peu vers les sites institutionnels tels que ceux des ministères ou des
              institutions de recherche (inserm, CNRS, Institut Pasteur).
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Représentation des graphes des 2 corpus 2020 et 2022 où le type d’acteurs
                sélectionné est “vulgarisation”
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/networks_2020_2022_vulgarisation.png'}
                caption="Représentation des graphes des 3 corpus 2020, 2021 et 2022 où le type d’acteurs sélectionné est “vulgarisation”"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              {' '}
              En 2020 comme en 2022, ils se sont fortement positionnés vers le site de l'institut
              hospitalo-universitaire en maladies infectieuses de Marseille (IHU Méditerranée
              infection) dirigé à l’époque par le professeur Didier Raoult. Ce positionnement se
              comprend en réaction à la place occupée dans le débat public par la personnalité de
              Didier Raoult et sa promotion de l’usage thérapeutique de l’hydroxychloroquine dans le
              traitement de la covid-19. Le site en lui-même renvoie vers les sites institutionnels
              du gouvernement et de centre de recherche (CNRS). À noter également que ce cluster ne
              se confond pas non plus avec un autre cluster de blogs médicaux tenus par des
              personnels de santé.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Représentation des graphes des 2 corpus 2020 et 2022 où le type d’acteurs
                sélectionné est “institution”
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/networks_2020_2021_2022_institutions.png'}
                caption="Représentation des graphes des 3 corpus 2020, 2021 et 2022 où le type d’acteurs sélectionné est “institution”"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Représentation des graphes des 2 corpus 2020 et 2022 où le type d’acteurs
                sélectionné est “établissement de santé”
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/networks_2020_2021_2022_sante.png'}
                caption="Représentation des graphes des 3 corpus 2020, 2021 et 2022 où le type d’acteurs sélectionné est “établissement de santé”"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              De fait, deux sites occupent une place plus centrale qu’attendue dans la cartographie.
              Le site de l’IHU Méditerranée infection à la fois en relation avec les sites de
              vulgarisation scientifique et les sites des grands médias presse et, dans un autre
              espace de la cartographie, le site Société Française de Microbiologie plus en lien
              avec les autres institutions de recherche et les CHU. La mise en place de plateforme
              documentaire et de veille par les acteurs du système de santé explique une autre
              observation faite, à savoir la présence dans la cartographie de revues scientifiques
              anglos-saxonnes de référence (The Lancet, National Library of Medicine) qui peut
              également être rattaché à un mouvement temporaire d’open access.
            </p>
            <p>
              En 2020, “Méditerranée infection” cite les acteurs institutionnels “CNRS” et
              “defense.gouv.fr”. On observe que les nœuds présents en 2020 et 2022 ne sont pas les
              mêmes : même si les institutions restent les nœuds centraux, il y a un resserrement
              sur Sante.fr.
            </p>
            <p>
              Pour revenir sur l’hypothèse initiale, la comparaison de des deux cartographies tend à
              démontrer que les institutions restent des nœuds importants en 2022 comme en 2020.
              Cette comparaison n’est cependant pas aisée. En effet, malgré un périmètre identique
              puisque les mêmes seeds de départ ont été utilisées pour 2020, 2021 et le web vivant
              de 2022, les crawls ont des caractéristiques qui tendent à les différencier et
              influencer sur les résultats. L’absence de réponse du site gouvernement.fr lors du
              crawl lancée sur les archives 2020, suite à un problème technique, explique l’absence
              de ce nœud essentiel sur la première cartographie. Les différences de politique de
              collecte, plus soutenues en 2020 qu’en 2021, tendent à rendre la cartographie de 2021
              plus lâche. Au contraire, le crawl du web vivant en intégrant un plus grand nombre de
              liens dans l’analyse et donc des liens structurels préexistants à la pandémie renforce
              les effets d’hypercentralité – les algorithmes tendent alors à dissoudre certains
              clusters observés pour les cartes de 2020 et 2021, en particulier le cluster des blogs
              de vulgarisation scientifique bien visibles sur les cartes de 2020 et 2021.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="covid"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-covid/Hierarchical edge bundling 2020.png'}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Si l’on souhaite mettre en évidence les liens qu’entretiennent les clusters d’acteurs
              entre eux, on peut réaliser une représentation telle que ci-dessus grâce à{' '}
              <Note style={{ maxWidth: '600px' }}>
                <>la méthode de Louvain</>
                <>
                  La méthode de Louvain est un algorithme hiérarchique d'extraction de communautés
                  applicable à de grands réseaux.
                </>
              </Note>
              .
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-covid">4. Points d'attention</h2>
          <ul>
            <li>
              Les collectes sur le web à un instant T, qu’elles soient destinées aux archives de la
              BnF ou bien à l’exploration dans Hyphe, ne peuvent se départir de la structure en
              couches du web. Ainsi, même dans l’exploration de la collecte consacrée à la première
              vague de l’épidémie de covid-19 faite par la BnF, les hyperliens entre ou vers les
              sites institutionnels peuvent préexister à l’épidémie. Par conséquent, les sites
              collectés sur une période ne reflètent pas que des contenus publiés à cette date.
            </li>
            <li>
              Les hyperliens entre sites ou les ruptures de ces hyperliens entre sites dans Hyphe
              sont à remettre systématiquement en contexte. En effet, il est difficile d’établir si
              une citation vaut accord ou contradiction, de qualifier la valeur des hyperliens,
              d’autant plus lorsque l’on travaille sur un corpus massif. On ne peut donc inférer la
              raison de la présence d’un hyperlien de manière automatique.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-covid">Conclusion</h2>
          <p>
            D’un point de vue méthodologique, cette expérimentation sur le coronavirus a permis de
            travailler sur les questions de cohérence et de pérennité, tant au niveau de la
            construction d’un corpus à partir d’URLs stables dans le temps que dans la mise au point
            de solutions de visualisation qui permettent de fixer des noeuds comme repères dans la
            spatialisation des graphes successifs. Ces deux choix méthodologiques ont permis
            d’outiller les processus de comparaison et de favoriser l’observation des évolutions
            entre les données d’archive et le web vivant.
          </p>
        </section>
      </div>
    </>
  );
};

export default StoryComponent;
