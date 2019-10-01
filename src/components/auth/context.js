// auth context provider, create methods and data required for authorization 

import React from 'react'; 

export const LoginContext = React.createContext(); 

class LoginProvider extends React.Component {
  constructor(props) {
    super();
    this.state = {}
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
