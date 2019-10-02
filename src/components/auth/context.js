// auth context provider, create methods and data required for authorization 

import React from 'react'; 
import jwt from 'jsonwebtoken'; 
import cookie from 'react-cookies';

const API = process.env.REACT_APP_API; 

export const LoginContext = React.createContext(); 

// what is our default state? 
class LoginProvider extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // all the auth data we pass to children
      loggedIn: false,
      token: null,
      user: {}, 
      login: this.login,
      logout: this.logout, 
    }; 
  }

  // login
  login = (username, password, type) => {
    let options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers new Headers({
        Authorization: `Basic ${kbtoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers ({
        'Content-Type': 'applications/json',
      });
    }

    fetch(`${API}/${type}`, options)
    .then((response) => response.text())
    .then((token) => this.validateToken(token))
    .catch(console.error);
  }

  // logout 

  // validate token
  validateToken = (token) => {
    //verify and generate id, capability, type 
    try {
      const user = jst.verify(token, process.env.REACT_APP_SECRET); 
      console.log(user); 
      this.setLoginState(true, user, token); 
    }
    catch (error) {
      this.setLoginState(false, null, {}); 
    }
  }

  // state management/handling 
  setLoginState = (loggedIn, user, token) => {
    cookie.save('auth', token);

  }

  // lifecycle component

  componentDidMount() {
    // when component is born, validate tokens, set cookies 
  }

  render() {
    return (
      <LoginContext.Provider>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
};

export default LoginProvider;
