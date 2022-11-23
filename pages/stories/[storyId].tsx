import { FC, Fragment } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Layout from '../../components/Layout';
import { STORIES, STORIES_INDICES, STORY_COMPONENTS, StoryType } from '../../lib/consts';

const Story: FC<{ story: StoryType; prev: StoryType; next: StoryType }> = ({
  story,
  prev,
  next,
}) => {
  const Component = STORY_COMPONENTS[story.id];

  return (
    <Layout page="stories">
      <Head>
        <title>{`Respadon | Story > ${story.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TITLE AND BANNER */}
      <div className={cx('mb-4', `bg-${story.id}`)}>
        <div className="container d-flex flex-column justify-content-center story-banner">
          <div className={cx('h4', `text-${story.id}-2`)}>Story</div>
          <h1 className={`text-${story.id}-2`}>{story.title}</h1>
        </div>
      </div>

      <div className="container btn-primary mt-4 pt-4">
        <div className="row mt-4 pt-4">
          <h2 className={cx('text-center h4', `text-${story.id}`)}>{story.description}</h2>
          {!!story.authors.length && (
            <p className="text-center">
              Par{' '}
              {story.authors.map(({ name, org }, i, a) => {
                const display = org ? (
                  <>
                    {name} <i>({org})</i>
                  </>
                ) : (
                  name
                );
                if (i === a.length - 1) return display;
                if (i === a.length - 2) return <>{display} et </>;
                return <Fragment key={i}>{display}, </Fragment>;
              })}
            </p>
          )}
        </div>
      </div>

      <Component />

      <div className="container mt-4 pt-4">
        <div className="row mt-4 pt-4">
          <div className="d-flex flex-row justify-content-center justify-content-md-between align-items-center mt-4 pt-4">
            <a
              href={prev.path}
              className={cx(
                'btn rounded-pill me-2 px-3 font-headings',
                `btn-${prev.id}`,
                `text-${prev.id}-2`
              )}
            >
              {'<'}
            </a>
            <a
              href={next.path}
              className={cx(
                'btn rounded-pill px-4 font-headings',
                `btn-${next.id}`,
                `text-${next.id}-2`
              )}
            >
              Lire la story suivante {'>'}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: STORIES.map(({ id }) => ({
      params: {
        storyId: id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { storyId: string } }): Promise<{
  props: { story: StoryType; prev: StoryType; next: StoryType };
}> {
  const length = STORIES.length;
  const story = STORIES[STORIES_INDICES[params.storyId]];
  const prev = STORIES[(STORIES_INDICES[params.storyId] - 1 + length) % length];
  const next = STORIES[(STORIES_INDICES[params.storyId] + 1 + length) % length];
  return { props: { story, prev, next } };
}

export default Story;
