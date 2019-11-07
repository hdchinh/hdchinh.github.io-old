import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
// import About from './../../images/about.jpg';
// import Project1 from './../../images/project-2.jpg';
// import Person1 from './../../images/person_1.jpg';
// import OurClientsSay from '../OurClientsSay/OurClientsSay';
import Image1 from './../../images/image_2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import ServicesPage from './ServicesPage';
import myData from './data.json';

class BlogsPage extends Component {

  renderBlogs = () => {
    console.log('myData is:....', myData);
    const items = ['1', '2', '3'].map((item, index) => {
      return(
     <div className="col-md-6 col-lg-4 ftco-animate" key={index}>
      <div className="blog-entry">
        <a href="blog-single.html" className="block-20 d-flex align-items-end" style={{ backgroundImage: "url(" + Image1 + ")" }}>
          <div className="meta-date text-center p-2">
            <span className="day">26</span>
            <span className="mos">June</span>
            <span className="yr">2019</span>
          </div>
        </a>
        <div className="text bg-white p-4">
          <h className="heading"><a href="#">Finance And Legal Working Streams Occur Throughout</a></h>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="d-flex align-items-center mt-4">
            <p className="mb-0"><a href={`/blog/${index + 1}`}  className="btn btn-primary">Read More </a></p>
            <p className="ml-auto mb-0">
              <a href="#" className="mr-2">Admin</a>
              <a href="#" className="meta-chat"> </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      )
    })

    return items;
  }
  render() {
    return(
      <div>
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

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row">
              {this.renderBlogs()}
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default BlogsPage;
