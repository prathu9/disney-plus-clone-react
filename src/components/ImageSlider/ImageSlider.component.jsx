import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {sliderBadging, sliderBadag, sliderScale, sliderScales} from '../../asset-data';

import {Carousel, Wrap} from './ImageSlider.styles';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={sliderBadging} alt="slider-badging"/>
            </Wrap>
            <Wrap>
                <img src={sliderBadag} alt="slider-badag"/>
            </Wrap>
            <Wrap>
                <img src={sliderScale} alt="slider-scale"/>
            </Wrap>
            <Wrap>
                <img src={sliderScales} alt={"slider-scales"}/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider