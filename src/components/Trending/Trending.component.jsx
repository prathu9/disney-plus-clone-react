import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {selectTrending} from '../../features/movie/movieSlice';

import {TrendingContainer, Content, Wrap} from './Trending.style';

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <TrendingContainer>
        <h4>Trending</h4>
        <Content>
          {
            movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title}/>
                </Link>
              </Wrap>
            ))
          }
        </Content>
    </TrendingContainer>
  )
}

export default Trending;