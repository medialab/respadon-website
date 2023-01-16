import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const FullscreenPicture: FC<{
  src: string;
  targetXL?: { type: 'img' | 'iframe'; src: string };
  story?: string;
  title?: string;
  caption?: string;
  author?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  legendData?: { color: string; label: string }[];
  downloadLink?: { text: string; href: string; legend?: string };
}> = ({
  src,
  targetXL,
  className,
  imgClassName,
  story,
  alt,
  title,
  caption,
  author,
  legendData,
  downloadLink,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const textClassName = story ? `text-${story}-2` : 'text-white';

  const setIsFullScreenDisablingScroll = (isFS: boolean) => {
    setIsFullScreen(isFS);
    if (isFS) disableBodyScroll(document.body);
    else enableBodyScroll(document.body);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') setIsFullScreenDisablingScroll(false);
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
        <div className="picture-overlay" onClick={() => setIsFullScreenDisablingScroll(true)}>
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
            onClick={() => setIsFullScreenDisablingScroll(false)}
          />
          <div className="content">
            {title && <p className={cx('h4 mb-2 text-center', textClassName)}>{title}</p>}
            {caption && (
              <p className="text-center">
                <span className={cx('h6 d-inline', textClassName)}>{caption}</span>
              </p>
            )}
            {targetXL?.type === 'iframe' ? (
              <div className="iframe-wrapper">
                <iframe allowFullScreen src={targetXL.src} />
              </div>
            ) : (
              <div className="img-wrapper" onClick={() => setIsFullScreenDisablingScroll(false)}>
                <img src={targetXL?.src || src} alt={alt || ''} />
              </div>
            )}
            {legendData && (
              <div className={cx('legend', textClassName)}>
                {legendData.map(({ color, label }) => (
                  <div key={color} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: color }} />
                    <div className="legend-item-label">{label}</div>
                  </div>
                ))}
              </div>
            )}
            {author && (
              <p className="text-center mt-2">
                <span className={cx('font-headings small d-inline', textClassName)}>
                  <small>@{author}</small>
                </span>
              </p>
            )}
            {downloadLink && !downloadLink.legend && (
              <p className="text-center mt-2">
                <a href={downloadLink.href} className="text-white" target="_blank" rel="noreferrer">
                  <AiOutlineCloudDownload /> {downloadLink.text}
                </a>
              </p>
            )}
            {downloadLink && downloadLink.legend && (
              <p className="text-center mt-2">
                <a href={downloadLink.href} className="text-white" target="_blank" rel="noreferrer">
                  <AiOutlineCloudDownload /> {downloadLink.text}
                    <br/><small>({downloadLink.legend})</small>
                </a>
              </p>
            )}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Fermer"
            onClick={() => setIsFullScreenDisablingScroll(false)}
          />
        </div>
      )}
    </div>
  );
};

export default FullscreenPicture;
