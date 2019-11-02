import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from 'components/Menu/Menu';
// import { Route, Redirect } from 'react-router-dom';
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
