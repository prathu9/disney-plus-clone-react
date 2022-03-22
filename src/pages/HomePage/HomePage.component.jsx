import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import db from '../../firebase.utils';

import {setMovies} from '../../features/movie/movieSlice';
import {selectUserName} from '../../features/user/userSlice';

import ImageSlider from '../../components/ImageSlider/ImageSlider.component';
import NewDisneyPlus from '../../components/NewDisneyPlus/NewDisneyPlus.component';
import Originals from '../../components/Originals/Originals.component';
import Recommends from '../../components/Recommends/Recommends.component';
import Trending from '../../components/Trending/Trending.component';
import Viewers from '../../components/Viewers/Viewers.component';

import {Container} from './HomePage.styles';

function HomePage() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
 

  useEffect(() => {
    let recommends = [];
    let newDisneyPlus = [];
    let originals = [];
    let trending = [];

    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch(doc.data().type){
          case 'recommend':
            recommends = [...recommends, {id: doc.id, ...doc.data()}];
            break;
          case 'new':
            newDisneyPlus = [...newDisneyPlus, {id: doc.id, ...doc.data()}];
            break;
          case 'original':
            originals = [...originals, {id: doc.id, ...doc.data()}];
            break;
          case 'trending': 
            trending = [...trending, {id: doc.id, ...doc.data()}];
            break;
          default:;
        }
      })
      dispatch(setMovies({
        recommends: recommends,
        newDisney: newDisneyPlus,
        originals: originals,
        trending: trending 
      }))
    })
  }, [userName, dispatch])

  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisneyPlus/>
      <Originals/>
      <Trending/>
    </Container>
  )
}

export default HomePage;