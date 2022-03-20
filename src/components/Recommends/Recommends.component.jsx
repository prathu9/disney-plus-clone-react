import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {selectRecommends} from '../../features/movie/movieSlice';

import {RecommendsContainer, Content, Wrap} from './Recommends.style';

function Recommends() {
  const movies = useSelector(selectRecommends);
  return (
    <RecommendsContainer>
        <h4>Recommended for You</h4>
        <Content>
          {
            movies && movies.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title}/>
                </Link>
              </Wrap>
            ))
          }
        </Content>
    </RecommendsContainer>
  )
}

export default Recommends;