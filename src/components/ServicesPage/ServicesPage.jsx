import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
import About from './../../images/about.jpg';
import Bg3 from  './../../images/bg_3.jpg';
import Project1 from './../../images/project-2.jpg';
import Person1 from './../../images/person_1.jpg';
import OurClientsSay from '../OurClientsSay/OurClientsSay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import OurServices from '../OurServices/OurServices';
// import ServicesPage from './ServicesPage';
class ServicesPage extends Component {
  render() {
    return(
      <div>
      {/* <section className="hero-wrap hero-wrap-2"> */}

    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(" + Bg1 + ")" }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">Services</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <FontAwesomeIcon icon={faChevronRight} /></a></span> <span>Our Services <FontAwesomeIcon icon={faChevronRight} /></span></p>
          </div>
        </div>
      </div>
    </section>

    <OurServices />
      </div>
    )
  }
}

export default ServicesPage;
