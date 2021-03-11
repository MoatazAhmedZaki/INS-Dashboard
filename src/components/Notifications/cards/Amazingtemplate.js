import React, { Component } from 'react';
import '../../../stylesheets/NotificationsCardsCSS.css';
import { Row, Col } from 'react-bootstrap';
import UseThisTemplatePanel from '../panels/UseThisTemplatePanel';
export default class Amazingtemplate extends Component {
  render() {
    return (
      <div className="card  mb-3 mt-4" style={{ maxWidth: '40rem' }}>
        <div className="card-body temp">
          <Row>
            <Col sm={12} md={7}>
              <h6 className="amazzzingcard-title mb-4">
                The Most Amazing Template Ever
              </h6>
              <p className="amazzzingcard-text mb-4">
                {' '}
                Description <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{' '}
              </p>

              <p className="amazzzingcard-text mt-4">
                {' '}
                Static Text <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.{' '}
              </p>

              <UseThisTemplatePanel />
            </Col>
            <Col sm={12} md={1}>
              <div
                style={{ borderLeft: '2px solid  #0091FF', height: '80%' }}
              ></div>
            </Col>
            <Col sm={12} md={4}>
              <div className="rightsec py-5">
                <h5>Channels</h5>
                <p>SMS/E-Mail</p>

                <h5>State</h5>
                <p>Active</p>

                <h5>Trials</h5>
                <p>20 trials</p>

                <h5>Delay</h5>
                <p>60 min. delay</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
