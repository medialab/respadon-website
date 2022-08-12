import { FC } from 'react';
import Image from 'next/future/image';
import { StaticImageData } from 'next/image';

const Carousel: FC<{ pictures: { image: StaticImageData; alt: string }[] }> = ({ pictures }) => {
  return (
    <div className="carousel">
      <div className="pictures custom-scrollbar">
        {pictures.map(({ image, alt }, i) => (
          <Image className="img-fluid" key={i} src={image} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
