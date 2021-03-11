import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { Button } from 'react-bootstrap';
import '../../../stylesheets/Notification.css';
import CreateTemplateForm from '../forms/CreateTemplateForm';
export default class CreateTempPanel extends Component {
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
      <div className="createTempPanel">
        <div ref={ref => (this.el = ref)}>
          <Button onClick={() => this.setState({ isPaneOpenBottom: true })}>
            <i className="far fa-file-alt px-2"></i>CREATE A NEW TEMPLATE
          </Button>

          <SlidingPane
            isOpen={this.state.isPaneOpenBottom}
            title="Template Creation"
            from="bottom"
            width="40%"
            onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
          >
            <CreateTemplateForm
              onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
            />
          </SlidingPane>
        </div>
      </div>
    );
  }
}
