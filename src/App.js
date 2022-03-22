import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import DetailPage from './pages/DetailPage/DetailPage.component';
import LoginPage from './pages/LoginPage/LoginPage.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;