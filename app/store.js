import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Navigation
import { MainNavReducer } from '../NavigationConfiguration';
import { DrawerNav } from './components/Drawer/DrawerConfiguration';
import dataReducer from './dataReducer';

// Middleware
const middleware = () => {
  return applyMiddleware(thunk, logger);
};


export default createStore(
  combineReducers({
    nav: MainNavReducer,
    Drawer: (state, action) => DrawerNav.router.getStateForAction(action, state),
    dataReducer
  }),
  middleware()
);
