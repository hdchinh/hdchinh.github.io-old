import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container d-flex align-items-center">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      {/* <form action="#" class="searchform order-lg-last">
          <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search" />
            <button type="submit" placeholder="" class="form-control search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form> */}
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link
                to='/home'
                className="nav-link pl-0"
              >
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to='/about'
                className="nav-link"
              >
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to='/projects'
                className="nav-link"
              >
                Projects
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to='/services'
                className="nav-link"
              >
                Services
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to='/blog'
                className="nav-link"
              >
                Blog
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to='/contact'
                className="nav-link"
              >
                Contact
              </Link>
            </li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
  }
}

export default Menu;
