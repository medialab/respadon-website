import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import { PICTURES, STORIES } from '../lib/consts';

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <Head>
        <title>Respadon | Accueil</title>
        <meta name="description" content="Respadon | Accueil" />
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
          © Mélanie Leroy-Terquem, BnF.
        </a>
      </div>

      {/* INTRO TEXT BLOCKS */}
      <div className="container pt-4">
        <div className="row d-flex flex-column">
          <h2 className="text-white">Le datasprint</h2>
          <div className="text-block">
            <p>
              Du 4 au 8 avril 2022, s’est déroulé à Paris au BnF DataLab, le DataSprint ResPaDon.
              Cette expérimentation, pilotée par le médialab et la Direction des ressources et de
              l’information scientifique de Sciences Po en collaboration avec la Bibliothèque
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

          <div className="info-block info-block-bottom small">
            Soutenu par le GIS CollEx-Persée et porté par l’université de Lille et la Bibliothèque
            nationale de France (BnF), en partenariat avec Sciences Po et le campus Condorcet, le
            projet ResPaDon propose une analyse des usages des archives du web constituées par la
            BnF et des corpus numériques pour expérimenter de nouvelles modalités d’accès et
            d’exploitation de ces collections numériques.
          </div>
        </div>
      </div>

      <div className="container pt-4">
        <div className="row d-flex flex-column position-relative">
          <h2 className="text-white">Les projets</h2>
          <div className="text-block">
            <ul className="list-unstyled">
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
                <div className="small">
                  Béatrice Mazoyer (Sciences Po), Guillaume Plique (Sciences Po), Antoine De Sacy
                  (BnF, Huma-Num), Cristina Tosetto (Université Sorbonne Nouvelle), Clara Wiatrowski
                  (BnF).
                </div>
              </li>

              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> Crise de la COVID-19 : positionnement des acteurs
                  du web par rapport aux institutions
                </div>
                <div className="fst-italic">
                  L’idée principale est de réaliser une cartographie des discours qui permet
                  d’explorer le positionnement entre les acteurs du web et les sites institutionnels
                  qui traitent de la crise de la covid-19 entre décembre 2019 et avril 2022.
                </div>
                <div className="small">
                  Leslie Bellony (BnF), Guillaume Brioudes (Sciences Po), Isabelle Degrange (BnF),
                  Alexandre Faye (BnF), Alexis Jacomy (Ouestware), Kevin Locoh-Donou (BnF,
                  Université de Lyon), Caroline Sala (Unistra).
                </div>
              </li>

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
                <div className="small">
                  Sara Aubry (BnF), Fabienne Greffet (Université de Nancy), Cyril Heude (Sciences
                  Po), Robin De Mourat (Sciences Po), Benjamin Ooghe-Tabanou (Sciences Po).
                </div>
              </li>

              <li className="mb-4">
                <div className="fw-bold">
                  <span className="yellow-dot" /> La notion de « génome » dans les archives
                  électorales BnF
                </div>
                <div className="fst-italic">
                  L’objectif du groupe est d’étudier les sources web qui publient des contenus
                  autour de la génomique sur une période longue, et en particulier les contenus
                  politiques, et les types d’acteurs qui mobilisent le champ lexical de cette
                  notion.
                </div>
                <div className="small">
                  Dorothée Benhamou-Suesser (BnF), Paul Girard (Ouestware), Guillaume Levrier
                  (Sciences Po), Jennifer Morival (Université de Lille), Zeynep Pehlivan (INA).
                </div>
              </li>
            </ul>
          </div>

          <div className="info-block info-block-right text-center small">
            <div className="fw-bold">Informations</div>
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
            <div>Pour en savoir plus, contactez :</div>
            <div className="fw-bold">Audrey Baneyx</div>
            <div>
              audrey.baneyx<strong className="px-1">at</strong>sciencespo
              <strong className="px-1">dot</strong>fr
            </div>
            <div className="fw-bold">Eleonora Moiraghi</div>
            <div>
              eleonora.moiraghi<strong className="px-1">at</strong>sciencespo
              <strong className="px-1">dot</strong>fr
            </div>
          </div>
        </div>
      </div>

      {/* STORY BLOCKS */}
      <div>
        {STORIES.map((story) => (
          <div
            key={story.id}
            className="story-block text-white-deep"
            style={{ background: story.color }}
          >
            <div className="container py-4">
              <div className="row align-items-center position-relative">
                <div className="col-3">
                  <img className="img-fluid" src={story.image.path} alt={story.image.alt} />
                  <div className="text-end">
                    <a className="small" href={story.image.creditPath}>
                      {story.image.credit}
                    </a>
                  </div>
                </div>
                <div className="col-9">
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                </div>
                <span className="position-absolute text-end bottom-0 end-0 w-auto">
                  <Link href={story.path}>En savoir plus →</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* METHOD BLOCK */}
      <div className="container py-4">
        <div className="method-block text-center p-5 my-4">
          <h2>Méthodologie</h2>
          <p>
            Texte Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure.
          </p>
          <div className="pb-4">
            <a href="#" className="link-unstyled h5">
              Lire la suite →
            </a>
          </div>
          <div>
            <button className="btn btn-primary">Télécharger le document ↓</button>
          </div>
        </div>
      </div>

      {/* MAKING-OF BLOCK */}
      <div className="making-of py-5 my-4">
        <div className="container my-3">
          <h2>Making-of</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation.
          </p>
          <div className="h5">
            <a href="#">En voir plus →</a>
          </div>
        </div>
        <Carousel pictures={PICTURES.slice(0, 10)} />
      </div>
    </Layout>
  );
};

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
