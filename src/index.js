import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'; 
import createStore from './store';

const store = createStore(); 

const Main = () => {
  return (
    <App />
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
