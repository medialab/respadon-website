import { FC } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

const Method: FC = () => (
  <Layout page="method">
    <Head>
      <title>Respadon | Méthologie</title>
      <meta name="description" content="Respadon | Méthologie" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container mt-4 pt-4">
      <div className="row text-center justify-content-center my-4 py-4">
        <h1 className="h2 my-4 py-4">Méthodologie</h1>
        <p className="fs-4 fw-bold text-black col-lg-9 my-4">
          Texte Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          com- modo consequat. Duis autem vel eum iriure.
        </p>
        <div className="mb-4 pb-4">
          <button className="btn btn-primary rounded-pill font-headings px-4">
            Télécharger le document ↓
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-9">
          <h2 className="h4 mt-5 pt-4">Sous-titre</h2>
          <p>
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Hyphe. Ut wisi enim
            ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis
            at vero eros et ac- cumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi.
          </p>

          <h2 className="h4 mt-5 pt-4">Sous-titre</h2>
          <p>
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Hyphe. Ut wisi enim
            ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis
            at vero eros et ac- cumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi.
          </p>

          <h2 className="h4 mt-5 pt-4">Sous-titre</h2>
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
    </div>
  </Layout>
);

export default Method;
