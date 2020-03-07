import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./Style/app.scss";
import { Provider } from "react-redux";

/* Importing the components */
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import AppRoutes from "./Components/Routes/Route";
import Footer from "./Components/Footer/Footer";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
          <AppRoutes />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
