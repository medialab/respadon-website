import type { NextPage } from 'next';
import Head from 'next/head';
import cx from 'classnames';

import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import { BASE_PATH, PICTURES, STORIES } from '../lib/consts';
import { StoriesBlock } from '../components/stories/StoriesBlocks';

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <Head>
        <title>Respadon — Explorer les archives du web avec Hyphe | Accueil</title>
        <meta name="description" content="Respadon — Explorer les archives du web avec Hyphe | Accueil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TITLE AND BANNER */}
      <div className="banner mb-1">
        <div className="container d-flex flex-column justify-content-center">
          <h1>
            <span>
              Explorer les{'\u00A0'}archives du{'\u00A0'}web avec{'\u00A0'}Hyphe
            </span>
          </h1>
        </div>
      </div>
      <div className="container text-end mb-4">
        <a className="small" href="https://twitter.com/mleroyterquem/status/1512451629315993603">
          © Mélanie Leroy-Terquem, BnF
        </a>
      </div>

      {/* INTRO TEXT BLOCKS */}
      <div className="container pt-4 extra-margin-down">
        <div className="row d-flex flex-column position-relative">
          <h2>Le datasprint</h2>
          <div className="text-block">
            <p>
              Du 4 au 8 avril 2022, s’est déroulé à Paris au BnF DataLab, le DataSprint ResPaDon.
              Cette expérimentation, pilotée par le médialab et la Direction des ressources et de
              l’information scientifique de Sciences&nbsp;Po en collaboration avec la Bibliothèque
              nationale de France, s’inscrit dans la continuité des initiatives menées autour de la
              collection des archives de l’internet de la BnF dans le cadre du projet ResPaDon.
            </p>
            <p>
              L’objectif de cet événement était de tester de nouvelles manières de travailler sur
              les archives du web francophone en utilisant les outils développés par le médialab
              pour répondre à des questions de recherche portant sur une thématique disponible à la
              fois sur le web vivant et dans le périmètre des archives de l’internet. En équipant
              les archives de la BNF du crawler Hyphe développé par le médialab pour construire des
              corpus numériques, le DataSprint a donné l’opportunité à quatre équipes
              pluridisciplinaires, associant chercheurs et professionnels de l’information
              scientifique et technique, de tester de nouvelles pratiques et d’explorer de nouvelles
              pistes méthodologiques.
            </p>
          </div>

          <div className="info-block info-block-right small mb-5">
            Soutenu par le GIS CollEx-Persée et porté par l’université de Lille et la Bibliothèque
            nationale de France (BnF), en partenariat avec Sciences&nbsp;Po et le campus Condorcet, le
            projet ResPaDon propose une analyse des usages des archives du web constituées par la
            BnF et des corpus numériques pour expérimenter de nouvelles modalités d’accès et
            d’exploitation de ces collections numériques.
          </div>
        </div>
      </div>

      <div className="container pt-4 extra-margin-down">
        <div className="row d-flex flex-column position-relative">
          <h2>Les projets</h2>
          <div className="text-block">
            <ul className="list-unstyled">
              
              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> Structuration des communautés politiques autour
                  des candidats aux élections présidentielles (exemple du candidat Jean-Luc
                  Mélenchon)
                </div>
                <div className="fst-italic">
                  Il est question d’observer les transformations des communautés politiques de
                  soutien aux candidats à l’élection présidentielle, à travers l’exemple particulier
                  des communautés de soutien à Jean-Luc Mélenchon, en analysant notamment les partis
                  plateformes en 2012, 2017 et 2022 ainsi que l’évolution des formes éditoriales que
                  prennent ces sites dans le temps.
                </div>
                <div className="small participants">
                  Sara Aubry (BnF), Fabienne Greffet (Université de Nancy), Cyril Heude (Sciences
                  Po), Robin De Mourat (Sciences&nbsp;Po), Benjamin Ooghe-Tabanou (Sciences&nbsp;Po).
                </div>
              </li>

              
              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> Cartographie de la critique en ligne des arts du
                  spectacle
                </div>
                <div className="fst-italic">
                  Il s’agit de comprendre dans quelle mesure les sites de critique des arts du
                  spectacle parviennent à créer des communautés en ligne et d’analyser les liens
                  potentiels entre ces sites de critique et les acteurs institutionnels de 2016 à
                  2022. Un focus est fait sur l’impact de la pandémie et les restructurations
                  potentielles qu’elle a pu impliquer entre les différents acteurs de ce réseau.
                </div>
                <div className="small participants">
                  Béatrice Mazoyer (Sciences&nbsp;Po), Guillaume Plique (Sciences&nbsp;Po), Antoine De Sacy
                  (BnF, Huma-Num), Cristina Tosetto (Université Sorbonne Nouvelle), Clara Wiatrowski
                  (BnF).
                </div>
              </li>

              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> Vers une cartographie de la crise de la Covid-19
                </div>
                <div className="fst-italic">
                  L’idée principale est de réaliser une cartographie des discours qui permet
                  d’explorer le positionnement entre les divers acteurs du web et les sites institutionnels
                  qui traitent de la crise de la covid-19 entre décembre 2019 et avril 2022.
                </div>
                <div className="small participants">
                  Leslie Bellony (BnF), Guillaume Brioudes (Sciences&nbsp;Po), Isabelle Degrange (BnF),
                  Alexandre Faye (BnF), Alexis Jacomy (Ouestware), Kevin Locoh-Donou (BnF,
                  Université de Lyon), Caroline Sala (Unistra).
                </div>
              </li>

              
              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> Caractériser les représentations politiques du vivant “génomique” dans les archives du web français
                </div>
                <div className="fst-italic">
                  L’objectif du groupe est d’étudier les sources web qui publient des contenus
                  autour de la génomique sur une période longue, et en particulier les contenus
                  politiques, et les types d’acteurs qui mobilisent le champ lexical de cette
                  notion.
                </div>
                <div className="small participants">
                  Dorothée Benhamou-Suesser (BnF), Paul Girard (Ouestware), Guillaume Levrier
                  (Sciences&nbsp;Po), Jennifer Morival (Université de Lille), Zeynep Pehlivan (INA).
                </div>
              </li>
            </ul>
          </div>

          <div className="info-block info-block-right text-center small mb-5">
            <div className="fw-bold">INFORMATIONS</div>
            <div>Carnet Hypothèses :</div>
            <div>
              <a className="text-white" href="https://respadon.hypotheses.org/">
                https://respadon.hypotheses.org/
              </a>
            </div>
            <div>Twitter :</div>
            <div>
              <a className="text-white" href="https://twitter.com/Respadon_Projet">
                @Respadon_Projet
              </a>
            </div>
            <br />
            <div>Pour en savoir plus, contactez&nbsp;:</div>
            <div className="fw-bold">Audrey Baneyx</div>
            <div>
              audrey.baneyx at sciencespo point&nbsp;fr
            </div>
            <div className="fw-bold">Eleonora Moiraghi</div>
            <div>
              eleonora.moiraghi at sciencespo point&nbsp;fr
            </div>
          </div>
        </div>
      </div>

      {/* STORY BLOCKS */}
      <StoriesBlock />

      {/* METHOD BLOCK */}
      <div className="container py-4">
        <div className="method-block text-center p-5 my-4">
          <h2>Méthodologie</h2>
          <p>
           Le retour d'expérience du datasprint ResPaDon et les travaux préliminaires issus des quatre groupes permettent de dégager quelques 
          réflexions d'ordre méthodologique pour étudier de manière complémentaire les archives du web et le web vivant à des fins de recherche.
          </p>
          <div className="pb-4">
            <a href={BASE_PATH + '/methodo'} className="link-unstyled h5">
              Lire la suite →
            </a>
          </div>
          <div>
             <a href="https://drive.google.com/file/d/11jfRnaZFum0eRPetxLb8G0JwuoOBFtps/view?usp=share_link"><button className="btn btn-primary rounded-pill font-headings px-4">
              Télécharger le document ↓
               </button></a>
          </div>
        </div>
      </div>

      {/* MAKING-OF BLOCK */}
      <div className="making-of py-5 my-4">
        <div className="container my-3">
          <h2>Making-of</h2>
          <p>
            Ces quelques photos prises sur le vif pendant le datasprint ResPaDon en avril 2022
            illustrent les dynamiques des différents groupes, leur composition, témoignent de leurs
            temps forts ainsi que les divers outils mis en œuvre dans le cadre de cette
            expérimentation.
          </p>
          <div className="h5">
            <a href={BASE_PATH + '/making-of'}>En voir plus →</a>
          </div>
        </div>
        <Carousel pictures={PICTURES.slice(0, 8)} />
      </div>
    </Layout>
  );
};

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
