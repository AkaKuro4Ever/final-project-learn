import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  top: 0,
  left: 0,
  position: 'fixed',
}

const link_2 = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  top: 100,
  left: 0,
  position: 'fixed',
}

const link_3 = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  top: 220,
  left: 0,
  position: 'fixed',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link_2}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
    <NavLink
      to="/login"
      exact
      style={link_3}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

export default Navbar
