import React, { Component } from 'react';
import Bg1 from './../../images/bg_1.jpg';
import Bg2 from './../../images/bg_2.jpg';
import Bg3 from './../../images/bg_3.jpg';
import Bg5 from  './../../images/bg_5.jpg';
import Project1 from './../../images/project-1.jpg';
import About from './../../images/about.jpg';
import { faUsers, faChartLine, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OurClientsSay from '../OurClientsSay/OurClientsSay';

class HomePage extends Component {
  render() {
    return(

      <div>
        <section className="home-slider owl-carousel">
      <div className="slider-item" style={{ backgroundImage: "url(" + Bg1 + ")" }}>
      {/* <div className="slider-item"> */}

      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div className="col-md-7 ftco-animate">
          	<span className="subheading">Welcome to Consolve</span>
            <h1 className="mb-4">We Are The Best Consulting Agency</h1>
            <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Our Services</a></p>
          </div>
        </div>
        </div>
      </div>

      <div className="slider-item" style={{ backgroundImage: "url(" + Bg2 + ")" }}>
      {/* <div className="slider-item"> */}

      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div className="col-md-7 ftco-animate">
          	<span className="subheading">Todays Talent, Tommorow Success</span>
            <h1 className="mb-4">We Help to Grow Your Business</h1>
            <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Our Services</a></p>
          </div>
        </div>
        </div>
      </div>
    </section>

		<section className="ftco-section">
			<div className="container">
				<div className="row d-flex">
					<div className="col-md-5 order-md-last wrap-about align-items-stretch">
						<div className="wrap-about-border ftco-animate">
							<div className="img" style={{ backgroundImage: "url(" + About + ")" }}></div>
              {/* <div className="img"></div> */}

							<div className="text">
								<h3>Read Our Success Story for Inspiration</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
								<p><a href="#" className="btn btn-primary py-3 px-4">Contact us</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-7 wrap-about pr-md-4 ftco-animate">
          	<h2 className="mb-4">Our Main Features</h2>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
						<div className="row mt-5">
							<div className="col-lg-6">
								<div className="services active text-center">
									<div className="icon mt-2 d-flex justify-content-center align-items-center" >
										{/* <span className="flaticon-collaboration"></span> */}
										<FontAwesomeIcon icon={faUsers} size="2x" style={{ color: 'white' }} >/</FontAwesomeIcon>
									</div>
									<div className="text media-body">
										<h3>Organization</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
								<div className="services text-center">
									<div className="icon mt-2 d-flex justify-content-center align-items-center">
									<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} >/</FontAwesomeIcon>
									</div>
									<div className="text media-body">
										<h3>Risk Analysis</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="services text-center">
									<div className="icon mt-2 d-flex justify-content-center align-items-center">
									<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />
									</div>
									<div className="text media-body">
										<h3>Marketing Strategy</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
								<div className="services text-center">
									<div className="icon mt-2 d-flex justify-content-center align-items-center">
									<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />										</div>
									<div className="text media-body">
										<h3>Capital Market</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
									</div>
								</div>
							</div>
						</div>
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

    <section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">Our Best Services</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
				<div className="row no-gutters">
					<div className="col-lg-4 d-flex">
						<div className="services-2 noborder-left text-center ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />							</div>
							<div className="text media-body">
								<h3>Business Analysis</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-flex">
						<div className="services-2 text-center ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />							</div>
							<div className="text media-body">
								<h3>Business Consulting</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-flex">
						<div className="services-2 text-center ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />							</div>
							<div className="text media-body">
								<h3>Business Insurance</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-flex">
						<div className="services-2 noborder-left noborder-bottom text-center ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />							</div>
							<div className="text media-body">
								<h3>Global Investigation</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-flex">
						<div className="services-2 text-center noborder-bottom ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />							</div>
							<div className="text media-body">
								<h3>Audit &amp; Evaluation</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-flex">
						<div className="services-2 text-center noborder-bottom ftco-animate">
							<div className="icon mt-2 d-flex justify-content-center align-items-center">
							<FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: '#1b9ce3' }} />								</div>
							<div className="text media-body">
								<h3>Marketing Strategy</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* <section className="ftco-intro ftco-no-pb img"> */}
		<section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: "url(" + Bg3 + ")" }}>

    	<div className="container">
    		<div className="row justify-content-center">
          <div className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white ftco-animate">
            <h2 className="mb-3 mb-md-0">You Always Get the Best Guidance</h2>
          </div>
          <div className="col-lg-3 col-md-4 ftco-animate">
          	<p className="mb-0"><a href="#" className="btn btn-white py-3 px-4">Request Quote</a></p>
          </div>
        </div>
    	</div>
    </section>

		<section className="ftco-section ftco-no-pb">
			<div className="container-fluid px-0">
				<div className="row no-gutters justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-4">Our Recent Projects</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <p></p>
          </div>
        </div>
				<div className="row no-gutters">
    			<div className="col-md-3">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>
    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}

    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-3">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>
            {/* <div className="project img ftco-animate d-flex justify-content-center align-items-center" > */}

              <div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>

    			<div className="col-md-3">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>
    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}

    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
					<div className="col-md-3">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>
            {/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}

              <div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
								</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-3">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>

    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}
    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-3">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>

    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}
    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
								</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-3">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>

    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}
    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-3">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }} >
    				{/* <div className="project img ftco-animate d-flex justify-content-center align-items-center"> */}
    					<div className="overlay"></div>
    					<a href="#" className="btn-site d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} />
							</a>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
    		</div>
			</div>
		</section>


    <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb" style={{ backgroundImage: "url(" + Bg5 + ")" }} data-stellar-background-ratio="0.5">

    {/* <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"  data-stellar-background-ratio="0.5"> */}
    	<div className="overlay"></div>
    	<div className="container">
    		<div className="row justify-content-end">
    			<div className="col-md-6 py-5 px-md-5">
    				<div className="py-md-5">
		          <div className="heading-section heading-section-white ftco-animate mb-5">
		            <h2 className="mb-4">Request A Quote</h2>
		            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		          </div>
		          <form action="#" className="appointment-form ftco-animate">
		    				<div className="d-md-flex">
			    				<div className="form-group">
			    					<input type="text" className="form-control" placeholder="Your Name" />
			    				</div>
			    				<div className="form-group ml-md-4">
			    					<input type="text" className="form-control" placeholder="Email/Phone" />
			    				</div>
		    				</div>

		    				<div className="d-md-flex">
		    					<div className="form-group">
			              <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
			            </div>
			            <div className="form-group ml-md-4">
			              <input type="submit" value="Request A Quote" className="btn btn-white py-3 px-4" />
			            </div>
		    				</div>
		    			</form>
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

export default HomePage;
