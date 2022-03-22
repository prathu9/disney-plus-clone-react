import React from 'react';

import {viewersDisneyImg, 
        viewersPixarImg, 
        viewersMarvelImg,
        viewersStarwarsImg,
        viewersNationalImg,
        viewersDisneyVid,
        viewersPixarVid,
        viewersMarvelVid,
        viewersStarwarsVid,
        viewersNationalVid} from '../../asset-data';

import {ViewersContainer, Wrap} from './Viewers.styles';

function Viewers() {
  return (
    <ViewersContainer>
        <Wrap>
            <img src={viewersDisneyImg} alt="disney"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={viewersDisneyVid} type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src={viewersPixarImg} alt="pixar"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={viewersPixarVid} type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src={viewersMarvelImg} alt="marvel"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={viewersMarvelVid} type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src={viewersStarwarsImg} alt="star wars"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={viewersStarwarsVid} type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src={viewersNationalImg} alt="national"/>
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={viewersNationalVid} type="video/mp4"/>
            </video>
        </Wrap>
    </ViewersContainer>
  )
}

export default Viewers;