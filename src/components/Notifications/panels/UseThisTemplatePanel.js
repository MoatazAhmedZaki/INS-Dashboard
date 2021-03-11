import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { Button } from 'react-bootstrap';
import '../../../stylesheets/Notification.css';
import UseThisTemplateForm from '../forms/UseThisTemplateForm';
export default class UseThisTemplatePanel extends Component {
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
      <div className="useThisTemplatePanel">
        <div ref={ref => (this.el = ref)}>
          <Button
            onClick={() => this.setState({ isPaneOpenBottom: true })}
            className="btn temptbtn mt-3"
          >
            USE THIS TEMPLATE
          </Button>

          <SlidingPane
            isOpen={this.state.isPaneOpenBottom}
            title="Using a Template - The Most Amazi....."
            from="bottom"
            width="40%"
            onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
          >
            <UseThisTemplateForm
              onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
            />
          </SlidingPane>
        </div>
      </div>
    );
  }
}
