// auth context provider, create methods and data required for authorization 

import React from 'react'; 

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
  login() {
    
  }

  // logout 

  // validate token

  // state management/handling 

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
