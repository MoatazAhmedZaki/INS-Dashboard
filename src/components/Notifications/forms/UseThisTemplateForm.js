import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../../../stylesheets/NotificationsForms.css';
export default class UseThisTemplateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VariableA: '',
      VariableB: '',
      VariableC: '',
      VariableD: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
                  placeholder="Variable A"
                  value={this.state.VariableA}
                  name="VariableA"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
                <div className="circle"></div>
              </Form.Group>
            </Col>
            <Col sm={12} className="my-2">
              {' '}
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Variable B"
                  value={this.state.VariableB}
                  name="VariableB"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
                <div className="circle"></div>
              </Form.Group>
            </Col>
            <Col sm={12} className="my-2">
              {' '}
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Variable C"
                  value={this.state.VariableC}
                  name="VariableC"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
                <div className="circle"></div>
              </Form.Group>
            </Col>
            <Col sm={12} className="my-2">
              {' '}
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Variable D"
                  value={this.state.VariableD}
                  name="VariableD"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted pl-3">Helper text</Form.Text>
                <div className="circle"></div>
              </Form.Group>
            </Col>
          </Row>
          <div className="createTempbuttons float-right">
            <Button
              onClick={this.props.onRequestClose}
              className="cancelationbtn"
            >
              CANCEL
            </Button>
            <Button className="ml-3">NEXT</Button>
          </div>
          <div className="clearfix"></div>
        </Form>
      </div>
    );
  }
}
