import { FC, ReactNode } from 'react';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div id="root">
      <header className="container my-4">
        <nav className="row navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-end">
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
      <main>{children}</main>
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
    </div>
  );
};

export default Layout;
