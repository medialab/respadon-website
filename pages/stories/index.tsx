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

      <div className="container">
        <div className="row">
          <StoriesBlock />
        </div>
      </div>
    </Layout>
  );
};

export default StoriesPage;
