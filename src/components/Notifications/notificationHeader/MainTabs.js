import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SubTabs from './SubTabs';

export default class MainTabs extends Component {
  render() {
    return (
      <div>
        <Tabs
          className="maintabs"
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="home" title="NOTIFICATIONS">
            <SubTabs />
          </Tab>
          <Tab eventKey="profile" title="TEMPLATES">
            <h1>here all templates</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
