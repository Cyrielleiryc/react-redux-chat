// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Reducers
import messagesReducer from './reducers/messages_reducer.js';
import channelsReducer from './reducers/channels_reducer.js';
import currentUserReducer from './reducers/current_user_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';

// internal modules
import App from './components/app';
import './styles/index.css';

// Logger with default options
import logger from 'redux-logger'
import reduxPromise from 'redux-promise';
const middlewares = applyMiddleware(logger, reduxPromise)

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
});

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
