import { FC } from 'react';
import { StaticImageData } from 'next/image';

const Carousel: FC<{ pictures: { image: StaticImageData; alt: string; src: string }[] }> = ({
  pictures,
}) => {
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
