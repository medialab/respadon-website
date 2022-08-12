import { FC } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const Legals: FC = () => (
  <Layout page="legals">
    <Head>
      <title>Respadon | Mentions légales</title>
      <meta name="description" content="Respadon | Mentions légales" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container">
      <h1 className="h2">Mentions légales</h1>

      <div className="row">
        <h2 className="h4 mt-4">Le contenu de ce site internet est fourni par</h2>
        <address>
          <div>Sciences Po</div>
          <div>27 rue Saint-Guillaume</div>
          <div>75337 Paris Cedex 07</div>
          <div>Téléphone: (+33) 01 45 49 50 50</div>
          <div>Fax: (+33) 01 42 22 31 26</div>
          <div>
            Email: <a href="mailto:webmestre@sciencespo.fr">webmestre@sciencespo.fr</a>
          </div>
        </address>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Directeur de la publication</h2>
        <p>
          Mathias Vicherat, Administrateur de la Fondation Nationale des Sciences Politiques et
          Directeur de l’Institut d’Études Politiques de Paris.
        </p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Hébergement</h2>
        <p>
          Ce site internet est hébergé par la Fondation Nationale des Sciences Politiques (FNSP):
        </p>
        <address>
          <div>Sciences Po - Direction des Systèmes d'Information</div>
          <div>Code APE : 803Z</div>
          <div>27, rue saint Guillaume</div>
          <div>75337 Paris cedex 07</div>
        </address>
        <p>
          Le laboratoire chargé de l’édition et du suivi et de l’hébergement du site web est le
          médialab. Sciences Po s’engage à faire ses meilleurs efforts pour fournir une continuité
          de disponibilité du site web aux utilisateurs. Toutefois, Sciences Po ne pourra en aucun
          cas être tenu responsable de toute interruption de services intervenant sur le site web.
        </p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Finalité, accès, utilisation et disponibilité du site web</h2>
        <p>
          Sciences Po met tout en œuvre pour offrir aux visiteurs du site web des informations et/ou
          outils disponibles et vérifiés. Malgré tous les soins apportés, les informations sont
          fournies sans garantie d'aucune sorte. Elles sont non contractuelles, peuvent contenir des
          inexactitudes techniques ou typogra- phiques et sont sujettes à modification sans préavis.
        </p>
        <p>
          Sciences Po ne saurait être tenu pour responsable d’une absence de disponibilité ou
          mise-à-jour des informations, d’inexactitudes, d’incomplétudes, d’erreurs et/ou de la
          présence d’un virus sur le site web.
        </p>
        <p>
          Sciences Po invite les visiteurs du site web à lui faire part et à préciser la nature
          d’éventuelles omissions, erreurs ou corrections, en adressant un courrier électronique à
          l’adresse
          <a href="mailto:medialab@sciencespo.fr.">medialab@sciencespo.fr</a>.
        </p>
        <p>
          De même, Sciences Po ne peut être tenu responsable en cas de mauvaise utilisation du site
          web par le visiteur ou en cas d’indisponibilité temporaire du service (cas de force
          majeure, de période de maintenance ou d’incident technique, quel qu’il soit).
        </p>
        <p>
          Il est expressément entendu par le visiteur du site web qu'en aucun cas Sciences Po ne
          peut être tenu responsable des dommages quelconques, directs ou indirects, matériels ou
          immatériels résultant notamment de la consultation et/ou de l'utilisation du site web (ou
          d'autres sites qui lui sont liés) et des éventuelles applications en téléchargement, comme
          de l'utilisation des informations textuelles ou visuelles, qui auraient pu être
          recueillies et notamment de tout préjudice financier ou commercial, de pertes de
          programmes ou de données dans son système d'information.
        </p>
        <p>
          En utilisant ce site web, le visiteur reconnaît avoir eu la possibilité de prendre
          connaissance de cet avertissement.
        </p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Propriété Industrielle et Intellectuelle</h2>
        <p>
          Sauf mentions contraires, toutes les informations reproduites sur ce site web (textes,
          photos, logos...) sont protégées par des droits de propriété intellectuelle détenus par
          Sciences Po ou par ses partenaires. Par conséquent, aucune de ces informations ne peut
          être reproduite, modifiée, rediffusée, traduite, exploitée commercialement ou réutilisée
          de quelque manière que ce soit sans l'accord préalable et écrit de Sciences Po. Le titre,
          la conception, la forme du site Sciences Po mais aussi son contenu tels que les
          descriptions, illustrations et images originales et leur organisation sont la propriété de
          Sciences Po.
        </p>
        <p>
          Le code source de ce site web est libre sous licence GNU Affero General Public 3.0 (AGPL)
          et disponible sur GitHub.
        </p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Les liens hypertextes</h2>
        <p>
          Nos pages web proposent également des liens vers d'autres sites pour lesquels nous ne
          sommes responsables ni de leur intégral respect aux normes d'ordre public et bonnes mœurs,
          d'une part, ni de leur politique de protection des données personnelles ou d'utilisation
          qui en seraient faites, d'autre part. En accédant à un autre site, par l'intermédiaire
          d'un lien hypertexte, vous acceptez que cet accès s'effectue à vos risques et périls. En
          conséquence, tout préjudice direct ou indirect résultant de votre accès à un autre site
          relié par un lien hypertexte ne peut engager la responsabilité de Sciences Po.
        </p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Images et iconographies</h2>
        <p>Les images du site sont la propriété de Sciences Po (sauf mentions contraires).</p>
      </div>

      <div className="row">
        <h2 className="h4 mt-4">Informatique et Libertés</h2>
        <p>
          En vertu de l'article 6.1.e du Règlement général européen sur la protection des données
          2016/679 (dit "RGPD"), les données personnelles traitées sur le site web sont, selon les
          finalités de traitement, nécessaires à l’exécution de la mission de service public de
          Sciences Po.
        </p>
        <p>
          Ce site ne collecte aucune information personnelle, à l'exception des données brutes
          anonymisées de visites et d'actions collectées par Matomo, un traceur d'audience hébergé à
          Sciences Po pour la production de statistiques de consultation du site web. Cette collecte
          se fait sans utiliser de cookies et respecte les paramètres de votre navigateur en matière
          de confidentialité. Les données brutes anonymisées de visites sont uniquement consultées
          par le médialab à des fins d'amélioration de l'expérience utilisateur.
        </p>
        <p>
          Vous pouvez en outre utiliser le formulaire ci-après pour éviter explicitement que vos
          données de visite ne soient collectées si cela n'est pas déjà le cas
        </p>
        <p>
          Sciences Po invite les visiteurs à informer ses services dans les plus brefs délais en cas
          de violation des données personnelles. Complétez alors le formulaire ou envoyez un mail à
          dataprotection [AT]sciencespo.fr. Vous pouvez exercer vos droits d'accès, de modification,
          de rectification ou de suppression des données personnelles vous concernant en nous
          écrivant :
        </p>
        <ul>
          <li>par courrier : médialab, 27 rue Saint Guillaume 75337 Paris Cedex 07</li>
          <li>
            par courrier électronique :{' '}
            <a href="mailto:medialab@sciencespo.fr">medialab@sciencespo.fr</a>
          </li>
        </ul>
        <p>
          Le visiteur peut également contacter le Délégué à la Protection des Données de Sciences Po
          à l’adresse <a href="mailto:cnil@sciencespo.fr">cnil@sciencespo.fr</a> en seconde
          intention, puis adresser une réclamation à la CNIL, en cas de difficultés ou questions
          ultérieures concernant ses droits RGPD.
        </p>
      </div>
    </div>
  </Layout>
);

export default Legals;
