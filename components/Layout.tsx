import { FC, ReactNode, useRef, useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import { FOOTER_PAGES, NAV_PAGES, Page } from '../lib/consts';

const Header: FC<{ page?: Page }> = ({ page }) => {
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
              {NAV_PAGES.map(({ id, path, label }) => (
                <li className="nav-item" key={id}>
                  <Link href={path}>
                    <a className={cx('nav-link', id === page && 'active')}>
                      <span className={cx('pb-1', id === page && 'underlined')}>{label}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer: FC<{ page?: Page }> = ({ page }) => (
  <footer className="container mt-4 pt-4">
    <div className="row">
      <div className="col-3 p-3">
        {NAV_PAGES.map(({ id, path, label }) => (
          <div key={id}>
            <Link href={path}>
              <a className={cx('link-unstyled', id === page && 'underlined')}>{label}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="col-3 p-3">
        {FOOTER_PAGES.map(({ id, path, label }) => (
          <div key={id}>
            <Link href={path}>
              <a className={cx('link-unstyled', id === page && 'underlined')}>{label}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="col-3 p-3">
        <div>
          <a className="link-unstyled" href="https://twitter.com/respadon_projet">
            Twitter
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="https://respadon.hypotheses.org/">
            Carnets Hypothèses
          </a>
        </div>
        <div>
          <a className="link-unstyled" href="https://www.collexpersee.eu/">
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

const Layout: FC<{ children?: ReactNode; page?: Page }> = ({ children, page }) => (
  <div id="root">
    <Header page={page} />
    <main>{children}</main>
    <Footer page={page} />
  </div>
);

export default Layout;
