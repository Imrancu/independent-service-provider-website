import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider1.png';
import img2 from '../../../images/slider2.png';
import img3 from '../../../images/slider3.png';
import './Slider.css';

const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 overlay"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dental Bonding</h3>
          <p>Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile. Bonding is used to repair chipped teeth, decayed teeth, and cracked teeth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 overlay"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dental Crowns</h3>
          <p>A dental crown is a dental prosthesis which replaces the visible part of a tooth. A dental crown functions to strengthen teeth, restore their original shape, and improve their appearance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 overlay"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cosmetic Fillings</h3>
          <p>
            Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;