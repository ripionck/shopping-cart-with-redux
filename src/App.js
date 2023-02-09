import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff

//reducer - function that used to update store
//two arguments - state, action
//state - old state/state before update
//action - what happened/ what update
//return updated or old state
//dispatch method - send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
//DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy )

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

//store
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
