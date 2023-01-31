import Head from 'next/head';
import { FC } from 'react';

import Layout from '../../components/Layout';
import { StoriesBlock } from '../../components/stories/StoriesBlocks';

const StoriesPage: FC = () => {
  return (
    <Layout page="stories">
      <Head>
        <title>Respadon | Stories</title>
        <meta name="description" content="Respadon | Stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mt-4 pt-4">
        <div className="row">
          <h1 className="h2 my-4 py-4">Stories</h1>
          <p>
            Ci-dessous sont présentées quatre expérimentations pilotes faites sur un temps très court par des ingénieur.e.s de recherche, des designers et des chercheur.euse.s autour d'un sujet commun.
            L'objectif était de tester ce qu'il est possible de faire en travaillant sur un sujet qui nécessite à la fois d'enquêter sur web vivant via l'outil Hyphe et sur le web archivé via les archives de la BnF, 
            deux matériaux qui partagent beaucoup et sont pourtant bien différents.
          </p>
        </div>
      </div>

      <StoriesBlock />
    </Layout>
  );
};

export default StoriesPage;
