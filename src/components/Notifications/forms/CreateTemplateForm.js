import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../../../stylesheets/NotificationsForms.css';
import DatePicker from 'react-date-picker';

// let chosenTrialDealy;
// let chosenNumofTrials;
// let chosenChannels;

export default class CreateTemplateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TemplateName: '',
      description: '',
      staticText: '',
      numberofTrials: '',
      Trialdelay: '',
      Channels: '',
      deadline: new Date()
    };
  }
  onChangeDeadline = deadline => this.setState({ deadline });

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChooseNumTrials = e => {
    this.setState({ [this.state.numberofTrials]: e.target.value });
    // chosenNumofTrials = e.target.value;
  };

  onChooseTrialdelay = e => {
    this.setState({ [this.state.Trialdelay]: e.target.value });
    // chosenTrialDealy = e.target.value;
  };
  onChooseChannels = e => {
    this.setState({ [this.state.Channels]: e.target.value });
    // chosenChannels = e.target.value;
  };
  render() {
    return (
      <div className="createTempForm">
        <h5>
          Fill in the following fields to
          <br /> create a new template.
        </h5>

        <Form>
          <Row>
            <Col sm={12} className="my-2">
              {' '}
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Template Name"
                  name="TemplateName"
                  value={this.state.TemplateName}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
                <div className="circle"></div>
              </Form.Group>
            </Col>
            <Col sm={12} className="my-2">
              <Form.Control
                placeholder="Description..."
                rows="2"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.onChange}
              />{' '}
              <div className="circle"></div>
              <Form.Text className="text-muted pl-3">Helper text</Form.Text>
            </Col>{' '}
            <Col sm={12} className="my-2">
              <Form.Control
                placeholder="Static text"
                as="textarea"
                rows="4"
                name="staticText"
                type="text"
                value={this.state.staticText}
                onChange={this.onChange}
              />{' '}
              <div className="circle"></div>
              <Form.Text className="text-muted pl-3">Helper text</Form.Text>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Control
                  as="select"
                  className="browser-default"
                  value={this.state.numberofTrials.value}
                  onChange={this.onChooseNumTrials}
                  // name={this.state.numberofTrials.name}
                >
                  <option>Number of Trial(s)</option>
                  <option>1</option>
                  <option>2</option> <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{' '}
                <div className="circle"></div>
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
              </Form.Group>{' '}
            </Col>{' '}
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Control
                  as="select"
                  className="browser-default"
                  value={this.state.Trialdelay.value}
                  onChange={this.onChooseTrialdelay}
                >
                  <option>Trial Delay</option>
                  <option>1</option>
                  <option>2</option> <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{' '}
                <div className="circle"></div>
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <div className="deadlineInput">
                <DatePicker
                  onChange={this.onChangeDeadline}
                  value={this.state.deadline}
                />{' '}
                <div className="circle"></div>
              </div>

              <Form.Text className="text-muted pl-3">Helper text</Form.Text>
            </Col>{' '}
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Control
                  as="select"
                  className="browser-default"
                  value={this.state.Channels.value}
                  onChange={this.onChooseChannels}
                >
                  <option>Channel(s)</option>
                  <option>1</option>
                  <option>2</option> <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{' '}
                <div className="circle"></div>
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
              </Form.Group>{' '}
            </Col>
          </Row>
          <div className="createTempbuttons float-right">
            <Button
              onClick={this.props.onRequestClose}
              className="cancelationbtn"
            >
              CANCEL
            </Button>
            <Button className="ml-3">CREATE THIS TEMPLATE</Button>
          </div>
          <div className="clearfix"></div>
        </Form>
      </div>
    );
  }
}
