import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import TableSettings from './table-setting-sections/TableSettings';
import NotifySlidingPanel from '../panels/NotifySlidingPanel';
import CreateTempPanel from '../panels/CreateTempPanel';

export default class TableSettingsHolder extends Component {
  render() {
    return (
      <div>
        <Container className="py-5 mytableholder">
          <Row>
            <Col sm={6}>
              <Row>
                {' '}
                <Col sm={12} md={7}>
                  <Form>
                    <FormControl
                      className="searchInput"
                      type="text"
                      placeholder="Search"
                    />
                  </Form>
                </Col>
                <Col sm={12} md={5} >
                  <TableSettings />
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                {' '}
                <Col sm={12} md={4}>
                  <NotifySlidingPanel />{' '}
                </Col>
                <Col sm={12} md={6}>
                  <CreateTempPanel />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
