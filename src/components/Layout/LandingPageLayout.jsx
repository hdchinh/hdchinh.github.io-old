import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class LandingPageLayout extends Component {
  render() {
    const {component: Component, ...rest}  = this.props

    return (
      <div>
        <Header />
        <Menu />

        { this.props.children }

        <Footer />
      </div>
    )
  }
}

export default LandingPageLayout;
