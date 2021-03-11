import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../stylesheets/NotificationMenusCSS.css';
import { Link } from 'react-router-dom';
import Subsidemenu from '../layout/Subsidemenu';
import { Accordion, Button, Card } from 'react-bootstrap';
export default class Sidemenu extends Component {
  render() {
    return (
      <div className="mainMenu">
        <Menu noOverlay isOpen={true}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="systemiccon"
                >
                  SYSTEM
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="bodylinks">
                  <Link to="">THE PLATFORM</Link> <br />
                  <Link to="">LOCKET</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          {/* <div className="systemicon">
         <a id="home" className="menu-item ml-5 system" href="/" >SYSTEM</a></div>  */}

          <Accordion defaultActiveKey="0" className="mt-5">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="entity"
                >
                  ENTITY
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="bodylinks py-4">
                  <Link to="">ACCOUNTS</Link> <br />
                  <Link to="">USERS</Link>
                  <br />
                  <Link to="">PAYMENTS</Link>
                  <br />
                  <Link to="">COURSES</Link>
                  <br />
                  <Link to="">VENUES</Link>
                  <br />
                  <Link to="">OPPERTUNITES</Link>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Subsidemenu />
        </Menu>

        {/* <Subsidemenu /> */}
      </div>
    );
  }
}

// import React from 'react';
// import { push as Menu } from 'react-burger-menu';
// import '../../stylesheets/NotificationMenusCSS.css';

// export default props => {
//   return (
//     <div className="mainMenu">
//       <Menu noOverlay {...props}  >
//         <a className="menu-item" href="/">
//           Home
//         </a>

//         <a className="menu-item" href="/burgers">
//           Burgers
//         </a>

//         <a className="menu-item" href="/pizzas">
//           Pizzas
//         </a>

//         <a className="menu-item" href="/desserts">
//           Desserts
//         </a>
//       </Menu>
//     </div>
//   );
// };
