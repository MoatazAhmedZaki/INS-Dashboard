import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../../../stylesheets/Notification.css';
import '../../../stylesheets/NotificationsCardsCSS.css';
import Freetext from '../cards/Freetext';
import Amazingtemplate from '../cards/Amazingtemplate';
import { Container } from 'react-bootstrap';
export default class NotifySlidingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenBottom: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <button
          className="bell btn"
          onClick={() => this.setState({ isPaneOpenBottom: true })}
        >
          <i className="fas fa-bell px-2"></i>Notify User
        </button>

        <SlidingPane
          isOpen={this.state.isPaneOpenBottom}
          title="This is a Title"
          from="bottom"
          width="40%"
          onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
        >
          <div className="notifyusercard">
            <Container fluid>
              <div className="row">
                <div className="col-md-6">
                  {' '}
                  <p>
                    {' '}
                    Choose a template or use
                    <br /> freetext to send a notification
                  </p>
                </div>
                <div className="col-md-6">
                  <form>
                    <input
                      type="text"
                      className="form-control notifysearch"
                      placeholder="search"
                    />
                  </form>
                </div>
              </div>
              <Freetext />
              <Amazingtemplate />
            </Container>
          </div>
        </SlidingPane>
      </div>
    );
  }
}
