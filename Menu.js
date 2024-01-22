import './Menu.css';
import Form from 'react-bootstrap/Form';
import logo from './logo.png';
import { useCallback, useState } from "react"


console.log(logo);
function Menu() {
  return (
      <header>
        <section>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="navbar-brand">
                <p class="logo"><b>explorEr</b></p>
                <img src={logo} alt="Logo" class="rounded appendLogo" />
              </div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div class="d-flex align-items-center">
                    <form></form>
                    <a class="nav-link ms-3" href="login">
                      <button class="btn account" type="button">Log in</button>
                    </a>
                    <a class="nav-link ms-3" href="signup">
                      <button class="btn account" type="button">Sign Up</button>
                    </a>
                    <form class="d-flex nav-link ms-3">
                      <input class="me-2 searchField input" placeholder="   Search" type="text" />
                      <button class="search-button rounded-circle" type="submit"><i class="bi bi-search" onClick=""></i></button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse jst headerNav" id="navbarNav">
                <img src={logo} class="fullLogo rounded" width="115" height="120" style={{margin: '-100px 0 0 40px'}}/>
                <ul class="navbar-nav flex-grow-1">
                  <li class="nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem" href="home">Home</a>
                  </li>
                  <li class="nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem" href="about">About Us</a>
                  </li>
                  <li class="nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem" href="universitetet">Universities</a>
                  </li>
                  <li class="dropdown nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem dropdown-toggle" type="button"
                      id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Study Programs
                    </a>

                    <ul class="w-100 navHeaderItem dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">Erasmums</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Bachelor</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Master</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">PhD</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem" href="blog">Blog</a>
                  </li>
                  <li class="nav-item flex-grow-1">
                    <a class="nav-link w-100 text-center navHeaderItem" href="contact">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </header>
  )
}

export default Menu;