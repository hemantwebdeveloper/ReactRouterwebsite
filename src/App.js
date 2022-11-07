import Home from "./component/Home";
import About from './component/About'
import ServicePage from './component/Service'
import ContactPage from './component/Contact'
import Navbar from "./component/Navbar";

import React, {Fragment} from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


function App() {
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


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
   

    <img src="marvel.jpeg" class="d-block w-100" alt="..." className="img"/>
    <div class="carousel-caption d-none d-md-block">
      
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="2000">
    <img src="marvel2.webp" class="d-block w-100" alt="..." className="img"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="car.webp" class="d-block w-100" alt="..." className="img"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>




<div class="row row-cols-1 row-cols-md-3 g-4 " style={{marginTop:"5rem",}}>
<div class="col">
  <div class="card h-100">
  <a href= "https://www.marvel.com/characters/iron-man-tony-stark"> <img src="iron_man.jpeg" class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Iron Man</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
</div>
<div class="col">
  <div class="card h-100">
  <a href='https://spiderman.marvelhq.com/'>
    <img src="spider_am.jpeg" class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Spider Man</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    
  </div>
</div>
<div class="col">
  <div class="card h-100">
  <a href='https://www.marvel.com/characters/thor-thor-odinson'>
    <img src="thor.jpg" class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Thor</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
</div>

<div class="container-fluid mx-auto" style={{marginTop:"3rem"}}>
  <div class="row justify-content-center top-part">
      <div class="col-md-6 text-center center-content">
          <div class="d-flex-inline">
              <h3 class="footer-heading">Start a Project with itCraft</h3>
          </div>
          <div class="d-flex-inline">
              <p>We are based in Warsaw, Bydgoszcz & Torun in Poland but we are Google Cloud Partner we can arrange a meeting at Google Campus in Warsaw or in London. We are also present in Norway. Below you will find all the contact details you need.</p>
          </div>
          <div class="d-flex-inline pt-2">
              <button class="btn-pink btn">ESTIMATE PROJECT</button>
          </div>
      </div>
  </div>
  <div class="row">
      <div class="line mb-3 mx-auto"></div>
      <div class="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
          <div class="p-2 flex-fill bd-highlight mb-5 mb-md-0">
              <h3>itCraft</h3>
              <small>Copyright &copy 2019</small>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
              <h5 class="places">BYDGOCZCZ</h5>
              <p class="mb-0">Bydgoszcz Centrum Burnesa</p>
              <p class="mb-0">ul Pzzenmdcwa 25, ibsura 24,</p>
              <p class="mb-0">B5-7GB Bydgosrdz, Poland</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
              <h5 class="places">TORUN</h5>
              <p class="mb-0">ul Reyana 2-4</p>
              <p class="mb-0">A0-100 Torun,</p>
              <p class="mb-0">Poland</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
              <h5 class="places">WARSAW</h5>
              <p class="mb-0">Brain Embassy</p>
              <p class="mb-0">Alaya Jerasublisuble RS123</p>
              <p class="mb-0">02-222 Warsawa</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
              <h5 class="places">LONDON</h5>
              <p class="mb-0">Google Campus</p>
              <p class="mb-0">4-5 Barnhill, Shaneditch</p>
              <p class="mb-0">London EC2A 4BK</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
              <h5 class="places">NORWAY</h5>
              <p class="mb-0">Kristiansand</p>
          </div>
      </div>
      <div class="line mb-3 mx-auto"></div>
  </div>
  <div class="row bottom-part">
      <div class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
          <div class="p-2 align-self-center flex-fill bd-highlight">
              <div class="fa fa-facebook px-2"></div>
              <div class="fa fa-linkedin px-2"></div>
              <div class="fa fa-twitter px-2"></div>
              <div class="fa fa-instagram px-2"></div>
          </div>
          <div class="p-2 row flex-fill bd-highlight justify-content-left">
              <div class="p-2 d-lg-flex">
                  <div class="p-2 flex-fill d-flex bd-highlight">Services</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Portfolio</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Pricing</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Testimonials</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Team</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Blog</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Carrer</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">How we work</div>
                  <div class="p-2 flex-fill d-flex bd-highlight">Manifesto</div>
              </div>
          </div>
          <div class="p-2 align-self-center flex-fill bd-highlight">
              <div class="fa fa-mobile px-2 grey-text">&nbsp;&nbsp;<span id="contact">888-777-666</span></div>
              <div class="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@itcraft.in</div>
          </div>
      </div>
  </div>
</div> 


   




    </>
  );
}

export default App;
