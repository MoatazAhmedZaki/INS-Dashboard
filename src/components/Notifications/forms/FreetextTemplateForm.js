import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import '../../../stylesheets/NotificationsForms.css';
import DatePicker from 'react-date-picker';

export default class FreetextTemplateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statictxt: '',
      VariableA: '',
      trialNum: '',
      trialDelay: '',
      deadline: '',
      channels: '',
      date: new Date()
    };
  }
  onChange = date => this.setState({ date });

  handleStatic = e => {
    this.setState({ statictxt: e.target.value });
    console.log(e.target.value);
  };
  handlevariableA = e => {
    this.setState({ VariableA: e.target.value });
    console.log(e.target.value);
  };
  handletrialNum = e => {
    this.setState({ trialNum: e.target.value });
    console.log(e.target.value);
  };
  handletrialDelay = e => {
    this.setState({ trialDelay: e.target.value });
    console.log(e.target.value);
  };
  handleDeadline = e => {
    this.setState({ deadline: e.target.value });
    console.log(e.target.value);
  };
  handleChannel = e => {
    this.setState({ channels: e.target.value });
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              {' '}
              <p>
                Fill in the following fields to
                <br /> create a new template.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="freetxtForm">
              <Form onSubmit={this.handleSubmit} noValidate>
                <Container>
                  {' '}
                  <Row className="my-5">
                    <Col sm={12}>
                      <Form.Group>
                        {/* <Form.Control
                          required
                          type="text"
                          onChange={this.handleStatic}
                          value={this.state.statictxt}
                          name="statictxt"
                          placeholder="Static Text"
                          className=""
                        /> */}
                        <Form.Control
                          placeholder="Static text"
                          as="textarea"
                          rows="4"
                          onChange={this.handleStatic}
                          value={this.state.statictxt}
                          name="statictxt"
                          type="text"
                        />
                        <div className="circle1"></div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    <Col sm={12}>
                      <Form.Group>
                        <Form.Control
                          required
                          type="text"
                          value={this.state.VariableA}
                          onChange={this.handlevariableA}
                          name="VariableA"
                          placeholder="Variable A"
                          className=""
                        />{' '}
                        <div className="circle1"></div>
                      </Form.Group>{' '}
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    <Col sm={12} md={6}>
                      <Form.Group>
                        {/* <Form.Control
                          required
                          type="number"
                          value={this.state.trialNum}
                          onChange={this.handletrialNum}
                          name="trialNum"
                          placeholder="Number of Trial(s)"
                          className=""
                        />{' '} */}
                        <Form.Control
                          value={this.state.trialNum}
                          onChange={this.handletrialNum}
                          name="trialNum"
                          placeholder="Number of Trial(s)"
                          as="select"
                        >
                          <option>Number of Trial(s)</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                        <div className="circle1"></div>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group>
                        <Form.Control
                          as="select"
                          value={this.state.trialDelay}
                          onChange={this.handletrialDelay}
                          name="trialDay"
                          placeholder="Trial Delay"
                          className=""
                        >
                          {' '}
                          <option>Trial Delay</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>{' '}
                        <div className="circle1"></div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={6}>
                      <Form.Group>
                        {/* <Form.Control
                          required
                          type="number"
                          value={this.state.deadline}
                          onChange={this.handleDeadline}
                          name="deadline"
                          placeholder="Deadline"
                          className=""
                        />{' '} */}

                        <DatePicker
                          onChange={this.onChange}
                          value={this.state.date}
                        />
                        <div className="circle1"></div>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group>
                        <Form.Control
                          as="select"
                          value={this.state.channels}
                          onChange={this.handleChannel}
                          name="channels"
                          placeholder="Channels"
                          className=""
                        >
                          {' '}
                          <option>Channels</option>
                          <option>channel 1</option>
                          <option> channel 2</option>
                          <option>channel 3</option>
                          <option>channel 4</option>
                          <option> channel 5</option>
                        </Form.Control>{' '}
                        <div className="circle1"></div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="float-right">
                    {' '}
                    <Col sm={12} md={6}>
                      {' '}
                      <Button
                        onClick={this.props.onRequestClose}
                        className="cancelationbtn"
                      >
                        CANCEL
                      </Button>
                    </Col>
                    <Col sm={12} md={3}>
                      {' '}
                      <Button
                        onClick={this.submit}
                        type="submit"
                        className="contactButton"
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
