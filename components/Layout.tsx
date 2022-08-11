import { FC, ReactNode, useRef, useState } from 'react';
import cx from 'classnames';

const Header: FC = () => {
  const menu = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="container my-4">
      <nav className="row navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className={cx('navbar-toggler mb-3', !isExpanded && 'collapsed')}
            type="button"
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label={(isExpanded ? 'Masquer' : 'Afficher') + ' la navigation'}
            onClick={() => setIsExpanded((v) => !v)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={cx('navbar-collapse justify-content-end collapse', isExpanded && 'show')}
            ref={menu}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className="pb-1 underlined">Accueil</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="pb-1">Contexte</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="pb-1">Stories</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="pb-1">Méthodologie</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="pb-1">Making-of</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer: FC = () => (
  <footer className="container mt-4 pt-4">
    <div className="row">
      <div className="col-3 p-3">
        <div>
          <a className="link-unstyled" href="#">
            Accueil
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Stories
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Méthodologie
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Making-of
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Crédits
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Mentions légales
          </a>
        </div>
      </div>
      <div className="col-3 p-3">
        <div>
          <a className="link-unstyled" href="#">
            Crédits
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Mentions légales
          </a>
        </div>
      </div>
      <div className="col-3 p-3">
        <div>
          <a className="link-unstyled" href="#">
            Twitter
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            Carnets Hypothèses
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="#">
            CollEx-Persée
          </a>
        </div>
      </div>
      <div className="col-3 contact-block p-3">
        <div>Pour en savoir plus, contactez :</div>
        <div className="fw-bold">
          <a href="mailto:audrey.baneyx@sciencespo.fr">Audrey Baneyx</a>
        </div>
        <div className="fw-bold">
          <a href="mailto:eleonora.moiraghi@sciencespo.fr">Eleonora Moiraghi</a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div id="root">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
