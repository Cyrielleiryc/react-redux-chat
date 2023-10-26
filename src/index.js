// external modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Reducers
import messagesReducer from './reducers/messages_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';

// internal modules
import App from './components/app';

// Logger with default options
import logger from 'redux-logger'
import reduxPromise from 'redux-promise';

// State and reducers
const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'paris'
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer,
});

// Middlewares and store
const middlewares = applyMiddleware(logger, reduxPromise)
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
