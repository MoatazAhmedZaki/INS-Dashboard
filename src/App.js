// Libraries
import React, { Component } from 'react';
import { Route ,HashRouter } from 'react-router-dom';
import Navb from './components/layout/Navb';
// Styling
import './App.css';
// Components
import Notifications from './components/pages/Notifications';
import Signinupform from './components/authentication/Signinupform';

export default class App extends Component {
  render() {
    return (
      <HashRouter basname="/">
        <div className="App">
          <Navb />
          <Route exact path="/" component={Signinupform} />
          <Route exact path="/Notifications" component={Notifications} />
        </div>
      </HashRouter>
    );
  }
}
