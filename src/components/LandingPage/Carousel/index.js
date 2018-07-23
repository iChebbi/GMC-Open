import React from "react";
import Carousel from 'react-image-carousel'

import 'react-image-carousel/lib/css/main.min.css'
import "./Form.css";

const images = [
  '/carousel-images/carousel-img-1.jpg',
  '/carousel-images/carousel-img-2.jpg',
  '/carousel-images/carousel-img-3.jpg'
]

class CarouselContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="slider-overlay">GoMyCode OpenSource Community</div>
        <Carousel
          images={images}
          loop={true}
          thumb={false}
          autoplay={5000}
        />
      </React.Fragment>
    );
  }
}

export default CarouselContainer;
