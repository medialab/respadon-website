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
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Hyphe. Ut wisi enim
            ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis
            at vero eros et ac- cumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>

      <StoriesBlock />
    </Layout>
  );
};

export default StoriesPage;
