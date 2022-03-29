import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {auth, provider} from '../../firebase.utils';

import {selectUserName, 
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState} from '../../features/user/userSlice';

import {LogoImg,
        HomeIcon, 
        SearchIcon,
        WatchlistIcon,
        OriginalIcon,
        MovieIcon,
        SeriesIcon} from '../../asset-data';

import {Nav, Logo, NavMenu, UserImg, Login, SignOut, DropDown} from './Header.styles';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName= useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

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

  const setUser = useCallback((user) => {console.log("hello")
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }))
  }, [dispatch])

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user);
        navigate('/home');
      }
    });
    return () => {console.log('unmounted')}
  }, [navigate, setUser])

  return (
    <Nav>
      <Logo src={LogoImg.default}/>
      {
        !userName?
        <Login onClick={handleAuth}>Login</Login>
        :
        <>
          <NavMenu>
          <span>
          <img src={HomeIcon.default} alt="home icon"/>
            <span>Home</span>
          </span>
          <span>
            <img src={SearchIcon.default} alt="search icon"/>
            <span>SEARCH</span>
          </span>
          <span>
            <img src={WatchlistIcon.default} alt="watch icon"/>
            <span>WATCHLIST</span>
          </span>
          <span>
            <img src={OriginalIcon.default} alt="original icon"/>
            <span>ORIGINAL</span>
          </span>
          <span>
            <img src={MovieIcon.default} alt="movie icon"/>
            <span>MOVIES</span>
          </span>
          <span>
            <img src={SeriesIcon.default} alt="series icon"/>
            <span>SERIES</span>
          </span>
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