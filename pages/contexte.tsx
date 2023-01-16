import { FC } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

const Context: FC = () => (
  <Layout page="context">
    <Head>
      <title>Respadon | Contexte</title>
      <meta name="description" content="Respadon | Contexte" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container sections mt-4 pt-4">
      <h1 className="h2">Contexte</h1>

      <div />

      <section>
        <div className="content">
          <h2 className="h3 mb-4">Le projet ResPaDon</h2>

          <p>
            Le projet{' '}
            <a href="https://webtv.univ-lille.fr/video/11455/presentation-du-projet-respadon-">
              ResPaDon
            </a>{' '}
            (Réseau de Partenaires pour l’analyse et l’exploration de données numériques) vise à
            développer et à diversifier les usages par les chercheurs des archives du web collectées
            et conservées par la Bibliothèque nationale de France (BnF). Soutenu par le GIS
            CollEx-Persée, le projet ResPaDon est porté par l’Université de Lille et la Bibliothèque
            nationale de France, en partenariat avec Sciences Po Paris et le Campus Condorcet. Il
            mobilise les équipes de recherche du médialab de Sciences Po et le laboratoire GERiiCO.
          </p>
          <p>
            Constitué autour d’un premier noyau d’établissements de l’Enseignement supérieur et de
            la Recherche, il s’appuie sur les initiatives prises par ces établissements en matière
            de services à la recherche pour favoriser le développement d’expérimentations.
          </p>
          <p>
            En procédant de manière itérative avec les équipes de recherche et les personnels
            d’appui à la recherche des bibliothèques, le projet ResPaDon doit contribuer à faire
            émerger une dynamique inter-établissement, où les collections numériques et les services
            aux chercheurs proposés par la BnF viennent enrichir l’offre des établissements
            documentaires de l’ESR en direction de leurs communautés scientifiques.
          </p>
          <p>
            Menés sur une période de deux années, les différents objectifs du projet de Réseau de
            Partenaires pour l’analyse et l’exploration de données numériques, piloté par le Service
            Commun de la Documentation de l’Université de Lille et la BnF, sont répartis entre
            plusieurs groupes de travail auxquels participent Sciences Po et le Campus Condorcet.
          </p>
          <p>
            Certains de ces groupes de travail engagent une démarche expérimentale, d’autres
            nourrissent une réflexion professionnelle commune dont les résultats seront partagés
            entre tous (<a href="https://respadon.hypotheses.org/113">pour en savoir plus</a>).
            L’expérimentation dont rend compte ce site a été menée dans le cadre du groupe de
            travail 4 &quot;Expérimentation autour de la constitution et du traitement de corpus web
            issus des archives de l’internet, en lien avec le web vivant&quot;.
          </p>
          <p>
            Piloté par la Direction des ressources et de l’information scientifique de Sciences Po,
            le groupe de travail qui réunit des personnels de Sciences Po et de la BnF propose, dans
            une approche expérimentale, d’utiliser les outils développés par le médialab, un des
            laboratoires de recherche de Sciences Po, pour répondre à des questions de recherche
            portant sur des sources disponibles à la fois sur le web vivant et dans le périmètre des
            archives de l’internet. Il s’agit ainsi de déterminer si des logiciels d’analyse
            utilisés sur le web vivant sont opérants sur les corpus d’archives du web de la BnF,
            d’expérimenter des méthodes d’investigation des questions de recherche sur un corpus
            constitué d’archives du web et de rendre possibles des approches comparatives avec le
            web &quot;vivant&quot;. C’est dans cette optique que s’est tenu le datasprint ResPaDon
            en avril 2022.
          </p>
        </div>
      </section>

      <section>
        <div className="content">
          <h2 className="h3 mb-4">Le datasprint Respadon : intérêt et méthode</h2>
          <h3 className="h4 mb-4 py-2 text-black">Qu’attendre d’un datasprint ?</h3>

          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            1. Découvrir une nouvelle méthode de travail
          </h4>
          <p>
            Un datasprint c’est à la fois un travail d’équipe et une contrainte temporelle forte. Il
            faut apprendre à travailler à plusieurs dans un temps très court. La clé de la réussite
            se trouve dans l’écoute et le partage de compétences différentes qui permettent
            d’aborder les problèmes sous plusieurs angles à la fois.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            2. Apprendre à travailler avec des données numériques
          </h4>
          <p>
            La &quot;data&quot; est une opportunité, mais aussi une contrainte forte. Les problèmes
            auxquels on doit faire face sont à la fois pratiques et méthodologiques. Un datasprint
            est l’occasion de découvrir ou de renforcer ses compétences relatives aux données
            (parsing, diagnostic, nettoyage…) et de réfléchir à plusieurs associations possibles
            entre les données et les questions de recherche.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            3. Dégager une narration à plusieurs
          </h4>
          <p>
            Le cadre particulier du datasprint permet, par la discussion collective, de sélectionner
            les pistes interprétatives qui font sens ensemble et de les organiser en une narration
            lisible hors des frontières du groupe. Les projets des datasprints tendent à donner lieu
            à de nouvelles formes de récits d’expérimentation, qui racontent autant le résultat (la
            connaissance produite) que le processus mis en œuvre pour y parvenir.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            4. Pratiques interprétatives multimodales
          </h4>
          <p>
            Des outils, des images, des données… La nécessité d’être passeur de sens dans un temps
            très court encourage la mobilisation d’autres moyens que l’écriture d’un texte. Dans un
            datasprint, la question de la transmission du savoir se pose d’une façon plus brutale,
            plus proche de la vie de laboratoire que d’une communication dans un colloque. En ce
            sens, un datasprint est une expérimentation et le compte rendu d’expérimentation sera le
            témoin de cette activité. Comment redramatiser un réseau ? Comment ramener la vie dans
            des données qu’on considère à tort comme froides ? Comment attaquer des jeux de données
            parcellaires ? L’interdisciplinarité au cœur de l’organisation du datasprint, la
            présence de designers et d’autres compétences, permet de débloquer de nouvelles
            pratiques de connaissance et d’initier des réflexions méthodologiques fécondes et
            innovantes.
          </p>

          <br />

          <h3 className="h4 mb-4 py-2 text-black">Méthode de travail</h3>
          <p>
            Les participants se répartissent en petits groupes de travail, selon leurs affinités
            mais aussi leurs compétences. Dans l’idéal, chaque groupe met en jeu les rôles suivants
            : un porteur qui apporte les questions de recherche, un facilitateur qui aide au
            dialogue entre les participants, un expert capable d’interpréter les données, un
            ingénieur ayant les compétences techniques nécessaires au traitement des données, un
            documentaliste qui veille à rendre compte des processus mis en oeuvre dans
            l’expérimentation et un designer pour produire des visualisations. Un participant peut
            avoir plusieurs rôles.
          </p>
          <p>
            À la fin de chaque journée de travail, les groupes font une brève présentation de
            l’avancée de leurs travaux et s’assurent que les différents aspects de leur travail sont
            bien documentés.
          </p>
          <p>
            À la fin du datasprint, chaque groupe présente son travail lors d’une demi-journée de
            restitution publique. De plus, chaque groupe doit rédiger{' '}
            <a href="https://drive.google.com/file/d/1yNj4TeJoXmfmkjs1Mu6MYNI_m8X9ICCE/view?usp=sharing">
              un compte rendu d’expérimentation
            </a>{' '}
            et organiser données et visualisations de sorte que le travail accompli puisse être
            réapproprié et mobilisé dans le site web présentant les résultats.
          </p>
          <br />
          <h3 className="h4 mb-4 py-2 text-black">Les défis clé du datasprint</h3>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            1. Mettre les mains dans le cambouis
          </h4>
          <p>
            La diversité des compétences des participants implique de remettre à plat la répartition
            des tâches. Ainsi, chacun pourra être amené à suggérer des pistes de recherche,
            manipuler les données, et se pencher sur l’analyse et la mise en forme des résultats.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            2. Intercompréhension entre les disciplines et méthodes de partage
          </h4>
          <p>
            La dimension expérimentale, parfois chaotique, est inhérente au datasprint. Cela peut
            provoquer des situations &quot;d&apos;ingénuité réciproque&quot; entre participants qui,
            si elles peuvent être surprenantes, sont intéressantes. Le datasprint est une occasion
            de cultiver une curiosité mutuelle pour d’autres approches.
          </p>
          <p>
            Pour faciliter ce processus d’intercompréhension, des outils techniques et des
            procédures méthodologiques sont proposés aux participants. Les personnes jouant le rôle
            de facilitateurs font le lien entre les différents groupes et invitent à la discussion.
            L’utilisation des espaces d’affichage du lieu permet d’afficher les productions en cours
            et ainsi les rendre visibles aux autres équipes sans interruptions inopportunes.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">
            3. Mutualiser entre les équipes durant l’événement
          </h4>
          <p>
            Les séances de travail du datasprint provoquent parfois un “effet bulle” dans lequel
            chaque équipe peut rapidement se déconnecter du travail effectué par les autres,
            entraînant parfois des tâches effectuées en doublon ou des “angles morts”. Pour faire
            face à ce défi, de nombreux outils sont mis à disposition pour documenter
            progressivement le travail effectué à l’intérieur des groupes, et des points d’étapes en
            plénière sont organisés tout au long de l&apos;événement pour partager les avancées. Par
            ailleurs, des visites informelles régulières entre les groupes permettent de mutualiser
            certaines tâches avec l’aide des facilitateurs.
          </p>
          <h4 className="h6 font-sans-serif fw-bolder mt-4">4. Produire et partager les travaux</h4>
          <p>
            L’un des intérêts du format datasprint est de favoriser une unité de temps et de lieu
            pour le travail interdisciplinaire. Cette intensité appelle cependant une valorisation à
            la hauteur des efforts fournis sur le temps court. Le temps du datasprint est ainsi à la
            fois un temps d’exploration et d’enquête, et un temps de production de résultats. Les
            participants gardent en tête les tâches nécessaires pour arriver à un résultat publiable
            dans le temps de l&apos;événement.
          </p>
        </div>
      </section>

      <section>
        <div className="content">
          <h2 className="h3 mb-4">Les archives web et les collectes de la BnF</h2>
          <p>
            Depuis le 1er août 2006, la Bibliothèque nationale de France (BnF) et l’Institut
            national de l’audiovisuel (INA) ont pour mission d’archiver les sites internet français
            dans le cadre de leur mission de dépôt légal, une mission inscrite dans le{' '}
            <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074236/LEGISCTA000006144103/#LEGISCTA000006144103">
              Code du patrimoine
            </a>
            . Au titre de cette mission, la BnF et l’INA collectent des sites web français afin de
            les conserver et de les communiquer à des fins de recherche.
          </p>
          <p>
            La BnF est responsable de la collecte des sites web du domaine français dont le
            périmètre comprend les sites enregistrés en .fr et dans les extensions régionales (.re,
            .nc, .bzh, etc.) , les sites dont les contenus sont produits en France et les sites dont
            les producteurs sont domiciliés en France. L’INA est plus spécifiquement responsable des
            sites web des chaînes françaises de télévision et de radio.
          </p>
          <p>
            Les premiers sites web archivés à la BnF datent de 1996 grâce à une acquisition de sites
            archivés auprès de la fondation américaine Internet Archive. En raison de la masse de
            données disponibles sur le web, à la différence du dépôt légal des documents imprimés ou
            sur support, le dépôt légal du web vise à la représentativité et non pas à
            l&apos;exhaustivité.
          </p>
          <p>
            Afin de constituer des échantillons représentatifs du web français, les collectes de la
            BnF reposent depuis 2004 sur l’utilisation de robots logiciels, qui copient les pages
            web et leurs éléments constitutifs, ainsi que sur deux types de collecte :
          </p>
          <ul>
            <li>
              Collecte large : effectuée une fois par an avec l’objectif de réaliser un échantillon
              de plusieurs millions de sites web en s’appuyant sur des listes établies par des
              partenaires comme l’Afnic et OVH.
            </li>
            <li>
              <a href="https://www.bnf.fr/fr/collectes-ciblees-de-linternet-francais">Collectes ciblées</a>{' '}(courantes ou d’urgence) : effectuées en fonction des besoins en
              s’appuyant sur les listes établies par des bibliothécaires de la BnF et des
              bibliothèques partenaires en région ainsi que par des chercheurs ou des spécialistes
              d’un sujet. Ces collectes permettent de constituer des archives plus complètes et plus
              fréquentes de dizaines de milliers de sites web. Ces sites sont choisis en raison de
              leur thème (la littérature, le développement durable...) ou de leur rapport à un
              événement (les élections, les Jeux olympiques, l’épidémie de Covid-19…). Les listes
              des sites sélectionnés pour ces collectes ciblées sont consultables librement en ligne
              sur le{' '}
              <a href="https://api.bnf.fr/fr/recherche?f%5B0%5D=sources%3A195">
                portail API et jeux de données
              </a>{' '}
              de la BnF.
            </li>
          </ul>
          <p>
            Tous les sites collectés sont consultables via l’application “Archives de l’internet”
            accessible selon les dispositions législatives en vigueur dans les emprises de la
            bibliothèque de Recherche de la BnF et des bibliothèques partenaires en région.
          </p>
          <p>
            Pour en savoir plus sur les conditions d’accès, les collections et l’actualité sur les
            archives du web de la BnF :
          </p>
          <div>
            <a href="https://www.bnf.fr/fr/archives-de-linternet">
              www.bnf.fr/fr/archives-de-linternet
            </a>
          </div>
          <div>
            <a href="https://webcorpora.hypotheses.org">webcorpora.hypotheses.org</a>
          </div>
        </div>
      </section>

      <section>
        <div className="content">
          <h2 className="h3 mb-4" id="hyphe-curation-corpus">
            Le crawler Hyphe et la curation de corpus
          </h2>
          <p>
            Publié sous la forme d&apos;un{' '}
            <a href="https://github.com/medialab/hyphe">logiciel libre publié sur GitHub</a>, Hyphe
            a été conçu pour offrir aux chercheurs et étudiants un outil de création et nettoyage de
            corpus web reposant sur un crawler orienté pour la recherche. Les utilisateurs sont
            accompagnés par une méthodologie pour construire leur corpus web de manière à la fois
            granulaire et flexible avec des principes de curation simples. Plutôt que de traiter de
            &quot;sites web&quot;, Hyphe manipule des &quot;Web Entités&quot;, qui peuvent être
            définies tout aussi bien comme de simples pages, un sous-domaine, une combinaison de
            sites, etc. Les pages résidant sous ces Web Entités sont ensuite crawlées, afin de
            collecter les liens sortants et les contenus textuels. Les entités les plus citées
            peuvent ensuite être prospectées manuellement afin d&apos;enrichir le corpus avant de le
            visualiser sous la forme d&apos;un réseau et de l&apos;exporter pour nettoyage dans
            d’autres outils tel que Gephi. Hyphe a été adapté aux archives web de la BnF pour les
            besoins du datasprint ResPaDon et permet désormais la curation des corpus web archivés
            (BnF et Internet Archive) aussi bien que ceux du web vivant.
          </p>
          <p>
            Pour en savoir plus sur Hyphe :{' '}
            <a href="https://hyphe.medialab.sciences-po.fr/">hyphe.medialab.sciences-po.fr</a></br>
            Pour tester le crawler Hyphe en version démo : {' '}
            <a href="https://hyphe.medialab.sciences-po.fr/demo/#/login">https://hyphe.medialab.sciences-po.fr/demo/#/login</a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Context;
