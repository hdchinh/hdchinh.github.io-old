import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
// import About from './../../images/about.jpg';
// import Bg3 from  './../../images/bg_3.jpg';
// import Project1 from './../../images/project-2.jpg';
// import Person1 from './../../images/person_1.jpg';
// import OurClientsSay from '../OurClientsSay/OurClientsSay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
// import ServicesPage from './ServicesPage';
class ContactPage extends Component {
  render() {
    return(
      <div>
      {/* <section className="hero-wrap hero-wrap-2"> */}

    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(" + Bg1 + ")" }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">Contact Us</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <FontAwesomeIcon icon={faChevronRight} /></a></span> <span>Contact Us <FontAwesomeIcon icon={faChevronRight} /></span></p>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info justify-content-center">
        	<div className="col-md-8">
        		<div className="row mb-5">
		          <div className="col-md-4 text-center py-4">
		          	<div className="icon">
		          		<FontAwesomeIcon icon={faMap} ></FontAwesomeIcon>
		          	</div>
		            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
		          </div>
		          <div className="col-md-4 text-center border-height py-4">
		          	<div className="icon">
		          		<FontAwesomeIcon icon={faPhone} />
		          	</div>
		            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
		          </div>
		          <div className="col-md-4 text-center py-4">
		          	<div className="icon">
		          		<FontAwesomeIcon icon={faEnvelope} />
		          	</div>
		            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
		          </div>
		        </div>
          </div>
        </div>
        <div className="row block-9 justify-content-center mb-5">
          <div className="col-md-8 mb-md-5">
          	<h2 className="text-center">If you got any questions <br />please do not hesitate to send us a message</h2>
            <form action="#" className="bg-light p-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-no-pb ftco-no-pt">
    	<div className="container-fluid px-0">
    		<div className="row justify-content-center">
        	<div className="col-md-12">
        		<div id="map" className="bg-white"></div>
        	</div>
        </div>
    	</div>
    </section>

      </div>
    )
  }
}

export default ContactPage;
