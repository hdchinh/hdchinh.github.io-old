import React, { Component } from 'react';
import { faMapMarked, faPhone, faCalendarAlt, faEnvelope, faUser, faSms, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return(
      <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><FontAwesomeIcon icon={faMapMarked} style={{ color: 'white', marginRight: 20 }} /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#">
                      <FontAwesomeIcon icon={faPhone} style={{ color: 'white', marginRight: 20 }} />
                    <span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginRight: 20 }} />
                      <span className="text">info@yourdomain.com</span>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  {/* <a className="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a> */}
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'white', marginRight: 5 }} /> June 27, 2019</a></div>
                      <div><a href="#">
                      <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginRight: 5 }} /> Admin</a></div>
                      <div><a href="#">
                      <FontAwesomeIcon icon={faSms} style={{ color: 'white', marginRight: 5 }} /> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  {/* <a className="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a> */}
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'white', marginRight: 5 }} /> June 27, 2019</a></div>
                      <div><a href="#">
                      <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginRight: 5 }} /> Admin</a></div>
                      <div><a href="#">
                      <FontAwesomeIcon icon={faSms} style={{ color: 'white', marginRight: 5 }} /> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="/"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', marginRight: 5 }} />Home</a></li>
                  <li><a href="/about"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', marginRight: 5 }} />About</a></li>
                  <li><a href="/services"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', marginRight: 5 }} />Services</a></li>
                  <li><a href="/projects"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', marginRight: 5 }} />Projects</a></li>
                  <li><a href="/contact"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', marginRight: 5 }} />Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                    <input type="submit" value="Subscribe" className="form-control submit px-3" />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                {/* <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate"><a href="#">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'white', marginRight: 5 }} />
                    </a></li>
                  <li className="ftco-animate"><a href="#">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'white', marginRight: 5 }} /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;2019 Coretech | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}

export default Footer;
