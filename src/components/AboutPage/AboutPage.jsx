import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
import About from './../../images/about.jpg';
import Bg3 from  './../../images/bg_3.jpg';
// import Person1 from './../../images/person_1.jpg';
import OurClientsSay from '../OurClientsSay/OurClientsSay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import BlogDetail
// import ContactPage
import ContactPage from '../ContactPage/ContactPage';
// import ConCac




class AboutPage extends Component {
  render() {
    return(
      <div>

        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(" + Bg1 + ")" }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">About Us</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <FontAwesomeIcon icon={faChevronRight} /></a></span> <span>About us <FontAwesomeIcon icon={faChevronRight} /></span></p>
          </div>
        </div>
      </div>
    </section>

		<section className="ftco-section">
			<div className="container">
				<div className="row d-flex">
					<div className="col-md-5 order-md-last wrap-about align-items-stretch">
						<div className="wrap-about-border">
							<div className="img" style={{ backgroundImage: "url(" + About + ")" }}></div>
							{/* <div className="img"></div> */}

							<div className="text">
								<h3>Read Our Success Story for Inspiration</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p><a href="#" className="btn btn-primary py-3 px-4">Contact us</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-7 wrap-about pr-md-4 ftco-animate">
          	<h2 className="mb-4">Welcome to Consolution</h2>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
						<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
					</div>
				</div>
			</div>
		</section>

		<section className="ftco-section ftco-counter">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-2 d-flex">
    			<div className="col-md-6 align-items-stretch d-flex">
    				<div className="img img-video d-flex align-items-center" style={{ backgroundImage: "url(" + About + ")" }}>
    				{/* <div className="img img-video d-flex align-items-center"> */}

    					<div className="video justify-content-center">
								<a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
									<span className="ion-ios-play"></span>
		  					</a>
							</div>
    				</div>
    			</div>
          <div className="col-md-6 heading-section ftco-animate pl-lg-5 pt-md-0 pt-5">
            <h2 className="mb-4">We Are the Best Consulting Agency</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
			</div>
		</section>

		{/* <section className="ftco-intro ftco-no-pb img"> */}

		<section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: "url(" + Bg3 + ")" }}>
    	<div className="container">
    		<div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center heading-section heading-section-white ftco-animate">
            <h2 className="mb-0">You Always Get the Best Guidance</h2>
          </div>
        </div>
    	</div>
    </section>

		<section className="ftco-counter" id="section-counter">
    	<div className="container">
    		<div className="row d-md-flex align-items-center justify-content-center">
    			<div className="wrapper">
    				<div className="row d-md-flex align-items-center">
		          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18">
		            	<div className="icon"><span className="flaticon-doctor"></span></div>
		              <div className="text">
		                <strong className="number" data-number="705">0</strong>
		                <span>Projects Completed</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18">
		            	<div className="icon"><span className="flaticon-doctor"></span></div>
		              <div className="text">
		                <strong className="number" data-number="809">0</strong>
		                <span>Satisfied Customer</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18">
		            	<div className="icon"><span className="flaticon-doctor"></span></div>
		              <div className="text">
		                <strong className="number" data-number="335">0</strong>
		                <span>Awwards Received</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18">
		            	<div className="icon"><span className="flaticon-doctor"></span></div>
		              <div className="text">
		                <strong className="number" data-number="35">0</strong>
		                <span>Years of Experienced</span>
		              </div>
		            </div>
		          </div>
	          </div>
          </div>
        </div>
    	</div>
    </section>

    <OurClientsSay />

      </div>
    )
  }
}

export default AboutPage;
