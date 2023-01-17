import { FC } from 'react';
import Head from 'next/head';
import Masonry from 'react-masonry-css';
import { HiHome } from 'react-icons/hi';

import Layout from '../components/Layout';
import {BASE_PATH, PICTURES} from '../lib/consts';
import FullscreenPicture from '../components/FullscreenPicture';

const Legals: FC = () => (
  <Layout page="making-of">
    <Head>
      <title>Respadon | Making-of</title>
      <meta name="description" content="Respadon | Making of" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="making-of pt-4">
      <div className="container pt-4">
        <div className="row pt-4 pb-4 mb-4">
          <h1 className="h2 pt-4 pb-4">Making-of</h1>
          <p className="fs-5">
            L’ensemble des photos présentées ci-dessous ont été prises pendant le data sprint du workpackage 4 du projet ResPaDon du 4 au 8 avril 2022 dans les locaux du datalab de la BnF. Elles illustrent les dynamiques des différents groupes, leur composition, témoignent de leurs temps forts ainsi que les divers outils mis en œuvre dans le cadre de cette expérimentation.

          </p>
     
        </div>

        <div className="row">
          <Masonry
            className="masonry"
            columnClassName="masonry-col"
            breakpointCols={{
              default: 3,
              700: 2,
              500: 1,
            }}
          >
            {PICTURES.map((image) => (
              <div key={image.id}>
                <FullscreenPicture
                  src={image.src}
                  caption={image.alt}
                  author={image.author}
                  imgClassName="img-fluid"
                />
              </div>
            ))}
          </Masonry>
        </div>

        <div className="pb-4 mb-4">
          <a href={BASE_PATH + '/'} className="btn btn-primary rounded-pill d-inline font-headings mb-4">
            {'<'} <HiHome />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Legals;
