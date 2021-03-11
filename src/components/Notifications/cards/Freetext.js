import React, { Component } from 'react';
import '../../../stylesheets/NotificationsCardsCSS.css';
import CreateFreetxtPanel from '../panels/CreateFreetxtPanel';

export default class Freetext extends Component {
  render() {
    return (
      <div className="card  mb-3 mt-4" style={{ maxWidth: '40rem' }}>
        <div className="card-body freecard">
          <h4 className="freecard-title">New Freetext</h4>
          <p className="freecard-text">
            {' '}
            Description <br />
            This is a freetext “template”. You can use this as <br />a one time
            template to notify user(s).
          </p>
          <CreateFreetxtPanel />
        </div>
      </div>
    );
  }
}
