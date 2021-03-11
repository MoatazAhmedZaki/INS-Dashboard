import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import {NameErrors ,  PasswordErrors,} from  './Formerrors';
export default class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            password:'',
            nameErrors: { name: '' },
            passwordErrors: { password: '' },
            
      nameValid: false,
      passwordValid: false,
      formValid: false,
        }
    }


    handleUserInput = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value }, () => {
        this.validateField(name, value);
      });
    };
 
    validateField(fieldName, value) {
      let nameValidationErrors = this.state.nameErrors;
      let passwordValidationErrors = this.state.passwordErrors;
      let nameValid = this.state.nameValid;
      let passwordValid = this.state.passwordValid;
      switch (fieldName) {
        case 'name':
          nameValid = value.length > 5;
          nameValidationErrors.name = nameValid ? '' : ' is too short';
          break;
        case 'password':
          passwordValid = value.length > 2;
          passwordValidationErrors.password = passwordValid
            ? ''
            : ' is too short';
          break;
        default:
          break;
      }
      this.setState(
        {
          nameErrors: nameValidationErrors,
          passwordErrors: passwordValidationErrors,
  
          nameValid: nameValid,
          passwordValid: passwordValid
        },
        this.validateForm
      );
    }
  
    validateForm() {
      this.setState({
        formValid: this.state.nameValid && this.state.passwordValid
      });
    }
  render() {
    return (
     


<div className="signinFormcircle">
      <Container>
         <Form className="SignInForm mt-5">

         <h3 className="pt-5 mb-5" style={{color:'white'}}>LOGIN </h3>
            <Col sm={12} className="my-2">
              {' '}
              <Form.Group>
                <Form.Control
                   required
                           type="text"
                           onChange={this.handleUserInput}
                           value={this.state.name}
                           name="name"
                           placeholder="USERNAME"
                />
               
                <div className="circle"></div>
              </Form.Group>
              <NameErrors nameErrors={this.state.nameErrors} />


              <div className="transformsighupicon">
                      <button id="signUp" onClick={this.props.handleSignIn} >
                 <p  style={{color:'white' , fontSize:'12px'}}> <i class="fas fa-chevron-left"></i> OR SIGN UP</p>   
                      </button>
                      </div>

            </Col>
            <Col sm={12} className="my-5">
              <Form.Group>
              <Form.Control
                required
                        type="password"
                        onChange={this.handleUserInput}
                        value={this.state.password}
                        name="password"
                        placeholder="PASSWORD"
              />{' '}
              <div className="circle"></div>
              </Form.Group>
              <PasswordErrors passwordErrors={this.state.passwordErrors} />{' '}
            </Col>{' '}

            <Col sm={12} className="text-center signinBtn">
          <Button
              type="submit"
              className="my-4 signInBtn"
              // onClick={this.Signin}
            >
              SIGN IN
            </Button>
          </Col>
            </Form>
      </Container>
      </div>
    );
  }
}
