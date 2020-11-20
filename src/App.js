import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";

import "./index.scss";
import Routes from "../src/routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter forceRefresh basename="/">
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
