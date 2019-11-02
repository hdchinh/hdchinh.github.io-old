// import React, { Component } from 'react';
import React, { Component } from 'react';
import Bg1 from './../../images/bg_1.jpg';
import Bg2 from './../../images/bg_2.jpg';
import Bg3 from './../../images/bg_3.jpg';
import Img3 from './../../images/image_3.jpg';
import Bg5 from  './../../images/bg_5.jpg';
import Project1 from './../../images/project-1.jpg';
import Person1 from './../../images/person_1.jpg';
import Person2 from './../../images/person_1.jpg';
import About from './../../images/about.jpg';
import { faPaperPlane, faPhone, faUsers, faChartLine, faArrowRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OurClientsSay extends Component {
  render() {
    return(
      <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">Our Clients Says</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
        <div className="row ftco-animate justify-content-center">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="testimony-wrap d-flex">
                  {/* <div className="user-img" > */}
                  <div className="user-img" style={{ backgroundImage: "url(" + Person1 + ")" }}>

                  </div>
                  <div className="text pl-4">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faQuoteRight} size="2x" style={{ color: '#1b9ce3' }} />
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Father</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img" style={{ backgroundImage: "url(" + Person2 + ")" }}>
                  {/* <div className="user-img"> */}
                  </div>
                  <div className="text pl-4">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faQuoteRight} size="2x" style={{ color: '#1b9ce3' }} />
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img" style={{ backgroundImage: "url(" + Person1 + ")" }}>
                  {/* <div className="user-img"> */}
                  </div>
                  <div className="text pl-4">
                  	<span className="quote d-flex align-items-center justify-content-center">
										<FontAwesomeIcon icon={faQuoteRight} size="2x" style={{ color: '#1b9ce3' }} />
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  {/* <div className="user-img"> */}
                  <div className="user-img" style={{ backgroundImage: "url(" + Person1 + ")" }}>

                  </div>
                  <div className="text pl-4">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faQuoteRight} size="2x" style={{ color: '#1b9ce3' }} />
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  {/* <div className="user-img"> */}
                  <div className="user-img" style={{ backgroundImage: "url(" + Person1 + ")" }}>

                  </div>
                  <div className="text pl-4">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faQuoteRight} size="2x" style={{ color: '#1b9ce3' }} />
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default OurClientsSay;
