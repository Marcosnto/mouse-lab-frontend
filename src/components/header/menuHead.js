import React from 'react';

export default function MenuHead() {
  return (
    <div className="container-fluid top-menu">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Todos<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Favoritos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Adicionar</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}