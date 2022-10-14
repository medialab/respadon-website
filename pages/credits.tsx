import { FC } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const Credits: FC = () => (
  <Layout page="credits">
    <Head>
      <title>Respadon | Crédits</title>
      <meta name="description" content="Respadon | Crédits" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container mt-4 pt-4">
      <h1 className="h2 my-4 py-4">Crédits</h1>

      <div className="row">
        <h2 className="h4 mt-4">Partenaires du projet ResPaDon</h2>
        <div>Service commun de documentation (SCD), université de Lille</div>
        <div>Bibliothèque nationale de France</div>
        <div>Direction des ressources et de l’information scientifique (DRIS), Sciences Po</div>
        <div>Grand équipement documentaire (GED), Campus Condorcet</div>
        <div>médialab, Sciences Po</div>
        <div>Geriico, université de Lille</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Partenaire financeur</h2>
        <div>CollEx-Persée</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Pilotage</h2>
        <div>Marie-Madeleine Géroudet</div>
        <div>Emmanuelle Bermès</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Participants WP4</h2>
        <div>Eleonora Moiraghi</div>
        <div>Audrey Baneyx</div>
        <div>Benjamin Ooghe-Tabanou</div>
        <div>Sara Aubry</div>
        <div>Clara Wiatrowski</div>
        <div>Françoise Simeray</div>
        <div>Marie Carlin</div>
        <div>Antoine De Sacy</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Prestataire de développement informatique</h2>
        <div>
          <a href="https://ouestware.com">OuestWare</a> : Paul Girard et Alexis Jacomy
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Graphisme</h2>
        <div>
          <a href="https://www.emiliecoquard.fr/">Émilie Coquard</a>
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Hébergement</h2>
        <div>
          <a href="https://medialab.sciencespo.fr//">médialab</a>, Sciences-Po
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Crédit photographique</h2>
        <div>© Caroline Maufroid / Sciences Po</div>
        <div>© Mélanie Leroy-Terquem / BnF</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Remerciements</h2>
        <div>Céline Ferjoux</div>
      </div>
    </div>
  </Layout>
);

export default Credits;
