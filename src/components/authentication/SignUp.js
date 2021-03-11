import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Container , Button  , Col} from 'react-bootstrap';
import {
  NameErrors,
  EmailErrors,
  PasswordErrors,} from './Formerrors';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      nameError: '',
      email: '',
      emailErros: '',
      password: '',
      ConfirmPassword: '',
      passwordError: '',
      nameErrors: { name: '' },
      emailErrors: { email: '' },
      passwordErrors: { password: '' },
      passerror:'',
      emailValid: false,
      nameValid: false,
      passwordValid: false,
      formValid: false

    }
  }


  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleconfirmpasswordUserInput = e => {
    this.setState({ ConfirmPassword: e.target.value });

    if (e.target.value !== this.state.password) {
      this.setState({ passerror: 'password does not match ' });
    } else {
      this.setState({ passerror: '' });
    }
  };

  validateField(fieldName, value) {
    let nameValidationErrors = this.state.nameErrors;
    let emailValidationErrors = this.state.emailErrors;
    let passwordValidationErrors = this.state.passwordErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;


    let passwordValid = this.state.passwordValidationValid;
  

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValidationErrors.email = emailValid ? '' : ' is invalid';
        if (value === 0) {
        }
        break;
      case 'name':
        nameValid =
          value.length > 2 || value.match(/^[a-zA-Z0-9!#_$%&*]{3,25}$/i);
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
        emailErrors: emailValidationErrors,
        passwordErrors: passwordValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        passwordValid: passwordValid,
        
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.passwordValid
      
    });
  }


  render() {

    return (

<div className="signinFormcircle">
      <Container>
         <Form className="SignUpForm">

         <h1 style={{color:' #FFFFFF'}}>SIGN UP</h1>
            <Col sm={12} className="my-5">
              {' '}
              <Form.Group className="formgroupfloat">
                <Form.Control
                   noValidate
                               required
                               type="text"
                               onChange={this.handleUserInput}
                               value={this.state.name}
                               name="name"
                               className="floatcontrol"
                               placeholder="USER NAME"
                />
               
                <div className="circle"></div>
              </Form.Group>

            <NameErrors nameErrors={this.state.nameErrors} />
            </Col>

            <Col sm={12} className="my-5">
              {' '}
              <Form.Group className="formgroupmargin">
         <Form.Control
            noValidate
            required
            type="text"
            onChange={this.handleUserInput}
            value={this.state.email}
            name="email"
            placeholder="E-MAIL"
          />{' '}
        <div className="circle"></div>
        </Form.Group>{' '}
        <EmailErrors emailErrors={this.state.emailErrors} />
            </Col>


            <Col sm={12} className="my-5">
         <Form.Group className="formgroupmargin">
         <Form.Control
            noValidate
            required
            type="password"
            onChange={this.handleUserInput}
            value={this.state.password}
            name="password"
            placeholder="PASSWORD"
          />{' '}
<div className="circle"></div>
</Form.Group>{' '}
<PasswordErrors passwordErrors={this.state.passwordErrors} />
            </Col>{' '}
            <Col sm={12} className="my-5">
            <Form.Group className="formgroupmargin">
            <Form.Control
                  noValidate
                  required
                  type="password"
                  onChange={this.handleconfirmpasswordUserInput}
                  value={this.state.ConfirmPassword}
                  name="password"
                  placeholder="CONFIRM PASSWORD"
                />{' '}
               <div className="circle"></div>
              </Form.Group>
    
              {this.state.passerror ? (
                <span
                  className="pl-3"
                  style={{ fontWeight: 'bold' }}
                >
                  {' '}
                 
                  {this.state.passerror}
                </span>
              ) : null}
              {this.state.error ? (
                <span
                  className="pl-3"
                  style={{  fontWeight: 'bold' }}
                >
                 
                  {this.state.error}
                </span>
              ) : null}
            </Col>{' '}


            <div className="transformsigninicon">
                      <button id="SignIn" onClick={this.props.handleSignUp}>
                <p style={{color:'white' , fontSize:'12px'}}>or  login <i class="fas fa-angle-right" ></i> </p> 
                      </button>
                      </div>
            <Col sm={12} className="text-center signinBtn">
          <Button
              type="submit"
              className="my-4 signInBtn"
              // onClick={this.Signin}
            >
             SIGN UP
            </Button>
          </Col>
            </Form>
      </Container>
      </div>
    );
  }
}
