import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import db from '../../firebase.utils.js';

import {detailPlayIconBlack,
        detailPlayIconWhite,
        detailGroupIcon} from '../../asset-data';

import {DetailContainer, 
  Background, 
  ImageTitle, 
  Controls, 
  PlayButton, 
  TrailerButton, 
  AddButton,
  GroupWatchButton,
  SubTitle,
  Description} from './DetailPage.styles';

function DetailPage() {
  const [movieDetail, setMovieDetail] = useState({});
  const {id} = useParams();
  useEffect(()=>{
     db.collection('movies').doc(id)
     .get()
     .then((doc)=>{
        if(doc.exists){
           const {backgroundImg, titleImg, subTitle, description} = doc.data();
           setMovieDetail({backgroundImg, titleImg, subTitle, description});
        }
        else{
           console.log("no such document is firebase");
        }
     })
     .catch((error) => {
        console.log("Error getting document", error)
     })
  },[id])
  
  return (
    <DetailContainer>
        <Background>
            <img src={movieDetail.backgroundImg}/>
        </Background>
        <ImageTitle>
            <img src={movieDetail.titleImg}/>
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src={detailPlayIconBlack} alt="play-btn" />
            <span>Play</span>
          </PlayButton>
          <TrailerButton>
            <img src={detailPlayIconWhite} alt="trailer-btn" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src={detailGroupIcon} alt="group-icon"/>
          </GroupWatchButton>
        </Controls>
        <SubTitle>
          {movieDetail.subTitle}
        </SubTitle>
        <Description>
          {movieDetail.description}
        </Description>
    </DetailContainer>
  )
}

export default DetailPage