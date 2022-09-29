import { FC } from 'react';
import cx from 'classnames';

import { STORIES } from '../../lib/consts';

export const StoriesBlock: FC = () => {
  return (
    <div>
      {STORIES.map((story) => (
        <div key={story.id} className={cx('story-block', `bg-${story.id}`, `text-${story.id}-2`)}>
          <div className="container py-4">
            <div className="row position-relative pb-4">
              <div className="col-3">
                <img className="img-fluid" src={story.image.path} alt={story.image.alt} />
                <div>
                  <a className={`small link-${story.id}-2`} href={story.image.creditPath}>
                    {story.image.credit}
                  </a>
                </div>
              </div>
              <div className="col-9">
                <p className="fs-5 story-title">Story</p>
                <h2 className={`text-${story.id}-2`}>{story.title}</h2>
                <p className="fs-5">{story.description}</p>
              </div>
              <span className="position-absolute text-end bottom-0 end-0 w-auto">
                <a href={story.path} className={`link-${story.id}-2`}>
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
