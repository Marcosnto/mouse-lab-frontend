import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <header className="header">
      <NavLink to="/"> <img className = "img-logo" src = "image/logo.svg" alt="logo-rato"  height = "100" width = "100" /></NavLink>
    </header>
  );
}