import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const auth = getAuth();

  // Define the toggleMenu function
  const toggleMenu = () => {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
      navigate('/home'); // Redirect to login page
    });
  };

  return (
    <div className="mainheaderbody">
      <div className="topnav" id="myTopnav">
        <h3 className="logo">Eco<span>Guardian</span></h3>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/complain">Complain</Link>
          <Link to="/trackcomplaint">Preview</Link>
          <Link to="/about">Blogs</Link>
          <Link to="/about">About</Link>

          {isLoggedIn ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <button className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
