//conditionally rendered component wrapper

import React from 'react';
import { LoginContext } from './context';

const If = props => {
  return !!props.condition ? props.children : null; 
};

class Auth extends React.Component {
  static contextType = LoginContext; 

  render(){
    let goodToRender = false;
    try {
      // return JSX base on boolean value 
      goodToRender = this.context.loggedIn 
      && (this.props.capability 
        ? this.context.user.capabilities.includes(this.props.capability)
        : false);
    }
    
    catch(error) {
      console.warn('Not Authorized!'); 
    }

    return (
      <If condition = {goodToRender} >

        <div>{this.props.children}</div>

      </If>
    )
  }
}

export default Auth; 