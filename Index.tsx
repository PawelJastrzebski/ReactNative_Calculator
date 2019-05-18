import React, { Component, useReducer } from 'react';
import App from './src/App';
import { createStore, combineReducers, Action } from 'redux'
import { Provider } from "react-redux"

interface Props { }
interface State { }
export default class Index extends Component<Props, State> {

  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}

interface Store {
  counter: number,
  text: string,
  testHello: boolean
 }

const state: Store = {
  text: "Hello World",
  counter: 1,
  testHello: true
}

const reducer = (stats = state, action: Action<any>) => {

  console.log(action)
  switch (action.type) {
    case "increase":
      return {counter: state.counter++}
      break;
    case "decrease":
      return { counter: state.counter-- }
      break;
  }
  return state;
}

const store = createStore(reducer)
