import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk';

// TODO: change this to your model re: forum 
// import todos from './reducers/todos';



const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
