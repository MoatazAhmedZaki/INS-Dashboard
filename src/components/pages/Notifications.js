
import React, { Component } from 'react';
import TableSettings from '../Notifications/notificationHeader/TableSettingsHolder';
import MainTabs from '../Notifications/notificationHeader/MainTabs';
import { Row, Col, Container } from 'react-bootstrap';
import Sidemenu from '../layout/Sidemenu';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default class Notifications extends Component {
  render() {
    return (
      <div id="notify">
        <Container fluid>
          <Row>
            <Col md={3}>
              <Sidemenu />
            </Col>
            <Col md={9}>
              <TableSettings />
              <MainTabs />
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}
