import React, {useEffect} from 'react';
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
console.log(HomeIcon)
  return (
    <Nav>
      <Logo src={LogoImg.default}/>
      {
        !userName?
        <Login onClick={handleAuth}>Login</Login>
        :
        <>
          <NavMenu>
          <a>
          <img src={HomeIcon.default}/>
            <span>Home</span>
          </a>
          <a>
            <img src={SearchIcon.default}/>
            <span>SEARCH</span>
          </a>
          <a>
            <img src={WatchlistIcon.default}/>
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src={OriginalIcon.default}/>
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src={MovieIcon.default}/>
            <span>MOVIES</span>
          </a>
          <a>
            <img src={SeriesIcon.default}/>
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