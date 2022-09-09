import React from 'react'
import logo from '../assets/home.png'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div style={{ height: "5rem", background: "#39c3f7" }}>
      <Link to='/'>
        <img src={logo} alt="logo" style={{ width: "4rem" }} />
      </Link>
    </div>
  );
}

export default Header