import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../stylesheets/NotificationMenusCSS.css';

export default class Subsidemenu extends Component {
  render() {
    return (
      // <Menu
      //   noOverlay
      //   className="mysubmenu"
      //   menuClassName={'menubody'}
      //   burgerButtonClassName={'subbuttton'}
      // >
      //   <a id="home" className="menu-item" href="/">
      //     Homee
      //   </a>
      // </Menu>
      <Menu
        burgerButtonClassName={'subbuttton'}
        className="mysubmenu"
        noOverlay
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a href="!#" onClick={this.showSettings} className="menu-item--small">
          Settings
        </a>
      </Menu>
    );
  }
}
