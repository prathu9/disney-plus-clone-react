import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {auth, provider} from '../../firebase.utils';

import {selectUserName, 
  selectUserEmail, 
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState} from '../../features/user/userSlice';

import {Nav, Logo, NavMenu, UserImg, Login, SignOut, DropDown} from './Header.styles';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName= useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user);
        navigate('/home');
      }
    });
  }, [userName])

  const handleAuth = () => {
    if(!userName){
      auth.signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch(error => {
        alert(error.message);
      })
    }
    else if(userName){
      auth.signOut()
      .then(() => {
        dispatch(setSignOutState());
        navigate('/');
      })
      .catch(error => {
        alert(error.message);
      })
    }
  }

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }))
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      {
        !userName?
        <Login onClick={handleAuth}>Login</Login>
        :
        <>
          <NavMenu>
          <a>
            <img src="/images/home-icon.svg"/>
            <span>Home</span>
          </a>
          <a>
            <img src="/images/search-icon.svg"/>
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg"/>
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg"/>
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg"/>
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg"/>
            <span>SERIES</span>
          </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName}/>
            <DropDown onClick={handleAuth}>Sign out</DropDown>
          </SignOut>
        </>
      }
    </Nav>
  )
}

export default Header;