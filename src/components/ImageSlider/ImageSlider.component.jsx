import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg"/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider