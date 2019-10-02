// auth context provider, create methods and data required for authorization 

import React from 'react'; 
import jwt from 'jsonwebtoken'; 
import cookie from 'react-cookies';

export const LoginContext = React. createContext(); 

const API = process.env.REACT_APP_API; 

// what is our default state? 
class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
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
  //TODO: FIX THIS
  login = (username, password, type) => {
    let options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
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
  logout = () => {
    this.setLoginState(false, null, {});
  };

  // validate token
  validateToken = (token) => {
    //verify and generate id, capability, type 
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET); 
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
    this.setState({ token, loggedIn, user });
  }

  // lifecycle component

  componentDidMount() {
    // validate tokens, set cookies
    const cookieToken = cookie.load('auth');
    this.validateToken(cookieToken);  
  }

  render() {
    return (
      <LoginContext.Provider value = {this.state}>
        {this.props.children}
      </LoginContext.Provider>
    ); 
  }
};

export default LoginProvider;
