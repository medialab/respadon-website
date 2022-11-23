import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';

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
  downloadLink?: { text: string; href: string };
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
            {caption && (
              <p className="text-center mt-4">
                <span className={cx('h6 d-inline', textClassName)}>{caption}</span>
              </p>
            )}
            {targetXL?.type === 'iframe' ? (
              <div className="iframe-wrapper">
                <iframe src={targetXL.src} />
              </div>
            ) : (
              <div className="img-wrapper">
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
            {downloadLink && (
              <p className="text-center mt-2">
                <a href={downloadLink.href} className="text-white">
                  <AiOutlineCloudDownload /> {downloadLink.text}
                </a>
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
