import React from 'react';
import sliderIcon from '../../common/image/slider-img1.png';
import sliderLeftIcon from '../../common/image/slider-left.svg';
import sliderRight from '../../common/image/slider0right.svg';
import Slider from 'react-slick';
import { data } from '../../data/data';

export const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section className="slider d-flex">
      <img className="slider-left" src={sliderLeftIcon} alt="" />
      <div className="container ">
        <div className="slider-image">
          <Slider {...settings}>
            {data[1].sliderCardData.map((item) => (
              <div className="hover-text-one">
                <figure className="effect-text-one">
                  <img src={item.img} alt="" />
                  <figcaption>
                    <p>{item.text}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <img className="slider-right" src={sliderRight} alt="" />
    </section>
  );
};
