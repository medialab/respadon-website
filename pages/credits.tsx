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
        <div>
          <a target="_blank" rel="noreferrer" href="https://scd.univ-lille.fr/">Service commun de documentation (SCD)</a>, université de Lille
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.bnf.fr/">Bibliothèque nationale de France</a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.sciencespo.fr/bibliotheque/">Direction des ressources et de l’information scientifique (DRIS)</a>, Sciences&nbsp;Po
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.campus-condorcet.fr/fr/pour-la-recherche/humatheque-condorcet">Humathèque Condorcet</a>, grand équipement documentaire (GED)
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://medialab.sciencespo.fr/">médialab</a>, Sciences&nbsp;Po
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://geriico.univ-lille.fr/">Geriico</a>, université de Lille
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Partenaire financeur</h2>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.collexpersee.eu/">CollEx-Persée</a>
        </div>
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
          <a target="_blank" rel="noreferrer" href="https://ouestware.com">OuestWare</a> : Paul Girard et Alexis Jacomy
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Graphisme</h2>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.emiliecoquard.fr/">Émilie Coquard</a>
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Hébergement</h2>
        <div>
          <a target="_blank" rel="noreferrer" href="https://medialab.sciencespo.fr/">médialab, Sciences&nbsp;Po</a>
        </div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Crédit photographique</h2>
        <div>© Caroline Maufroid, Sciences&nbsp;Po</div>
        <div>© Mélanie Leroy-Terquem, BnF</div>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Remerciements</h2>
        <div>Céline Ferjoux</div>
      </div>
    </div>
  </Layout>
);

export default Credits;
