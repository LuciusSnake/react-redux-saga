
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import RouteComponent from "./components/RouteComponent";

import { createReduxStore } from "./redux/store";


function App() {
  return (
    <Provider store={createReduxStore()}>
      <BrowserRouter>
        <Header />
        <RouteComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
