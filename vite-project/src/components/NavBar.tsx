import React from "react";
import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to='/'><button>Product list</button></Link>
      <Link to={'/shopping-basket'}><button>shopping basket </button></Link>
    </div>
  );
};

export default NavBar;
