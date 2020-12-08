import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carousel/carousel-1.jpg';
import carousel2 from '../images/carousel/carousel-2.jpg';
import carousel3 from '../images/carousel/carousel-3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
