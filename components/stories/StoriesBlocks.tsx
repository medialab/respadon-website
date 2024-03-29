import { FC } from 'react';
import cx from 'classnames';

import { STORIES } from '../../lib/consts';

export const StoriesBlock: FC = () => {
  return (
    <div className="mt-5">
      {STORIES.map((story) => (
        <div key={story.id} className={cx('story-block', `bg-${story.id}`, `text-${story.id}-2`)}>
          <div className="container py-4">
            <div className="row position-relative pb-4">
              <div className="col-3">
                <img className="img-fluid" src={story.image.path} alt={story.image.alt} />
                <div>
                  <a
                    className={`small text-decoration-none link-${story.id}-2`}
                    href={story.image.creditPath}
                  >
                    {story.image.credit}
                  </a>
                </div>
              </div>
              <div className="col-9">
                <p className="fs-5 story-title">Story</p>
                <h2 className={`text-${story.id}-2`}>
                  <a href={story.path} className={`text-decoration-none text-${story.id}-2`}>
                    {story.title}
                  </a>
                </h2>
                <p className="fs-5">
                  <a href={story.path} className={`text-decoration-none text-${story.id}-2`}>
                    {story.description}
                  </a>
                </p>
              </div>
              <span className="position-absolute text-end bottom-0 end-0 w-auto">
                <a
                  href={story.path}
                  className={`font-headings text-decoration-none link-${story.id}-2`}
                >
                  En savoir plus →
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
