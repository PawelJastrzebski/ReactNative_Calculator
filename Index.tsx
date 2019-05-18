import React, { Component, useReducer } from 'react';
import App from './src/App';
import { createStore, combineReducers, Action } from 'redux'
import { Provider } from "react-redux"

interface Props { }
interface State { }
export default class Index extends Component<Props, State> {

  render() {
    return (
        <App></App>
    );
  }
}