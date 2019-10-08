/* eslint-disable no-unused-vars */
import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';

// TODO: import new model here - depends on forum structure

// eslint-disable-next-line no-unused-vars
const Read = (props) => {
  return (
    <Auth capability="read">
      <span>Read</span>
    </Auth>
  );
};

const Update = (props) => {
  return (
    <Auth capability="update">
      <span>Update</span>
    </Auth>
  );
};

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <hr />
        <Read />
        <Update />
      </LoginProvider>
    );
  }
}

export default App;
