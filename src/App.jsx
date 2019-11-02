import React from "react";
import { history } from 'helpers/history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

import LandingPageRoute from './components/Layout/LandingPageRoute';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import BlogsPage from './components/BlogsPage/BlogsPage';
import ContactPage from './components/ContactPage/ContactPage';
import Menu from 'components/Menu/Menu';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <LandingPageRoute exact path='/' component={HomePage} />
          {/* <Route path='/home'>
            <Menu />
            <HomePage />
          </Route>

          <Route path='/projects'>
            <Menu />
            <ProjectsPage />
          </Route> */}

          <LandingPageRoute path='/home' component={HomePage} />
          <LandingPageRoute path='/about' component={AboutPage} />
          <LandingPageRoute path='/projects' component={ProjectsPage} />
          <LandingPageRoute path='/services' component={ServicesPage} />
          <LandingPageRoute path='/blog' component={BlogsPage} />
          <LandingPageRoute path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
