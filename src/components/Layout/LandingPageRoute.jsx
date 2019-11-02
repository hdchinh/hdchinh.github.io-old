import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import LandingPageLayout from './LandingPageLayout';

class LandingPageRoute extends Component {
  render() {
    const {component: Component, ...rest}  = this.props

    return (
      <Route {...rest} render={matchProps => (
        <LandingPageLayout>
          <Component {...matchProps} />
        </LandingPageLayout>
      )} />
    )
  }
}

export default LandingPageRoute;
