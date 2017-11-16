import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Navigation
import { MainNavReducer } from '../NavigationConfiguration';

// Middleware
const middleware = () => {
  return applyMiddleware(logger);
};

console.log(logger);

export default createStore(
  combineReducers({
    nav: MainNavReducer,

    // tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action,state),
  }),
  middleware()
);
