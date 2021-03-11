import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import FreetextTemplateForm from '../forms/FreetextTemplateForm';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

export default class CreateFreetxtPanel extends Component {
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
      <div>
        <div ref={ref => (this.el = ref)}>
          <Button
            onClick={() => this.setState({ isPaneOpenBottom: true })}
            className="freetemptbtn mt-3"
          >
            User Free text
          </Button>

          <SlidingPane
            isOpen={this.state.isPaneOpenBottom}
            title="Freetext"
            from="bottom"
            width="40%"
            onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
          >
            <FreetextTemplateForm
              onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
            />
          </SlidingPane>
        </div>
      </div>
    );
  }
}
