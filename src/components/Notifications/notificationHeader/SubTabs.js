import React, { Component } from 'react';
import AllNotificationsTable from '../tables/AllNotificationsTable';
import { Tabs, Tab } from 'react-bootstrap';
export default class SubTabs extends Component {
  render() {
    return (
      <div>
        <Tabs
          className="subtabs"
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="home" title="ALL NOTIFICATIONS">
            <AllNotificationsTable />
          </Tab>
          <Tab eventKey="profile" title="ALL ACTIVITY LOGS">
            <h1>here all activity logs</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
