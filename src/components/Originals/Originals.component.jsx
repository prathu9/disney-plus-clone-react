import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {selectOriginals} from '../../features/movie/movieSlice';

import {OriginalsContainer, Content, Wrap} from './Originals.style';

function Originals() {
  const movies = useSelector(selectOriginals);

  return (
    <OriginalsContainer>
        <h4>Originals</h4>
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
    </OriginalsContainer>
  )
}

export default Originals;