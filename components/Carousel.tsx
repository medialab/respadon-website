import { FC } from 'react';

const Carousel: FC<{ pictures: { src: string; alt: string }[] }> = ({ pictures }) => {
  return (
    <div className="carousel">
      <div className="pictures custom-scrollbar">
        {pictures.map(({ src, alt }, i) => (
          <img className="img-fluid" key={i} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
