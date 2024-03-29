import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

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

{/*
    <section className="ftco-section ftco-no-pb ftco-no-pt fix-wrong-margin" style={{ backgroundColor: 'red !important' }}>
    	<div className="container-fluid px-0">
    		<div className="row justify-content-center">
        	<div className="col-md-12">
        		<div className="bg-white">
            <iframe  frameBorder="0"  allowFullScreen="true"  webkitallowfullscreen="true"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8216450478167!2d106.70789951418291!3d10.824957261257552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175288f04a04e63%3A0xd284e6c3d83967a5!2zQ-G6p3UgQsOsbmggTOG7o2ksIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1572769502417!5m2!1svi!2s" style={{  width: '100%', height: 650, border: 0 }}></iframe>
            </div>
        	</div>
        </div>
    	</div>
    </section> */}

     <iframe  frameBorder="0"  allowFullScreen="true"  webkitallowfullscreen="true"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8216450478167!2d106.70789951418291!3d10.824957261257552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175288f04a04e63%3A0xd284e6c3d83967a5!2zQ-G6p3UgQsOsbmggTOG7o2ksIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1572769502417!5m2!1svi!2s" style={{  width: '100%', height: 650, border: 0 }}></iframe>

      </div>
    )
  }
}

export default ContactPage;
