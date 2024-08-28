import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Master({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Master;
