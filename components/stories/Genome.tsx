import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BASE_PATH } from '../../lib/consts';
import FullscreenPicture from '../FullscreenPicture';
import Note from '../Note';

const domaineThemeLegend = [
  { color: '#c8b3d3', label: 'theme' },
  { color: '#b3cfae', label: 'domaine site web' },
];
const themeDensityLegend = [
  { color: '#FFF8F6', label: 'Basse densité' },
  { color: '#CC2823', label: 'Haute densité' },
  { color: '#C8DCFF', label: 'Pas de données' },
];

const StoryComponent: FC = () => {
  return (
    <>
      <div className="container sections">
        <section>
          <div className="content">
            <h2 className="text-genome">1. Idée principale</h2>
            <p>
              L’objet de cet atelier était de commencer à explorer ce que pouvait représenter l’idée
              de “génome” dans l’internet politique français au début des années 2000. Les études
              des représentations politiques du génome sur l’internet français sont difficiles à
              mener à partir des années 2010. Les auteurs des sites web militants qui écrivaient sur
              ces sujets les ont peu à peu abandonnés au profit de la création de communautés sur
              les réseaux sociaux. Le travail de ce groupe s’est donc focalisé sur la constitution
              d’un corpus autour des représentations politiques du “vivant génomique” à partir des
              archives du web mises à disposition par la BnF avec pour idée d’observer l’évolution
              de communautés. C’est pour cette raison que le groupe a travaillé, en majorité, sur
              l’archive “Elections 2002” collectée via{' '}
              <Note style={{ maxWidth: '800px' }}>
                <>l'application BnF Collecte du web (BCweb)</>
                <>
                  <a href="https://collecteweb.bnf.fr/login">https://collecteweb.bnf.fr/login</a>
                  <h6> Qu'est-ce que BnF Collecte du web&nbsp;?</h6>
                  <p>
                    L'application BnF Collecte du web (BCweb) est destinée à gérer des ensembles de
                    sites web devant être capturés, conservés et communiqués par la Bibliothèque
                    nationale de France au titre du dépôt légal de l'internet. Cette application
                    permet aux agents de la BnF et de ses partenaires de sélectionner et de gérer
                    (saisir, modifier, inactiver, contrôler) des sites à collecter.
                  </p>
                  <h6>Comment consulter les sites collectés&nbsp;? </h6>
                  <p>
                    Les listes de sites sélectionnés sont disponibles sous licence ouverte sur le
                    site BnF API et jeux de données ainsi que sur la plateforme{' '}
                    <a href="http://data.gouv.fr">data.gouv.fr</a>.
                  </p>
                  <p>
                    Les sites collectés sont consultables dans les collections des archives de
                    l'internet, accessibles sur une application dédiée, dans les salles de recherche
                    de la BnF et des bibliothèques partenaires en région.
                  </p>
                </>
              </Note>{' '}
              et indexée, en texte intégral, par le logiciel{' '}
              <a href="https://github.com/netarchivesuite/solrwayback/">Solr Wayback</a>.
            </p>
            <p>
              Le sujet de cette expérimentation a la particularité d’être précis et bien défini
              alliant une sélection pertinente des URLS à inspecter via l’outil Hyphe et un
              important travail de catégorisation (tagging) des web entités. Il pose aussi les bases
              d’un potentiel comparatif entre différentes approches, ici la recherche via méthodes
              statistiques sur corpus indexé en plein texte versus l’exploration qualitative que
              permet Hyphe.
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-genome">
              2. Aspects méthodologiques et représentations
            </h2>
            <p>
              L’exploration de la collecte Elections 2002 via Solr Wayback a été d’une grande aide.
              La recherche de n-grams (c’est-à-dire de séquences de mots adjacents à une racine
              identifiée) a permis de déterminer l’expression qui pourrait offrir un maximum de web
              entités pertinentes en minimisant le bruit dans le contexte de cette problématique de
              recherche. Ce n’est qu’après plusieurs essais, dans le cadre d’un processus itératif,
              que l’expression <i>“génom*”</i> a été retenue pour sélectionner les URLs pertinentes
              à charger dans Hyphe.{' '}
            </p>
            <p>
              Les 2603 URLS uniques identifiées dans l’archive Elections 2002 dont les pages
              contiennent le n-gram <i>“génom*”</i> constituent le corpus de départ chargé dans
              l’outil Hyphe. Un crawl de profondeur 0 est lancé afin de ne pas s’éloigner du sujet.
            </p>
            <p>
              La piste la plus intéressante à étudier consiste à mener une prospection classique avec Hyphe en allant voir à la main les web entités
              découvertes par l’outil. Cependant, il convient de noter que les sites des candidats
              sont eux crawlés à une profondeur 1 afin d’avoir un peu plus de matière.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <div className="row">
            <figure className="text-center">
              <figcaption className="h6 text-black">
                Réseaux Hyphe <i>“génom*”</i> - Elections 2002
              </figcaption>
              <FullscreenPicture
                imgClassName="img-fluid w-100"
                story="genome"
                className="maxw-800 m-auto"
                src={BASE_PATH + '/pictures/story-genome/hypertext_webentites.png'}
                caption="Réseaux hyphe génom* - corpus Elections 2002"
                legendData={domaineThemeLegend}
                downloadLink={{
                  text: 'Télécharger le réseau au format GEXF',
                  href: `${BASE_PATH}/data/story-genome/web_entities_IN_2002_tagged_by_themes.gexf`,
                }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <h2 className="text-genome">3. Analyse des contenus web</h2>
            <p>
              Une analyse des thèmes autour de la notion de génomique, toujours sous l’angle du
              politique a été ensuite réalisé en extrayant les contenus des pages identifiées par
              Solr wayback pour faire une analyse textuelle{' '}
              <a href="https://fr.wikipedia.org/wiki/TF-IDF">TF/IDF</a> afin de voir les termes
              spécifiques et pertinents page par page. Ce corpus de termes a ensuite été étudié à la
              main et{' '}
              <Note>
                <>17 thèmes se sont dégagés</>
                <>
                  Voir{' '}
                  <a
                    href={`${BASE_PATH}/data/story-genome/terms-tfudf_election2002_harmonized-data.csv`}
                  >
                    la liste des mots passés en revue
                  </a>
                  .<br />
                  Seules les lignes pour lesquelles la colonne <i>new_term</i> contient un des
                  dix-sept thèmes ont été retenues pour la suite.
                </>
              </Note>{' '}
              chacun regroupant une série de mots le caractérisant&nbsp;: téléthon, bayer, bioéthique,
              clonage, gène, chrétien, embryon, ogm, brevets, adn, vache folle, eugénisme, souches,
              transgénique, génome, FIV et avortement.{' '}
            </p>

            <p>
              Ces thèmes ont permis ensuite d’élargir la recherche et de catégoriser, toujours
              depuis la collecte Elections 2002, les pages contenant les termes associés selon une
              matrice thèmes/domaines.
            </p>
          </div>
        </section>

        <div className="figure-container">
          <div className="container">
            <div className="row">
              <figure className="text-center">
                <figcaption className="h6 text-black">
                  Réseaux bipartite domaine - thème pondéré par le nombre de page - corpus Elections
                  2002
                </figcaption>
                <FullscreenPicture
                  imgClassName="img-fluid w-100"
                  story="genome"
                  className="maxw-800 m-auto"
                  src={BASE_PATH + '/pictures/story-genome/bpartite_themes_domaines_2002.png'}
                  caption="Réseaux bipartite domaine - thème pondéré par le nombre de page - corpus Elections 2002"
                  legendData={domaineThemeLegend}
                  downloadLink={{
                    text: 'Télécharger les données sources au format json',
                    href: `${BASE_PATH}/data/story-genome/domaine_theme.json`,
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Dans le réseau ci-dessus, les thèmes apparaissent en mauve et les domaines des sites
              web sont en vert (attention, ce ne sont pas des web entités). Un domaine et un thème
              sont d’autant plus proches dans le graphe qu’un nombre important de pages de ce
              domaine citent ce thème.
            </p>
            <p>
              Pour réaliser cette visualisation, la classification par domaine
              fourni par les index de la BnF a été utilisée. Si ces domaines correspondent bien au site web indexé,
              les domaines ne représentent pas tout le temps le bon niveau d'étude pour les
              productions web. C'est la raison pour laquelle Hyphe fonctionne sur le concept de Web
              Entité (Ooghe-Tabanou et al., 2018<sup className="footnote"><a id="ref_1" href="#biblio">[ref]</a></sup>).
            </p>
            <p>
              Par ailleurs, les webs entités de ce corpus ont non seulement des tailles
              variables mais elles ont également été crawlées et indexées partiellement. Aussi,
              comparer des nombres de pages absolues n'a pas d'intérêt et mènerait à de nombreux biais d'interprétation.
            </p>
            <p>Afin d'avancer dans l'enquête, il reste donc deux problèmes à résoudre:</p>
            <ol>
              <li>faire le lien entre les URLs de l'indexation Solr et les web entités de Hyphe (Plique et al., 2018<sup className="footnote"><a id="ref_2" href="#biblio">[ref]</a></sup>),</li>
              <li>pondérer au mieux les résultats des thèmes par le nombre de pages indexées.</li>
            </ol>
            <p>
              Pour approximer le nombre de pages par web entité contenant les mots de thèmes retenus
              il convient de générer une requête Solr par web entité qui restreint la recherche
              aux URLs des pages qui commencent par l'un des préfixes de celle-ci. Il est important
              de noter qu'il s'agit d'une approximation qui ne prend pas en compte le cas où deux
              web entités sont apparentées : le journal Le Monde et un article du Monde sur le
              génome. Dans ce cas, les statistiques sur l’article seront correctes mais les statistiques sur la web
              entité Le Monde compteront égalemnt celles de l’article.
            </p>
            <p>
              Concernant la normalisation, le système de facettes de l'indexation Solr
               permet de récupérer, en une seule requête, le nombre total de pages
              correspondant à une web entité ainsi que le nombre de pages pour chaque thème (c'est-à-dire
              qui contient un des mots du thème). Il existe également un biais dans ce compte car
              une page peut être comptabilisée dans plusieurs thèmes. Cependant, cela permet d'avoir une estimation de la densité des mentions des thèmes pour chaque web entité
              en rapportant le nombre de pages par thème au nombre total de pages indexées pour
              chaque web entité.
            </p>
          </div>
        </section>
      </div>

      <div className="figure-container">
        <div className="container">
          <figcaption className="h5 text-black text-center">
            Densité de mentions des thèmes dans le réseau hypertexte des web entitées
          </figcaption>
          <div className="row">
            <div className="col-6">
              <figure className="text-center">
                <FullscreenPicture
                  imgClassName="img-fluid w-100"
                  story="genome"
                  className="maxw-800 m-auto"
                  src={BASE_PATH + '/pictures/story-genome/bioethique_nolabel.png'}
                  caption="bioéthique"
                  legendData={themeDensityLegend}
                />
                <figcaption className="h6 text-black">bioéthique</figcaption>
              </figure>
            </div>
            <div className=" col-6">
              <figure className="text-center">
                <FullscreenPicture
                  imgClassName="img-fluid w-100"
                  story="genome"
                  className="maxw-800 m-auto "
                  src={BASE_PATH + '/pictures/story-genome/eugenisme_nolabel.png'}
                  caption="eugénisme"
                  legendData={themeDensityLegend}
                />
                <figcaption className="h6 text-black">eugénisme</figcaption>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className=" col-6">
              <figure className="text-center">
                <FullscreenPicture
                  imgClassName="img-fluid w-100"
                  story="genome"
                  className="maxw-800 m-auto"
                  src={BASE_PATH + '/pictures/story-genome/clonage_nolabel.png'}
                  caption="clonage"
                  legendData={themeDensityLegend}
                />
                <figcaption className="h6 text-black">clonage</figcaption>
              </figure>
            </div>
            <div className=" col-6">
              <figure className="text-center">
                <FullscreenPicture
                  imgClassName="img-fluid w-100"
                  story="genome"
                  className="maxw-800 m-auto"
                  src={BASE_PATH + '/pictures/story-genome/transgenique_nolabel.png'}
                  caption="transgénique"
                  legendData={themeDensityLegend}
                />
                <figcaption className="h6 text-black">transgénique</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="container sections">
        <section>
          <div className="content">
            <p>
              Les visualisations ci-dessus présentent les résultats de la mesure de densité sur quatre des thèmes
               du corpus Élections 2002. Les labels sur ces visualisations&nbsp; ont été volontairement masqués :
            </p>
            <ul>
              <li>d'une part pour faciliter la comparaison des empreintes thématiques,</li>
              <li>
                de l'autre pour ne pas susciter une démarche interprétative qui demanderait un
                travail des données plus profond.
              </li>
            </ul>
            <p>
              En effet, s'il est aisé de constater des variations importantes de ces empreintes
              thématiques (or zone de données indisponible), le temps de l'expérimentation de datasprint, très court, ne permet pas de pousser très loin le travail. Ces
              résultats montrent l'intérêt du croisement d'analyses hypertextuelles et d'analyses
              de contenus sans pour autant étudier finement les profils
              thématiques des web entités et la dispersion thématique dans le réseau.
            </p>
            <p>
 
              <a href={`${BASE_PATH}/data/story-genome/election2002_final_tagged.gexf`}>
                Le réseau hypertext Élections 2002 est mis à disposition, au complet et au format gexf
              </a>
              . Il contient toutes les web entités <i>IN</i>, <i>OUT</i> et <i>DISCOVERED</i> ainsi
              que les variables thématiques.
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-genome">4. Points d'attention</h2>
            <ul>
              <li>
                De nombreuses pages n’étaient pas trouvables par Hyphe dans l’archive. Il a fallu
                produire un script permettant de reconstruire les permaliens comme suit&nbsp;:
                http://www.u-m-p.org/lesfaits.html?idArticle=125 <BsArrowRight className="mx-2" />
                <span>
                  <b>http://archivesinternet.bnf.fr/20020613144957/</b>
                  <i>http://www.u-m-p.org/lesfaits.html?idArticle=125</i>
                </span>
              </li>
              <li>
                Par ailleurs, il existe de multiples versions des pages du moteur de recherche plein
                texte Solr en raison des différentes versions archivées à différents moments de la
                collecte faite par la BnF. Par conséquent, exploiter les résultats indexés par le
                moteur de recherche demande de prendre en compte les fréquences de collecte, voir
                même à imaginer un système de dédoublonnage des pages archivées. Cet aspect n’a pas
                pu être pris en charge dans l’expérimentation par faute de temps.
              </li>
              <li>
                Comme expliqué ci-dessus, l’asymétrie dans la profondeur de certains crawls est une
                problématique qu’il convient de prendre en compte dans la construction des corpus et
                l’analyse des réseaux résultants.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="content">
            <h2 className="text-genome">Conclusion</h2>
            <p>
              Le travail statistique ainsi que l’observation du réseau a révélé que pour les
              créateurs de contenus web de l’époque, l’intersection de “génome” et de “politique”
              est clairement liée aux enjeux identifiés par les mesures TF/IDF. Cela valide
              l’intérêt de mener les deux approches de front à plus grande échelle pour qu’elles
              s’évaluent et s’enrichissent l’une l’autre.
            </p>
            <p>
              Un grand nombre de ces problématiques sont toujours d’actualité&nbsp;: il est toujours
              question en 2022 de FIV, d’eugénisme, de brevets, de bioéthique, d’avortement, d’OGM,
              de Bayer et de cellules souches. Cependant, certaines catégories apparaissent propres
              à la période étudiée, notamment la panique morale autour des questions de clonage
              (animal et humain), de contamination à la listeria, la vache folle ainsi que de la
              tremblante du mouton.{' '}
            </p>
            <p>
              Plusieurs pistes de travail futur se dégagent de ces contrastes. Comment les questions
              qui sont restées actuelles ont-elles évolué? Pourquoi restent-elles d’actualité alors
              que d’autres pas? Est-il possible de trouver des critères permettant de déterminer ce
              qui fait qu’une controverse entre politique et génomique persiste, qu’elle est
              réinventée? S’agit-il par exemple de dépendances au sentier institutionnelles qui
              parviennent à se réalimenter alors même que d’autres échouent? Parmi les éléments de
              langages propres à ce thème qui ont fleuri sur l’internet électoral de 2002, quels
              sont ceux qui ont été réutilisés lors d’élections suivantes? Peut-on suivre leur
              transformation au fur et à mesure que la société qui les porte, et le médium qui les
              transmet, évoluent?
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
          <h3 id="biblio" className="text-genome">Références</h3>
         <ul>
            <li><a className="refnote" href="#ref_1">↑</a>
              Ooghe-Tabanou, B., Jacomy, M., Girard, P. and Plique, G.{' '}(2018).{' '}
                <em>Hyperlink is not dead! {' '}</em>
                  Proceedings of the 2nd International Conference on Web Studies  - WS.2 2018. Paris, France: ACM Press, pp. 12–18 doi:
                  <a href="https://doi.org/10.1145/3240431.3240434">
                    10.1145/3240431.3240434
                  </a>.{' '}
                  <a href="http://dl.acm.org/citation.cfm?doid=3240431.3240434">
                    http://dl.acm.org/citation.cfm?doid=3240431.3240434
                  </a>
                  {' '}(accessed 16 January 2023).
            </li>
            <li><a className="refnote" href="#ref_2">↑</a>
                Plique, G., Jacomy, M., Ooghe-Tabanou, B. and Girard, P.{' '}(2018).{' '}
              <em>
               It’s a Trie... it’s a Graph... it’s a Traph!{' '}</em>
                Free and Open Source Software Developers’ European Meeting. {' '}
                <a href="https://fosdem.org/2018/schedule/event/multi_level_graph_index/">
                  https://fosdem.org/2018/schedule/event/multi_level_graph_index/
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
