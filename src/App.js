import React from 'react';
import './App.css';
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import TwitterLogin from 'react-twitter-auth';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  responseFacebook = (response) => {
    let stateObj = {
      username: response.id,
      email: response.email,
      password: response.accessToken,
      name: response.name
    }
    this.setState(stateObj);
  }

  responseGoogle = (response) => {
    console.log(response)
    let stateObj = {
      username: response.googleId,
      email: response.w3.U3,
      password: response.accessToken,
      name: response.w3.ig
    }
    console.log(stateObj);
    this.setState(stateObj);
  }

  onFailed = (response) => {
    console.log(response);
  }

  onSuccess = (response) => {
    console.log(response);
  }

  createUser = (e) => {
    e.preventDefault();
    let inputGroups = e.target.getElementsByClassName('input-group');
    let stateObj = {};
    for(var i=0; i<3; i++) {
       stateObj[inputGroups[i].children[1].name]= inputGroups[i].children[1].value
    }
    stateObj.name = stateObj.username;
    this.setState(stateObj);
  }

  render () {
    if(this.state.username && this.state.email && this.state.password && this.state.name) {
      return <Home username={this.state.name}/>
    } else {
      return (
        <div className="App container">
          <div id="logreg-forms">
            <form className="form-horizontal form-signup" onSubmit={this.createUser}>
                <div className="text-center">
                  <h1>Sign Up</h1>
                  <p>Choose one of the following options to continue</p>  
                </div>
                <div className="social-login row">
                  <div className="col-md-4 col-lg-4">
                    <TwitterLogin
                      loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      text="Twitter"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <FacebookLogin
                      appId="923098117776918"
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      render={renderProps => (
                        <a href="#" className="btn btn-lg btn-block btn-facebook" onClick={renderProps.onClick}>
                          <i className="fa fa-facebook visible-xs"></i>
                          <span className="hidden-xs">Facebook</span>
                        </a>
                      )}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <GoogleLogin
                      clientId="327793367378-23v4jo1t12389tvovhc6q0dibmrofdcu.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p>OR signup using your email address</p>
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="user-name" type="text" className="form-control" name="username" placeholder="Username" required />                                        
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-email"></i></span>
                    <input type="email" id="user-email" name="email" className="form-control" placeholder="Email" required />                                       
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-password"></i></span>
                    <input type="password" id="user-pass" name="password" className="form-control" placeholder="Password" required />                                     
                </div>
                <div className="input-group">
                    <button className="btn submit" type="submit">Create My Account <i className="glyphicon glyphicon-create"></i></button>
                </div>
                <a href="#" id="cancel_signup" onClick={this.toggleSignUp}><i className="fa fa-angle-left"></i> Already having an account? Signin</a>
            </form>
            
            <form className="form-signin form-horizontal">
                <div className="text-center">
                  <h1>Sign in</h1>
                  <p>Choose one of the following options to continue</p>  
                </div>
                <div className="social-login row">
                  <div className="col-md-4 col-lg-4">
                    <TwitterLogin
                      loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      text="Twitter"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <FacebookLogin
                      appId="923098117776918"
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      render={renderProps => (
                        <a href="#" className="btn btn-lg btn-block btn-facebook" onClick={renderProps.onClick}>
                          <i className="fa fa-facebook visible-xs"></i>
                          <span className="hidden-xs">Facebook</span>
                        </a>
                      )}
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <GoogleLogin
                      clientId="327793367378-23v4jo1t12389tvovhc6q0dibmrofdcu.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p>OR signin using your credentials</p>
                </div>
                <div className="input-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                </div>
    
                <div className="input-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                </div>
    
                <div className="input-group">
                    <button className="btn submit" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
                </div>
    
                <a href="#" id="forgot_pswd" onClick={this.toggleResetPswd}>Forgot password?</a>
                <hr/>
                <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={this.toggleSignUp}><i className="fas fa-user-plus"></i> Sign up New Account</button>
            </form>
    
            <form action="#" className="form-reset">
                <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required/>
                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset" onClick={this.toggleResetPswd}><i className="fas fa-angle-left"></i> Back</a>
            </form>
            <br/>
          </div>
        </div>
      );
    }
  }

  toggleResetPswd =(e)=> {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();
    $('#logreg-forms .form-reset').toggle();
  }

  toggleSignUp =(e)=> {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();
    $('#logreg-forms .form-signup').toggle();
  }
}

export default App;
