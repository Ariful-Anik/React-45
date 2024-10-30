import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to='/'>HOme</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/users'>Users</Link>
        
      </nav>
    </div>
  );
};

export default Header;
