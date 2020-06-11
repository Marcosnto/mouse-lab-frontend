import React from 'react';

import { NavLink } from 'react-router-dom'

export default function MenuHead() {
  return (
    <div className="container-fluid top-menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Todos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link">Favoritos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new" className="nav-link">Adicionar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/manage" className="nav-link">Gerenciar</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}