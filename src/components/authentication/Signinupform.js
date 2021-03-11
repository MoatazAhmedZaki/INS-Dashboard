import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SignUp from './SignUp';
import SignInForm from './SignInForm';
import '../../stylesheets/AuthenticationformsCSS.css'
export default class Signinupform extends Component {



    handleSignUp = e => {       
       e.preventDefault()
        const container = document.getElementById('FormsContainer');
        container.classList.add('right-panel-active');
      };
    
      handleSignIn = e => {
        e.preventDefault()
        const container = document.getElementById('FormsContainer');
        container.classList.remove('right-panel-active');
      };
    
      changepanel = e => {
        if (e) {
          this.handleSignUp();
        }
      };

  render() {
    return (
        <div className="signupinbackground">
        {' '}
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="FormsContainer" id="FormsContainer">
            <div className="form-container sign-up-container">
              {' '}
              <SignInForm handleSignIn={this.handleSignIn}  />
           
            </div>
            <div className="form-container sign-in-container">
              <SignUp handleSignIn={this.changepanel} handleSignUp={this.handleSignUp}  />
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <Container>
                    <div className="overlaytexts login">
                      <h1 className="mt-5">SIGNUP</h1>
                      </div>
                    
                   
                  </Container>
                </div>
                <div className="overlay-panel overlay-right">
                  <Container>
                    {' '}
                    <div className="overlaytexts SIGNUP">
                      <h1>
                 LOGIN
                     
                      </h1>
                   
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
