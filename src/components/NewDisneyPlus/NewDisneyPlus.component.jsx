import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {selectNewDisney} from '../../features/movie/movieSlice';

import {NewDisneyPlusContainer, Content, Wrap} from './NewDisneyPlus.style';

function NewDisneyPlus() {
  const movies = useSelector(selectNewDisney);
  return (
    <NewDisneyPlusContainer>
        <h4>New to Disney +</h4>
        <Content>
          {
            movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                <Link to={"/detail/"+movie.id}>
                  <img src={movie.cardImg} alt={movie.title}/>
                </Link>
              </Wrap>
            ))
          }
        </Content>
    </NewDisneyPlusContainer>
  )
}

export default NewDisneyPlus;