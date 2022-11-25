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
                  <h6> Qu'est-ce que BnF Collecte du web ?</h6>
                  <p>
                    L'application BnF Collecte du web (BCweb) est destinée à gérer des ensembles de
                    sites web devant être capturés, conservés et communiqués par la Bibliothèque
                    nationale de France au titre du dépôt légal de l'internet. Cette application
                    permet aux agents de la BnF et de ses partenaires de sélectionner et de gérer
                    (saisir, modifier, inactiver, contrôler) des sites à collecter.
                  </p>
                  <h6>Comment consulter les sites collectés ? </h6>
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
              2. Un corpus Hyphe <i>“génom*”</i>
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
              Une prospection classique avec Hyphe en allant voir à la main les web entités
              découvertes par l’outil. Cependant, il convient de noter que les sites des candidats
              sont crawlés à une profondeur 1 afin d’avoir un peu plus de matière.
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
                caption="Réseaux hyphe pénom* - corpus Elections 2002"
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
              chacun regroupant une série de mots le caractérisant : téléthon, bayer, bioéthique,
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
              Pour réaliser cette visualisation nous avons utilisé la classification par domaine
              fourni par les index de la BNF. Si ces domaines correspondent bien au site web indexé,
              les domaines ne représentent pas tout le temps le bon niveau d'étude pour les
              productions web. C'est la raison pour laquelle Hyphe fonctionne sur le concept de Web
              Entité{' '}
              <Note>
                <>(Ooghe-Tabanou et al. 2018)</>
                <>
                  <div
                    className="csl-bib-body"
                    style={{ lineHeight: '1.35', marginLeft: '2em', textIndent: '-2em' }}
                  >
                    <div className="csl-entry">
                      <b>Ooghe-Tabanou, B., Jacomy, M., Girard, P. and Plique, G.</b> (2018).
                      Hyperlink is not dead!.{' '}
                      <i>
                        Proceedings of the 2nd International Conference on Web Studies  - WS.2 2018
                      </i>
                      . Paris, France: ACM Press, pp. 12–18 doi:
                      <a href="https://doi.org/10.1145/3240431.3240434">
                        10.1145/3240431.3240434
                      </a>.{' '}
                      <a href="http://dl.acm.org/citation.cfm?doid=3240431.3240434">
                        http://dl.acm.org/citation.cfm?doid=3240431.3240434
                      </a>{' '}
                      (accessed 4 February 2019).
                    </div>
                    <span
                      className="Z3988"
                      title="url_ver=Z39.88-2004&ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fzotero.org%3A2&rft_id=info%3Adoi%2F10.1145%2F3240431.3240434&rft_id=urn%3Aisbn%3A978-1-4503-6438-6&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=proceeding&rft.atitle=Hyperlink%20is%20not%20dead!&rft.btitle=Proceedings%20of%20the%202nd%20International%20Conference%20on%20Web%20Studies%20%20-%20WS.2%202018&rft.place=Paris%2C%20France&rft.publisher=ACM%20Press&rft.aufirst=Benjamin&rft.aulast=Ooghe-Tabanou&rft.au=Benjamin%20Ooghe-Tabanou&rft.au=Mathieu%20Jacomy&rft.au=Paul%20Girard&rft.au=Guillaume%20Plique&rft.date=2018&rft.pages=12-18&rft.spage=12&rft.epage=18&rft.isbn=978-1-4503-6438-6&rft.language=en"
                    />
                  </div>
                </>
              </Note>
              .
            </p>
            <p>
              Par ailleurs les webs entitées de notre corpus ont non seulsement des tailles
              variables mais elles ont également été crawlées et indexées partiellement. Aussi
              comparé des nombres de pages absolues peut amenés de nombeux biais d'interprétation.
            </p>
            <p>Afin d'avancer dans notre enquête nous avons donc deux problèmes à résoudre:</p>
            <ol>
              <li>
                <Note>
                  <>faire le lien entre les URLs de l'indexation SOLR et les web entités de Hyphe</>
                  <>
                    <p>
                      Problème au cœur de Hyphe qui est très compliqué à résoudre efficacement avec
                      des structures mémoires usuelles.
                    </p>
                    <>
                      <div className="csl-entry">
                        <b>Plique, G., Jacomy, M., Ooghe-Tabanou, B. and Girard, P.</b> (2018). It’s
                        a Trie... it’s a Graph... it’s a Traph!{' '}
                        <i>Free and Open Source Software Developers’ European Meeting</i>{' '}
                        <a href="https://fosdem.org/2018/schedule/event/multi_level_graph_index/">
                          https://fosdem.org/2018/schedule/event/multi_level_graph_index/
                        </a>
                        .
                      </div>
                      <span
                        className="Z3988"
                        title="url_ver=Z39.88-2004&ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fzotero.org%3A2&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&rft.type=webpage&rft.title=It's%20a%20Trie...%20it's%20a%20Graph...%20it's%20a%20Traph!&rft.description=Hyphe%2C%20a%20web%20crawler%20for%20social%20scientists%20developed%20by%20the%20SciencesPo%20m%C3%A9dialab%2C%20introduced%20the%20novel%20concept%20of%20web%20entities%20to%20provide%20a%20flexible%20and%20evolutive%20way%20of%20grouping%20web%20pages%20in%20situations%20where%20the%20notion%20of%20website%20is%20not%20relevant%20enough%20(either%20too%20large%2C%20for%20instance%20with%20Twitter%20accounts%2C%20newspaper%20articles%20or%20Wikipedia%20pages%2C%20or%20too%20constrained%20to%20group%20together%20multiple%20domains%20or%20TLDs...).%20This%20comes%20with%20technical%20challenges%20since%20indexing%20a%20graph%20of%20linked%20web%20entities%20as%20a%20dynamic%20layer%20based%20on%20a%20large%20number%20of%20URLs%20is%20not%20as%20straightforward%20as%20it%20may%20seem.%0A%0AWe%20aim%20at%20providing%20the%20graph%20community%20with%20some%20feedback%20about%20the%20design%20of%20an%20on-file%20index%20-%20part%20Graph%2C%20part%20Trie%20-%20named%20the%20%22Traph%22%2C%20to%20solve%20this%20peculiar%20use-case.%20Additionally%20we%20propose%20to%20retrace%20the%20path%20we%20followed%2C%20from%20an%20old%20Lucene%20index%2C%20to%20our%20experiments%20with%20Neo4j%2C%20and%20lastly%20to%20our%20conclusion%20that%20we%20needed%20to%20develop%20our%20own%20data%20structure%20in%20order%20to%20be%20able%20to%20scale%20up.&rft.identifier=https%3A%2F%2Ffosdem.org%2F2018%2Fschedule%2Fevent%2Fmulti_level_graph_index%2F&rft.aufirst=Guillaume&rft.aulast=Plique&rft.au=Guillaume%20Plique&rft.au=Mathieu%20Jacomy&rft.au=Benjamin%20Ooghe-Tabanou&rft.au=Paul%20Girard&rft.date=2018-02-03"
                      />
                    </>
                  </>
                </Note>
              </li>
              <li>pondérer au mieux les résultats des thèmes par le nombre de pages indexées</li>
            </ol>
            <p>
              Pour approximer le nombre de page par web entité contenant des mots de thèmes retenus
              nous devons donc générer une requête SOLR par web entité qui restreint la recherche
              aux URLs des pages qui commencent par l'un des préfixes de celle-ci. Il est important
              de noter qu'il s'agit d'une approximation qui ne prend pas en compte le cas où deux
              web entités sont apparentées: le journal Le Monde et un article du Monde sur le
              génome. Dans ce cas les stats sur l’article seront bonnes mais les stats sur la web
              entité Le Monde compteront aussi celles de l’article. Faire mieux n'est pas faisable
              facilement, on décide donc de faire avec ce biais.
            </p>
            <p>
              Pour la normalisation, on peut utiliser le système de facettes de l'indexation SOLR
              qui nous permet de récupérer en une seule requête le nombre total de page
              correspondant à une web entité ainsi que le nombre de page pour chaque thème (c.a.d.
              qui contient un des mots du thème). Encore une fois il y a un biais dans ce compte car
              une page peut être comptées dans plusieurs thèmes. Cependant cela nous permet de
              calculer une estimation de la densité des mentions des thémes pour chaque web entité
              en rapportant le nombre de page par thème au nombre total de pages indexées pour
              chaque web entité.
            </p>
            <p>
              Nous avons pris soin de bien distinguer les web entités pour lesquelles ce calcul n'a
              pas été possible par une absence de résultats dans les indexs plein texte.
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
              Pour 4 des thèmes nous présentons les résultats de notre mesure de densité thématique
              sur le réseau hypertexte du corpus Élections 2002. Nous avons volontairement masqué
              les labels sur ces visualisations :
            </p>
            <ul>
              <li>d'une part pour faciliter la comparaison des empreintes thématiques;</li>
              <li>
                de l'autre pour ne pas susciter une démarche interprétative qui demanderait un
                travail des données plus profond.
              </li>
            </ul>
            <p>
              En effet si nous constatons bien des variations importantes de ces empreintes
              thématiques (or zone de données indisponible), le temps de l'expérimentation ne nous a
              pas permis de suffisament travailler les enjeux méthodologiques discutées. Ces
              résultats montrent l'intérêt du croisement des analyses hypertextuelles et d'analyse
              de contenus sans pour autant nous permettre d'analyser finement les profils
              thématiques des web entités et la dispersion thématique dans le réseau.
            </p>
            <p>
              Nous mettons à disposition{' '}
              <a href={`${BASE_PATH}/data/story-genome/election2002_final_tagged.gexf`}>
                le réseau hypertext Élections 2002 complet au format gexf
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
                produire un script permettant de reconstruire les permaliens comme suit :
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
                moteur de recherche demande de prendre en compte les fréquences de collecte, voire
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
              Un grand nombre de ces problématiques sont toujours d’actualité : il est toujours
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
          <h3 className="text-genome">Références</h3>
          <ul>
            <li>
              <div
                className="csl-bib-body"
                style={{ lineHeight: '1.35', marginLeft: '2em', textIndent: '-2em' }}
              >
                <div className="csl-entry">
                  <b>Ooghe-Tabanou, B., Jacomy, M., Girard, P. and Plique, G.</b> (2018). Hyperlink
                  is not dead!.{' '}
                  <i>Proceedings of the 2nd International Conference on Web Studies  - WS.2 2018</i>
                  . Paris, France: ACM Press, pp. 12–18 doi:
                  <a href="https://doi.org/10.1145/3240431.3240434">
                    10.1145/3240431.3240434
                  </a>.{' '}
                  <a href="http://dl.acm.org/citation.cfm?doid=3240431.3240434">
                    http://dl.acm.org/citation.cfm?doid=3240431.3240434
                  </a>{' '}
                  (accessed 4 February 2019).
                </div>
                <span
                  className="Z3988"
                  title="url_ver=Z39.88-2004&ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fzotero.org%3A2&rft_id=info%3Adoi%2F10.1145%2F3240431.3240434&rft_id=urn%3Aisbn%3A978-1-4503-6438-6&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=proceeding&rft.atitle=Hyperlink%20is%20not%20dead!&rft.btitle=Proceedings%20of%20the%202nd%20International%20Conference%20on%20Web%20Studies%20%20-%20WS.2%202018&rft.place=Paris%2C%20France&rft.publisher=ACM%20Press&rft.aufirst=Benjamin&rft.aulast=Ooghe-Tabanou&rft.au=Benjamin%20Ooghe-Tabanou&rft.au=Mathieu%20Jacomy&rft.au=Paul%20Girard&rft.au=Guillaume%20Plique&rft.date=2018&rft.pages=12-18&rft.spage=12&rft.epage=18&rft.isbn=978-1-4503-6438-6&rft.language=en"
                />
              </div>
            </li>
            <li>
              <div className="csl-entry">
                <b>Plique, G., Jacomy, M., Ooghe-Tabanou, B. and Girard, P.</b> (2018). It’s a
                Trie... it’s a Graph... it’s a Traph!{' '}
                <i>Free and Open Source Software Developers’ European Meeting</i>{' '}
                <a href="https://fosdem.org/2018/schedule/event/multi_level_graph_index/">
                  https://fosdem.org/2018/schedule/event/multi_level_graph_index/
                </a>
                .
              </div>
              <span
                className="Z3988"
                title="url_ver=Z39.88-2004&ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fzotero.org%3A2&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&rft.type=webpage&rft.title=It's%20a%20Trie...%20it's%20a%20Graph...%20it's%20a%20Traph!&rft.description=Hyphe%2C%20a%20web%20crawler%20for%20social%20scientists%20developed%20by%20the%20SciencesPo%20m%C3%A9dialab%2C%20introduced%20the%20novel%20concept%20of%20web%20entities%20to%20provide%20a%20flexible%20and%20evolutive%20way%20of%20grouping%20web%20pages%20in%20situations%20where%20the%20notion%20of%20website%20is%20not%20relevant%20enough%20(either%20too%20large%2C%20for%20instance%20with%20Twitter%20accounts%2C%20newspaper%20articles%20or%20Wikipedia%20pages%2C%20or%20too%20constrained%20to%20group%20together%20multiple%20domains%20or%20TLDs...).%20This%20comes%20with%20technical%20challenges%20since%20indexing%20a%20graph%20of%20linked%20web%20entities%20as%20a%20dynamic%20layer%20based%20on%20a%20large%20number%20of%20URLs%20is%20not%20as%20straightforward%20as%20it%20may%20seem.%0A%0AWe%20aim%20at%20providing%20the%20graph%20community%20with%20some%20feedback%20about%20the%20design%20of%20an%20on-file%20index%20-%20part%20Graph%2C%20part%20Trie%20-%20named%20the%20%22Traph%22%2C%20to%20solve%20this%20peculiar%20use-case.%20Additionally%20we%20propose%20to%20retrace%20the%20path%20we%20followed%2C%20from%20an%20old%20Lucene%20index%2C%20to%20our%20experiments%20with%20Neo4j%2C%20and%20lastly%20to%20our%20conclusion%20that%20we%20needed%20to%20develop%20our%20own%20data%20structure%20in%20order%20to%20be%20able%20to%20scale%20up.&rft.identifier=https%3A%2F%2Ffosdem.org%2F2018%2Fschedule%2Fevent%2Fmulti_level_graph_index%2F&rft.aufirst=Guillaume&rft.aulast=Plique&rft.au=Guillaume%20Plique&rft.au=Mathieu%20Jacomy&rft.au=Benjamin%20Ooghe-Tabanou&rft.au=Paul%20Girard&rft.date=2018-02-03"
              />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default StoryComponent;
