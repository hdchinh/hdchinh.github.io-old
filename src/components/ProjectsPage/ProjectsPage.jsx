import React, { Component } from 'react';
import Bg1 from  './../../images/bg_1.jpg';
import Project1 from './../../images/project-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'https://frontend-collective.github.io/react-image-lightbox/1.0d2c9d24.jpg',
];

class ProjectsPage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
	}

  render() {
		const { photoIndex, isOpen } = this.state;

    return(
      <div>
				<section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(" + Bg1 + ")" }}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row no-gutters slider-text align-items-center justify-content-center">
							<div className="col-md-9 ftco-animate text-center">
								<h1 className="mb-2 bread">Projects</h1>
								<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <FontAwesomeIcon icon={faChevronRight} /></a></span> <span>Projects <FontAwesomeIcon icon={faChevronRight} /></span></p>
							</div>
						</div>
					</div>
				</section>

				<div>
					{isOpen && (
						<Lightbox
							mainSrc={images[photoIndex]}
							nextSrc={images[(photoIndex + 1) % images.length]}
							prevSrc={images[(photoIndex + images.length - 1) % images.length]}
							onCloseRequest={() => this.setState({ isOpen: false })}
							onMovePrevRequest={() =>
								this.setState({
									photoIndex: (photoIndex + images.length - 1) % images.length,
								})
							}
							onMoveNextRequest={() =>
								this.setState({
									photoIndex: (photoIndex + 1) % images.length,
								})
							}
						/>
					)}
				</div>

				<section class="ftco-section">
					<div class="container">
						<div class="row">

							<div class="col-md-4">
								<div class="project mb-4 img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + Project1 + ")" }}>
									<div class="overlay"></div>
									<span style={{ cursor: 'pointer', backgroundColor: 'white' }} class="btn-site d-flex align-items-center justify-content-center" onClick={() => this.setState({ isOpen: true })}>
										<FontAwesomeIcon icon={faArrowRight} size="lg" style={{ color: 'black' }} /></span>
									<div class="text text-center p-4">
										<h3><a href="#">Branding &amp; Illustration Design</a></h3>
										<span>Web Design</span>
									</div>
								</div>
							</div>

    				</div>
					</div>
				</section>
      </div>
    )
  }
}

export default ProjectsPage;
