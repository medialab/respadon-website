import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import { BsArrowsAngleExpand } from 'react-icons/bs';

const FullscreenPicture: FC<{
  src: string;
  srcXL?: string;
  story?: string;
  title?: string;
  caption?: string;
  author?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}> = ({ src, srcXL, className, imgClassName, story, alt, title, caption, author }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const textClassName = story ? `text-${story}-2` : 'text-white';

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') setIsFullScreen(false);
    };
    document.body.addEventListener('keydown', handler);
    return () => {
      document.body.removeEventListener('keydown', handler);
    };
  }, []);

  return (
    <div className={className}>
      <div className="position-relative">
        <img src={src} alt={alt || ''} className={imgClassName} />
        <div className="picture-overlay" onClick={() => setIsFullScreen(true)}>
          <div className={`bg bg-${story || 'primary'}`} />
          <button className={`position-relative btn btn-${story || 'primary'}`}>
            Agrandir <BsArrowsAngleExpand />
          </button>
        </div>
      </div>
      {isFullScreen && (
        <div className="fullscreen-picture">
          <div
            className={cx('bg', `bg-${story || 'primary'}`)}
            onClick={() => setIsFullScreen(false)}
          />
          <div className="content">
            {title && <p className={cx('h4 mb-4 text-center', textClassName)}>{title}</p>}
            <div className="img-wrapper">
              <img src={srcXL || src} alt={alt || ''} />
            </div>
            {(caption || author) && (
              <p className="text-center mt-4">
                {caption && <span className={cx('h6 d-inline', textClassName)}>{caption}</span>}
                {author && <span className={cx('h6 d-inline', textClassName)}>@{author}</span>}
              </p>
            )}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Fermer"
            onClick={() => setIsFullScreen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default FullscreenPicture;
