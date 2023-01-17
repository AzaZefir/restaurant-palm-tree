import React from 'react';
import sliderIcon from '../../common/image/slider-img1.png';
import sliderLeftIcon from '../../common/image/slider-left.svg';
import sliderRight from '../../common/image/slider0right.svg';

export const Slider = () => {
  return (
    <section class="slider d-flex">
      <img class="slider-left" src={sliderLeftIcon} alt="" />
      <div class="container d-flex">
        <div class="slider-image d-flex">
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={sliderIcon} alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </figcaption>
            </figure>
          </div>
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={sliderIcon} alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </figcaption>
            </figure>
          </div>
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={sliderIcon} alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <img class="slider-right" src={sliderRight} alt="" />
    </section>
  );
};
