import React from "react";
// import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
  <a class="navbar-brand" href="">Marvel</a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item" href="#">videos</a></li>
          <li><a class="dropdown-item" href="#">movies</a></li>
          <li><a class="dropdown-item" href="#">games</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
        </>
    )
}
export default Navbar;