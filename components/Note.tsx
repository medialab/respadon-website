import classNames from 'classnames';
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import TetherComponent from 'react-tether';

const Note: FC<{ children: [JSX.Element, JSX.Element]; style?: CSSProperties }> = ({
  children,
  style,
}) => {
  const [target, tooltip] = children;
  const dom = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (show && dom.current && !dom.current?.contains(e.target as Node)) {
        setShow(false);
      }
    };

    setTimeout(() => window.document.body.addEventListener('click', handler), 0);
    return () => {
      window.document.body.removeEventListener('click', handler);
    };
  }, [show]);

  return (
    <TetherComponent
      attachment="top center"
      constraints={[{ to: 'window', attachment: 'together', pin: true }]}
      renderTarget={(ref) => (
        <a
          className={classNames('note', show && 'opened')}
          ref={ref}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          {target} <sup>{show ? <AiFillEyeInvisible /> : <AiFillEye />}</sup>
        </a>
      )}
      renderElement={(ref) =>
        show && (
          // We use two divs here to allow having "two refs":
          <div ref={ref}>
            <div ref={dom} className="note-tooltip" style={style}>
              {tooltip}
              <button
                type="button"
                className="btn-close btn-sm"
                aria-label="Fermer"
                onClick={() => setShow(false)}
              />
            </div>
          </div>
        )
      }
    />
  );
};

export default Note;
