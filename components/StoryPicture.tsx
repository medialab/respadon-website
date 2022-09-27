import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';

const StoryPicture: FC<{
  src: string;
  srcXL?: string;
  story: string;
  alt?: string;
  className?: string;
  top?: boolean;
}> = ({ src, srcXL, className, story, alt, top }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const btnClassName = cx('btn btn-link btn-sm', top ? 'pt-2 mb-0' : 'pt-0 mb-2');

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
      {!top && <img src={src} alt={alt || ''} className="figure-img img-fluid w-100" />}
      <div className="text-end">
        <button className={btnClassName} onClick={() => setIsFullScreen(true)}>
          Agrandir
        </button>
      </div>
      {top && <img src={src} alt={alt || ''} className="figure-img img-fluid w-100" />}
      {isFullScreen && (
        <div className="story-picture">
          <div className={cx('bg', `bg-${story}`)} onClick={() => setIsFullScreen(false)} />
          <div className="img-wrapper">
            <img src={srcXL || src} alt={alt || ''} />
          </div>
          <button
            type="button"
            className={`btn-close text-${story}-2`}
            aria-label="Fermer"
            onClick={() => setIsFullScreen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default StoryPicture;
